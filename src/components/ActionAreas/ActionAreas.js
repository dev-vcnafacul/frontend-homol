import { useState } from "react";
import HighlightSelector from "../HighlightSelector/HighlightSelector";
import {
    Section,
    FlexContainer,
    ActionAreasTitle,
    ActionAreasSubtitle,
    SectionContent,
    ActionAreasCarousel,
    Card,
    CardIcon,
    CardTitle,
    CardSubtitle,
} from "./styles";

function ActionAreas({ cardItems, tabItems, className }) {
    let [tabIndex, setTabIndex] = useState(0);
    const carouselActionsSettings = {
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
                    <ActionAreasSubtitle>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</ActionAreasSubtitle>
                </SectionContent>
                <HighlightSelector
                    className="actionAreasSelector"
                    items={tabItems}
                    fontSize={"1.5rem"}
                    callBacks={[setTabIndex]}
                    justifyContent={"space-between"}
                    liMargin={"10px"}
                ></HighlightSelector>
                {cardItems.map((cardTopics) => {
                    return (
                        <ActionAreasCarousel
                            className={tabIndex === cardTopics.id ? "tabActive" : "tabDisplayNone"}
                            index={tabIndex}
                            arrowColor="gray"
                            settings={carouselActionsSettings}
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
