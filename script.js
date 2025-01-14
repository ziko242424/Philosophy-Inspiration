const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');


menu.addEventListener('click', displayMenu);
hamburgerMenu.addEventListener('click', displayMenu);

const iconBars = document.querySelector('.fa-bars');
const iconClose = document.querySelector('.fa-xmark');

function displayMenu() {
    if(menu.classList.contains('absolute')) {
        menu.classList.add('hidden');
        iconBars.style.display = "inline";
        iconClose.style.display = "none";

        menu.classList.remove('absolute');
        menu.classList.remove('top-14');
        
        menu.classList.remove('w-full');
        menu.classList.remove('left-0');
     
        
        
    }else {
        menu.classList.remove('hidden');
        iconBars.style.display = "none";
        iconClose.style.display = "inline";

        menu.classList.add('absolute');
        menu.classList.add('top-14');
       
 
        menu.classList.add('w-full');
        menu.classList.add('left-0');
        
    }
}


const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-opacity-50');
                } else {
                    navbar.classList.remove('bg-opacity-50');
                }
            });

