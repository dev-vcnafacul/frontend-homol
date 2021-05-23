import data from "pages/Home/data";
import { ACCOUNT_PATH } from "routing/paths";

import Header from "components/Header";
import Footer from "components/Footer";
import AccountForm from "components/AccountForm";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { updateAccount } from "store/actions/account";

import { Wrap, Content, Title, Error } from "./styles";
import { Loading } from "styles/common";
import { ReactComponent as TriangleGreen } from "../../assets/icons/triangle-green.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";

function Account() {
    const [isLoading, setIsLoading] = useState(false);
    const initialValues = useSelector((state) => state.auth.user);
    const [errorMessage, setErrorMessage] = useState("");
    const userToken = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

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
                    <AccountForm initialValues={initialValues || {}} onSubmit={handleSubmit} />
                    <Error>{errorMessage}</Error>
                </Content>
            </Wrap>
            <Footer {...data.footer} />
        </>
    );
}

export default Account;
