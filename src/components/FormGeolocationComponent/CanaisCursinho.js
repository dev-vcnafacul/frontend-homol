import { useState } from "react";

import { Input, InputLabel, FormField } from "../atoms";
import { SubmitBtn } from "./styles";

function CanaisCursinho({ goNextStep }) {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    function handleForm(e) {
        e.preventDefault();
        goNextStep(data);
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <FormField>
                    <InputLabel htmlFor="courseSite">Site</InputLabel>
                    <Input
                        id="courseSite"
                        error={errors.courseSite}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseSite: e.target.value });
                            // isValidField("firstName", e.target.value);
                        }}
                        value={data.courseSite ? data.courseSite : ""}
                    />
                    {/* <FormError>{emailError}</FormError> */}
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseInstagram">Instagram</InputLabel>
                    <Input
                        id="courseInstagram"
                        error={errors.courseInstagram}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseInstagram: e.target.value });
                            // isValidField("courseInstagram", e.target.value);
                        }}
                        value={data.courseInstagram ? data.courseInstagram : ""}
                    />
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseYoutube">Youtube</InputLabel>
                    <Input
                        id="courseYoutube"
                        error={errors.courseYoutube}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseYoutube: e.target.value });
                            // isValidField("courseYoutube", e.target.value);
                        }}
                        value={data.courseYoutube ? data.courseYoutube : ""}
                    />
                </FormField>
                <SubmitBtn as="input" type="submit" value="Cadastrar" />
            </form>
        </>
    );
}

export default CanaisCursinho;
