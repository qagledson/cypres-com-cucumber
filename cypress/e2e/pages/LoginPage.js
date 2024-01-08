import 'cypress-drag-drop';

class LoginPage {
  
      acessarSistema() {
        cy.visit('login')
      }

      botaoEsqueciSenha() {
        cy.contains('a', 'Esqueci minha senha').should('be.visible')
        cy.contains('a', 'Esqueci minha senha').should('be.visible').click()
      }

      botaoRegistrarConta() {
        cy.contains('a', 'Registrar uma conta').should('be.visible')
        cy.contains('a', 'Registrar uma conta').should('be.visible').click()
      }

      validarPaginaEsqueciSenha() {
        cy.wait(5000)
        cy.contains('.card__header', 'Resetar Senha').should('be.visible')
      }

      validarPaginaCadastroUsuario() {
        cy.wait(5000)
        cy.contains('.card__header', 'Registro').should('be.visible')
      }
    }

export default LoginPage;