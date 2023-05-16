import AccountForm from "components/AccountForm";
import ChangePasswordForm from "components/ChangePasswordForm";
import Footer from "components/Footer";
import Header from "components/Header";
import { footer } from "pages/Home/data";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccount } from "store/actions/account";
import { Loading } from "styles/common";
import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";
import { Content, Error, Title, Wrap } from "./styles";
import { header } from "utils/data";

import HighlightSelector from "components/HighlightSelector/HighlightSelector";

function Account() {
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = useSelector((state) => state.auth.user);
    const [errorMessage, setErrorMessage] = useState("");
    const userToken = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    let [tabIndex, setTabIndex] = useState(0);
    const tabItems = ["Atualizar meus dados", "Alterar Senha"];

    async function handleSubmit(values) {
        try {
            await dispatch(updateAccount(values, userToken));
        } catch (e) {
            if (e.message.indexOf("Token error") >= 0) {
                setErrorMessage(
                    "Ops, ocorreu um problema na requisição. Recarregue a página e faça login para tentar novamente!"
                );
            }
            setErrorMessage("Ops, ocorreu um problema na requisição. Tente novamente!");
        } finally {
            setIsLoading(false);
            setErrorMessage("Suas informações foram atualizadas!");
        }
    }

    return (
        <>
            {isLoading && <Loading />}
            <Header solid {...header} />
            <Wrap>
                <TriangleGreen className="graphism triangle-green" />
                <TriangleYellow className="graphism triangle-yellow" />
                <Content>
                    <Title>Meu Perfil</Title>
                    <HighlightSelector
                        className="accountSelector"
                        items={tabItems}
                        fontSize={"1.5rem"}
                        callBacks={[setTabIndex]}
                        justifyContent={"center"}
                        liMargin={"10px"}
                    ></HighlightSelector>
                    <AccountForm
                        initialValues={initialValues || {}}
                        onSubmit={handleSubmit}
                        className={tabIndex === 0 ? "tabActive" : "tabDisplayNone"}
                    />
                    <ChangePasswordForm
                        userToken={userToken || {}}
                        className={tabIndex === 1 ? "tabActive" : "tabDisplayNone"}
                    />
                    <Error>{errorMessage}</Error>
                </Content>
            </Wrap>
            <Footer {...footer} />
        </>
    );
}

export default Account;
