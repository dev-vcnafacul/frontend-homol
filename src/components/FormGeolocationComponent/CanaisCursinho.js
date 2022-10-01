import { useState } from "react";

import { Input, InputLabel, FormField } from "../atoms";
import { SubmitBtn, Footer } from "./styles";

function CanaisCursinho({ goNextStep, goBackStep, oldData }) {
    const [data, setData] = useState(oldData);
    // const [errors, setErrors] = useState({});

    function handleForm(e) {
        e.preventDefault();
        goNextStep(data);
    }

    function handleBack(e) {
        e.preventDefault();
        goBackStep(data);
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <FormField>
                    <InputLabel htmlFor="courseSite">Site</InputLabel>
                    <Input
                        id="courseSite"
                        // error={errors.courseSite}
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
                        // error={errors.courseInstagram}
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
                        // error={errors.courseYoutube}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseYoutube: e.target.value });
                            // isValidField("courseYoutube", e.target.value);
                        }}
                        value={data.courseYoutube ? data.courseYoutube : ""}
                    />
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseFacebook">Facebook</InputLabel>
                    <Input
                        id="courseFacebook"
                        // error={errors.courseFacebook}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseFacebook: e.target.value });
                            // isValidField("courseFacebook", e.target.value);
                        }}
                        value={data.courseFacebook ? data.courseFacebook : ""}
                    />
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseLinkedin">LinkedIn</InputLabel>
                    <Input
                        id="courseLinkedin"
                        // error={errors.courseLinkedin}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseLinkedin: e.target.value });
                            // isValidField("courseLinkedin", e.target.value);
                        }}
                        value={data.courseLinkedin ? data.courseLinkedin : ""}
                    />
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseTwitter">Twitter</InputLabel>
                    <Input
                        id="courseTwitter"
                        // error={errors.courseTwitter}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseTwitter: e.target.value });
                            // isValidField("courseTwitter", e.target.value);
                        }}
                        value={data.courseTwitter ? data.courseTwitter : ""}
                    />
                </FormField>

                <FormField>
                    <InputLabel htmlFor="courseTiktok">Tiktok</InputLabel>
                    <Input
                        id="courseTiktok"
                        // error={errors.courseTiktok}
                        type="text"
                        onChange={(e) => {
                            setData({ ...data, courseTiktok: e.target.value });
                            // isValidField("courseTiktok", e.target.value);
                        }}
                        value={data.courseTiktok ? data.courseTiktok : ""}
                    />
                </FormField>

                <Footer>
                    <SubmitBtn as="input" value="Voltar" onClick={handleBack} />
                    <SubmitBtn as="input" type="submit" value="Continuar" />
                </Footer>
            </form>
        </>
    );
}

export default CanaisCursinho;
