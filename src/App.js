import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";

import WebsiteRoutes from "./routing/routes/website";
import PlataformRoutes from "./routing/routes/plataform";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import "./styles/normalize.css";
import { useEffect } from "react";
import LogRocket from "logrocket";
import CookieBar from "./components/CookieBar";
import data from "./pages/Home/data";

function App() {
    useEffect(() => {
        LogRocket.init("8eldie/vcnafacul");
    }, []);
    return (
        <Provider store={store}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <CookieBar {...data.lgpd} />
                <BrowserRouter>
                    <Switch>
                        <>
                            <PlataformRoutes />
                            <WebsiteRoutes />
                        </>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
