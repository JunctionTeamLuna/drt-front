import {
    AttractionContainer,
    AttractionItem,
} from "../styles/page/styled.attraction";
import attractions from "../config/attractions.json";

function AttractionRecommmand() {
    return (
        <AttractionContainer>
            {attractions.map((attraction) => (
                <AttractionItem key={attraction.id}>
                    <img src={attraction.image} alt={attraction.name} />
                    <div>
                        <h1>{attraction.name}</h1>
                        <p>{attraction.description}</p>
                    </div>
                </AttractionItem>
            ))}
        </AttractionContainer>
    );
}

export default AttractionRecommmand;
