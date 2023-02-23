'use strict';

//VARIABLES
const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

//FUNCTIONS
function handleClickDiv(ev) {
    //By default, it bubbles up, it triggers all the events as it goes up (from three to one)
    console.log(this.classList.value);
    ev.stopPropagation(); //stop bubbling
}

function handleClickBtn(ev) {
    console.log('click');
}


//EVENT LISTENERS
for(const div of divs){
    div.addEventListener('click', handleClickDiv, {capture: false, once: true});
}

button.addEventListener('click', handleClickBtn,{once: true});

//OPTIONS OBJECT
//We can add a third argument to the event listener, an options object 
//CAPTURE
//If we set it to true, it will run on the capture down (from one to three)
//By default its value is false (from three to one), bubble up
//ONCE
//If we set it to true, it will listen for a click and then unbind itself
//equal to removeEventListener, it will only listen once to the event
//Useful for example in store checkouts, where we do not wish the user to click the button more than once