class AdminMenuPage {

    selectorList(){
        const selectors = {
            likeButton: "[data-cy='like']",
            saveButton: "[data-cy='money']",
            editButton: "[data-cy='pencil']",
            deleteButton: "[data-cy='trash']",
            yesButton: ".bg-red-600", 
            noButton: ".border-gray-300",
            pictureHeroes: ".rounded-full",
            priceHeroe: "[data-cy='price']",
            fansHeroe: "[data-cy='fans']",
            savesHeroe: "[data-cy='saves']",
            createHeroeButton: "[href='/heroes/new']",
            cyheroeLogo: "[src='/images/cyheroes-logo.svg']",
            logoutButton: "button",
            priceFansSaves: ".text-slate-400",
            deleteHeroeButton:"[type='button']",
            heroeName: "[data-cy='name']",
            labelHeroe: "label",
            inputHeroe: "input",
            submitButton: ".bg-blue-700",
            
        }
        return selectors
    }

    LikeAndSaves(){
        cy.get(this.selectorList().likeButton).eq(0).click()
        cy.get(this.selectorList().likeButton).eq(1).click()
        cy.get(this.selectorList().saveButton).eq(2).click()
        cy.get(this.selectorList().yesButton).click()
        cy.get(this.selectorList().saveButton).eq(4).click()
        cy.get(this.selectorList().noButton).eq(25).click()
        cy.get(this.selectorList().likeButton).eq(5).click()
        cy.get(this.selectorList().fansHeroe).eq(5).should('contain', '61')
        cy.get(this.selectorList().saveButton).eq(5).click()
        cy.get(this.selectorList().yesButton).click()
        cy.get(this.selectorList().savesHeroe).eq(5).should('contain', '7')
        cy.get(this.selectorList().pictureHeroes).eq(5).should('be.visible')
    }

    EditHeroes(){
        cy.get(this.selectorList().editButton).eq(2).click()
    }

    LikeSaveHeroeEdit(){
        cy.get(this.selectorList().likeButton).eq(2).click()
        cy.get(this.selectorList().saveButton).eq(2).click()
        cy.get(this.selectorList().yesButton).click()
        cy.get(this.selectorList().likeButton).eq(2).click()
        cy.get(this.selectorList().saveButton).eq(2).click()
        cy.get(this.selectorList().noButton).eq(21).click()

    }

    EditNovoHeroi(){
        cy.get(this.selectorList().editButton).eq(5).click()
    }

    DeleteNewHeroe(){
        cy.get(this.selectorList().deleteButton).eq(5).click()
        cy.get(this.selectorList().yesButton).click()
    }

    ElementosAdmin(){
        cy.get(this.selectorList().createHeroeButton).should('be.visible').and('not.have.attr', 'disabled')
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().likeButton).eq(i).should('be.visible').and('be.enabled')
        }
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().saveButton).eq(i).should('be.visible').and('be.enabled')
        }
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().editButton).eq(i).should('be.visible').and('not.have.attr', 'disabled')
        }
        for (let i = 0; i < 5; i++){
            cy.get(this.selectorList().deleteButton).eq(i).should('be.visible').and('be.enabled')
        }
    }

    ElementosEditPage(){
        cy.get(this.selectorList().editButton).eq(0).click()
        cy.get(this.selectorList().cyheroeLogo).should('be.visible')
        cy.get(this.selectorList().createHeroeButton).should('be.visible').and('not.have.attr', 'disabled')
        cy.get(this.selectorList().logoutButton).eq(1).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().fansHeroe).should('be.visible')
        cy.get(this.selectorList().savesHeroe).should('be.visible')
        cy.get(this.selectorList().priceHeroe).should('be.visible')
        cy.get(this.selectorList().priceFansSaves).eq(0).should('be.visible').and('contain', 'Fans')
        cy.get(this.selectorList().priceFansSaves).eq(1).should('be.visible').and('contain', 'Saves')
        cy.get(this.selectorList().priceFansSaves).eq(2).should('be.visible').and('contain', 'Price')
        cy.get(this.selectorList().pictureHeroes).should('be.visible')
        cy.get(this.selectorList().deleteHeroeButton).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().heroeName).should('be.visible')
        cy.get(this.selectorList().labelHeroe).eq(0).should('be.visible').and('contain', 'Name')
        cy.get(this.selectorList().labelHeroe).eq(1).should('be.visible').and('contain', 'Price')
        cy.get(this.selectorList().labelHeroe).eq(2).should('be.visible').and('contain', 'Fans')
        cy.get(this.selectorList().labelHeroe).eq(3).should('be.visible').and('contain', 'Saves')
        cy.get(this.selectorList().labelHeroe).eq(4).should('be.visible').and('contain', 'Powers')
        cy.get(this.selectorList().labelHeroe).eq(5).should('be.visible').and('contain', 'Avatar')
        cy.get(this.selectorList().inputHeroe).eq(0).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().inputHeroe).eq(1).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().inputHeroe).eq(2).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().inputHeroe).eq(3).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().inputHeroe).eq(4).should('be.enabled')
        cy.get(this.selectorList().submitButton).eq(1).should('be.visible').and('not.have.attr', 'disabled')
    }

    ElementosNewHeors(){
        cy.get(this.selectorList().createHeroeButton).click()
        cy.get(this.selectorList().cyheroeLogo).should('be.visible')
        cy.get(this.selectorList().createHeroeButton).should('be.visible').and('not.have.attr', 'disabled')
        cy.get(this.selectorList().logoutButton).eq(1).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().labelHeroe).eq(0).should('be.visible').and('contain', 'Name')
        cy.get(this.selectorList().labelHeroe).eq(1).should('be.visible').and('contain', 'Price')
        cy.get(this.selectorList().labelHeroe).eq(2).should('be.visible').and('contain', 'Fans')
        cy.get(this.selectorList().labelHeroe).eq(3).should('be.visible').and('contain', 'Saves')
        cy.get(this.selectorList().labelHeroe).eq(4).should('be.visible').and('contain', 'Powers')
        cy.get(this.selectorList().labelHeroe).eq(5).should('be.visible').and('contain', 'Avatar')
        cy.get(this.selectorList().inputHeroe).eq(0).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().inputHeroe).eq(1).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().inputHeroe).eq(2).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().inputHeroe).eq(3).should('be.visible').and('be.enabled')
        cy.get(this.selectorList().inputHeroe).eq(4).should('be.enabled')
        cy.get(this.selectorList().submitButton).eq(1).should('be.visible').and('not.have.attr', 'disabled')
    }
}
export default AdminMenuPage