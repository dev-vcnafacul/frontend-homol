export const validateEmail = (email, setEmailError) => {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(String(email).toLowerCase())) {
        setEmailError(false);
        return true;
    } else if (email.trim() === "") {
        setEmailError("*Campo obrigatório");
        return false;
    } else {
        setEmailError("*Utilize um e-mail válido");
        return false;
    }
};

export const formatPhoneInput = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
        .replace(/(-\d{4})\d+?$/, "$1");
};

export const isValidField = (field, value, setErrors) => {
    const possibleDDD = [
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        21,
        22,
        24,
        27,
        28,
        31,
        32,
        33,
        34,
        35,
        37,
        38,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        51,
        53,
        54,
        55,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        71,
        73,
        74,
        75,
        77,
        79,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        91,
        92,
        93,
        94,
        95,
        96,
        97,
        98,
        99,
    ];

    if (!value || (typeof value === "string" && value.trim() === "")) {
        setErrors((errors) => {
            return { ...errors, [field]: "*Campo obrigatório" };
        });
        return false;
    } else if (field === "coursePhone" && value.length < 14) {
        setErrors((errors) => {
            return { ...errors, [field]: "*Telefone inválido: O número deve ter no mínimo um DDD mais 8 dígitos" };
        });
        return false;
    } else if (field === "coursePhone" && !possibleDDD.includes(parseInt(value.substring(1, 3)))) {
        setErrors((errors) => {
            return { ...errors, [field]: "*Telefone inválido: O DDD " + value.substring(1, 3) + " não é válido" };
        });
        return false;
    } else {
        setErrors((errors) => {
            return { ...errors, [field]: undefined };
        });
        return true;
    }
};
