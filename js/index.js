function buttonNext (){
    const mainContainerSection = document.getElementById('main-container-section');
    mainContainerSection.classList.add('hidden');

    // show the success section
    const successSection = document.getElementById('success-section');
    successSection.classList.remove('hidden');
}


