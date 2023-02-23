# JS Event Capture, Propagation, Bubbling and Once

## Description

This exercise consists on working with `addEventListener` when we have several nested elements. It gives us tools to achieve different goals, such as:

* Stop the propagation of an event within nested elements
* Reverse the bubbling 'direction' or order set by default by the browser
* Listen to a 'click' event only the first time the element has been clicked, which can be useful for example when working with storage checkout buttons

## Tools

* querySelector()
* addEventListener()
* ev.stopPropagation()
* capture and once attributes within the third parameter of the addEventListener method

## Notes

**Event propagation**

The `ev.stopPropagation()` prevents the event from bubbling in nested elements.

**Capture**

By default, the event propagation in nested elements bubbles up, it triggers all the events from the targeted element up. This can be changed with the capture attribute, changing it from the default false value to true. This will trigger the events from the parent element down.

**Once**
We can change the default value of the once attribute to true, if we only want to listen to the user's interaction once. For example, if we have a button and we only want to listen to the first click event to trigger a certain action.

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)

