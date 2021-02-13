// Buttons
const foods = document.querySelector("#link-1");
const how = document.querySelector("#link-2");
const cities = document.querySelector("#link-3");
const signup = document.querySelector("#link-4");
const order = document.querySelector("#link-5");
const more = document.querySelector("#link-6");
const clients = document.querySelector("#link-7");
const goup = document.querySelector(".go-up");

//Sections
const more_s = document.querySelector(".features");
const order_s = document.querySelector(".sign-up");
const signup_s = document.querySelector(".sign-up");
const cities_s = document.querySelector(".cities");
const how_s = document.querySelector(".works");
const foods_s = document.querySelector(".meals");
const clients_s = document.querySelector(".testimonials");

//console.log(foods, foods_s);

//Scrolling functions
foods.addEventListener("click", (e) => {

    window.scrollTo({
        left : 0,
        top : foods_s.getBoundingClientRect().top + window.pageYOffset ,
        behavior : "smooth"
    });
});

how.addEventListener("click", (e) => {
    window.scrollTo({
        left : 0,
        top : how_s.getBoundingClientRect().top + window.pageYOffset ,
        behavior : "smooth"
    });
});

cities.addEventListener("click", (e) => {
    window.scrollTo({
        left : 0,
        top : cities_s.getBoundingClientRect().top + window.pageYOffset ,
        behavior : "smooth"
    });
});

signup.addEventListener("click", (e) => {
    window.scrollTo({
        left : 0,
        top : signup_s.getBoundingClientRect().top + window.pageYOffset ,
        behavior : "smooth"
    });
});

order.addEventListener("click", (e) => {
    window.scrollTo({
        left : 0,
        top : order_s.getBoundingClientRect().top + window.pageYOffset ,
        behavior : "smooth"
    });
});

more.addEventListener("click", (e) => {
    window.scrollTo({
        left : more_s.getBoundingClientRect().left + window.pageXOffset,
        top : more_s.getBoundingClientRect().top + window.pageYOffset ,
        behavior : "smooth",
    });
});

clients.addEventListener("click", (e) => {
    window.scrollTo({
        left : clients_s.getBoundingClientRect().left + window.pageXOffset,
        top : clients_s.getBoundingClientRect().top + window.pageYOffset ,
        behavior : "smooth",
    });
});

// Go up button

goup.addEventListener("click", (e) => {
    window.scrollTo({
        left : 0,
        top : 0,
        behavior : "smooth"
    });
});

window.onscroll = () => {
    if(more_s.getBoundingClientRect().top >200){
        goup.classList.add("hidden");
    }else{
        goup.classList.remove("hidden");
    }
};

