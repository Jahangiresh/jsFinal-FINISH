//sliders start
let eye = document.querySelector("#eye-icon")
let productBox = document.querySelector('#product-view-box')

let cancel = document.querySelector('#x-button')
let cart = document.querySelector('#bag-icon')
let cartWrapper = document.querySelector('#wrapper')
let menuWrapper = document.querySelector('#menu-wrapper')
let cancelmenu = document.querySelector('#menu-x-button')
let body = document.querySelector('#body')
let menuicon = document.querySelector('#menu-icon')
let x = document.querySelector('#x')

eye.addEventListener('click', function () {

    productBox.style.bottom = "100px"
    body.style.filter = "brightness(29%)"
    body.style.backgroundColor = "#fff"
    productBox.style.display = "block"
})

x.addEventListener('click', function () {
    productBox.style.bottom = "1000px"
    body.style.filter = "brightness(100%)"
})

menuicon.addEventListener('click', function () {
    menuWrapper.style.left = 0
    body.style.filter = "brightness(20%)"
    body.style.backgroundColor = "#fff"
    body.style.cursor = "crosshair"
})
cancelmenu.addEventListener('click', function () {
    menuWrapper.style.left = "-450px"
    body.style.filter = "brightness(100%)"
    body.style.backgroundColor = "#fff"
    body.style.cursor = "default"
})

cart.addEventListener('click', function () {
    cartWrapper.style.right = 0
    body.style.filter = "brightness(20%)"
    body.style.backgroundColor = "#fff"
    body.style.cursor = "crosshair"
})

cancel.addEventListener('click', function () {
    cartWrapper.style.right = "-450px"
    body.style.filter = "brightness(100%)"
    body.style.backgroundColor = "#fff"
    body.style.cursor = "default"
})

//sliders end

// porduct zoom start 
function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / zoomer.offsetWidth * 100
    y = offsetY / zoomer.offsetHeight * 100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

let zoommain = document.querySelector('#zoom')
let zoomproduct1 = document.querySelector('#zoom-product1')
let zoomproduct2 = document.querySelector('#zoom-product2')
let zoomproduct3 = document.querySelector('#zoom-product3')
let zoomproduct4 = document.querySelector('#zoom-product4')

zoomproduct1.addEventListener("click", function () {
    zoommain.innerHTML = zoomproduct1.innerHTML
    zoommain.style.backgroundImage = "url(https://htmldemo.net/juan/juan/assets/img/product/product-details-img3.jpg)";
})
zoomproduct2.addEventListener("click", function () {
    zoommain.innerHTML = zoomproduct2.innerHTML
    zoommain.style.backgroundImage = "url(https://htmldemo.net/juan/juan/assets/img/product/product-details-img2.jpg)";
})
zoomproduct3.addEventListener("click", function () {
    zoommain.innerHTML = zoomproduct3.innerHTML
    zoommain.style.backgroundImage = "url(https://htmldemo.net/juan/juan/assets/img/product/product-details-img1.jpg)";
})
zoomproduct4.addEventListener("click", function () {
    zoommain.innerHTML = zoomproduct4.innerHTML
    zoommain.style.backgroundImage = "url(https://htmldemo.net/juan/juan/assets/img/product/product-details-img4.jpg)";
})

// product zoom end 





//product counter start 

let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let count = document.querySelector('#count')


var clicks = 0
plus.addEventListener('click', function () {
    clicks += 1
    document.querySelector('#count').innerHTML = clicks;
})

minus.addEventListener('click', function () {
    if (clicks > 0) {
        clicks -= 1
    }
    document.querySelector('#count').innerHTML = clicks;
})

//product counter end



//header scroll start 

let scrollHeader = document.querySelector("#bottom-scroll")



document.addEventListener('scroll', function () {

    if (window.scrollY > 200) {
        scrollHeader.style.position = "fixed"
        scrollHeader.style.marginTop = "-50px"
        scrollHeader.style.boxShadow = " 0px 3px 8px rgba(0, 0, 0, 0.24)"
    }


    else {
        scrollHeader.style.position = "static"
        scrollHeader.style.marginTop = "0px"
        scrollHeader.style.boxShadow = " none"
    }

})

//hEADER SCROLL END



//owl carusel start

var owl = $('#owl1');
owl.owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [2000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
});


$('#owl2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
})

$('#owl3').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
})

$('#owl4').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1.4
        }
    }
})

$('#owl5').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('#owl6').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

// owl carusel end  



//local fuckin storage start 



function basket(id, img, title, price) {
    let items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];

    if (items.length > 0) {
        if (items.some((item) => item.item.id === id)) {
            items = items.filter((item) => item.item.id !== id);

        } else {
            items.push({
                item: {
                    id,
                    img: `https://${img}.jpg`,
                    title,
                    price,
                },
                count: 1,
            });

        }
    } else {
        items.push({
            item: {
                id,
                img: `https://${img}.jpg`,
                title,
                price,
            },
            count: 1,
        });
    }


    localStorage.setItem("items", JSON.stringify(items));
    addToCart();
}


// local fuckin storage end  

// DINAMIC PRODUCT CART ADDER START==========>

let cartContent = document.querySelector('#cart-wrapper-content')

function addToCart() {
    cartContent.innerHTML=""

    const items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];


        
    if (items.length > 0) {
        items.forEach(item => {
        cartContent.insertAdjacentHTML(`afterbegin`, ` <div class="add-cart">
        <div class="add-cart-x">
          <span id="delete-cart-item">x</span>
        </div>
        <div class="add-cart-img">
          <img src="${item.item.img}" alt="">
      
        </div>
        <div class="add-cart-content">
          <h3>
            <a href="">${item.item.title}</a>
          </h3>
          <p>1 x <span> ${item.item.price}</span></p>

        </div>
      </div>
      `)
        });


    }
    else{
        
    }
}
addToCart()

// DINAMIC PRODUCT CART ADDER end==========>
//  let deleteItem=document.querySelector('#delete-cart-item')
//  deleteItem.addEventListener('click', function(){
//    basket()
//       addToCart()
//  })

      


