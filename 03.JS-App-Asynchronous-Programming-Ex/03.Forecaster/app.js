function attachEvents() {
    const divForecast = document.getElementById('forecast');
    const divCurrent = document.getElementById('current');
    const locationElement = document.getElementById('location');
    const submitBtnElement = document.getElementById('submit');
    submitBtnElement.addEventListener('click', onGet);

    async function onGet() {
        const location = locationElement.value.toLowerCase();
        const url = 'http://localhost:3030/jsonstore/forecaster/locations';

        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error();
            }

            const data = await res.json();
            const searchedLocationData = data.find(item => item.name.toLowerCase() === location);

            const locationCode = searchedLocationData.code;
            //const locationName = searchedLocationData.name;

            const currentConditionsRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`);

            const currentConditionsData = await currentConditionsRes.json();

            //const threeDaysRes = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`);

            divForecast.style.display = 'block';

            const spanForecastDataLocElement = document.createElement('span');
            spanForecastDataLocElement.classList.add('forecast-data');
            spanForecastDataLocElement.textContent = currentConditionsData.name;

            const spanForecastDataDegreeElement = document.createElement('span');
            spanForecastDataDegreeElement.classList.add('forecast-data');
            spanForecastDataDegreeElement.textContent = `${currentConditionsData.forecast.low}/${currentConditionsData.forecast.high}`;

            const spanForecastDataConditionElement = document.createElement('span');
            spanForecastDataConditionElement.classList.add('forecast-data');
            spanForecastDataConditionElement.textContent = `${currentConditionsData.forecast.condition}`;

            const spanConditionElement = document.createElement('span');
            spanConditionElement.classList.add('condition');

            spanConditionElement.append(spanForecastDataLocElement, spanForecastDataDegreeElement, spanForecastDataConditionElement);


            const spanConditionSymbolElement = document.createElement('span');
            spanConditionSymbolElement.className += ' condition symbol';
            spanConditionSymbolElement.innerHTML = getSymbol(); // TODO

            const divCurrentForecastsElement = document.createElement('div');
            divCurrentForecastsElement.classList.add('forecasts');

            divCurrentForecastsElement.append(spanConditionSymbolElement, spanConditionElement);
            divCurrent.appendChild(divCurrentForecastsElement);

            const currentCondition = currentConditionsData.forecast.condition;
            function getSymbol(currentCondition) {
              if (currentCondition === 'Rain') {
                return "&#x2614";
              }
            }





        } catch (error) {
            console.log(error);

        }
    }




}

attachEvents();
