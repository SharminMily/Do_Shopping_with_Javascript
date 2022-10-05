const cartArray = [];

function display (cartProduct) {
    console.log(cartProduct);

    let totalPrice = 0;
   
    const tableBody = document.getElementById("cart-product");
    tableBody.innerHTML = "";

    for (let i = 0; i < cartProduct.length; i++){
        // console.log(cartArray[i].productName, cartArray[i].productPrice);

        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;
        
        totalPrice = totalPrice + price;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}t</td>
        <td>${price}</td>
        `;

        tableBody.appendChild(tr)
    }
    const tr = document.createElement("tr")

    tr.innerHTML = `    
      <th>2</th>
      <td>Total Price</td>
      <td>${totalPrice}</td>    
    `;
    tableBody.appendChild(tr)
} 

function addToCart (element)
{
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText)
    // element.parentNode.parentNode.children[1].children[0].innerText

    const productName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName)

    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText    
    // console.log(productPrice)

    const productObj = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    cartArray.push(productObj);
    // console.log(cartArray)
    document.getElementById('total-added-product').innerHTML = cartArray.length

    display(cartArray);
}