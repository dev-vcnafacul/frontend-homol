import { useState } from "react";
import { AccordionTitle, Container } from "./styles";

function Accordion({ titleClosed, titleOpened, children }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggleAccordion() {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <Container>
            <AccordionTitle onClick={handleToggleAccordion}>{isOpen ? titleOpened : titleClosed}</AccordionTitle>
            {isOpen && children}
        </Container>
    );
}

export default Accordion;
