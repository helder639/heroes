class LoginPage{

    selectorList(){
        const selectors ={
            loginButton: "nav",
            email: "[name='email']",
            password: "[name='password']",
            signInButton: ".bg-blue-700",
            emailpasswordRequired: ".text-red-500",
            passwordEmailError: ".text-red-500",
            okButton: ".justify-end",
            screen: "#root"
        }
        return selectors
    } 

    paginaLogin(){
        cy.visit('http://localhost:3000/heroes')
    }

    LoginRequired(){
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().signInButton).click()
        cy.get(this.selectorList().emailpasswordRequired).eq(0)
        cy.get(this.selectorList().emailpasswordRequired).eq(1)

    }
    LoginError(){
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().email).type("erro")
        cy.get(this.selectorList().password).type("errooo")
        cy.get(this.selectorList().signInButton).click()
        cy.get(this.selectorList().passwordEmailError).eq(0)
        cy.get(this.selectorList().email).type("test@test.com")
        cy.get(this.selectorList().signInButton).click()
        cy.get(this.selectorList().passwordEmailError).eq(0)
        

    }

    Loginuser(){
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().email).type("test@test.com")
        cy.get(this.selectorList().password).type("test123")
        cy.get(this.selectorList().signInButton).click()
        cy.get(this.selectorList().screen).click()
    }

    LoginAdmin(){
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().email).type("admin@test.com")
        cy.get(this.selectorList().password).type("test123")
        cy.get(this.selectorList().signInButton).click()
        cy.get(this.selectorList().screen).click()
    }

    
}
export default LoginPage