function buyNow(itemName) {
  alert(`You selected to buy: ${itemName}`);
  // You can integrate payment gateway here later
}

document.getElementById("customForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Custom sketch request submitted!");
});
