
class DetailsGame{

    #apiGame;
    #jsonResponseAPI;
    #gameObject;


    constructor(url, gameId,options){
        this.url = url;
        this.gameId = gameId;
        this.options = options;
    }

    async #fetchGameAPI() {
        this.#apiGame = await fetch(this.url +'?id=' + this.gameId, this.options);
    }

    async #gameJsonResponse(){
        this.#jsonResponseAPI = await this.#apiGame.json();
    }

    async getJsonResponse() {
        await this.#fetchGameAPI();
        await this.#gameJsonResponse();
    }
    async getGameObject(){
        await this.getJsonResponse();
        this.#gameObject = this.#jsonResponseAPI
        return this.#gameObject;
    }

}

export default DetailsGame;