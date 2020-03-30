function navScroll (){
    window.onscroll = function(){
        if(window.pageYOffset > 100){
            $('nav').css("position","fixed");  
            $('nav').css("top",0); 
        } else {
            $('nav').css("position", "absolute")
            $('nav').css("top", "100px")
        };
    }
}





function handleEvents (){

    let width = $(window).width(); 

    if (width>750){
    navScroll(); 
    }; 
}

$(handleEvents)