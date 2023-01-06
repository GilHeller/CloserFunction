import {BODY_ID, POPUP_WRAPPER_ID, MY_PROFILE_GITHUB_PROFILE_IMAGE} from "./configs";

export const popup = () => {
    const body = document.getElementById(BODY_ID);
    const popupWrapper = document.createElement("div");
    popupWrapper.id = "popup-wrapper";
    popupWrapper.style.visibility = "hidden";
    const popupElement = document.createElement("div");
    popupElement.id="popup-container";
    popupElement.innerText = "My Github photo:";
    popupElement.addEventListener("click", (e) => {e.stopPropagation();});
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

export const popupStateHandler = (e) => {
    const popupElement = document.getElementById(POPUP_WRAPPER_ID);
    const popupState = popupElement.style.visibility === "visible";
    const changeStateFunc = popupStateHide(popupState);
    changeStateFunc(popupElement);
}

export const buttonPopupHandler = (e) => {
    e.stopPropagation();
    popupStateHandler(e)
}