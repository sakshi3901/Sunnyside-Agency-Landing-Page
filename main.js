let menu = document.querySelector(".menu");
let hamburger = document.querySelector(".hamburger");

// hamburger.addEventListener("click",()=>{
//   let show = menu.style.display="block";
// })
hamburger.addEventListener("click",()=>{
  if (menu.style.display == 'none'){
    menu.style.display = 'block';
  }
  else{
    menu.style.display = 'none';
  }
})
