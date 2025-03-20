class MenuPage{

    selectorList(){
        const selectors = {
            likeButton: "[data-cy='like']",
            okButton: ".gap-4 > .gap-2 > .undefined",
            saveButton: "[data-cy='money']",
            yesButton: ".bg-red-600",
            noButton: ".border-gray-300",
            cyheroeLogo: "[src='/images/cyheroes-logo.svg']",
            logoutButton: "button",
            heroeName: "[data-cy='name']",
            priceFansSaves: ".text-slate-400",
            powers: "[data-cy='powers']",
            pictureHeroes: ".rounded-full",
            priceHeroe: "[data-cy='price']",
            fansHeroe: "[data-cy='fans']",
            savesHeroe: "[data-cy='saves']",
            createHeroeButton: "[href='/heroes/new']",
        }
        return selectors
    }

    SemLogin(){
        cy.get(this.selectorList().likeButton).eq(0).click()
        cy.get(this.selectorList().okButton)
    }

    Curtidas(){
        cy.get(this.selectorList().likeButton).eq(0).click({force: true})
    }

    Saves(){
        cy.get(this.selectorList().saveButton).eq(0).click()
        cy.get(this.selectorList().yesButton).click()
    }

    NoSavesUser(){
        cy.get(this.selectorList().saveButton).eq(1).click()
        cy.get(this.selectorList().noButton).eq(11).click()
    }

    NoSavesAdmin(){
        cy.get(this.selectorList().saveButton).eq(1).click()
        cy.get(this.selectorList().noButton).eq(25).click()
    }
    ElementosApp(){
        cy.get(this.selectorList().cyheroeLogo).should('be.visible')
        cy.get(this.selectorList().logoutButton).eq(1).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().pictureHeroes).eq(0).should('be.visible')
        cy.get(this.selectorList().pictureHeroes).eq(1).should('be.visible')
        cy.get(this.selectorList().pictureHeroes).eq(2).should('be.visible')
        cy.get(this.selectorList().pictureHeroes).eq(3).should('be.visible')
        cy.get(this.selectorList().pictureHeroes).eq(4).should('be.visible')
        cy.get(this.selectorList().priceHeroe).eq(0).should('be.visible').and('contain', '$')
        cy.get(this.selectorList().priceHeroe).eq(1).should('be.visible').and('contain', '$')
        cy.get(this.selectorList().priceHeroe).eq(2).should('be.visible').and('contain', '$')
        cy.get(this.selectorList().priceHeroe).eq(3).should('be.visible').and('contain', '$')
        cy.get(this.selectorList().priceHeroe).eq(4).should('be.visible').and('contain', '$')
        cy.get(this.selectorList().fansHeroe).eq(0).should('be.visible')
        cy.get(this.selectorList().fansHeroe).eq(1).should('be.visible')
        cy.get(this.selectorList().fansHeroe).eq(2).should('be.visible')
        cy.get(this.selectorList().fansHeroe).eq(3).should('be.visible')
        cy.get(this.selectorList().fansHeroe).eq(4).should('be.visible')
        cy.get(this.selectorList().savesHeroe).eq(0).should('be.visible')
        cy.get(this.selectorList().savesHeroe).eq(1).should('be.visible')
        cy.get(this.selectorList().savesHeroe).eq(2).should('be.visible')
        cy.get(this.selectorList().savesHeroe).eq(3).should('be.visible')
        cy.get(this.selectorList().savesHeroe).eq(4).should('be.visible')
        cy.get(this.selectorList().priceFansSaves).eq(0).should('be.visible').and('contain', 'Price')
        cy.get(this.selectorList().priceFansSaves).eq(1).should('be.visible').and('contain', 'Fans')
        cy.get(this.selectorList().priceFansSaves).eq(2).should('be.visible').and('contain', 'Saves')
        cy.get(this.selectorList().priceFansSaves).eq(3).should('be.visible').and('contain', 'Price')
        cy.get(this.selectorList().priceFansSaves).eq(4).should('be.visible').and('contain', 'Fans')
        cy.get(this.selectorList().priceFansSaves).eq(5).should('be.visible').and('contain', 'Saves')
        cy.get(this.selectorList().priceFansSaves).eq(6).should('be.visible').and('contain', 'Price')
        cy.get(this.selectorList().priceFansSaves).eq(7).should('be.visible').and('contain', 'Fans')
        cy.get(this.selectorList().priceFansSaves).eq(8).should('be.visible').and('contain', 'Saves')
        cy.get(this.selectorList().priceFansSaves).eq(9).should('be.visible').and('contain', 'Price')
        cy.get(this.selectorList().priceFansSaves).eq(10).should('be.visible').and('contain', 'Fans')
        cy.get(this.selectorList().priceFansSaves).eq(11).should('be.visible').and('contain', 'Saves')
        cy.get(this.selectorList().priceFansSaves).eq(12).should('be.visible').and('contain', 'Price')
        cy.get(this.selectorList().priceFansSaves).eq(13).should('be.visible').and('contain', 'Fans')
        cy.get(this.selectorList().priceFansSaves).eq(14).should('be.visible').and('contain', 'Saves')
        cy.get(this.selectorList().heroeName).eq(0).should('be.visible')
        cy.get(this.selectorList().heroeName).eq(1).should('be.visible')
        cy.get(this.selectorList().heroeName).eq(2).should('be.visible')
        cy.get(this.selectorList().heroeName).eq(3).should('be.visible')
        cy.get(this.selectorList().heroeName).eq(4).should('be.visible')
        cy.get(this.selectorList().powers).eq(0).should('be.visible')
        cy.get(this.selectorList().powers).eq(1).should('be.visible')
        cy.get(this.selectorList().powers).eq(2).should('be.visible')
        cy.get(this.selectorList().powers).eq(3).should('be.visible')
        cy.get(this.selectorList().powers).eq(4).should('be.visible')
    }
    ElementosUser(){
        cy.get(this.selectorList().likeButton).eq(0).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().likeButton).eq(1).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().likeButton).eq(2).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().likeButton).eq(3).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().likeButton).eq(4).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().saveButton).eq(0).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().saveButton).eq(1).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().saveButton).eq(2).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().saveButton).eq(3).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().saveButton).eq(4).should('be.visible').and('be.enabled')
    }
}
export default MenuPage