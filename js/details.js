const queryString = document.location.search;
console.log(queryString);
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
console.log(params);
// get the id parameter from the query string
const id = params.get('id');

async function getCases(caseId) {
    try {
        console.log(caseId);
        const repsonse = await fetch('https://noroffcors.herokuapp.com/https://api.covid19api.com/summary/' + caseId);
        const jsonResults = await repsonse.json();
        const result = jsonResults.Countries;

        document.title = result.Country;
		document.querySelector('h1').innerHTML = `${result.Country}`;

		document.querySelector('.totalConfirmed').innerHTML =`
        <p>Total-cases:${result.TotalConfirmed}</p>
        `;
		document.querySelector('.newConfirmed').innerHTML =`
        <p>New-cases ${result.NewConfirmed}</p>
        `;
		document.querySelector('.totalDeaths').innerHTML =`
        <p>Total-deaths ${result.TotalDeaths}</p>
        `;
		document.querySelector('.newDeaths').innerHTML =`
        <p>New-deaths ${result.NewDeaths}</p>
        `;
		document.querySelector('.totalRecovered').innerHTML =`
        <p>Total-Recovered ${result.TotalRecovered}</p>
        `;
		document.querySelector('.newRecovered').innerHTML =`
        <p>New-recovered ${result.NewRecovered}</p>
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
getCases(id);