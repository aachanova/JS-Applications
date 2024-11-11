// async function lockedProfile() {
//     const main = document.getElementById('main');
//     const url = 'http://localhost:3030/jsonstore/advanced/profiles';

//     const response = await fetch(url);
//     const profiles = await response.json();
//     let divProfile;

//     Object.values(profiles).forEach((profile) => {
//         divProfile = document.createElement('div');
//         divProfile.classList.add('profile');
//         divProfile.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
// 				<label>Lock</label>
// 				<input type="radio" name="user1Locked" value="lock">
// 				<label>Unlock</label>
// 				<input type="radio" name="user1Locked" value="unlock"><br>
// 				<hr>
// 				<label>Username</label>
// 				<input type="text" name="user1Username" value="${profile.username}" disabled readonly />
// 				<div class="hiddenInfo">
// 					<hr>
// 					<label>Email:</label>
// 					<input type="email" name="user1Email" value="${profile.email}" disabled readonly />
// 					<label>Age:</label>
// 					<input type="number" name="user1Age" value="${profile.age}" disabled readonly />
// 				</div>				
// 				<button>Show more</button>`;



//         const button = divProfile.querySelector('button');

//             // const buttonTrig = ev.target;
//             const lockRadio = divProfile.querySelector('input[value="lock"]');
//             const unlockRadio = divProfile.querySelector('input[value="unlock"]');
//             let divHiddenInfo = divProfile.querySelector('.hiddenInfo');
//             const showMoreState = button.textContent === 'Show more';
//             button.addEventListener('click', () => {
//             if (unlockRadio.checked) {
//                 if (button.textContent === 'Show more') {
//                     divHiddenInfo.style.display = 'block';
//                     button.textContent = 'Hide it';
//                 } else {
//                     divHiddenInfo.style.display = 'none';
//                     button.textContent = 'Show more';
//                 }
//             }

//             // if (unlockRadio.checked && buttonTrig.textContent.trim() === 'Show more') {
//             //     divHiddenInfo.style.display = 'block';
//             //     buttonTrig.textContent = 'Hide it'; // Променяме текста на бутона
//             // } else if (unlockRadio.checked) {
//             //     divHiddenInfo.style.display = 'none'; // Скриваме при втори клик или ако радио бутонът е "Lock"
//             //     buttonTrig.textContent = 'Show more';
//             // }

//         })

//         main.appendChild(divProfile);

//     });


// }

async function lockedProfile() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const response = await fetch(url);
    const profiles = await response.json();
    // let profileDiv;

    Object.values(profiles).forEach((profile) => {
        let profileDiv = document.createElement('div');
        profileDiv.className = 'profile';

        profileDiv.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user1Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user1Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user1Username" value="${profile.username}" disabled readonly />
                <div id="user1HiddenFields">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user1Email" value="${profile.email}" disabled readonly />
                    <label>Age:</label>
                    <input type="email" name="user1Age" value="${profile.age}" disabled readonly />
                </div>
                <button>Show more</button>
            `;

        const button = profileDiv.querySelector('button');
        const hiddenInfoDiv = profileDiv.querySelector(`#user1HiddenFields`);
        hiddenInfoDiv.style.display = 'none';
        //const lockRadio = profileDiv.querySelector(`input[name="user1Locked"][value="lock"]`);
        const unlockRadio = profileDiv.querySelector(`input[name="user1Locked"][value="unlock"]`);

        button.addEventListener('click', () => {
            if (unlockRadio.checked) {
                if (button.textContent === 'Show more') {
                    hiddenInfoDiv.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenInfoDiv.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });



        main.appendChild(profileDiv);
    });
}






