const allBtn = document.getElementsByClassName('click-btn');

/** count ticket sum for looping  initial value is 0 */
let count = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count = count + 1;
        console.log(e.target.innerText);

        /** ticket count */
        // const countTicket = document.getElementById("count-ticket");
        // countTicket.innerText = count;
        setInnerText('count-ticket', count);

        /** show title in other element */
        // console.log(e.target.parentNode.childNodes[1].innerText);

        // const placeName = e.target.parentNodes.childNodes[0].innerText;
        // console.log(placeName);

        const selectedContainer = document.getElementById("selected-container");

        /** create element */
        const list = document.createElement('ul');
        const seatName = document.createElement('li');
        seatName.innerText = placeName;

        const economy = document.createElement('li');
        economy.innerText = "Economy";

        const totalPrice = document.createElement('li');
        totalPrice.innerText = "BDT " + ticketPrice;

        /** append element in child container */
        list.appendChild(seatName);
        list.appendChild(economy);
        list.appendChild(totalPrice);


        /** append in main container */
        selectedContainer.appendChild(list);

        /** total price */
        const totalCost = document.getElementById('totalCost').innerText;
        const convertedToNumber = parseInt(totalCost);
        const totalPriceSum = convertedToNumber + parseInt(ticketPrice);
        setInnerText('totalCost', totalPriceSum);

        /** grand total */
        const grandTotal = document.getElementById('grandTotal').innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        const grandTotalSum = convertedGrandTotal + parseInt(totalCost);
        setInnerText('grandTotal', grandTotalSum);
        console.log(convertedGrandTotal);

    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

const seat = document.getElementById('selected').addEventListener("click", function (e) {
    const seatName = document.getElementById('selected').innerText;
    console.log(seatName);
});


// function grandTotal(id, value) {
//     const grandTotal = document.getElementById(id).innerText;
//     const convertedGrandTotal = parseInt(grandTotal);
//     const grandTotalSum = convertedGrandTotal + parseInt(value);
//     setInnerText('grandTotal', grandTotalSum);
// }

function grandTotal() {
    const totalCost = document.getElementById('totalCost').innerText;
    const convertedToNumber = parseInt(totalCost);
    console.log(convertedToNumber);

    const inputText = document.getElementById('inputText').value;
    if (inputText === 'NEW15') {
        const discount = convertedToNumber * 15 / 100;
        setInnerText('grandTotal', convertedToNumber - discount);
        document.getElementById('applyBtn').setAttribute("disabled", "true");
    }
    else if (inputText === 'Couple 20') {
        const discount = convertedToNumber * 20 / 100;
        setInnerText('grandTotal', convertedToNumber - discount);
        document.getElementById('applyBtn').setAttribute('disable', 'true');
    }
    else {
        setInnerText('grandTotal', convertedToNumber);
    }


}

