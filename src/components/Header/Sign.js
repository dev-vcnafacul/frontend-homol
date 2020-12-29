import { useState } from "react";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { SignContainer, SignInButton, SignUpButton, AccountCircleButton, SignMenu, SignMenuItem } from "./styles";

function Sign({ signInLink, signUpLink, className }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <SignContainer className={className}>
                <AccountCircleButton onClick={() => setOpen(true)}>
                    <UserIcon />
                </AccountCircleButton>
                <SignInButton href={signInLink}>Cadastrar</SignInButton>
                <SignUpButton href={signUpLink}>
                    <UserIcon />
                    Login
                </SignUpButton>
            </SignContainer>
            <SignMenu open={open}>
                <AccountCircleButton onClick={() => setOpen(false)}>
                    <UserIcon />
                </AccountCircleButton>
                <SignMenuItem href={signInLink}>Cadastrar</SignMenuItem>
                <SignMenuItem href={signUpLink}>Login</SignMenuItem>
            </SignMenu>
        </>
    );
}

export default Sign;
