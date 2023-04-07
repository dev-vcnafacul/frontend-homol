const { RowField, RowInformation } = require("./styles");

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
