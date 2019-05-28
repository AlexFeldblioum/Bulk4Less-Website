document.addEventListener("DOMContentLoaded", function(){

var toggleNavStatus = false;
var toggleSubMenuStatus = false;
var windowToggle = false;

var menuButton = document.querySelector('.fa-bars');
var navBar = document.querySelector('.navBar');
var subMenuButton = document.querySelector('.fa-arrow-alt-circle-down');
var subMenu = document.querySelector('.subMenu');


menuButton.addEventListener('click', menuToggle);


    function menuToggle(){
        

        if(toggleNavStatus === false){

            navBar.style.display = "block";
            navBar.style.height = "363px";

        toggleNavStatus = true;


        }else if(toggleNavStatus === true){

            navBar.style.display = "none";
            subMenu.style.display = "none";

        toggleNavStatus = false;
        }

        
    subMenuButton.addEventListener('click', subToggle); 

    function subToggle(){

        if(toggleNavStatus === true && toggleSubMenuStatus === false){
            
            subMenu.style.display = "block";
            navBar.style.height = "563px";

            toggleSubMenuStatus = true;

        }else if(toggleNavStatus === true && toggleSubMenuStatus === true){
            
            subMenu.style.display = "none";
            navBar.style.height = "363px";
        
            toggleSubMenuStatus = false;
        }

    }
    }

    window.addEventListener("resize", windowResize);

    function windowResize(){

        var windowSize = window.innerWidth;


        if(windowToggle === true && windowSize <= 675){
            
            navBar.style.display = "none";
            subMenu.style.display = "none";
        
            toggleNavStatus = false;
            windowToggle = false;

            
        }else if(windowSize > 675 && windowToggle === false){
            subMenu.style.display = "block";
            navBar.style.display = "block";
            toggleNavStatus = null;

            windowToggle = true; 
        }
    }
})



        /*
                switch(windowToggle){

        case 1: windowToggle === true 

        if(windowSize <= 675){
            
            navBar.style.display = "none";
            subMenu.style.display = "none";
            
            toggleNavStatus = false;
            windowToggle = false;
        }

        

        case 2: windowToggle === false

        if(windowToggle === false){
            subMenu.style.display = "block";
            navBar.style.display = "block";
            
            windowToggle = true; 
    }

        break;

        }
 */

/*

jQuery(document).ready(function(){

    jQuery('.fa-bars').on('click', function(){

        var currentNavHeight = jQuery('nav').height();



        if(currentNavHeight){

        }else{

        }

    })

})

*/