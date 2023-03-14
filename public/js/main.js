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



// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       document.querySelectorAll(".antn")[0].classList.add("fadeinbottom");
//     }
//   })
// });

// observer.observe(document.querySelector(".aim"))

// const observerr = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       document.querySelectorAll(".antnn")[0].classList.add("fadeinbottom");
//     }
//   })
// });

// observerr.observe(document.querySelector(".aimm"))


// const observer1 = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       document.querySelectorAll(".antn1")[0].classList.add("fadeinleft");
//     }
//   })
// });

// observer1.observe(document.querySelector(".aim1"))

// const observer2 = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       document.querySelectorAll(".antn2")[0].classList.add("fadeinbottom1");
//     }
//   })
// });

// observer2.observe(document.querySelector(".aim2"));