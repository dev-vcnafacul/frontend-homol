import { useState } from "react";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { SignContainer, SignInButton, SignUpButton, AccountCircleButton, SignMenu, SignMenuItem } from "./styles";

function Sign({ signInLink, solid, signUpLink, className }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <SignContainer className={className}>
                <AccountCircleButton onClick={() => setOpen(true)}>
                    <UserIcon />
                </AccountCircleButton>
                <SignInButton solid={solid} to={signInLink}>
                    Cadastrar
                </SignInButton>
                <SignUpButton to={signUpLink}>
                    <UserIcon />
                    Login
                </SignUpButton>
            </SignContainer>
            <SignMenu open={open}>
                <AccountCircleButton onClick={() => setOpen(false)}>
                    <UserIcon />
                </AccountCircleButton>
                <SignMenuItem to={signInLink}>Cadastrar</SignMenuItem>
                <SignMenuItem to={signUpLink}>Login</SignMenuItem>
            </SignMenu>
        </>
    );
}

export default Sign;
