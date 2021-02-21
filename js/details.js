const queryString = document.location.search;
console.log(queryString);
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
console.log(params);
// get the id parameter from the query string
const id = params.get('id');

async function getCard(cardId) {
    try {
        console.log(cardId);
        const repsonse = await fetch('https://api.magicthegathering.io/v1/cards/' + cardId);
        const jsonResults = await repsonse.json();
        const result = jsonResults.card;
            
            document.title =`
            ${result.name}
            `;
            document.querySelector('h1').innerHTML =`
            ${result.name}
            `;
            document.querySelector('.setName').innerHTML =`
            <p>Set-name: ${result.setName}</p>
            `;
            document.querySelector('.rarity').innerHTML =`
            <p>Rarity: ${result.rarity}</p>
            `;
            document.querySelector('.type').innerHTML =`
            <p>Type: ${result.type}</p>
            `;
            document.querySelector('.layout').innerHTML =`
            <p>Layout: ${result.layout}</p>
            `;
            document.querySelector('.artist').innerHTML =`
            <p>Artist: ${result.artist}</p>
            `;
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
getCard(id);