import { useAppSelector } from "../store/store";
import { ShowRouteBox, ShowRouteContainer } from "../styles/page/styled.route";

function ShowRoute() {
    const destination: any = useAppSelector(
        (state) => state.destination
    ).destinations;
    if (destination.length === 0) return null;
    return (
        <ShowRouteContainer>
            {destination.map((route: any, index: number) => (
                <ShowRouteBox key={index}>
                    <h1>{route.type}</h1>
                </ShowRouteBox>
            ))}
        </ShowRouteContainer>
    );
}

export default ShowRoute;
