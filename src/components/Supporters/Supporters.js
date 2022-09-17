import { useState } from "react";
import HighlightSelector from "../HighlightSelector";
import { Section, FlexContainer, SupportersTitle, SupportersSubtitle, SectionContent } from "./styles";
import Sponsors from "./Sponsors";
// import Volunteers from "./Volunteers";
import { Anchor } from "./../atoms";

function Supporters({ sponsors, volunteers, tabTexts, className }) {
    let [tabIndex, setTabIndex] = useState(0);
    return (
        <>
            <Anchor id="supporters"></Anchor>
            <Section className={className}>
                <FlexContainer>
                    <SectionContent>
                        <SupportersTitle>Nossos apoiadores!</SupportersTitle>
                        <SupportersSubtitle>Pessoas e empresas que sonharam com a gente</SupportersSubtitle>
                    </SectionContent>
                    <HighlightSelector
                        callBacks={[setTabIndex]}
                        items={tabTexts}
                        className="desktop"
                        flexDirection="row"
                        fontSize="1.5rem"
                        justifyContent="center"
                        liMargin="0 16px"
                    ></HighlightSelector>
                    <Sponsors sponsors={sponsors} className={tabIndex === 0 ? "tabActive" : "tabDisplayNone"} />
                    {/* <Volunteers volunteers={volunteers} className={tabIndex === 1 ? "tabActive" : "tabDisplayNone"} /> */}
                </FlexContainer>
            </Section>
        </>
    );
}

export default Supporters;
