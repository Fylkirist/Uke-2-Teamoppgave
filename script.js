fetch("./Mockdata/cars.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    renderListItems(data)
    return data
})
.catch(error => {
    console.log(error)});

const shopList = document.getElementById('annonseliste')

var storageArray = [];

function renderListItems(carInfo)
{
    for(i=0;i<carInfo.length;i++){
        console.log(carInfo[i])
        let shopListElement = document.createElement("div")
        shopListElement.className="listElement"
        shopListElement.innerHTML+=`<img class="bilBilde" src="${carInfo[i]["img"]}"/>`
        shopListElement.innerHTML+=`<div class="bilNavn">${carInfo[i]["model"]}</div>`
        shopListElement.innerHTML+=`<div class="bilPris">${carInfo[i]["price"]}</div>`
        shopListElement.innerHTML+=`<div class="bilTilstand">${carInfo[i]["condition"]}</div>`
        shopListElement.innerHTML+=`<div class="listHandlevognEmptyIcon">
        <i class="bi bi-cart-plus" class="handlevognPlus"></i></div>`
        shopList.appendChild(shopListElement)
    }
};