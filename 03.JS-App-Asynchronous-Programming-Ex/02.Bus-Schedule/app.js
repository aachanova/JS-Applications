function solve() {
    const infoBoxElement = document.querySelector('div#info .info');
    const departBtnElement = document.getElementById('depart');
    const arriveBtnElement = document.getElementById('arrive');
    let stop = {
        name: 'Depot',
        next: 'depot'
    }
    
    
    
    async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        
        const res = await fetch(url);
        const data = await res.json();

        stop = data;
        infoBoxElement.textContent = `Next stop ${stop.name}`;

        departBtnElement.disabled = true;
        arriveBtnElement.disabled = false;      
    }

    async function arrive() {
        infoBoxElement.textContent = `Arriving at ${stop.name}`;
        
        departBtnElement.disabled = false;
        arriveBtnElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();