async function getCases() {
    try {
        const repsonse = await fetch('https://api.covid19api.com/summary');
        const jsonResults = await repsonse.json();
        const result = jsonResults.Countries;

        for (let i = 0; i < result.length; i++) {

            document.querySelector('main').innerHTML += `
            <div class="cards">
                <h2>${result[i].Country}</h2>
                <p>${result[i].Date}</p>
                <a href="details.html?id="">View Cases</a>
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
getCases();