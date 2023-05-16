import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as Logo } from "../../assets/images/home/logo.svg";
import Avatar from "./Avatar";
import Menu from "./Menu";
import Sign from "./Sign";
import { Bar, Brand, FlexContainer, LogoContainer, MenuButtons } from "./styles";

import { HOME_PATH } from "router/paths";

function Header({ itemsMenu, socialLinks, signInLink, signUpLink, className, solid }) {
    const [backgroundSolid, setBackgroundSolid] = useState(!!solid);
    const [openMenu, setOpenMenu] = useState(false);
    const userData = useSelector((state) => state.auth.user);

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
                <Link to={HOME_PATH}>
                    <LogoContainer>
                        <Logo />
                        <Brand openMenu={openMenu} dark={backgroundSolid}>
                            você na <strong>facul</strong>
                        </Brand>
                    </LogoContainer>
                </Link>
                <Menu
                    solid={backgroundSolid}
                    items={itemsMenu}
                    socialLinks={socialLinks}
                    open={openMenu}
                    openFunction={setOpenMenu}
                />
                {(signInLink || signUpLink) && !userData && (
                    <Sign solid={backgroundSolid} signInLink={signInLink} signUpLink={signUpLink} />
                )}
                {userData && <Avatar userName={userData.nome} solid={backgroundSolid}></Avatar>}
            </FlexContainer>
        </Bar>
    );
}

export default Header;
