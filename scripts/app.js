const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const menu = document.querySelector('.menu')
const submenuOpenBtn = document.querySelector('.submenu')
const closeNavHeader = document.querySelector('.close-navHeader')
const btnHamberger = document.querySelector('.btnhamberger')
const nav = document.querySelector('.nav')
const cartIcon = document.querySelector('.cart-icon')
const cartBuy = document.querySelector('.cart-buy')
const shoppingCart = document.querySelector('.shopping')
const overlay = document.querySelector('.overlay')

toggleThemeBtns.forEach(btn =>{
    btn.addEventListener("click" , function(){
        if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
    })
})


btnHamberger.addEventListener("click" , ()=>{
      nav.classList.remove('-right-64')
      nav.classList.add('right-0')
      overlay.classList.add('overlay--visible')
})

closeNavHeader.addEventListener("click" , (e)=>{

    e.currentTarget.parentElement.parentElement.classList.add('-right-64')
    e.currentTarget.parentElement.parentElement.classList.remove('right-0')
    overlay.classList.remove('overlay--visible')
    

})

menu.addEventListener("click" , (e)=>{
    e.currentTarget.parentElement.classList.toggle('text-orange-300')
    submenuOpenBtn.classList.toggle('submenu--open')
})

cartIcon.addEventListener("click" , (e)=>{
    e.currentTarget.parentElement.parentElement.classList.remove('left-0');
    e.currentTarget.parentElement.parentElement.classList.add('-left-64');
     overlay.classList.remove('overlay--visible')
})


shoppingCart.addEventListener("click" , ()=>{
    cartBuy.classList.remove('-left-64')
    cartBuy.classList.add('left-0')
    overlay.classList.add('overlay--visible')
})

overlay.addEventListener("click" , (e)=>{
    closeNavHeader.parentElement.parentElement.classList.add('-right-64')
     closeNavHeader.parentElement.parentElement.classList.remove('right-0')
     overlay.classList.remove('overlay--visible')
})

