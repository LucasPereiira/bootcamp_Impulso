function changeMode()
{    
    changeClasses();
    changeText();
}

function changeClasses()
{
    botao.classList.toggle(DarkModeClasses);
    body.classList.toggle(DarkModeClasses);
    footer.classList.toggle(DarkModeClasses);
    meuElemento.classList.toggle(DarkModeClasses);
}

function changeText()
{
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (body.classList.contains(DarkModeClasses))
    {
        botao.innerHTML = lightMode;
        meuElemento.innerHTML = darkMode + " ON";
        return;
    }

    botao.innerHTML = darkMode;
    meuElemento.innerHTML = lightMode + " ON";
}

const DarkModeClasses = 'dark-mode';
const meuElemento = document.getElementById('page-title');
const botao = document.getElementById('mode-selector');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

botao.addEventListener("click", changeMode);


