const queryString = document.location.search;
console.log(queryString);
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
console.log(params);
// get the id parameter from the query string
const id = params.get('id');

async function getCards(cardId) {
    try {
        console.log(cardId);
        const repsonse = await fetch('https://api.magicthegathering.io/v1/cards/' + cardId);
        const jsonResults = await repsonse.json();
        const result = jsonResults.cards;

        for (let i = 0; i < result.length; i++) {
            
            document.title =`
            ${result[i].name}
            `;
            document.querySelector('h1').innerHTML =`
            ${result[i].name}
            `;
            document.querySelector('.setName').innerHTML =`
            <p>Set-name: ${result[i].setName}</p>
            `;
            document.querySelector('.rarity').innerHTML =`
            <p>Rarity: ${result[i].rarity}</p>
            `;
            document.querySelector('.type').innerHTML =`
            <p>Type: ${result[i].type}</p>
            `;
            document.querySelector('.layout').innerHTML =`
            <p>Layout: ${result[i].layout}</p>
            `;
            document.querySelector('.artist').innerHTML =`
            <p>Artist: ${result[i].artist}</p>
            `;
        };
    } catch (error) {
        document.querySelector('.alert').innerHTML += thisIsAnAlert(
            'An error has occured',
            'danger'
        );
        console.log(error);
    } finally {
        setTimeout( function() {
            document.querySelector('.alert').innerHTML = '';
        }, 3000);
    }
};
getCards(id);