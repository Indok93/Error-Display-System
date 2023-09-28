import { ErrorDisplay, UserFeedback } from "./modules/errorMessagesSystem.js";

//ErrorDisplay('alert', 'Din input skal have en værdi');
//UserFeedback('succes', `virker!`, 'userFeedback');




const myButton = document.getElementById('submitValue');

myButton.addEventListener('click', (e) => {
    submitValue()
})


function submitValue() {
    const inputValue = document.getElementById('inputOne');
    
    if(inputValue.value === '') {
        ErrorDisplay('alert', 'Din input skal have en værdi');
    } else {
        UserFeedback('succes', `${inputValue.value}`, 'userFeedback');
    }
}