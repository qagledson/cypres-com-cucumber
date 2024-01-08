Feature: Tela de login

    Background:
        Given acesso o site fm-cate
    
    Scenario: Recuperar senha
        When clico no botao "Esqueci minha senha"
        Then devo ser direcionado para a tela recuperacao de senha
    
    Scenario: Acessar pagina de cadastro
        When clico no botao "Registrar uma conta"
        Then devo ser direcionado para a tela de cadastro de usuario