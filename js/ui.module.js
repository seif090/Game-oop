
import spinnerLoader from './spinnerLoader.module.js';
import Games from './games.module.js';
import DetailsGame from './details.module.js';
import { gamesAPI, gameDetailsAPI } from './urls.api.js';

import { gamesCardsContainerSection, detailsGameContainerDiv } from "./querySelectro.module.js";






export class DisplayGames {

    
    constructor(category){
        this.category = category;
        this.gamesCategory = new Games(gamesAPI.getAPIURL(), this.category, gamesAPI.getAPIOptions());
       
    }

    async displayGames(){

        
        const gamesJson = await this.gamesCategory.getGamesJson();


        const gamesHTML =new CardHtml(gamesJson).getGamesCardHtml();

        gamesCardsContainerSection.injectHtml(gamesHTML);
        

    }

    async initialize(){
        spinnerLoader.showSpinner();
        await this.displayGames();
        spinnerLoader.hideSpinner();

    }
     static async init(){
        spinnerLoader.showSpinner();
        const displayGames = new DisplayGames('mmorpg');
        await displayGames.displayGames();

        spinnerLoader.hideSpinner();
    }

}



export class DisplayGameDetails {

    constructor(gameId){
        this.gameId = gameId;
        this.detailsGame= new DetailsGame(gameDetailsAPI.getAPIURL(),this.gameId,gameDetailsAPI.getAPIOptions());
    }

    async displayGameDetails(){
        
        const gameObject = await this.detailsGame.getGameObject();

        const gameDetailHTML = new CardHtml(gameObject).getGameDetailsHTML();
        detailsGameContainerDiv.injectHtml(gameDetailHTML);

    }

     async init() {
        spinnerLoader.showSpinner();
        const object= new DisplayGameDetails(this.gameId);
        await this.displayGameDetails();
        spinnerLoader.hideSpinner();
    }
}



class CardHtml{

    #cardGamesHtml;
    #cardDetailsHtml;

    constructor(data){
        this.data = data;
    }

    getGamesCardHtml() {

        this.#cardGamesHtml = ``;

        for (const game of this.data) {

            this.#cardGamesHtml += `
            <div class="game-card" data-game-id="${game.id}" >
                <div class="game-card-inner">
                    <picture class="game-card-picture">
                        <img src="${game.thumbnail}" alt="">
                    </picture>

                    <div class="game-card-details">
                        <h3>${game.title}</h3>
                        <span>Free</span>
                    </div>

                    <div class="game-card-description">
                        <p>${game.short_description}</p>
                    </div>

                    <div class="game-card-footer">
                        <span>${game.genre}</span>
                        <span>${game.platform}</span>
                    </div>


    
                </div>                
            </div>`;
            
        }

        return this.#cardGamesHtml;

    }

    getGameDetailsHTML() {

        this.#cardDetailsHtml= `
        <div class="details-game-ttile-exit-button">
                    <h1>Details Game</h1>
                    <button class="button-close"><i class="fa-solid fa-xmark"></i></button>
                </div>

                <div class="details-game-image-and-information">

                    <picture class="details-game-image">
                        <img src="${this.data.thumbnail}" alt="">
                    </picture>

                    <div class="details-game-information">
                        <h3>Title: ${this.data.title}</h3>
                        <p class="details-game-category">Category: <span class="details-game-badge">${this.data.genre}</span></p>
                        <p class="details-game-platform">Platform: <span
                            class="details-game-badge">${this.data.platform}</span></p>
                        <p class="details-game-status">Status: <span class="details-game-badge">${this.data.status}</span></p>

                        <p class="details-game-descrription">${this.data.description}</p>
                        <a class="button details-game-button-show-game" href="${this.data.game_url}"  target="_blank">Show Game</a>

                    </div>
                </div>`;

        return this.#cardDetailsHtml;

    }
}


