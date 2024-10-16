
import { ulNavbar } from './querySelectro.module.js';
export class ULNavbar {


    constructor(nav) {
        this.nav = nav;
        // this.ele = ele;
    }

    removeActiveClass(){
        Array.from(this.nav.getElementByQuerySelector().getElementsByTagName('a')).forEach(element=> element.classList.remove('active'));
    }

    addActiveClass(){
        this.ele.target.classList.add('active');
    }

    removeActive(){
        this.removeActiveClass();
        this.addActiveClass();
    }

    setEle(ele){
        this.ele = ele;
        return this;
    }

    geNavBar(){
        return this.nav.getElementByQuerySelector();
    }

    getCategory(){
        return this.ele.target.getAttribute('data-category-value');
    }
}


const nav = new ULNavbar(ulNavbar);

export default nav;