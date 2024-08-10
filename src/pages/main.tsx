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
import { useAppDispatch, useAppSelector } from "../store/store";
import { Button } from "../components/button";
import instance from "../api/instance";
import { destinationActions } from "../store/destination";

function Main() {
    const position = useAppSelector((state) => state.position);
    const dispatch = useAppDispatch();
    const [option, setOption] = useState(true); //지도가 보일지 옵션을 설정
    const [location, setLocation] = useState(false);
    const [mode, setMode] = useState("");

    const handleSubmit = () => {
        if (position.start.adress === "" || position.end.adress === "") {
            alert("출발지와 도착지를 입력해주세요");
            return;
        }

        instance
            .post("reservation", {
                userPositionLatitude: position.start.x,
                userPositionLongitude: position.start.y,
                destinationLatitude: position.end.x,
                destinationLongitude: position.end.y,
            })
            .then((res) => {
                const routes = res.data.route;
                routes.forEach((route: any) => {
                    dispatch(
                        destinationActions.setDestination({
                            type: route.type,
                            destination: route.destination,
                        })
                    );
                });
            });
        setOption(false);
    };

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
                    <Button
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        승차 신청하기
                    </Button>
                </MainFooter>
            )}
        </MainContainer>
    );
}

export default Main;
