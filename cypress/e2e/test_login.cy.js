/// <reference types="cypress"/>

import '../support/index'
import LoginPage from './pages/LoginPage';

describe('Funcionalidade - Interagir com Mouse Event', () => {
    const loginPage = new LoginPage()

    //Hooks beforeEach - é executado antes de cada teste
    beforeEach(() => {
        cy.visit('login')
    });

     //Hooks beforeEach - é executado antes de cada teste
     afterEach(() => {
        cy.screenshot()
    });

    it('Acessar página de recuperação de senha', () => {
        loginPage.botaoEsqueciSenha()    
    });

    });