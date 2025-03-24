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
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().pictureHeroes).eq(i).should('be.visible')
        }
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().priceHeroe).eq(i).should('be.visible').and('contain', '$')
        }
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().fansHeroe).eq(i).should('be.visible')
        }
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().savesHeroe).eq(i).should('be.visible')
        }
        const Pri = [0, 3, 6, 9, 12];
        const Fan = [1, 4, 7, 10, 13];
        const Sav = [2, 5, 8, 11, 14];
        for (let i = 0; i < 15; i++){
            if (Pri.includes(i)){
                cy.get(this.selectorList().priceFansSaves).eq(i).should('be.visible').and('contain', 'Price')
            }

            else if(Fan.includes(i)){
                cy.get(this.selectorList().priceFansSaves).eq(i).should('be.visible').and('contain', 'Fans')
            }

            else if(Sav.includes(i)){
                cy.get(this.selectorList().priceFansSaves).eq(i).should('be.visible').and('contain', 'Saves')
            }
        }
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().heroeName).eq(i).should('be.visible')
        }
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().powers).eq(i).should('be.visible')
        }
    }
    ElementosUser(){
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().likeButton).eq(i).should('be.visible').and('be.enabled')
        }
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().saveButton).eq(i).should('be.visible').and('be.enabled')
        }
    }
}
export default MenuPage