document.addEventListener("DOMContentLoaded", function(){

var toggleNavStatus = false;
var toggleSubMenuStatus = false;

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
            navBar.style.height = "0px";
            subMenu.style.display = "none";

        toggleNavStatus = false;
        toggleSubMenuStatus = false;
        }

        
    subMenuButton.addEventListener('click', subToggle); 

    function subToggle(){

        if(toggleSubMenuStatus === false){
            
            subMenu.style.display = "block";
            navBar.style.height = "563px";

            toggleSubMenuStatus = true;

        }else if(toggleSubMenuStatus === true){
            
            subMenu.style.display = "none";
            navBar.style.height = "363px";
        
            toggleSubMenuStatus = false;
        }

    }
    }

    window.addEventListener("resize", windowResize);

    function windowResize(){}
})

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