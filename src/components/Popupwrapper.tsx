import styled, { keyframes } from "styled-components";

// Keyframes for the slide-up animation
const slideUp = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled Components
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 1000;
`;

const Popup = styled.div`
    background-color: white;
    padding: 25px;
    border-radius: 25px 25px 0 0;

    max-width: 500px;
    width: 100%;
    height: 500px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    animation: ${slideUp} 0.3s ease;
`;

const PopupWrapper = ({ isOpen, onClose, children }: any) => {
    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <Popup onClick={(e) => e.stopPropagation()}>{children}</Popup>
        </Overlay>
    );
};

export default PopupWrapper;
