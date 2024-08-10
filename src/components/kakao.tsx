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
                [
                    { lat: 33.452344169439975, lng: 126.56878163224233 },
                    { lat: 33.452739313807456, lng: 126.5709308145358 },
                    { lat: 33.45178067090639, lng: 126.572688693875 },
                ],
                ]}
                strokeWeight={5} // 선의 두께 입니다
                strokeColor={"#FFAE00"} // 선의 색깔입니다
                strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle={"solid"} // 선의 스타일입니다
            />
        </Map>
    );
}

export default KakaoMap;
