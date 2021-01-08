import { useState } from "react";
import HighlightSelector from "../HighlightSelector";
import {
    Section,
    FlexContainer,
    SupportersTitle,
    SupportersSubtitle,
    SectionContent,
    SponsorsCarousel,
    VolunteersCarousel,
    SponsorImage,
    Card,
    CardIcon,
    CardText,
    VnfTeamCTA,
} from "./styles";

function Supporters({ sponsors, volunteers, className }) {
    const tabItems = ["Empresas", "Voluntários"];
    let [tabIndex, setTabIndex] = useState(0);
    const sponsorsCarouselActionsSettings = {
        lazyload: true,
        items: 1,
        controls: true,
        nav: false,
        navPosition: "bottom",
        controlsPosition: "bottom",
        mouseDrag: true,
        speed: 400,
        controlsText: ["", ""],
        gutter: 20,
        responsive: {
            560: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1024: {
                items: 4,
                nav: true,
            },
        },
    };
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
                <SponsorsCarousel
                    className={tabIndex === 0 ? "tabActive" : "tabDisplayNone"}
                    index={tabIndex}
                    arrowColor="gray"
                    settings={sponsorsCarouselActionsSettings}
                >
                    {sponsors.map((supporter) => {
                        return <SponsorImage src={supporter.image}></SponsorImage>;
                    })}
                </SponsorsCarousel>
                <VolunteersCarousel
                    className={tabIndex === 1 ? "tabActive" : "tabDisplayNone"}
                    index={tabIndex}
                    arrowColor="gray"
                    settings={volunteersCarouselActionsSettings}
                >
                    {volunteers.map((volunteer) => {
                        return (
                            <Card>
                                <CardIcon src={volunteer.image}></CardIcon>
                                <CardText>{volunteer.name}</CardText>
                            </Card>
                        );
                    })}
                </VolunteersCarousel>
                <VnfTeamCTA className="desktop">Conheça todo nosso time</VnfTeamCTA>
                <VnfTeamCTA className="mobile">Conheça nossa história</VnfTeamCTA>
            </FlexContainer>
        </Section>
    );
}

export default Supporters;
