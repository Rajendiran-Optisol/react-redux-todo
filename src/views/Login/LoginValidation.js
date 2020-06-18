const validation = (rules, value, key) => {
    if (rules.minLength) {
        if (value.length < rules.minLength)
            return `${key} should have minimum ${rules.minLength} characters`;
    }

    if (rules.required) {
        if (!value)
            return `${key} is required`;
    }

    return false;
};

export default validation;