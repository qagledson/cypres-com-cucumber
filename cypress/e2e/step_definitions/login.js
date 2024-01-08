/// <reference types="cypress"/>
import LoginPage from '../pages/LoginPage'

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const loginPage = new LoginPage()

// Acessar a página de recuperação de senha
Given('acesso o site fm-cate', () => {
    loginPage.acessarSistema()
})

When('clico no botao "Esqueci minha senha"', () => {
    loginPage.botaoEsqueciSenha()

});

Then('devo ser direcionado para a tela recuperacao de senha', () => {
    loginPage.validarPaginaEsqueciSenha()
})

// When('clico no botao "Registrar uma conta"', () => {
//     loginPage.botaoRegistrarConta()

// });

// Then('devo ser direcionado para a tela de cadastro de usuario', () => {
//     loginPage.validarPaginaCadastroUsuario()
// })
