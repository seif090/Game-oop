
const gamesURL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const gamesDetailsURL = 'https://free-to-play-games-database.p.rapidapi.com/api/game';

const optionsURL = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '045a4a2c0bmsh10ed0f25dc4fdc4p149c6cjsna5aa71cc3ec6',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
}


class URLSAPI {

    constructor(url , options) {
        this.url =  url;
        this.options= options;
    }

    getAPIURL(){
        return this.url;
    }

    getAPIOptions() {
        return this.options;
    }
}


const gamesAPI = new URLSAPI(gamesURL, optionsURL);

const gameDetailsAPI =  new URLSAPI(gamesDetailsURL, optionsURL);

export {gamesAPI, gameDetailsAPI};