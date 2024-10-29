const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' 
 

const menu = [
    {
        img: 'br-fest.svg',
        name: 'breakfest',
    },

    {
        img: 'lunch.svg',
        name: 'lunch',
    },

    {
        img: 'dinner.svg',
        name: 'dinner',
    },

    {
        img: 'dessert.svg',
        name: 'dessert',
    },

    {
        img: 'bite.svg',
        name: 'quick bite!',
    },

   
]

const menuEL = document.getElementById("menu") 
 
menuEL.innerHTML = menu.map(m => { 
    return ` 
            <div> 
                <img src="../images/${m.img}" alt=""> 
                <h4>${m.name}</h4> 
            </div>` 
}).join('')