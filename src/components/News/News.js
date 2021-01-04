import {
    Section,
    FlexContainer,
    NewsTitle,
    NewsSubtitle,
    SectionContent,
    NewsCarousel,
    Card,
    CardTitle,
} from "./styles";

function News({ items, className }) {
    const carouselSettings = {
        lazyload: true,
        items: 2,
        controls: true,
        nav: true,
        navPosition: "bottom",
        controlsPosition: "bottom",
        mouseDrag: true,
        speed: 400,
        controlsText: ["", ""],
        gutter: 20,
        responsive: {
            768: {
                items: 3,
            },
        },
    };

    return (
        <Section className={className}>
            <FlexContainer>
                <SectionContent>
                    <NewsTitle>
                        Não <span>perca nossas</span> Novidades
                    </NewsTitle>
                    <NewsSubtitle>Fique ligado nas últimas notícias e nossas novas funcionalidades</NewsSubtitle>
                </SectionContent>
                <NewsCarousel arrowColor="gray" settings={carouselSettings}>
                    {items.map((item) => {
                        return (
                            <div key={item.title}>
                                <Card href={item.link}>
                                    <img src={item.imageSrc} alt={item.title} title={item.title} />
                                    <CardTitle>{item.title}</CardTitle>
                                </Card>
                            </div>
                        );
                    })}
                </NewsCarousel>
            </FlexContainer>
        </Section>
    );
}

export default News;
