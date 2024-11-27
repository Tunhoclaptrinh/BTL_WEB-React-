// ----------------------- Home ----------------------

const header = document.querySelector("header")
    window.addEventListener("scroll",function(){
        x = window.pageYOffset
        // console.log(x)
        if(x > 0){
            header.classList.add("sticky")
        }
        else{
            header.classList.remove("sticky")
        }
    })


    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
    const imgContainer = document.querySelector(".aspect-ratio-169");
    const dotItem = document.querySelectorAll('.dot');
    let imageNumber = imgPosition.length;
    let currentIndex = 0;

    imgPosition.forEach(function(image, index) {
        image.style.left = index * 100 + '%';
        dotItem[index].addEventListener('click', function() {
            showSlide(index);
        });
    });

    function showSlide(index) {
        if (index >= imageNumber) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = imageNumber - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        imgContainer.style.transform = `translateX(${offset}%)`;
        dotItem.forEach(dot => dot.classList.remove('active'));
        dotItem[currentIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function currentSlide(index) {
        showSlide(index - 1);
    }

    setInterval(nextSlide, 5000);


    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

// ----------------------- item-SlideBar-Category ----------------------

// const itemslideBar = document.querySelectorAll(".category-left-li") 
// itemslideBar.forEach(function(menu,index){
//     menu.addEventListener("click" ,function(){
//         menu.classList.toggle("block")
//     })
// })

const itemslideBar = document.querySelectorAll(".category-left-li");

    itemslideBar.forEach(function(menu) {
        menu.addEventListener("click", function() {
            // Toggle the block class
            menu.classList.toggle("block");

            // Smooth transition for submenu
            let submenu = menu.querySelector("ul");
            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
            }

            // Collapse other open submenus
            itemslideBar.forEach(function(otherMenu) {
                if (otherMenu !== menu) {
                    otherMenu.classList.remove("block");
                    let otherSubmenu = otherMenu.querySelector("ul");
                    otherSubmenu.style.maxHeight = null;
                }
            });
        });
    });

    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }

    // --------------------------catergory.sort--------------------------------

    function sortProducts() {
        const products = document.querySelectorAll('.category-right-content-item');
        const productsArray = Array.from(products);
        const sortValue = document.getElementById('sort').value;
        const productsContainer = document.getElementById('products');

        productsArray.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.price').innerText.replace(/\D/g, ''));
            const priceB = parseInt(b.querySelector('.price').innerText.replace(/\D/g, ''));

            if (sortValue === 'asc') {
                return priceA - priceB;
            } else if (sortValue === 'desc') {
                return priceB - priceA;
            }
        });

        productsContainer.innerHTML = '';
        productsArray.forEach(product => {
            productsContainer.appendChild(product);
        });
    }
    function filterProducts() {
            const products = document.querySelectorAll('.category-right-content-item');
            const filterValue = document.getElementById('filter').value;
            const productsContainer = document.getElementById('products');

            products.forEach(product => {
                const price = parseInt(product.querySelector('.price').innerText.replace(/\D/g, ''));
                if (filterValue === 'below' && price > 1000000) {
                    product.style.display = 'none';
                } else if (filterValue === 'above' && price <= 1000000) {
                    product.style.display = 'none';
                } else {
                    product.style.display = 'block';
                }
            });
        }

// ---------------catergory.filter----------------------

    function filterProducts() {
        const products = document.querySelectorAll('.category-right-content-item');
        const filterValue = document.getElementById('filter').value;
        const productsContainer = document.getElementById('products');

        products.forEach(product => {
            const price = parseInt(product.querySelector('.price').innerText.replace(/\D/g, ''));
            if (filterValue === 'below' && price > 1000000) {
                product.style.display = 'none';
            } else if (filterValue === 'above' && price <= 1000000) {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        });
    }
// ----------------------- Product ----------------------

const largeImg = document.querySelector('.product-content-left-large-img img')
const smallImg = document.querySelectorAll('.product-content-left-small-img img')

smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener('click', function(){
        largeImg.src = imgItem.src
    })
})



const protect = document.querySelector('.protect')
const detail = document.querySelector('.detail')

if (protect) {
    protect.addEventListener("click", function(){
        document.querySelector('.product-content-right-bottom-content-detail').style.display ='none'
        document.querySelector('.product-content-right-bottom-content-protect').style.display ='block'
    })
}
if (detail) {
    detail.addEventListener("click", function(){
        document.querySelector('.product-content-right-bottom-content-detail').style.display ='block'
        document.querySelector('.product-content-right-bottom-content-protect').style.display ='none'
    })
}

const button = document.querySelector('.product-content-right-bottom-top')
if (button) {
    button.addEventListener("click", function() {
        document.querySelector('.product-content-right-bottom-content-large').classList.toggle('activeB')
    })
}


// Zoom function
function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);

    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");

    img.parentElement.insertBefore(lens, img);

    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);

    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
        var pos, x, y;

        e.preventDefault();

        pos = getCursorPos(e);
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
    
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
        if (x < 0) {x = 0;}
        if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
        if (y < 0) {y = 0;}

        lens.style.left = x + "px";
        lens.style.top = y + "px";
   
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;

        a = img.getBoundingClientRect();

        x = e.pageX - a.left;
        y = e.pageY - a.top;

        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}
imageZoom("productImg", "zoomResult");

// -----------------Cart----------------------------


function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function updateCart() {
    var subtotal = 0;
    var totalItems = 0;
    var items = document.querySelectorAll('.cart-content-left table tr:not(:first-child)');
    items.forEach(function(item) {
        var priceString = item.querySelector('td:nth-child(6)').innerText;
        var price = parseFloat(priceString.replace(/[^\d.]/g, ''));
        var quantity = item.querySelector('td:nth-child(5) input').value;
        var total = price * quantity;
        subtotal += total;
        totalItems += parseInt(quantity, 10);
    });

    document.getElementById('subtotal').innerText = subtotal.toLocaleString('it-IT') + ' Đ';
    document.getElementById('total-items').innerText = totalItems;

    var tax = (subtotal * 0.1).toFixed(2);
    var tax = parseFloat(tax)
    document.getElementById('tax').innerText = tax.toLocaleString('it-IT') + ' Đ';

    
    var shipping = 0;
if (subtotal >= 1000000) {
    shipping = 0;
    document.querySelector('.cart-content-right-text p:nth-child(2)').style.display = 'none';
} else {
    shipping = 30000;
    var remaining = 1000000 - subtotal;
    document.querySelector('.cart-content-right-text p:nth-child(2)').innerText = 'Mua thêm ' + remaining.toLocaleString('it-IT') + ' Đ để được miễn phí vận chuyển !';
    document.querySelector('.cart-content-right-text p:nth-child(2)').style.display = 'block';
}

document.getElementById('shipping').innerText = shipping.toLocaleString('it-IT') + ' Đ';

var total = subtotal + parseFloat(tax) + shipping;
document.getElementById('total').innerText = total.toLocaleString('it-IT') + ' Đ';
}


function removeItem(element) {
    var row = element.parentElement.parentElement;
    row.remove();
    updateCart();
}

// Initialize cart calculations
updateCart();