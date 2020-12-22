import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./store";

import WebsiteRoutes from "./routing/routes/website";
import PlataformRoutes from "./routing/routes/plataform";

import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import "./styles/normalize.css";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <PlataformRoutes />
                        <WebsiteRoutes />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
