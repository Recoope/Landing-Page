const searchInput = document.querySelector('.search input');
const graphicsDivs = document.querySelectorAll('#graphics > div');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    graphicsDivs.forEach(function (div) {
        const title = div.querySelector('h1').textContent.toLowerCase();

        if (title.includes(searchTerm)) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
});

document.getElementById("logo").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const body = document.getElementById('body');
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

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

