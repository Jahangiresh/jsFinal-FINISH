let scrollHeader=document.querySelector("#bottom-scroll")


document.addEventListener('scroll', function(){
   
    if(window.scrollY>200){
        scrollHeader.style.position = "fixed"
        scrollHeader.style.marginTop="-50px"
        scrollHeader.style.boxShadow=" 0px 3px 8px rgba(0, 0, 0, 0.24)"
    }
   

    else{
        scrollHeader.style.position = "static"
        scrollHeader.style.marginTop="0px"
        scrollHeader.style.boxShadow=" none"
    }
    
})