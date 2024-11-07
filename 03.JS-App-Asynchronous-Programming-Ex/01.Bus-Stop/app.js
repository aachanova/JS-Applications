async function getInfo() {
    const submitBtn = document.getElementById('submit');
    const stopNameElement = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses');

    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        // stopNameElement.textContent = 'Loading...';
        timeTableElement.replaceChildren();
        // timeTableElement.innerHTML = '';
        submitBtn.disabled = true;

        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error('Stop ID is not found!');
        }

        const data = await response.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            timeTableElement.appendChild(liElement);
        });
        submitBtn.disabled = false;
        
    } catch (error) {
        stopNameElement.textContent = 'Error';
    }

}