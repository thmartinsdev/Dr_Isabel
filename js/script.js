let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});
const form = document.getElementById("formulario");
form.addEventListener("submit", () =>{
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const numero = document.getElementById("numero").value
    const relogio = document.getElementById("relogio").value
    const text = `
Olá, Me Chamo ${nome}.%0a
Vim pelo seu site.%0a
Este é meu e-mail de contato ${email}.%0a
Este é meu número de contato ${numero} .%0a
Este é o melhor horario para contato ${relogio}.
    `
    window.open(`https://wa.me/5588988054146?text=${text}%0a`, "_blank").focus();
})


const form2 = document.getElementById("formulario2");
form2.addEventListener("submit", () =>{
    const nome = document.getElementById("nome2").value
    const email = document.getElementById("email2").value
    const numero = document.getElementById("numero2").value
    const relogio = document.getElementById("relogio2").value
    const text = `
Olá, Me Chamo ${nome}.%0a
Vim pelo seu site.%0a
Este é meu e-mail de contato ${email}.%0a
Este é meu número de contato ${numero} .%0a
Este é o melhor horario para contato ${relogio}.
    `
    window.open(`https://wa.me/5588988054146?text=${text}%0a`, "_blank").focus();
});