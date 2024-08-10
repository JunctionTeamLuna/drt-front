import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    MainContainer,
    MainFooter,
    MainLocationHeader,
    MainLocationInputs,
    MainLocationSection,
    MainLocationSelect,
    MapContainer,
} from "../styles/page/styled.main";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Input from "../components/input";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import KakaoMap from "../components/kakao";
import PopupWrapper from "../components/Popupwrapper";
import SearchLocation from "../components/SearchLocation";
import { useAppSelector } from "../store/store";
import { Button } from "../components/button";

function Main() {
    const position = useAppSelector((state) => state.position);
    const [option] = useState(true); //지도가 보일지 옵션을 설정
    const [location, setLocation] = useState(false);
    const [mode, setMode] = useState("");
    return (
        <MainContainer>
            <PopupWrapper
                isOpen={location}
                onClose={() => {
                    setLocation(false);
                }}
            >
                <SearchLocation type={mode} />
            </PopupWrapper>
            {!option && (
                <MapContainer>
                    <KakaoMap />
                </MapContainer>
            )}

            <MainLocationSection>
                <MainLocationHeader>
                    <h1>Dr.Travel</h1>
                    <span>
                        <FontAwesomeIcon icon={faBell} />
                    </span>
                </MainLocationHeader>
                <MainLocationSelect>
                    <img src="/src/assets/location.png" alt="location" />
                    <MainLocationInputs>
                        <Input
                            type="text"
                            placeholder="Departures"
                            onClick={() => {
                                setMode("start");
                                setLocation(true);
                            }}
                            value={position.start.adress}
                        />
                        <hr />
                        <Input
                            type="text"
                            placeholder="Arrivals"
                            value={position.end.adress}
                            onClick={() => {
                                setMode("end");
                                setLocation(true);
                            }}
                        />
                    </MainLocationInputs>
                    <span>
                        <FontAwesomeIcon icon={faUpDown} />
                    </span>
                </MainLocationSelect>
            </MainLocationSection>

            {option && (
                <MainFooter>
                    

                    <Button disabled>Order</Button>
                </MainFooter>
            )}
        </MainContainer>
    );
}

export default Main;
