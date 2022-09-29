// fetch('https://catfact.ninja/breeds?limit=10',
// {method: 'GET',
// headers: {'Accept': 'application/json','Content-Type': 'text/plain;charset=UTF-8'}})
// .then((response) => {return response.json();})
// .then(data => { 

//     function getFacts(data){
//         for (data of data.data){
//             createListItem(data.breed);
//     }
//     }

//     function createListItem(data) {
//         const Selector = document.getElementById('favouriteCatBreed');
//         const Selectors = document.createElement('option');
//         const SelectorsTxt = document.createTextNode(data.breed);
//         Selectors.appendChild(SelectorsTxt);
//         Selector.appendChild(Selectors);
//     }
//     getFacts(data);
// });


fetch('https://catfact.ninja/breeds?limit=10',
{method: 'GET',
headers: {'Accept': 'application/json','Content-Type': 'text/plain;charset=UTF-8'}})
.then((response) => {return response.json();})
.then((getcatbreed) => { 

        for (breed of getcatbreed.data){
           
        const Selector = document.getElementById('favouriteCatBreed');
        const Selectors = document.createElement('option');
        const SelectorsTxt = document.createTextNode(breed.breed);
        Selectors.appendChild(SelectorsTxt);
        Selector.appendChild(Selectors);
    }
    console.log(breed.breed);
});