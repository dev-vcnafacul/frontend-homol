import { useEffect, useState } from "react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as Logo } from "../../assets/images/home/logo.svg";
import { Bar, FlexContainer, MenuButtons, LogoContainer, Brand } from "./styles";
import Menu from "./Menu";
import Sign from "./Sign";

function Header({ homeLink, itemsMenu, socialLinks, signInLink, signUpLink, className, solid }) {
    const [backgroundSolid, setBackgroundSolid] = useState(solid ? true : false);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (solid !== true) {
            function handleScroll() {
                if (window.scrollY > 50 && !backgroundSolid) {
                    setBackgroundSolid(true);
                } else if (window.scrollY <= 50 && backgroundSolid) {
                    setBackgroundSolid(false);
                }
            }

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [backgroundSolid, solid]);

    return (
        <Bar openMenu={openMenu} solid={backgroundSolid} className={className}>
            <FlexContainer>
                <MenuButtons>
                    {!openMenu && <MenuIcon className="menuIcon" onClick={() => setOpenMenu(true)} />}
                    {openMenu && <CloseIcon onClick={() => setOpenMenu(false)} />}
                </MenuButtons>
                <a href={homeLink}>
                    <LogoContainer>
                        <Logo />
                        <Brand openMenu={openMenu} dark={backgroundSolid}>
                            você na <strong>facul</strong>
                        </Brand>
                    </LogoContainer>
                </a>
                <Menu items={itemsMenu} socialLinks={socialLinks} open={openMenu} openFunction={setOpenMenu} />
                <Sign signInLink={signInLink} signUpLink={signUpLink} />
            </FlexContainer>
        </Bar>
    );
}

export default Header;
