import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Quote from "../../components/Quote";
import data from "../Home/data";
import { ArticleWrapper } from "./styles";

function News() {
    return (
        <div>
            <Header {...data.header} />
            <Hero {...data.hero} />
            <ArticleWrapper>
                <h1>Esta aqui é a página de novidades #deletardepois</h1>
                <p>
                    Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta <a href="#">facilisis</a>
                    elementum. Sed condimentum sed massa quis ullamcorper. Donec at scelerisque neque. Pellentesque
                    sagittis, massa sodales sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus vel felis.
                    Vivamus egestas scelerisque consectetur. Vestibulum faucibus enim urna, fermentum aliquet quam
                    euismod non. Proin cursus, libero quis semper elementum, diam metus eleifend magna, in placerat sem
                    velit vitae lacus. Vivamus tempor fringilla nisl, id condimentum felis dignissim nec.
                </p>
                <p>
                    Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim
                    quis nibh. Maecenas convallis eros a ante dignissim, vitae elementum metus facilisis. Cras in
                    maximus sem. Praesent libero augue, ornare eget quam sed, volutpat suscipit arcu. Duis ut urna
                    commodo, commodo tellus ac, consequat justo. Maecenas nec est ac purus mattis tristique vitae vel
                    leo. Duis ac eros vel nunc aliquet ultricies vel at metus. Praesent a sagittis leo. Maecenas
                    volutpat, justo in egestas mattis, lectus dui venenatis ex, consequat imperdiet velit odio eget
                    dolor. Mauris commodo cursus metus ut lobortis. Nulla eget facilisis nibh, et varius justo. Ut
                    laoreet purus at neque lacinia tempus. Cras venenatis sed felis sed pulvinar. Mauris orci sapien,
                    convallis scelerisque nunc id, molestie mattis lectus. Vivamus facilisis eu odio at vestibulum.
                    Mauris id odio ut libero ornare finibus.
                </p>
                <Quote quoteText="Abuble" sideText="Camarão" />
            </ArticleWrapper>
            <Footer {...data.footer} />
        </div>
    );
}
export default News;
