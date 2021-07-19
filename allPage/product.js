const content = [
    { name: "shoes", price: 2000, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LkL1QWq0EtBYaleCxowNfQHaHa%26pid%3DApi&f=1" },
    { name: "watch", price:10000, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W8XR4fYLBTDg3vNmQeqZQwHaMB%26pid%3DApi&f=1" },
    { name: "phone", price: 30000, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.iX2zLXnCn-dB4G3ueaCiOQHaIV%26pid%3DApi&f=1" },
    { name: "laptop", price: 50000, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5EZRHGR0LgL2IWcQ511TkQHaF5%26pid%3DApi&f=1" },
    { name: "jacket", price: 5000, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ppMEO9LSKK3UpyHcZPzrrQHaI0%26pid%3DApi&f=1" },
    
]

if (localStorage.getItem('products') == null) {
    localStorage.setItem('products',JSON.stringify(content));
}

function appendData() {
    
    var main_div = document.getElementById("products");

    var items = JSON.parse(localStorage.getItem('products'));
    
    
    let arr;

    items.map(function (el) {
        
        var div = document.createElement("div");

        div.setAttribute("class","border")

        var p_name = document.createElement("p")

        p_name.innerHTML = el.name;

        var p_price = document.createElement("p");

        p_price.innerHTML = el.price;

        var p_image = document.createElement("img");

        p_image.src = el.image

        p_image.setAttribute("class","imageWidth")


        if (arr == null) {
            arr = [];
        }
        // else {
        //     localStorage.setItem("myCart", JSON.stringify(arr));
        // }

        var button = document.createElement("button");

        button.innerHTML = "Add to cart";

        button.addEventListener("click", function addToCart() {

            arr.push(el);
            
            // localStorage.getItem('myCart');

            localStorage.setItem('myCart', JSON.stringify(arr));
            
        });
            
  
        div.append(p_name,p_price,p_image,button);
        
        main_div.append(div);

        
    });


}
appendData();


function MyCart() {
    window.location.href = "cart.html";
}

function Home() {
    window.location.href = "product.html";
}