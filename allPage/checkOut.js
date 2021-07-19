
function myCart() {
    window.location.href = "cart.html";
}

function Home() {
    window.location.href = "product.html";
}


function checkOut() {
    window.location.href = "checkOut.html";
}




function newPage() {
    
    var address = document.getElementById('address').value;
    console.log('address:', address)


    if (address == "") {
        
        alert("Enter valid address!");

    }
    else {
        localStorage.setItem("address", JSON.stringify(address));
        window.location.href = "payment.html"
    }

}