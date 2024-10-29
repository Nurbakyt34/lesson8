const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' 
 
const menu = [ 
    { 
        img: "br-fest.svg", 
        name: "breakfest" 
    }, 
    { 
        img: "icon2.svg", 
        name: "lunch" 
    }, 
    { 
        img: "br-fest1", 
        name: "dinner" 
    }, 
    { 
        img: "icon-4.svg", 
        name: "dessert" 
    }, 
    { 
        img: "icon-5.svg", 
        name: "quick bite!" 
    }, 
] 
 
const menuEL = document.getElementById("menu") 
 
menuEL.innerHTML = menu.map(m => { 
    return ` 
            <div> 
                <img src="../img/${m.img}" alt=""> 
                <h4>${m.name}</h4> 
            </div>` 
}).join('') 
 
function getMeals(categoty = "Starter"){ 
    fetch(API + categoty) 
    .then( response => response.json()) 
    .then( foods => { 
        console.log(foods); 
    }) 
} 
 
getMeals()
