const div = document.querySelector(".card-container")
let num = 0;

function createCardElement(text) {
    num++
    return `
    <article class="card" id="card--${num}">
        <div>${text}</div>
        <div>
            <button id="delete--${num}">Delete This Card</button>
        </div>
    </article>`
}

function deleteCardElement () {
    const targetButtonIdNumber = event.target.id.split("--")[1]
    const card = document.getElementById(`card--${targetButtonIdNumber}`)
    div.removeChild(card)
}

document.querySelector("#create").addEventListener("click", function () {
    const inputValue = document.querySelector("#text-input").value
    const cardElement = createCardElement(inputValue)
    div.innerHTML += cardElement
})

div.addEventListener("click", deleteCardElement)

