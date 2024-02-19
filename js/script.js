const allBtn = document.getElementsByClassName('click-btn');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count = count + 1;
        if (count > 4) {
            alert('One person is not allowed to occupy more than 4 seats')
            return;
        }
        else {
            setInnerText("count-ticket", count);
        }

        const placeName = e.target.innerText;
        const ticketPrice = document.getElementById("ticket-price").innerText;
        console.log(placeName, ticketPrice);

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

        const targetEvent = e.target;
        targetEvent.style.backgroundColor = '#1DD100';
        targetEvent.style.color = '#fff';
        targetEvent.setAttribute("disabled", "true");

        /** seatLeft */
        const seatLeft = document.getElementById('seatLeft').innerText;
        const convertedSeatLeft = parseInt(seatLeft);

        if (convertedSeatLeft - 1 < 36) {
            alert('One person is not allowed to occupy more than 4 seats');
            return;
        }



        setInnerText('seatLeft', convertedSeatLeft - 1)

        /** append in main container */
        selectedContainer.appendChild(list);

        /** total price */
        totalCost('totalCost', parseInt(ticketPrice));

        /** grand total */
        grandTotal('grandTotal', parseInt(ticketPrice));

    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedToNumber = parseInt(totalCost);
    const totalPriceSum = convertedToNumber + parseInt(value);
    setInnerText(id, totalPriceSum);
}

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

const applyBtn = document.getElementById('applyBtn');
applyBtn.addEventListener('click', function (e) {
    applyBtn.style.display = 'none';
})