import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { MenuContainer, MenuItem, SocialMediaContainer, SocialMediaTitle, SocialMediaLinks } from "./styles";
import { Link } from "react-router-dom";

function Menu({ items, socialLinks, open, solid, openFunction, className }) {
    return (
        <MenuContainer open={open} className={className}>
            {items.map((item) => {
                return (
                    <MenuItem
                        {...(item.internal ? { to: item.link, as: Link } : { href: item.link })}
                        key={item.name}
                        onClick={(e) => {
                            openFunction(!open);
                        }}
                        solid={solid}
                    >
                        {item.name}
                    </MenuItem>
                );
            })}
            {socialLinks && (
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
            )}
        </MenuContainer>
    );
}

export default Menu;
