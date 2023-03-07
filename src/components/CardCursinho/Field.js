const { RowField, RowInformation } = require("./styled");

function Field({ field, information }) {
    return (
        <>
            <span>
                <RowField>{field}: </RowField>
                <RowInformation>{information}</RowInformation>
            </span>
        </>
    );
}

export default Field;
