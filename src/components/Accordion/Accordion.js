import { AccordionTitle, Container } from "./styles";

function Accordion({ isOpen, setStateOpen, titleClosed, titleOpened, children }) {
    return (
        <Container>
            <AccordionTitle onClick={setStateOpen}>{isOpen ? titleOpened : titleClosed}</AccordionTitle>
            {isOpen && children}
        </Container>
    );
}

export default Accordion;
