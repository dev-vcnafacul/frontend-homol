import LogRocket from "logrocket";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import CookieBar from "./components/CookieBar";
import PlataformRoutes from "./routing/routes/plataform";
import WebsiteRoutes from "./routing/routes/website";
import GlobalStyle from "./styles/globalStyle";
import store from "./store";
import { lgpd } from "./pages/Home/data";
import { theme } from "./styles/theme";

import "./styles/normalize.css";

function App() {
    useEffect(() => {
        LogRocket.init("8eldie/vcnafacul");
    }, []);
    return (
        <Provider store={store}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <CookieBar {...lgpd} />
            </ThemeProvider>
            <BrowserRouter>
                <Switch>
                    <>
                        <PlataformRoutes />
                        <WebsiteRoutes />
                    </>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
