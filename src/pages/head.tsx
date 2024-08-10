import Slider from "react-slick";
import { Button } from "../components/button";
import {
    HeadContainer,
    HeadFooter,
    HeadFooterTitle,
    HeadHeader,
    HeadImageContainer,
} from "../styles/page/styled.head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function Head() {
    const navigate = useNavigate();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <HeadContainer>
            <HeadHeader>
                <Slider {...settings}>
                    <HeadImageContainer>
                        <img src="/src/assets/travel.svg" alt="Image 1" />
                    </HeadImageContainer>
                    <HeadImageContainer>
                        <img src="/src/assets/welcome.svg" alt="Image 2" />
                    </HeadImageContainer>
                    <HeadImageContainer>
                        <img src="/src/assets/travel.svg" alt="Image 3" />
                    </HeadImageContainer>
                </Slider>
            </HeadHeader>
            <HeadFooter>
                <HeadFooterTitle>
                    <h1>Get where you need to go, with Dr.t</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                </HeadFooterTitle>
                <Button
                    onClick={() => {
                        navigate("/main");
                    }}
                >
                    Get Started
                </Button>
            </HeadFooter>
        </HeadContainer>
    );
}

export default Head;
