
export class QuerySelector{

    constructor(selector){
        this.selector=selector;
        
        
       
    }

    getElementByQuerySelector(){
         return document.querySelector(this.selector);
    }

    injectHtml(insertHtml){
        this.getElementByQuerySelector().innerHTML = insertHtml;
    }

    // this method is for navbar
    clickEvent(){
        this.getElementByQuerySelector().addEventListener('click', function(e) {
            console.log(e.target.getAttribute('data-category-value'))
        })
    }

    getElementByQuerySelectorAll(){
        return document.querySelectorAll(this.selector);
    }

}

const gamesCardsContainerSection = new QuerySelector('.games-cards .container');
const detailsGameContainerDiv = new QuerySelector('.details-game .container');

const ulNavbar=new QuerySelector('.navbar .container ul.navbar-nav'); 

const detailsGameSection = new QuerySelector('#detailsGame');


const buttonClose = new QuerySelector('.details-game-ttile-exit-button button');

 



export {gamesCardsContainerSection, detailsGameContainerDiv, detailsGameSection};




export {ulNavbar};
export {buttonClose};
