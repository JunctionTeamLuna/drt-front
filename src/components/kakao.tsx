import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useAppSelector } from "../store/store";

function KakaoMap() {
    const position = useAppSelector((state) => state.position);
    const destinations = useAppSelector(
        (state) => state.destination.destinations
    );

    const start = { lat: position.start.x, lng: position.start.y };
    console.log(start);
    return (
        <Map center={start} style={{ width: "100%", height: "100%" }}>
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
        </Map>
    );
}

export default KakaoMap;
