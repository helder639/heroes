//para este teste funcionar deve haver 5 herois
import LoginPage from '../fixtures/loginPage'
import MenuPage from '../fixtures/menuPage'


const loginPage = new LoginPage
const menuPage = new MenuPage

describe('Elementos do AppUser', () => {
  it.only('Verificando se todos os elementos aparecem na tela', () => {
    loginPage.paginaLogin()
    loginPage.Loginuser()
    menuPage.ElementosApp()
    menuPage.ElementosUser()
  })
})

describe('Login sem informações', () => {
  it('Deve aparecer mensagens requisitando as informações', () => {
    loginPage.paginaLogin()
    loginPage.LoginRequired()
  })
})

describe('Login com informações erradas', () => {
  it('Deve aparecer mensatgens de erro no login', () => {
    loginPage.paginaLogin()
    loginPage.LoginError()
  })
})

describe('Interação sem Login', () => {
  it('Deve aparecer uma mensagem de erro pedidno para logar', () => {
    loginPage.paginaLogin()
    menuPage.SemLogin()
  })
})

describe('Cancelamento de Saves', () => {
  it('A contagem no números de saves não deve mudar', () => {
    loginPage.paginaLogin()
    loginPage.Loginuser()
    menuPage.NoSavesUser()
  })
})

describe('Login Bem Sucedido do Usuário', () => {
  it('Login deve ser efetuado, deve haver um aumento na contagem de likes e saves', () => {
    loginPage.paginaLogin()
    loginPage.Loginuser()
    menuPage.Curtidas()
    menuPage.Saves()
  })
})


