
class Games {

    #apiGames;
    #jsonReposneApi;
    #gamesJson;


    constructor(url, categgory,options){
        this.url = url;
        this.options= options;
        this.categgory = categgory;
    }

    async #fetchCategoryAPI(){
        this.#apiGames= await fetch(this.url + '?category='+ this.categgory, this.options);
    }

    async #categoryJsonRespone(){
        this.#jsonReposneApi = await this.#apiGames.json();
    }

    async #getCategoryJsonResponse(){
        await this.#fetchCategoryAPI();
        await this.#categoryJsonRespone();
    }

    async getGamesJson(){
        await this.#getCategoryJsonResponse();
        this.#gamesJson = this.#jsonReposneApi.map(this.#mapGamesFunction)
        return this.#gamesJson;
    }

    #mapGamesFunction(game) {
        const {id, title, thumbnail, short_description, genre, platform} = game;
        return {id, title, thumbnail, short_description, genre, platform}
    }
}

export default Games;