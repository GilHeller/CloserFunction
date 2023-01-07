const formRegexValidation = (key) => {
    const validationRegex = {
        firstName:  /\w{2,}/,
        lastName:  /\w{2,}/,
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        age: /^[1-9]([\d]+)?$/
    }
    return validationRegex[key];
}

const formValidation = (data) => {
    let allValid = true;
    data.forEach((value, key) => {
        const infoElementId = key + "-error";
        const infoElement = document.getElementById(infoElementId);
        const testFunc = formRegexValidation(key);
        const testResult = testFunc.test(value);
        infoElement.innerHTML = !testResult? (allValid = false) || "invalid format": "";
    })
    return allValid
} 

export const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const isValid = formValidation(data);
    isValid? alert("Your form is valid"): null;
}