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


// function loadPage(pageName) {
//     fetch(`/${pageName}`)
//       .then(response => response.text())
//       .then(html => document.querySelector('main').innerHTML = html)
//       .catch(error => console.error(error));
//   }
  