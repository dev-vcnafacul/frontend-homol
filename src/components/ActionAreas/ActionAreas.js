import { useState } from "react";
import MobileDropdownDiv from "../FeatureList/MobileDropdownDiv";
import HighlightSelector from "../HighlightSelector/HighlightSelector";
import {
    ActionAreasCarousel,
    ActionAreasSubtitle,
    ActionAreasTitle,
    Card,
    CardIcon,
    CardSubtitle,
    CardTitle,
    FlexContainer,
    Section,
    SectionContent,
} from "./styles";

function ActionAreas({ cardItems, tabItems, className }) {
    let [tabIndex, setTabIndex] = useState(0);
    const carouselActionsSettings = {
        loop: false,
        lazyload: true,
        items: 1,
        controls: true,
        nav: true,
        navPosition: "bottom",
        controlsPosition: "bottom",
        mouseDrag: true,
        speed: 400,
        controlsText: ["", ""],
        gutter: 20,
        fixedWidth: 230,
        edgePadding: 20,
        responsive: {
            560: {
                items: 2,
            },
            768: {
                items: 3,
                fixedWidth: 0,
                edgePadding: 0,
            },
            1024: {
                items: 4,
            },
        },
    };
    return (
        <Section className={className}>
            <FlexContainer>
                <SectionContent>
                    <ActionAreasTitle>Veja nossas áreas de ação</ActionAreasTitle>
                    <ActionAreasSubtitle>
                        Disciplinas divididas de forma a facilitar o estudo para o ENEM
                    </ActionAreasSubtitle>
                </SectionContent>
                <HighlightSelector
                    className="actionAreasSelector"
                    items={tabItems}
                    fontSize={"1.5rem"}
                    callBacks={[setTabIndex]}
                    justifyContent={"space-between"}
                    liMargin={"10px"}
                ></HighlightSelector>
                <MobileDropdownDiv
                    className="actionAreasMobileDropdown"
                    items={tabItems}
                    imgCB={setTabIndex}
                    callBacks={[setTabIndex]}
                ></MobileDropdownDiv>
                {cardItems.map((cardTopics) => {
                    return (
                        <ActionAreasCarousel
                            className={tabIndex === cardTopics.id ? "tabActive" : "tabDisplayNone"}
                            index={tabIndex}
                            arrowColor="gray"
                            settings={carouselActionsSettings}
                            key={cardTopics.id}
                        >
                            {cardTopics.items.map((cardItem) => {
                                return (
                                    <div key={cardItem.title}>
                                        <Card>
                                            <CardIcon alt="languages" src={cardItem.icon}></CardIcon>
                                            <CardTitle>{cardItem.title}</CardTitle>
                                            <CardSubtitle>{cardItem.subtitle}</CardSubtitle>
                                        </Card>
                                    </div>
                                );
                            })}
                        </ActionAreasCarousel>
                    );
                })}
            </FlexContainer>
        </Section>
    );
}

export default ActionAreas;
