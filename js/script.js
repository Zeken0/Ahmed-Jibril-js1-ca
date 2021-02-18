async function getCards() {
    try {
        const repsonse = await fetch('https://api.magicthegathering.io/v1/cards/');
        const jsonResults = await repsonse.json();
        const result = jsonResults.cards;

        document.querySelector('.contact').innerHTML =`
        <a href="contact.html" id=contact>Contact Us</a>
        `;
        for (let i = 0; i < result.length; i++) {

            document.querySelector('main').innerHTML += `
            <div class="cards">
                <img src="${result[i].imageUrl}">
                <p>Card number: ${result[i].number}</p>
                <a href="details.html?id="${result[i].id}">Read More</a>
            </div>
            `;
        }
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
getCards();