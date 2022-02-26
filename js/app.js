
/*----------  Header Menu  ----------*/
let btnBurger   = document.querySelector('#burger');
let menuMobile  = document.querySelector('.container-menu-mobile');


/*----------  Submenu  ----------*/
let solutions = document.querySelector('#solutions');
let developers = document.querySelector('#developers');
let resources = document.querySelector('#resources');


/*----------  Slider  ----------*/
let slider   =  document.querySelector('#slider');
let automate =  document.querySelector('#automate');
let retain   =  document.querySelector('#retain');
let increase =  document.querySelector('#increase');

/*----------  Btns Slider  ----------*/
let btnAutomate =  document.querySelector('#btn-automate');
let btnRetain   =  document.querySelector('#btn-retain');
let btnIncrease =  document.querySelector('#btn-increase');


/*----------  Get Full Year  ----------*/
let copyRight = document.querySelector("#copyright");


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
    let ban;

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