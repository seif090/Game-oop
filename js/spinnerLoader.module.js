
const spinnerLoaderSection = document.querySelector('#spinnerLoader')

class SpinnerLoader {

    constructor(spinnerLoader){

        this.spinnerLoader = spinnerLoader;
    }

    showSpinner(){
        this.spinnerLoader.classList.replace('d-none','d-flex')
    }

    hideSpinner(){
        this.spinnerLoader.classList.replace('d-flex','d-none')
    }
}

const spinnerLoader = new SpinnerLoader(spinnerLoaderSection);

export default spinnerLoader;