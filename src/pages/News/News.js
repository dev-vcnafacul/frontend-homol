import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import data from "../Home/data";
import { BodyIFrame, Iframe } from "./styles";
import { useCallback, useState, useEffect } from "react";

function News() {
    const [news, setNews] = useState([]);

    const getNewsAPI = useCallback(async () => {
        try {
            const url = `${process.env.REACT_APP_BASE_URL}/news`;
            console.log(url);
            const res = await fetch(url);
            // eslint-disable-next-line no-undef
            const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                setNews(JSON.parse(value));
            }
        } catch {
            setNews([]);
        }
    }, []);

    useEffect(() => {
        getNewsAPI();
    }, [getNewsAPI]);

    const GetNews = () => {
        if (news.length > 0) {
            return news.map((n, index) => {
                console.log(news);
                return (
                    <Iframe
                        key={index}
                        src={`https://drive.google.com/file/d/${n.id}/preview?#toolbar=0&navpanes=0&scrollbar=0&view=FitV&zoom=150`}
                    />
                );
            });
        }
        return null;
    };

    return (
        <div>
            <Header {...data.header} />
            <Hero {...data.hero} />
            <BodyIFrame>
                <GetNews />
            </BodyIFrame>
            <Footer {...data.footer} />
        </div>
    );
}
export default News;
