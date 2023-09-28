import { ErrorDisplay, UserFeedback } from "./modules/errorMessagesSystem.js";
const inputValue = document.getElementById('inputOne');
//ErrorDisplay('alert', 'Din input skal have en værdi');
UserFeedback('succes', `virker!`, 'userFeedback');

// knap fungere ikke, fix
/* function submitValue() {
    
    if(inputValue.value === '') {
        ErrorDisplay('alert', 'Din input skal have en værdi');
    } else {
        UserFeedback('succes', `${inputValue.value}`, 'userFeedback');
    }
} */