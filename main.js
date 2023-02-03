let url = "https://hp-api.onrender.com/api/characters"
let select_box = document.querySelector("select")
let content = document.querySelector(".content")


async function getApiData(){
let response = await fetch(url)
let Data = await response.json()
Data.length = 23
Data.forEach(char => {
    let option = document.createElement("option")
    select_box.appendChild(option)
    option.value = char.name
    option.textContent = char.name
    let div = document.createElement("div")
    content.appendChild(div)
    div.innerHTML = `
            <h2>Actor Name :<span>${char.actor}</span></h2>
            <h2>Year Of Birth : <span>${char.yearOfBirth}<span> </h2>
            <h2>Gender : <span>${char.gender}<span> </h2>
            <img src="${char.image}" alt="" >
    `
    div.id = char.name
   
 
});
let Details= document.querySelectorAll(".content div")
select_box.onchange = function(e){
    Details.forEach((div) => {
        if(e.target.value === div.id){
            div.style.display = "block"
        }else{
            div.style.display = "none"
        }
    })
    localStorage.setItem("favorite_actor",e.target.value)
}

}
getApiData()

