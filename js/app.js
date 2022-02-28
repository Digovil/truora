
/*----------  Header Menu  ----------*/
var btnBurger   = document.querySelector('#burger');
var menuMobile  = document.querySelector('.container-menu-mobile');


/*----------  Submenu  ----------*/
var solutions = document.querySelector('#solutions');
var developers = document.querySelector('#developers');
var resources = document.querySelector('#resources');


/*----------  Slider  ----------*/
var slider   =  document.querySelector('#slider');
var automate =  document.querySelector('#automate');
var retain   =  document.querySelector('#retain');
var increase =  document.querySelector('#increase');

/*----------  Btns Slider  ----------*/
var btnAutomate =  document.querySelector('#btn-automate');
var btnRetain   =  document.querySelector('#btn-retain');
var btnIncrease =  document.querySelector('#btn-increase');


/*----------  Get Full Year  ----------*/
var copyRight = document.querySelector("#copyright");


loadEventListerner();

function loadEventListerner(){

    
    /*----------  Header Menu  ----------*/
    btnBurger.addEventListener('click',menuResponsive);

    /*----------  Submenu  ----------*/
    solutions.addEventListener('click',()=>{
        if(solutions.children[0].classList.value === "desactivate" ){
            solutions.children[0].classList.remove("desactivate");
    
        }else if(solutions.children[0].classList.value === ""){
            solutions.children[0].classList.add("desactivate");
        }
    });
    developers.addEventListener('click',()=>{
        if(developers.children[0].classList.value === "desactivate" ){
            developers.children[0].classList.remove("desactivate");
    
        }else if(developers.children[0].classList.value === ""){
            developers.children[0].classList.add("desactivate");
        }
    });
    resources.addEventListener('click',()=>{
        if(resources.children[0].classList.value === "desactivate" ){
            resources.children[0].classList.remove("desactivate");
    
        }else if(resources.children[0].classList.value === ""){
            resources.children[0].classList.add("desactivate");
        }
    });

    /*----------  Slider  ----------*/
    btnAutomate.addEventListener('click',changeSlider)
    btnRetain.addEventListener('click',changeSlider)
    btnIncrease.addEventListener('click',changeSlider)

    
    /*----------  Footer  ----------*/
    addHtmlCopyRight();

    

}

function menuResponsive(){
    var ban;

    menuMobile.classList.forEach(resp =>{

        resp === "menu-mobile-desactivate"? ban = true: ban = false;
    });

    if(ban){
        menuMobile.classList.remove("menu-mobile-desactivate")
    }else{
        menuMobile.classList.add("menu-mobile-desactivate")
    }
}


function changeSlider(e){
    if (e.target.value==="Increase"){
        
        /*----------  Change btns  ----------*/
        
        btnIncrease.classList.add("active");
        btnAutomate.classList.remove("active");
        btnRetain.classList.remove("active");
        
        automate.classList.add("slider-d-none");
        retain.classList.add("slider-d-none");
        increase.classList.remove("slider-d-none");
        slider.classList.add("slider-dark");


    }else if (e.target.value==="Retain"){
        btnIncrease.classList.remove("active");
        btnAutomate.classList.remove("active");
        btnRetain.classList.add("active");

        automate.classList.add("slider-d-none");
        retain.classList.remove("slider-d-none");
        increase.classList.add("slider-d-none");
        slider.classList.remove("slider-dark");

    }else if (e.target.value==="Automate"){
        btnIncrease.classList.remove("active");
        btnAutomate.classList.add("active");
        btnRetain.classList.remove("active");

        
        automate.classList.remove("slider-d-none");
        retain.classList.add("slider-d-none");
        increase.classList.add("slider-d-none");
        slider.classList.remove("slider-dark");

    }
}

function addHtmlCopyRight(){
    const getYear = new Date();
    copyRight.innerHTML = String(getYear.getFullYear())+` &copy; TRUORA.`;
}
