import {  detailsGameSection, buttonClose} from './querySelectro.module.js';
import nav from './ulNavbar.module.js';
import { DisplayGames, DisplayGameDetails } from './ui.module.js';
import cards from './gameCards.module.js';



async function init() {

    await DisplayGames.init();
    nav.geNavBar().addEventListener('click', async function(e) {
        const category = nav.setEle(e).getCategory();
        nav.removeActive();
        await new DisplayGames(category).initialize();
        cards.getNewCards().forEach( card => {
            card.addEventListener('click', async function() {
               const gameId =card.getAttribute('data-game-id');
               await initDetailsGame(gameId)
            })        });
    

    });

    cards.getNewCards().forEach( card => {
        card.addEventListener('click', async function(e) {
           const gameId =card.getAttribute('data-game-id');
           await initDetailsGame(gameId)
        })
    });

}


async function initDetailsGame(gameId) {
    
    await new DisplayGameDetails(gameId).init();

    
    
    detailsGameSection.getElementByQuerySelector().classList.replace('d-none','d-block');

    buttonClose.getElementByQuerySelector().addEventListener('click', function(){
        detailsGameSection.getElementByQuerySelector().classList.replace('d-block', 'd-none')
    })


}
init();



