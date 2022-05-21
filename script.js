const apiData = {
    url:"https://pokeapi.co/api/v2/", 
    type:"pokemon",
    id:'25'
}
const {url,type,id}=apiData
const apiUrl=`${url}${type}/${id}`;
const apiEnd = `${url}${type}`;
fetch(apiUrl).then((data)=>data.json()).then((pokemon) => generatePokemon(pokemon) )
const generatePokemon = (data) => {
    console.log(data);
    const html = `
    <div class="name">${data.name}</div>
    <img  src=${data.sprites.front_default} />
    <div class="details">
    <span>Weight : ${data.height}</span>
    <span>Height : ${data.weight}</span>
    </div>
    `
    const pokemonDiv = document.querySelector(".pokemon");
    pokemonDiv.innerHTML = html;
}


document.querySelector("#search").addEventListener('click', getPokemon);
function getPokemon(e) {
    const name = document.querySelector('#pokemonName').value;
const apiEnd = `${url}${type}`;
    fetch(`${apiEnd}/${name}`).then((response)=>response.json())
    .then((data) => {
        document.querySelector('.pokemonBox').innerHTML=`
        <div>
        <img  src=${data.sprites.other["official-artwork"].front_default} 
        alt="${data.name}" />
        </div>
        <div class="pokemonInfo">
        <h1> Name : ${data.name} </h1>
        <p>Weight : ${data.weight} </p>
        <p>height : ${data.height} </p>
        </div>
        `;   
    } )
    .catch((error)=> console.log(error));
    e.preventDefault();
}