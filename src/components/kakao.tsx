import "react-kakao-maps-sdk";
import { useAppSelector } from "../store/store";
import { useEffect, useState } from "react";
import axios from "axios";

function KakaoMap() {
    const [map, setMap] = useState<any | null>(null);
    const position = useAppSelector((state) => state.position);
    const destinations = useAppSelector(
        (state) => state.destination.destinations
    );

    useEffect(() => {
        const mapContainer: HTMLElement = document.getElementById(
            "map"
        ) as HTMLElement;
        const mapOptions = {
            center: new kakao.maps.LatLng(
                position.start.y as number,
                position.start.x as number
            ), //지도의 중심좌표.
            level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);
        setMap(kakaoMap);
    }, []);

    const start = {
        lat: position.start.y as number,
        lng: position.start.x as number,
    };
    console.log(start);
    console.log(destinations);

    const drtDestinations = destinations.filter(destination => destination.type === "drt") as any
    ([[position.start.y, position.start.x], [position.end.y, position.end.x]]).forEach((x: any) => {
        let markerPosition = new kakao.maps.LatLng(
            x[0] as number,
            x[1] as number
        )
        console.log('xx',x)
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        })
        marker.setMap(map)
        console.log('marker', marker)
    })


    drtDestinations.map((dest: any) => {
        return [dest.destination[0], dest.destination[1]]
    }).forEach((x: any) => {
        let markerPosition = new kakao.maps.LatLng(
            x[0] as number,
            x[1] as number
        )
        let markerImageSrc = 'https://cdn0.iconfinder.com/data/icons/user-icons-4/100/user-17-512.png'; // 커스텀 마커 이미지 URL
        let imageSize = new kakao.maps.Size(35, 35); // 마커 이미지 크기
        let imageOption = { offset: new kakao.maps.Point(12, 35) }; // 마커 이미지의 좌표 설정

        let markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize, imageOption);
        console.log('xx',x)
        let marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage
        })
        marker.setMap(map)
        console.log('marker', marker)
    })


    destinations.forEach((dest, i) => {
        if (dest.type === "drt") {
            if (i == 0) {
            axios
                .get(
                    `https://apis-navi.kakaomobility.com/v1/directions?origin=${position.start.x},${position.start.y}&destination=${dest.destination[1]},${dest.destination[0]}&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false`,
                    {
                        headers: {
                            Authorization:
                                "KakaoAK 0838d05b3230c039a1e7f543539bca65",
                        },
                    }
                )
                .then((res) => {
                    const linePath: any = [];
                    res.data.routes[0].sections[0].roads.forEach(
                        (router: any) => {
                            router.vertexes.forEach(
                                (_: any, index: any) => {
                                    // x,y 좌표가 우르르 들어옵니다. 그래서 인덱스가 짝수일 때만 linePath에 넣어봅시다.
                                    // 저도 실수한 것인데 lat이 y이고 lng이 x입니다.
                                    if (index % 2 === 0) {
                                        linePath.push(
                                            new kakao.maps.LatLng(
                                                router.vertexes[index + 1],
                                                router.vertexes[index]
                                            )
                                        );
                                    }
                                }
                            );
                        }
                    );
                    const polyline = new kakao.maps.Polyline({
                        path: linePath,
                        strokeWeight: 5,
                        strokeColor: "#595959",
                        strokeOpacity: 1,
                        strokeStyle: "solid",
                    });
                    polyline.setMap(map);
                });
            } else {
                axios
                .get(
                    `https://apis-navi.kakaomobility.com/v1/directions?origin=${destinations[i - 1].destination[1]},${destinations[i - 1].destination[0]}&destination=${dest.destination[1]},${dest.destination[0]}&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false`,
                    {
                        headers: {
                            Authorization:
                                "KakaoAK 0838d05b3230c039a1e7f543539bca65",
                        },
                    }
                )
                .then((res) => {
                    const linePath: any = [];
                    res.data.routes[0].sections[0].roads.forEach(
                        (router: any) => {
                            router.vertexes.forEach(
                                (_: any, index: any) => {
                                    // x,y 좌표가 우르르 들어옵니다. 그래서 인덱스가 짝수일 때만 linePath에 넣어봅시다.
                                    // 저도 실수한 것인데 lat이 y이고 lng이 x입니다.
                                    if (index % 2 === 0) {
                                        linePath.push(
                                            new kakao.maps.LatLng(
                                                router.vertexes[index + 1],
                                                router.vertexes[index]
                                            )
                                        );
                                    }
                                }
                            );
                        }
                    );
                    const polyline = new kakao.maps.Polyline({
                        path: linePath,
                        strokeWeight: 5,
                        strokeColor: "#595959",
                        strokeOpacity: 1,
                        strokeStyle: "solid",
                    });
                    polyline.setMap(map);
                });
            }
        } else if (dest.type === "scooter") {
            axios
                .get(
                    `https://apis-navi.kakaomobility.com/v1/directions?origin=${
                        destinations[i - 1].destination[1]
                    },${destinations[i - 1].destination[0]}&destination=${
                        dest.destination[1]
                    },${
                        dest.destination[0]
                    }&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false`,
                    {
                        headers: {
                            Authorization:
                                "KakaoAK 0838d05b3230c039a1e7f543539bca65",
                        },
                    }
                )
                .then((res) => {
                    const linePath: any = [];
                    res.data.routes[0].sections[0].roads.forEach(
                        (router: any) => {
                            router.vertexes.forEach(
                                (_: any, index: any) => {
                                    // x,y 좌표가 우르르 들어옵니다. 그래서 인덱스가 짝수일 때만 linePath에 넣어봅시다.
                                    // 저도 실수한 것인데 lat이 y이고 lng이 x입니다.
                                    if (index % 2 === 0) {
                                        linePath.push(
                                            new kakao.maps.LatLng(
                                                router.vertexes[index + 1],
                                                router.vertexes[index]
                                            )
                                        );
                                    }
                                }
                            );
                        }
                    );
                    const polyline = new kakao.maps.Polyline({
                        path: linePath,
                        strokeWeight: 5,
                        strokeColor: "#0000f7",
                        strokeOpacity: 1,
                        strokeStyle: "solid",
                    });
                    polyline.setMap(map);
                });
        } else if (dest.type === "taxi") {
            axios
                .get(
                    `https://apis-navi.kakaomobility.com/v1/directions?origin=${
                        destinations[i - 1].destination[1]
                    },${destinations[i - 1].destination[0]}&destination=${
                        dest.destination[1]
                    },${
                        dest.destination[0]
                    }&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false`,
                    {
                        headers: {
                            Authorization:
                                "KakaoAK 0838d05b3230c039a1e7f543539bca65",
                        },
                    }
                )
                .then((res) => {
                    const linePath: any = [];
                    res.data.routes[0].sections[0].roads.forEach(
                        (router: any) => {
                            router.vertexes.forEach(
                                (_: any, index: any) => {
                                    // x,y 좌표가 우르르 들어옵니다. 그래서 인덱스가 짝수일 때만 linePath에 넣어봅시다.
                                    // 저도 실수한 것인데 lat이 y이고 lng이 x입니다.
                                    if (index % 2 === 0) {
                                        linePath.push(
                                            new kakao.maps.LatLng(
                                                router.vertexes[index + 1],
                                                router.vertexes[index]
                                            )
                                        );
                                    }
                                }
                            );
                        }
                    );
                    const polyline = new kakao.maps.Polyline({
                        path: linePath,
                        strokeWeight: 5,
                        strokeColor: "#4aa02c",
                        strokeOpacity: 1,
                        strokeStyle: "solid",
                    });
                    polyline.setMap(map);
                });
        }
    });

    return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
}

export default KakaoMap;
