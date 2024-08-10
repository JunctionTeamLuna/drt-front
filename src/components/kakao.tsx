import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import { useAppSelector } from "../store/store";

function KakaoMap() {
    const position = useAppSelector((state) => state.position);
    const destinations = useAppSelector(
        (state) => state.destination.destinations
    );

    const start = { lat: position.start.y as number, lng: position.start.x as number };
    console.log(start);
    console.log(destinations);

    const redLines: any = [];
    const blueLines: any = [];
    const greenLines: any = [];
    redLines.push(start)
    destinations.forEach((dest, i) => {
        if (dest.type === 'drt') redLines.push({lat: dest.destination[0], lng: dest.destination[1]});
        else if (dest.type === 'scooter') {
            blueLines.push({lat: destinations[i-1].destination[0], lng: destinations[i-1].destination[1]});
            blueLines.push({lat: dest.destination[0], lng: dest.destination[1]});
        }
        else if (dest.type === 'taxi') {
            greenLines.push({lat: destinations[i-1].destination[0], lng: destinations[i-1].destination[1]});
            greenLines.push({lat: dest.destination[0], lng: dest.destination[1]});
        }
    })

    return (
        <Map center={start}  style={{ width: "100%", height: "100%" }}>
            <MapMarker position={start}>
                <div style={{ color: "#000" }}>Start Location</div>
            </MapMarker>

            {destinations.map((dest, index) => (
                <MapMarker
                    key={index}
                    position={{
                        lat: dest.destination[0],
                        lng: dest.destination[1],
                    }}
                >
                    <div style={{ color: "#000" }}>{dest.type} Destination</div>
                </MapMarker>
            ))}

            <Polyline
                path={[
                    redLines,
                ]}
                strokeWeight={10} // 선의 두께 입니다
                strokeColor={"#fe5949"} // 선의 색깔입니다
                strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle={"solid"} // 선의 스타일입니다
            />
            <Polyline
                path={[
                    blueLines,
                ]}
                strokeWeight={10} // 선의 두께 입니다
                strokeColor={"#0000f7"} // 선의 색깔입니다
                strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle={"solid"} // 선의 스타일입니다
            />
            <Polyline
                path={[
                    greenLines,
                ]}
                strokeWeight={10} // 선의 두께 입니다
                strokeColor={"#4aa02c"} // 선의 색깔입니다
                strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle={"solid"} // 선의 스타일입니다
            />
        </Map>
    );
}

export default KakaoMap;
