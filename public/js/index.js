
    
    readyAllThings = ()=>{
        let menu = document.querySelector('.navbar');
        let logo = document.querySelector('.logo');
        let hamburgerOpen = document.getElementById('hamburger-open-onClick');
        let hamburgerClose = document.getElementById('hamburger-close-onClick');
        let dev = document.querySelector('.devThings');

                menu.style.display = 'block';
                hamburgerOpen.style.display = 'none';
                logo.style.display = 'none';
                hamburgerClose.style.display = 'block';
                dev.style.display = 'none';
                

        }

     closeAllThings = ()=>{
        let menu = document.querySelector('.navbar');
        let logo = document.querySelector('.logo');
        let dev = document.querySelector('.devThings');
        let hamburgerOpen = document.getElementById('hamburger-open-onClick');
        let hamburgerClose = document.getElementById('hamburger-close-onClick');
        hamburgerClose.style.display = 'none';
        menu.style.display = 'none';
        logo.style.display = 'block';
        hamburgerOpen.style.display = 'block';
        dev.style.display = 'block';
        menu.animate([
                {width : '0%'},
                {width:'100%'}
        ],{
                easing:'ease-in',
                duration : 1000 
        });
    }       
