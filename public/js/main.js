// Mobile menu
const mobileMunuButton = document.querySelector('#mobile_menu_button');
const menu = document.querySelector('#mobile_menu');
const cancelMenu = document.querySelector('#cancel_menu');

mobileMunuButton.addEventListener('click', () => {
    menu.classList.remove('hidden');
 });

cancelMenu.addEventListener('click', () => {
  menu.classList.add('hidden');
});

// Contact Form
const contactForm = document.querySelector('#contact');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let contactSubmitted = document.getElementById('sub-loading');
let loading = document.getElementById('loading');
let successdiv = document.getElementById('success-alert');
let errordiv = document.getElementById('error-alert');


contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactSubmitted.classList.add('hidden');
  loading.classList.remove('hidden');

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }
  
  let data = new XMLHttpRequest();
  data.open('POST', '/send_mail');
  data.setRequestHeader('Content-Type', 'application/json');
  data.onload = function(){
    if (data.status === 200){
      name.value = '';
      email.value = '';
      message.value = '';
      subject.value = '';
      loading.classList.add('hidden');
      contactSubmitted.classList.remove('hidden');
      successdiv.classList.remove('hidden');
    } else {
      loading.classList.add('hidden');
      contactSubmitted.classList.remove('hidden');
      errordiv.classList.remove('hidden');
    }
  }
 
  data.send(JSON.stringify(formData));
});
