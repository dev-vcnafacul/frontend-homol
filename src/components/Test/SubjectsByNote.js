import {
    Title,
    Wrap,
    Content1,
    SectionContent,
    Error,
    Success,
    SuccessIcon,
    LoginShortcut,
    SuccessDiv,
    RalewayBold35,
    RalewayRegular20,
    Montserrat18,
    Montserrat16,
} from "./styles";

import IconeLinguagens from "../../assets/images/dashboard/linguagens.svg";
import IconeBioExatas from "../../assets/images/dashboard/bioexatas.svg";
import IconeCienciasHumanas from "../../assets/images/dashboard/humanas.svg";

import { Card } from "./Card";

function SubjectsByNote() {
    return (
        <>
            <Wrap>
                <Content1>
                    <RalewayBold35>Simulados por caderno</RalewayBold35>
                    <RalewayRegular20>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </RalewayRegular20>
                    <SectionContent>
                        <Card
                            icon={IconeLinguagens}
                            title="Linguagens"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
                            color="#0B2747"
                            buttonText="iniciar"
                        ></Card>
                        <Card
                            icon={IconeBioExatas}
                            title="Ciências da natureza"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
                            color="#DA005A"
                            buttonText="iniciar"
                        ></Card>
                        <Card
                            icon={IconeCienciasHumanas}
                            title="Ciências Humanas"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
                            color="#8CC408"
                            buttonText="iniciar"
                        ></Card>
                        <Card
                            icon={IconeBioExatas}
                            title="Matemática"
                            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
                            color="#DA005A"
                            buttonText="iniciar"
                        ></Card>
                    </SectionContent>
                </Content1>
            </Wrap>
        </>
    );
}

export default SubjectsByNote;
