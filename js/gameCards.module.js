import { QuerySelector } from './querySelectro.module.js';

class gameCards {

    constructor() {
        this.cards = new QuerySelector('.game-card').getElementByQuerySelectorAll();
        // return this.cards; 
    }

    getNewCards(){
        this.cards = new QuerySelector('.game-card').getElementByQuerySelectorAll();
        return this.cards;
    }





}

const cards = new gameCards();

export default cards;