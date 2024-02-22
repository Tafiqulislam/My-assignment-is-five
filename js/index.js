function buttonNext (){
    const mainContainerSection = document.getElementById('main-container-section');
    mainContainerSection.classList.add('hidden');

    // show the success section
    const successSection = document.getElementById('success-section');
    successSection.classList.remove('hidden');
}

function changeButtonColor() {
    const button = document.getElementById('green'); 

    button.style.backgroundColor = 'green';
}

const button = document.getElementById('green'); 

button.addEventListener('click', changeButtonColor);
