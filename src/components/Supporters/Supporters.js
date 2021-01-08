import { useState } from "react";
import HighlightSelector from "../HighlightSelector";
import {
    Section,
    FlexContainer,
    SupportersTitle,
    SupportersSubtitle,
    SectionContent,
    VolunteersCarousel,
    Card,
    CardIcon,
    CardText,
    VnfTeamCTA,
} from "./styles";
import Sponsors from "./Sponsors";
import Volunteers from "./Volunteers";

function Supporters({ sponsors, volunteers, className }) {
    const tabItems = ["Empresas", "Voluntários"];
    let [tabIndex, setTabIndex] = useState(0);
    const volunteersCarouselActionsSettings = {
        lazyload: true,
        items: 3,
        controls: true,
        nav: false,
        navPosition: "bottom",
        controlsPosition: "bottom",
        mouseDrag: true,
        speed: 400,
        controlsText: ["", ""],
        gutter: 60,
        center: true,
        fixedWidth: 104,
        responsive: {
            560: {
                items: 3,
                fixedWidth: false,
            },
            768: {
                items: 4,
            },
            1024: {
                items: 5,
                nav: true,
            },
        },
    };
    console.log(tabIndex);
    return (
        <Section className={className}>
            <FlexContainer>
                <SectionContent>
                    <SupportersTitle>Nossos apoiadores!</SupportersTitle>
                    <SupportersSubtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</SupportersSubtitle>
                </SectionContent>
                <HighlightSelector
                    callBacks={[setTabIndex]}
                    items={tabItems}
                    className="desktop"
                    flexDirection="row"
                    fontSize="1.5rem"
                    justifyContent="center"
                    liMargin="0 16px"
                ></HighlightSelector>
                <Sponsors sponsors={sponsors} className={tabIndex === 0 ? "tabActive" : "tabDisplayNone"} />
                <Volunteers volunteers={volunteers} className={tabIndex === 1 ? "tabActive" : "tabDisplayNone"} />
                <VnfTeamCTA className="desktop">Conheça todo nosso time</VnfTeamCTA>
                <VnfTeamCTA className="mobile">Conheça nossa história</VnfTeamCTA>
            </FlexContainer>
        </Section>
    );
}

export default Supporters;
