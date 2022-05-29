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

function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }

  let zoommain=document.querySelector('#zoom')
  let zoomproduct1=document.querySelector('#zoom-product1')
  let zoomproduct2=document.querySelector('#zoom-product2')
  let zoomproduct3=document.querySelector('#zoom-product3')
  let zoomproduct4=document.querySelector('#zoom-product4')

zoomproduct1.addEventListener("click",function(){
  zoommain.innerHTML=zoomproduct1.innerHTML
zoommain.style.backgroundImage = "url(https://htmldemo.net/juan/juan/assets/img/product/product-details-img3.jpg)";
})
zoomproduct2.addEventListener("click",function(){
  zoommain.innerHTML=zoomproduct2.innerHTML
zoommain.style.backgroundImage = "url(https://htmldemo.net/juan/juan/assets/img/product/product-details-img2.jpg)";
})
zoomproduct3.addEventListener("click",function(){
  zoommain.innerHTML=zoomproduct3.innerHTML
zoommain.style.backgroundImage = "url(https://htmldemo.net/juan/juan/assets/img/product/product-details-img1.jpg)";
})
zoomproduct4.addEventListener("click",function(){
  zoommain.innerHTML=zoomproduct4.innerHTML
zoommain.style.backgroundImage = "url(https://htmldemo.net/juan/juan/assets/img/product/product-details-img4.jpg)";
})

$('#owl2').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
})

let minus=document.querySelector('#minus')
let plus=document.querySelector('#plus')
let count=document.querySelector('#count')


var clicks=0
plus.addEventListener('click',function(){
  clicks+=1
  document.querySelector('#count').innerHTML=clicks;
})

minus.addEventListener('click',function(){
 if(clicks>0){
  clicks-=1
 }
 document.querySelector('#count').innerHTML=clicks;
})


