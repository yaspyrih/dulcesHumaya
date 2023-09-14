// const fetch = require('node-fetch');

const url = 'https://tasty.p.rapidapi.com/recipes/list?from=1&size=3&q=caramel';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2c076e3027mshf86e989855d1f66p13fc5djsn8e66c7d0813e',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const cargarRecetas = async()=> {

try {
	const response = await fetch(url, options);
	console.log(response);
	if(response.status === 200){

	const result = await response.json();
	let recipes = "";

	result.results.forEach(item => {
		recipes += `
		
		<div class=" card-group bg-dark">
				<div class="recipe card text-bg-secondary p-2 ">
					<img class="thumbnail card-img-top rounded" src="${item.thumbnail_url}">
						<div class="card-body">
						<h3 class="card-title name">${item.name}</h3>
						<p id="description" class="description"> ${item.description}</p>
						<a id="video" href="${item.video_url}" class="video btn btn-dark">Video</a>
						</div>
				</div>	
		</div>
	`;
	})
	document.getElementById("contenedor").innerHTML = recipes;

}

else if(response.status === 401){console.log("key incorrecta");}
else if(response.status === 404){console.log("no disponible");}
// else if{console.log("no tengo idea del error");} 
}

catch(error){
console.log(error.message);
}
}

cargarRecetas();