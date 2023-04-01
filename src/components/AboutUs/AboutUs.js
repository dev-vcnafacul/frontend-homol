import { useState } from "react";
import Youtube from "react-youtube";
import { ReactComponent as SquarePink } from "../../assets/icons/square-pink.svg";
import { ReactComponent as TabletImage } from "../../assets/icons/tablet.svg";
import { ReactComponent as TriangleGreyBorder } from "../../assets/icons/triangle-grey-border.svg";
import { ReactComponent as TriangleYellow } from "../../assets/icons/triangle-yellow.svg";
import { SectionSubtitle, SectionTitle } from "../../styles/common";
import { Anchor, Play } from "../atoms";
import { Content, ImageContainer, VideoContainer, VideoWrapper, Wrap } from "./styles";

function AboutUs({ title, subtitle, cta, video }) {
    const [videoComponent, setVideoComponent] = useState("");

    const videoOptions = {
        height: "390",
        width: "640",
        playerVars: {
            rel: 0,
            autoplay: 1,
        },
    };

    function handleClick() {
        setVideoComponent(
            <Youtube
                containerClassName="videoContainer"
                className="video"
                videoId={video.videoID}
                opts={videoOptions}
            />
        );
    }

    const subtitleParts = subtitle.split("*");

    return (
        <>
            <Anchor id="about-us"></Anchor>
            <Wrap>
                <VideoWrapper>
                    <TriangleGreyBorder className="graphism triangle-border" />
                    <TriangleYellow className="graphism triangle-yellow" />
                    <SquarePink className="graphism square-pink" />
                    <VideoContainer>
                        <TabletImage className="tablet" />
                        <ImageContainer>
                            <img src={video.thumbnail} alt="" className="video" width="640" height="390" />
                            <Play onClick={handleClick} />
                        </ImageContainer>
                        {videoComponent}
                    </VideoContainer>
                </VideoWrapper>
                <Content>
                    <SectionTitle>{title}</SectionTitle>
                    <SectionSubtitle>
                        {subtitleParts[0]}
                        <span style={{ fontWeight: "bold" }}>{subtitleParts[1]}</span>
                        {subtitleParts[2]}
                    </SectionSubtitle>
                </Content>
            </Wrap>
        </>
    );
}

export default AboutUs;
