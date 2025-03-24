//para este teste funcionar deve haver 5 herois\\for this test to work there must be 5 heroes
import LoginPage from '../fixtures/loginPage'
import MenuPage from '../fixtures/menuPage'
import HeroePage from '../fixtures/heroePage'
import AdminMenuPage from '../fixtures/AdminmenuPage'

const loginPage = new LoginPage
const menuPage = new MenuPage
const heroePage = new HeroePage
const AdminmenuPage = new AdminMenuPage

describe('Elementos do App', () => {
  it.only('conferindo os elementos do App do admin', () => {
    loginPage.paginaLogin()
    loginPage.LoginAdmin()
    menuPage.ElementosApp()
    AdminmenuPage.ElementosAdmin()
    AdminmenuPage.ElementosEditPage()
    AdminmenuPage.ElementosNewHeors()
  })
})

describe('Login Bem Sucedido do Admin', () => {
    it('Login deve ser efetuado, deve haver um aumento na contagem de likes e saves', () => {
      loginPage.paginaLogin()
      loginPage.LoginAdmin()
      menuPage.Curtidas()
      menuPage.Saves()
    })
  })


  describe('Criando um Novo Herói', () => {
    it('A contagem no números de saves não deve mudar', () => {
      loginPage.paginaLogin()
      loginPage.LoginAdmin()
      heroePage.NovoHeroi()
    })
  })

  describe('Testando Novo Herói', () => {
    it('Teste like e saves no novo herói', () => {
      loginPage.paginaLogin()
      loginPage.LoginAdmin()
      AdminmenuPage.LikeAndSaves()
      AdminmenuPage.DeleteNewHeroe()
    })
  })

  describe('Editando Heroi', () => {
    it('Mudando informcoes dos antigos herois', () => {
      loginPage.paginaLogin()
      loginPage.LoginAdmin()
      AdminmenuPage.EditHeroes()
      heroePage.EditandoHeroi()
      AdminmenuPage.LikeSaveHeroeEdit()
    })
  })

  describe('Editando NovoHeroi', () => {
    it('Mudando informcoes do novo heroi', () => {
      loginPage.paginaLogin()
      loginPage.LoginAdmin()
      heroePage.NovoHeroi()
      AdminmenuPage.EditNovoHeroi()
      heroePage.EditandoNovoHeroi()
      AdminmenuPage.DeleteNewHeroe()
    })
  })


