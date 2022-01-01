const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul')
const menuItems = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header.container')



menuItems.forEach(item => {
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active')
    } )
    
});
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active')
})


document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
         
    }
    else{
        header.style.backgroundColor = "transparent";

    }
})