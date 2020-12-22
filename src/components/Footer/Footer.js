import {
    Section,
    FlexContainer,
    ParagraphHighlight,
    Sitemap,
    SitemapLink,
    SocialMediaContainer,
    SocialMediaTitle,
    SocialMediaLinks,
    SitemapContact,
} from "./styles";
import { ReactComponent as Logo } from "../../assets/images/home/logo.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";

function Footer({ sitemapLinks, slogan, email, socialLinks, className }) {
    return (
        <Section className={className}>
            <FlexContainer>
                <div>
                    <Logo />
                    <ParagraphHighlight>{slogan}</ParagraphHighlight>
                </div>
                <Sitemap>
                    {sitemapLinks.map((sitemapLink) => {
                        return (
                            <SitemapLink key={sitemapLink.name} href={sitemapLink.name}>
                                {sitemapLink.name}
                            </SitemapLink>
                        );
                    })}
                    <SitemapContact>
                        Fale conosco: <br /> {email}
                    </SitemapContact>
                </Sitemap>
                <SocialMediaContainer>
                    <SocialMediaTitle>Siga nossas redes sociais</SocialMediaTitle>
                    <SocialMediaLinks>
                        {socialLinks?.facebook && (
                            <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                                <FacebookIcon />
                            </a>
                        )}
                        {socialLinks?.twitter && (
                            <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                                <TwitterIcon />
                            </a>
                        )}
                        {socialLinks?.linkedin && (
                            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                                <LinkedinIcon />
                            </a>
                        )}
                        {socialLinks?.instagram && (
                            <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                                <InstagramIcon />
                            </a>
                        )}
                    </SocialMediaLinks>
                </SocialMediaContainer>
            </FlexContainer>
        </Section>
    );
}

export default Footer;
