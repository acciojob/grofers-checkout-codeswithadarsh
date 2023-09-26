const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".prices"); // get all prices
let totalPrice = 0;
prices.forEach(price => {
totalPrice += parseFloat(price.textContent); // convert price string to float and add to totalPrice
});
const totalRow = document.createElement("tr"); // create new row for total
const totalCell = document.createElement("td"); // create cell for total
totalCell.colSpan = 2; // span the cell across 2 columns
totalCell.textContent = Total Price: $${totalPrice.toFixed(2)}; // set text content for total cell
totalRow.appendChild(totalCell); // append total cell to total row
const table = document.querySelector("table"); // get table element
table.appendChild(totalRow); // append total row to table
  
};

getSumBtn.addEventListener("click", getSum);