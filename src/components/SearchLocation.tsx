import { useState } from "react";
import Input from "./input";
import {
    SearchLocationContainer,
    SearchLocationli,
    SearchLocationlist,
    SearchLocationSearch,
} from "../styles/page/styled.searchlocation";
import { useAppDispatch } from "../store/store";
import { positionActions } from "../store/position";
function SearchLocation({ type }: { type: string }) {
    const dispatch = useAppDispatch();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState(-1);
    const searchLocation = (e: any) => {
        e.preventDefault();

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(search, (data: any, status) => {
            if (status === kakao.maps.services.Status.OK) {
                setResults(data);
            } else {
                setResults([]);
            }
        });
    };

    const onSelect = (index: number) => {
        const location: any = results[index];
        if (type === "start") {
            dispatch(
                positionActions.setStart({
                    adress: location.place_name,
                    x: location.x,
                    y: location.y,
                })
            );
        } else {
            dispatch(
                positionActions.setEnd({
                    adress: location.place_name,
                    x: location.x,
                    y: location.y,
                })
            );
        }
        setSelected(index);
    };

    return (
        <SearchLocationContainer>
            <h1>{type == "start" ? "출발" : "도착"} 장소를 검색해주세요</h1>
            <SearchLocationSearch onSubmit={searchLocation}>
                <Input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </SearchLocationSearch>
            {results.length > 0 && <hr />}

            <SearchLocationlist>
                {results.map((result: any, index) => (
                    <SearchLocationli
                        selected={index === selected}
                        key={index}
                        onClick={() => onSelect(index)}
                    >
                        {result.place_name} - {result.address_name}
                    </SearchLocationli>
                ))}
            </SearchLocationlist>
        </SearchLocationContainer>
    );
}

export default SearchLocation;
