async function lockedProfile() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    // Зареждаме профилите от сървъра
    const response = await fetch(url);
    const profiles = await response.json();
    let divProfile;

    Object.values(profiles).forEach((profile) => {
        // Създаваме новия профил
        divProfile = document.createElement('div');
        divProfile.classList.add('profile');
        divProfile.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user1Locked" value="lock">
            <label>Unlock</label>
            <input type="radio" name="user1Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user1Username" value="${profile.username}" disabled readonly />
            <div class="hiddenInfo" style="display: none;">
                <hr>
                <label>Email:</label>
                <input type="email" name="user1Email" value="${profile.email}" disabled readonly />
                <label>Age:</label>
                <input type="number" name="user1Age" value="${profile.age}" disabled readonly />
            </div>
            <button>Show more</button>
        `;

        // Добавяме профила към страницата
        main.appendChild(divProfile);

        // Селектиране на бутона за текущия профил
        const button = divProfile.querySelector('button');
        button.addEventListener('click', (ev) => toggle(ev, divProfile));
    });
}

function toggle(ev, divProfile) {
    const buttonTrig = ev.target;
    const lockRadio = divProfile.querySelector('input[value="lock"]');
    const unlockRadio = divProfile.querySelector('input[value="unlock"]');
    const divHiddenInfo = divProfile.querySelector('.hiddenInfo');
    const showMoreState = buttonTrig.textContent === 'Show more';

    // Проверка дали профилът е отключен
    if (unlockRadio.checked) {
        if (showMoreState) {
            divHiddenInfo.style.display = 'block'; // Показваме информацията
            buttonTrig.textContent = 'Hide it'; // Променяме текста на бутона
        } else {
            divHiddenInfo.style.display = 'none'; // Скриваме информацията
            buttonTrig.textContent = 'Show more'; // Връщаме текста на бутона
        }
    }
}
