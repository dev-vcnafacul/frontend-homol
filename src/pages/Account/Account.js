import data from "pages/Home/data";
import { ACCOUNT_PATH } from "routing/paths";

import Header from "components/Header";
import Footer from "components/Footer";
import AccountForm from "components/AccountForm";
import ChangePasswordForm from "components/ChangePasswordForm";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { updateAccount } from "store/actions/account";

import { Wrap, Content, Title, Error } from "./styles";
import { Loading } from "styles/common";
import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";

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
        } catch {
            setErrorMessage("Ops, ocorreu um problema na requisição. Tente novamente!");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && <Loading />}
            <Header solid itemsMenu={[{ link: ACCOUNT_PATH, name: "Meu Perfil", internal: true }]} />
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
                        token={userToken || {}}
                        className={tabIndex === 1 ? "tabActive" : "tabDisplayNone"}
                    />
                    <Error>{errorMessage}</Error>
                </Content>
            </Wrap>
            <Footer {...data.footer} />
        </>
    );
}

export default Account;
