//================Javascript logic of the form================

//create variables for the counter to increase and decrease the number of items shown

//create variables that will set the initial number to 1
var num = 1;
document.getElementsByClassName('items__item-number').innerText=num;


//======item counter controls
var minus1 = document.getElementById('minus-icon1');

var plus1 = document.getElementById('plus-icon1');


var minus2 = document.getElementById('minus-icon2');

var plus2 = document.getElementById('plus-icon2');


//Create variables for the launch button, modal popup and close button
var modal = document.getElementById('modal');

var button = document.querySelector('.order-form__button');

var closeModal = document.getElementById('close');
//variable to select the page
var form = document.querySelector('.page');

//variables for the seven inputs to check for errors

var email = document.getElementById('email');

var phone = document.getElementById('phone');

var name = document.getElementById('name');

var address = document.getElementById('address');

var city = document.getElementById('city');

//variable to select values from listed otions
var countries = document.getElementById('countries').value;
console.log(countries);
var postalCode = document.getElementById('postal-code');
console.log(postalCode);
//====================counter controls====================
plus1.onclick = function increase (){
  num = num + 1;
  document.getElementsByClassName('items__item-number').innerText=num;
}

minus1.onclick = function decrease (){
  num = num - 1;
  document.getElementsByClassName('items__item-number').innerText=num;
}

//====================Form validation====================
/**Need to check validation for each of the seven inputs
 * If the input is not valid, show an error message and highlight the input box
 * Conditonals will be needed for this
 * If all conditions are good, the modal popup will show that the form was submitted
 */

//when the button is clicked, the popup will be shown
button.onclick = function () {
  modal.style.display = "flex";
  //blur the page to make it inactive
  form.classList.add('blur');
}

//when the x is clicked on the modal popup, close the popup
closeModal.onclick = function () {
  modal.style.display = "none";
  //remove the blur to make it active again
  form.classList.remove('blur');
}
