
function MyCart() {
    window.location.href = "cart.html";
}

function Home() {
    window.location.href = "product.html";
}


function displayItems() {
    
    var items = JSON.parse(localStorage.getItem("myCart"));
    // console.log('items:', items)

     
    var main_div = document.getElementById("products");
   


     items.map(function (el) {
        
        var div = document.createElement('div');

         var p_name = document.createElement("p");

         p_name.innerHTML = el.name;

         var p_price = document.createElement("p");

         p_price.innerHTML = el.price;

         var p_image = document.createElement("img");

         p_image.src = el.image;

         p_image.setAttribute("class", "imageWidth");

         div.append(p_name, p_price, p_image);
         
         main_div.appendChild(div);
        
    });

}

displayItems();


function total() {
    

    let items = JSON.parse(localStorage.getItem('myCart'));

    let actualSum = 0;
    items.map(function (el) {

        actualSum += el.price;

    });

    var total = document.getElementById("total");

    var p_total = document.createElement("p");

    p_total.innerHTML = `Total: ${actualSum} Rs/-`;

    total.append(p_total);

    localStorage.setItem("total",JSON.stringify(actualSum))


    
}
total();



    
function getPromo() {

    
    var data = document.getElementById("promo").value;

    var discount = 0;

    let items = JSON.parse(localStorage.getItem('myCart'));

    let actualSum = 0;
    items.map(function (el) {

        actualSum += el.price;

    });

    
    discount = actualSum - actualSum * 0.3;

    
    var temp_div = document.getElementById("discount");
    var p_discount = document.createElement('p');
    

    if (data === 'masai30') {
        
        p_discount.innerHTML = null;

        p_discount.innerHTML = ` New total: ${discount} Rs/-`;

        temp_div.append(p_discount);
    }
    else {
        alert("Enter Correct Promotion code");
    }

    localStorage.setItem("discount",JSON.stringify(discount));
}

function checkOut() {
    window.location.href = "checkOut.html";
}

