let button=document.getElementById('button')
let input=document.getElementById('search')
document.getElementById('row')


button.addEventListener('click',function(){
async function getdata(){
    try{
        let api_id="d9a42cb2";
        let api_key="01e0134da0ac1e6a955c5d793aacb6c8";
        let data=input.value;
        
    let recipe=await fetch(`https://api.edamam.com/search?q=${data}&app_id=${api_id}&app_key=${api_key}`)
    let recipedata=await recipe.json()
    return recipedata;
    }
    catch(e){
        console.log(e);
    }
}

getdata().then((data)=>{
    console.log(data)

    for(let i=0;i<data.hits.length;i++){
        
        let nutrientsName = data.hits[i].recipe.totalNutrients
        let vitaminsArray = []
        vitaminsArray.push(nutrientsName.VITA_RAE,nutrientsName.VITB6A,nutrientsName.VITB12,nutrientsName.VITC,nutrientsName.VITD,nutrientsName.VITK1,nutrientsName.CHOLE,nutrientsName.FAT)
        let nutrientsArray = []
        for(let item = 0; item<vitaminsArray.length;item++){
             nutrientsArray.push(`${vitaminsArray[item].label} : ${vitaminsArray[item].quantity.toFixed(2)} : ${vitaminsArray[item].unit}`)
        }
            let div = document.createElement("div")
           
            div.innerHTML = `<div style="padding:50px 10px 20px 10px"><div class="cardo p-4" style="width:20rem;">
            <img class="card-img-top" src="${data.hits[i].recipe.image}" alt="Card image cap">
            <div class="cardo-body">
               <h2 class="card-title">${data.hits[i].recipe.label}</h2>
               <div><span class="cc">Calories</span>:<span class="cd">[${data.hits[i].recipe.calories.toFixed(3)}]</span></div>
               <div><span class="cc">HealthLabels</span>:<span class="cd">[${data.hits[i].recipe.healthLabels.join(",")}]</span></div>
               <div><span class="cc">Vitamins</span>:<span class="cd">[${nutrientsArray.join(",")}]</span></div>
               <div><span class="cc">Ingrediants</span>:<span class="cd">[${data.hits[i].recipe.ingredientLines.join(",")}]</span></div>
               <div class="text-center p-3"><span><a href="${data.hits[i].recipe.url}"target="_blank" class="btn btn-outline-danger cb">Recipe</a></span>
         </div>
         <div style="visibility:hidden">something</div>
         </div>` 
           
        row.append(div)
        input.value=""

    }
})
})




