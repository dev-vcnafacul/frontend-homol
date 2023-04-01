import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as Logo } from "../../assets/images/home/logo.svg";
import {
    Brand,
    FlexContainer,
    LogoContainer,
    ParagraphHighlight,
    Section,
    Sitemap,
    SitemapContact,
    SitemapLink,
    SocialMediaContainer,
    SocialMediaLinks,
    SocialMediaTitle,
} from "./styles";

function Footer({ sitemapLinks, slogan, email, socialLinks, className }) {
    return (
        <Section className={className}>
            <FlexContainer>
                <div>
                    <LogoContainer>
                        <Logo />
                        <Brand>
                            você na <strong>facul</strong>
                        </Brand>
                    </LogoContainer>
                    <ParagraphHighlight>{slogan}</ParagraphHighlight>
                </div>
                <Sitemap>
                    {sitemapLinks.map((sitemapLink) => {
                        return (
                            <SitemapLink key={sitemapLink.name} href={sitemapLink.link}>
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
