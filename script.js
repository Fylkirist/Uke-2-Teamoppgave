var carArray = [];

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

var dropDropdownDisplay = false

const cartList = document.getElementById("cartList")

function renderListItems(carInfo)
{
    for(i=0;i<carInfo.length;i++){
        let listObject = {"img":carInfo[i]["img"],"model":carInfo[i]["model"],"price":carInfo[i]["price"],"condition":carInfo[i]["condition"]}
        carArray.push(listObject)
        let shopListElement = document.createElement("div")
        shopListElement.className="listElement"
        shopListElement.innerHTML+=`<img class="bilBilde" src="${carInfo[i]["img"]}"/>`
        shopListElement.innerHTML+=`<div class="bilNavn">${carInfo[i]["model"]}</div>`
        shopListElement.innerHTML+=`<div class="bilPris">${carInfo[i]["price"]}</div>`
        shopListElement.innerHTML+=`<div class="bilTilstand">${carInfo[i]["condition"]}</div>`
        shopListElement.innerHTML+=`<div class="listHandlevognEmptyIcon">
        <i class="bi bi-cart-plus" onclick="addToStorage(${i})" class="handlevognPlus"></i></div>`
        shopList.appendChild(shopListElement)
    }
};

function cartDropDown()
{
    if (!dropDropdownDisplay){
        cartList.style.display="block"
        renderStorageItems()
    }
    else{
        cartList.style.display="none"
    }
}

function renderStorageItems()
{
    cartList.innerHTML=""
    for(i=0;i<storageArray.length;i++)
    {
        let cartListElement = document.createElement("div")
        cartListElement.className="cartElement"
        cartListElement.innerHTML+=`<img class="cartImg" src=${carArray[storageArray[i]]["img"]}><div class="cartText">${carArray[storageArray[i]]["model"]}    ${carArray[storageArray[i]]["price"]}<i onclick="removeFromStorage(${i})" class="cartKnapp bi bi-cart-dash"></i></div>`
        cartList.appendChild(cartListElement)
    }
}

function addToStorage(element)
{
    storageArray.push(element)
    console.log(storageArray)
    renderStorageItems()
}

function removeFromStorage(element)
{
    storageArray.splice(element,1)
    console.log(element)
    console.log(storageArray)
    renderStorageItems()
}

cartList.addEventListener("mouseleave",() => {
    dropDropdownDisplay = false
    cartList.style.display="none"
})