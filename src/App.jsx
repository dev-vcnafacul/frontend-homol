import LogRocket from "logrocket";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { Router } from "routing/routes";
import CookieBar from "./components/CookieBar";
import { lgpd } from "./pages/Home/data";
import store from "./store";
import GlobalStyle from "./styles/globalStyle";
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
                <Router />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
