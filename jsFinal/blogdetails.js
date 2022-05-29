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

let commentLine=document.querySelector('#comment-line1')
let commentText=document.querySelector('#comment-text')
let naame=document.querySelector('#name')
let admin=document.querySelector('#admin')
let post=document.querySelector('#post-comment')

post.addEventListener('click', function(){
   commentLine.innerHTML=commentText.innerHTML
   naame.innerHTML=admin.innerHTML

})