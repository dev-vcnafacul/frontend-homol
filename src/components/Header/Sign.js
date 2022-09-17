import { useState } from "react";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { SignContainer, SignInButton, SignUpButton, AccountCircleButton, SignMenu, SignMenuItem } from "./styles";

function Sign({ signInLink, solid, signUpLink, className }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* <SignContainer className={className}>
                <AccountCircleButton onClick={() => setOpen(true)}>
                    <UserIcon />
                </AccountCircleButton>
                <SignUpButton solid={solid} to={signUpLink}>
                    Cadastrar
                </SignUpButton>
                <SignInButton to={signInLink}>
                    <UserIcon />
                    Login
                </SignInButton>
            </SignContainer>
            <SignMenu open={open}>
                <AccountCircleButton onClick={() => setOpen(false)}>
                    <UserIcon />
                </AccountCircleButton>
                <SignMenuItem to={signUpLink}>Cadastrar</SignMenuItem>
                <SignMenuItem to={signInLink}>Login</SignMenuItem>
            </SignMenu> */}
        </>
    );
}

export default Sign;
