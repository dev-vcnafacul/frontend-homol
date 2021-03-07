import { useState } from "react";
import { Wrapper, Box } from "./styles";

const CheckboxField = ({ onChange, children, className }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };

    return (
        <Wrapper onClick={handleChange} className={className}>
            <Box active={isChecked}></Box>
            {children}
        </Wrapper>
    );
};

export default CheckboxField;
