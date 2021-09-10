fetch("https://ftial-eomp.herokuapp.com/view-products/")
.then((request) => {
    request.json().then((obj) => {
        items = obj.data;
        console.log(items);
        items.forEach((item) => {
            document.querySelector(".test").innerHTML += `
                <div class="item">
                    ---------------------------------------------------------------------------------------------
                    <p>Color: ${item[1]}</p>
                    <p>Category: ${item[2]}</p>
                    <p>Part: ${item[3]}</p>
                    <p>Price: ${item[4]}</p>
                    <p>Type: ${item[5]}</p>
                    ---------------------------------------------------------------------------------------------
                </div>
            `
        })
    })
})

let arrFilteredProducts = []
 arrProducts.filter(product =>{
    arrFilteredProducts.push(product)
}
   
) 


function createBox(index) {
    let records_containers = document.querySelector(".records-container");
    records_containers.innerHTML += `<div class="item-box${index}"></div>`
}

function showCart() {
    // addedInCart();
    let cart = document.querySelector(".user-cart");
    cart.classList.toggle("show");
}

let total = 0;
window.localStorage.setItem("Total", total);

function addedInCart(id) {
    let quantity = document.querySelector(`.added-${id}`);
    console.log(quantity.value);
    let cart = document.querySelector(".user-cart");
    fetch("https://final-eomp.herokuapp.com/view-records/")
    .then((request) => {
        request.json().then((obj) => {
            items = obj.data;
            items.forEach((item) => {
                if (item[0] == id) {
                    console.log(item[0])
                    total = total + (parseInt(item[3]) * quantity.value)
                    cart.innerHTML += `
                    <div class="item">
                        <p>Record No. ${item[0]}</p>
                        <h2>Artist: ${item[1]}</h2>
                        <h2>Album: ${item[2]}</h2>
                        <p>Price: R${item[3]}</p>
                        <p>Quantity: ${quantity.value}</p>
                        <button id="clear">Remove<i class="fas fa-trash"></i></button>
                    </div>
                    `;
                    alert("Item added to cart")
                    console.log(total)
                }
            })
            total = total + parseInt(window.localStorage.getItem("Total"));
            window.localStorage.setItem("Total", total);

            let totalCost = document.querySelector(".total-cost")
            totalCost.innerHTML = `
            <h2>Total Cost: R ${window.localStorage.getItem("Total")}</h2>
            `
        })
    });
}