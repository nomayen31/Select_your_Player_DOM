

const cardsBtn = document.querySelectorAll('.select');

for (const card of cardsBtn) {

    card.addEventListener("click", function (ClickedBtn) {

        ClickedBtn.target.classList.add('disabled')

        const fullCard = ClickedBtn.target.parentNode
        const nameTag = fullCard.getElementsByTagName('h4')

        for (const name of nameTag) {

            const playerName = name.innerText

            const showPlayerList = document.getElementById('top-five')

            const playerCount = showPlayerList.childNodes.length

            //checking if we select more then five player
            if (playerCount <= 5) {
                const showPlayer = document.createElement('li')

                showPlayer.classList.add('list-group-item')
                showPlayer.classList.add('fw-bold')
                showPlayerList.appendChild(showPlayer)

                // calculation
                showPlayer.innerText = playerName
            } else {
                alert('You DOESN"T Select More then Five Player')
                ClickedBtn.target.classList.remove('disabled')
                return
            }

        }

    });
}


// Player Expenses data load on DOM
document.getElementById('player-expense').addEventListener('click', function () {

    const budget = getInputVal('player-budget')
    const showPlayerList = document.getElementById('top-five')
    
    const playerCount = showPlayerList.childNodes.length - 1
    console.log(playerCount);

    if (playerCount <= 0) {
        alert('You havent select any player')
    }else{
        const total = budget * playerCount

        document.getElementById('show-expense').innerHTML = total
    }

})


// Grand Toatal Amount
document.getElementById('grand-toatal').addEventListener('click', function () {

    const managerCost = getInputVal('manager-cost')
    const coachCost = getInputVal('coach-cost')
    const playerExpenseString = document.getElementById('show-expense').innerText
    const playerExpense = parseInt(playerExpenseString)

    // calculation
    const grandTotal = managerCost + coachCost + playerExpense

    const result = numberWithCommas(grandTotal)

    document.getElementById('grand-total').innerHTML = result
})

// dynamic year

let dynamicYear = `${new Date().getFullYear()}`

console.log(typeof dynamicYear);

document.getElementById('this-year').innerHTML  = dynamicYear
