// grab button elements
const buddyButton = document.querySelector('#buddyButton');
const buttercupButton  = document.querySelector('#buttercupButton');
const buddyPix = document.querySelector('#buddyPix');
const buttercupPix = document.querySelector('#buttercupPix');

// assign events
buddyButton.addEventListener('click', function(e) {
    buddyPix.classList.toggle('hide');
});

buttercupButton.addEventListener('click', function(e) {
    buttercupPix.classList.toggle('hide');
});