function online(){
    // shows a message when user clicks "Order Online"
    document.getElementById("add").innerText = "visit our website and order anything";

}
let total = 0;
// variable to keep track of total price
function addToCart(foodName, price) {
    // adds selected food item to the cart and updates total
    total = total + price;
    document.getElementById("total").textContent = total;
    let item = document.createElement("li");
    // creates a new list item
    item.textContent = foodName + " - ₹" + price;
    // sets item name + price
    document.getElementById("cart").appendChild(item);
    // appends item to cart list
}
function buy(){
    // shows delivery confirmation message
    document.getElementById("result").innerText = "your item deliver at 30 min";
}