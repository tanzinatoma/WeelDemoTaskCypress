export class loginpage {
    email_field = '[name="email"]'
    password_field = '[data-testid="password-input"]'
    submit_button = '[data-cypress-testid="submit-button"]'
 
    enterEmail(email){
        cy.get(this.email_field).clear().type(email);
    }
    
    enterPassword(password){
        cy.get(this.password_field).clear().type(password);
    }

    submitForm(){
        cy.get(this.submit_button).click()
    }

    login(Login){
        this.enterEmail(Login.email);
        this.submitForm()
        this.enterPassword(Login.password);
        this.submitForm()
    }
}