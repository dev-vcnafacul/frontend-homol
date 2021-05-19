import { useState } from "react";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { SignContainer, SignInButton, AccountCircleButton, SignMenu, SignMenuItem } from "./styles";

function Sign({ signInLink, solid, signUpLink, className }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <SignContainer className={className}>
                <AccountCircleButton onClick={() => setOpen(true)}>
                    <UserIcon />
                </AccountCircleButton>
                <SignInButton solid={solid} href={signInLink}>
                    Cadastrar
                </SignInButton>
            </SignContainer>
            <SignMenu open={open}>
                <AccountCircleButton onClick={() => setOpen(false)}>
                    <UserIcon />
                </AccountCircleButton>
                <SignMenuItem href={signInLink}>Cadastrar</SignMenuItem>
            </SignMenu>
        </>
    );
}

export default Sign;
