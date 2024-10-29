const graphicsDivs = document.querySelectorAll('#graphics > div');

document.getElementById("logo").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const body = document.getElementById('body');
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// LocalStorage
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
    themeIcon.src = temaSalvo;
    if (temaSalvo.includes('light')) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        themeIcon.src = "./components/images/theme_light.png";
        localStorage.setItem('tema', './components/images/theme_light.png');
    } else {
        themeIcon.src = "./components/images/theme_dark.png";
        localStorage.setItem('tema', './components/images/theme_dark.png');
    }
});

// Login Area Restrita
function login(emailInput, passwordInput) {
    const baseUrl = 'https://recoopeapi.onrender.com';
    const url = baseUrl + '/login';

    const data = {
        cnpjOuEmail: emailInput.value,
        senha: passwordInput.value
    };

    console.log('Dados a serem enviados:', data);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Status da resposta:', response.status);
        if (response.status === 200) {
            return response.json();
        } else {
            window.alert(JSON.stringify(response));
            throw new Error(`Erro na requisição: ${response.status}`);
        }
    })
    .then(data => {
        console.log('Dados recebidos:', data);
        window.location.href = 'home.html';
    })
    .catch(error => {
        console.error('Houve um problema com a requisição:', error);
        window.alert("Credenciais incorretas: " + JSON.stringify(error));
    });
}
