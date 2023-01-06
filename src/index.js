import "./index.css";

const SHOW_POPUP_BUTTON_ID = "show-popup-btn";
const BODY_ID = "body";
const POPUP_WRAPPER_ID = "popup-wrapper";
const MYFORM = "myform";
const MY_PROFILE_GITHUB_PROFILE_IMAGE = "https://avatars.githubusercontent.com/u/118166999?v=4"

const popup = () => {
    const body = document.getElementById(BODY_ID);
    const popupWrapper = document.createElement("div");
    popupWrapper.id = "popup-wrapper";
    popupWrapper.style.visibility = "hidden";
    popupWrapper.addEventListener("click", (e) => {e.stopPropagation();});
    const popupElement = document.createElement("div");
    popupElement.id="popup-container";
    popupElement.innerText = "Hello World";
    const profileImage = document.createElement("img");
    profileImage.src = MY_PROFILE_GITHUB_PROFILE_IMAGE
    profileImage.className = "popup-image";
    profileImage.alt = "github profile image";

    popupElement.appendChild(profileImage);
    popupWrapper.appendChild(popupElement);
    body.appendChild(popupWrapper);
}

const OpenPopup = (element) => {
    element.style.visibility = "hidden";
}

const ClosePopup = (element) => {
    element.style.visibility = "visible";
}

const popupStateHide = (hide=true) => {
    return hide? OpenPopup : ClosePopup;
} 

const popupStateHandler = (e) => {
    const popupElement = document.getElementById(POPUP_WRAPPER_ID);
    const popupState = popupElement.style.visibility === "visible";
    const changeStateFunc = popupStateHide(popupState);
    console.log(changeStateFunc);
    changeStateFunc(popupElement);
}

popup();
document.getElementById(SHOW_POPUP_BUTTON_ID).addEventListener("click", (e) => {
    e.stopPropagation();
    popupStateHandler(e)
});
document.getElementById(POPUP_WRAPPER_ID).addEventListener("click", popupStateHandler);






// ******************************************

const formRegexValidation = (key) => {
    const validationRegex = {
        firstName:  /\w{2,}/,
        lastName:  /\w{2,}/,
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        age: /\d{1,3}$/
    }
    return validationRegex[key];
}

const formValidation = (data) => {
    data.forEach((value, key) => {
        const infoElementId = key + "-error";
        const infoElement = document.getElementById(infoElementId);
        const testFunc = formRegexValidation(key);
        const testResult = testFunc.test(value);
        infoElement.innerHTML = !testResult? "invalid format": "";
    })
} 

const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    formValidation(data);
}

document.getElementById(MYFORM).addEventListener("submit", handleFormSubmit)
