export const required = (value) => {
    if (value) return undefined;
    return 'Заполните поля';
};

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value && value.length > maxLength) return `Максимальная длина поля: ${maxLength}`;
        return undefined;
    };
};

export const matchPassword = (confirmPassword, allInputs) => {
    if (confirmPassword === allInputs.password) {
        return undefined;
    }
    return 'Пароли не совпадают';
};