const formButton = $('#submitTakeGift');
const form = $('#form');
formButton.on('click', function(event){
    event.preventDefault();
    let data = form.serialize()
    console.log(data)
})

const closeFormButton = document.getElementById('form_close');
const closeFormButtonSuccess = document.getElementById('popup_success_close');
const openFormButton = document.getElementById('form_open');
const sendForm = document.getElementById('submitTakeGift');

const popup = document.getElementById('popup');
closeFormButton.onclick = function(event) {
  event.preventDefault();
  popup.classList.add('hidden');
};

closeFormButtonSuccess.onclick = function(event) {
  event.preventDefault();
  popupSuccess.classList.add('hidden');
};

openFormButton.onclick = function(event){
    event.preventDefault();
    popup.classList.remove('hidden');
};

sendForm.onclick = function(event) {
    event.preventDefault();

    let name = document.getElementById('name');
    let nameParent = name.parentNode;
    nameParent.classList.remove('error');
    nameParent.getElementsByClassName('form_error_massage')[0].innerHTML = '';
    if(!checkInput(name.value)){
      nameParent.classList.add('error');
      nameParent.getElementsByClassName('form_error_massage')[0].innerHTML = 'Заполните поле Имя';
    }

    let email = document.getElementById('email');
    let emailParent = email.parentNode;
    emailParent.classList.remove('error');
    emailParent.getElementsByClassName('form_error_massage')[0].innerHTML = '';
    if(!checkInput(email.value)){
      emailParent.classList.add('error');
      emailParent.getElementsByClassName('form_error_massage')[0].innerHTML = 'Заполните поле email';
    }
    
    let select = document.getElementById('select');
    let selectParent = select.parentNode;
    selectParent.classList.remove('error');
    selectParent.getElementsByClassName('form_error_massage')[0].innerHTML = '';
    if(select.value == 0){
      selectParent.classList.add('error');
      selectParent.getElementsByClassName('form_error_massage')[0].innerHTML = 'Выберите место';
    }

    let agree = document.getElementById('agree');
    let agreeParent = agree.parentNode;
    agreeParent.classList.remove('error');
    agreeParent.getElementsByClassName('form_error_massage')[0].innerHTML = '';
    if(!agree.checked){
      agreeParent.classList.add('error');
      agreeParent.getElementsByClassName('form_error_massage')[0].innerHTML = 'Подтвердите согласие на обработку персональных данных';
    }
};

function checkInput(value) {
    if (value)
      return true;
    return false
}