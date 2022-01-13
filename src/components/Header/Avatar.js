import { useState } from "react";
import {
    AvatarContainer,
    SignMenu,
    SignMenuItem,
    AccountCircleButtonDesktop,
    AvatarName,
    DesktopDropdownMenu,
    AvatarWrapper,
} from "./styles";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ACCOUNT_PATH, LOGOFF_PATH } from "../../routing/paths";

const Avatar = ({ signInLink, solid, signUpLink, className, userName }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <AvatarContainer className={className}>
                <AvatarWrapper open={open} solid={solid}>
                    <AvatarName solid={solid} open={open}>
                        {userName}
                    </AvatarName>
                    <AccountCircleButtonDesktop onClick={() => setOpen(!open)}>
                        <UserIcon />
                    </AccountCircleButtonDesktop>
                </AvatarWrapper>
                <DesktopDropdownMenu open={open} solid={solid}>
                    <SignMenuItem open={open} solid={solid} to={ACCOUNT_PATH}>
                        Editar Perfil
                    </SignMenuItem>
                    <SignMenuItem open={open} solid={solid} to={LOGOFF_PATH}>
                        Sair
                    </SignMenuItem>
                </DesktopDropdownMenu>
            </AvatarContainer>
            <SignMenu open={open}>
                <AccountCircleButtonDesktop onClick={() => setOpen(false)}>
                    <UserIcon />
                </AccountCircleButtonDesktop>
                <SignMenuItem to={ACCOUNT_PATH}>Editar Perfil</SignMenuItem>
                <SignMenuItem to={LOGOFF_PATH}>Sair</SignMenuItem>
            </SignMenu>
        </>
    );
};

export default Avatar;
