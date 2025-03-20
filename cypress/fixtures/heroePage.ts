class HeroePage {

    selectorList(){
        const selectors = {
            createHeroeButton: "[href='/heroes/new']",
            heroeName: "[data-cy='nameInput']",
            heroePrice: "[data-cy='priceInput']",
            heroeFans: "[data-cy='fansInput']",
            heroeSaves: "[data-cy='savesInput']",
            heroePowers: "[data-cy='powersSelect']",
            screen: "[novalidate='']",
            heroeImage: "[data-cy='avatarFile']",
            submitButton: ".bg-blue-700"
        }
        return selectors
    }

    NovoHeroi(){
        cy.get(this.selectorList().createHeroeButton).click()
        cy.get(this.selectorList().heroeName).type('Cuca')
        cy.get(this.selectorList().heroePrice).type('600')
        cy.get(this.selectorList().heroeFans).type('60')
        cy.get(this.selectorList().heroeSaves).type('6')
        cy.get(this.selectorList().heroePowers).select(['Super Logistics'])
        cy.get(this.selectorList().heroeImage).selectFile('heroe.jpeg')
        cy.get(this.selectorList().submitButton).eq(1).click()
    }

    EditandoHeroi(){
        cy.get(this.selectorList().heroeName).clear().type('Editado')
        cy.get(this.selectorList().heroePrice).clear().type('1')
        cy.get(this.selectorList().heroeFans).clear().type('1')
        cy.get(this.selectorList().heroeSaves).clear().type('1')
        cy.get(this.selectorList().heroePowers).select(['Super Hearing'])
        cy.get(this.selectorList().submitButton).eq(1).click()
    }

    EditandoNovoHeroi(){
        cy.get(this.selectorList().heroeName).clear().type('Santana')
        cy.get(this.selectorList().heroePrice).clear().type('130')
        cy.get(this.selectorList().heroeFans).clear().type('80')
        cy.get(this.selectorList().heroeSaves)
        cy.get(this.selectorList().heroePowers).select(['Super Hearing'])
        cy.get(this.selectorList().submitButton).eq(1).click()
    }
}
export default HeroePage