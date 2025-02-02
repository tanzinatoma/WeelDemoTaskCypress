import { expect } from "chai"

export class signuppage{
    email = '[data-testid="registration-email"]'
    sign_up_button = '[data-testid="submit-button"]'
    password = '[data-testid="registration-password"]'
    policy_checkbox = '.sc-buvPDS'
    create_account_button = '[data-testid="email-sign-up"]'
    password_field_border = '[data-testid="registration-password-container"]'
    email_error = '[data-testid="form-input-wrapper-error-text"]'
    email_duplicate = '.sc-dyfiKA > .sc-WsMwQ'   

    enterEmail(email){
        cy.get(this.email).clear().type(email);
    }
    clickSignUp(){
        cy.get(this.sign_up_button).click();
    }
    enterPassword(password){
        cy.get(this.password).clear().type(password);
    }
    acceptPolicy(){
        cy.get(this.policy_checkbox).click()
    }
    clickCreateAccount(){
        cy.get(this.create_account_button).click();
    }

    completeSignUp(email, password){
        this.enterEmail(email)
        this.clickSignUp()
        this.enterPassword(password)
        this.acceptPolicy()
        this.clickCreateAccount()
    }
    printEmail(Email, password) {
        Email.forEach((email) => {
            cy.log(email);
            cy.log(password);
            this.completeSignUp(email, password)
        });
    }

    verifyWorkEmailSignupOnly(Email, password) {
        Email.forEach((email) => {
                this.enterEmail(email);
                this.enterPassword(password);
                this.clickCreateAccount();
                cy.get(this.email_error).should('be.visible').invoke('text').should('include', 'Please try again with your work email address')
        })
    }

    verifySingleEmailSignupOnly(){
        cy.get(this.email_duplicate).should('be.visible').invoke('text').should('include', 'This account already exists.')
    }

    verifyEmptyEmailFieldError() {
        cy.get(this.email).clear().click()
        cy.get('body').click()
        cy.get(this.email_error).should("be.visible").invoke("text").then((errorText) => {
            expect(errorText).to.equal('Please enter an email address.'); 
        });
    }

    verifyPassword(Password){
        Password.forEach((password) => {
            cy.log(password);
            this.enterPassword(password);
            this.acceptPolicy()
            cy.get(this.password_field_border).should('have.css', 'border-color').then((borderColor)=> {
                expect(borderColor).to.equal('rgb(209, 59, 21)');
            });
            cy.get(this.create_account_button).should("be.disabled"); 
        });

    }
}