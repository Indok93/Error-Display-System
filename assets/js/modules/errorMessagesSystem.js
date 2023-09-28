export function ErrorDisplay(type, message) {
    switch (type) {
        case 'alert':
            alert(message);
            break;
        case 'error':
            console.error(message);
            break;
        case 'warning':
            console.warn(message);
            break;
        default:
            break;
    }
}

export function UserFeedback(myType, myMessage, myId) {

    let myMessageElement = document.getElementById(myId)

    switch (myType) {
        case 'success':
        case 'warning':
        case 'error':
            myMessageElement.innerText = `${myType}: ${myMessage}`;
            break;
        default:
            myMessageElement.innerText = `${myType}: ${myMessage}`;
            break;
    }
}