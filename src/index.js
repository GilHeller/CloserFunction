import "./index.css";
import { SHOW_POPUP_BUTTON_ID, MYFORM, POPUP_WRAPPER_ID } from "./configs";
import { popup, popupStateHandler, buttonPopupHandler } from "./popup";
import { handleFormSubmit } from "./myform";

popup();
document.getElementById(SHOW_POPUP_BUTTON_ID).addEventListener("click", buttonPopupHandler);
document.getElementById(POPUP_WRAPPER_ID).addEventListener("click", popupStateHandler);
document.getElementById(MYFORM).addEventListener("submit", handleFormSubmit);
