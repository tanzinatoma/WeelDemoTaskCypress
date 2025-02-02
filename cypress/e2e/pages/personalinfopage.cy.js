export class personalinfopage {
    
    fields = {
        first_name: { selector: '[data-testid="input-first-name"]', error: ':nth-child(2) > .InputHelperSection > [data-testid="error-text"]', error_text: "Please enter your first name" },
        last_name: { selector: '[data-testid="input-last-name"]', error: ':nth-child(4) > .InputHelperSection > [data-testid="error-text"]', error_text: "Please enter your last name"  },
        phone: { selector: '[name="phone_number"]', error: '[data-testid="help-text"]', error_text: "Please enter your mobile number"  },
        date: { selector: '[data-testid="dob-day-input"] > [data-testid="ds-text-input"] > [data-testid="ds-input"]', error: '[data-testid="ds-helper-text"]', error_text: "Please enter a valid date of birth"  },
        month: { selector: '[data-testid="dob-month-input"] > [data-testid="ds-text-input"] > [data-testid="ds-input"]', error: '[data-testid="ds-helper-text"]' , error_text: "Please enter a valid date of birth"  },
        year: { selector: '[data-testid="dob-year-input"] > [data-testid="ds-text-input"] > [data-testid="ds-input"]', error: '[data-testid="ds-helper-text"]', error_text: "Please enter a valid date of birth"  }
    };
    next_button = '[data-testid="next-button"]'
    logout_button = '.dlcUFo > .sc-fbFiXs' 
    validate_page_button = '.sc-iBUNwL > .sc-fbFiXs'
    validate_page_text = '.sc-BGXOW'

    enterFirstName(first_name) {
        cy.get(this.fields.first_name.selector).clear().type(first_name);
    }

    enterLastName(lastName) {
        cy.get(this.fields.last_name.selector).clear().type(lastName);
    }

    enterPhone(phoneNumber) {
        cy.get(this.fields.phone.selector).clear().type(phoneNumber);
    }

    enterDate(date) {
        cy.get(this.fields.date.selector).clear().type(date);
    }

    enterMonth(month) {
        cy.get(this.fields.month.selector).clear().type(month);
    }

    enterYear(year) {
        cy.get(this.fields.year.selector).clear().type(year);
    }

    submitForm(){
        cy.get(this.next_button).click()
    }

    logoutOfSite(){
        cy.get(this.logout_button).click()
    }

    fillPersonalDetails(userData) {
        this.enterFirstName(userData.firstName);
        this.enterLastName(userData.lastName);
        this.enterPhone(userData.phone);
        this.enterDate(userData.date);
        this.enterMonth(userData.month);
        this.enterYear(userData.year);
        this.submitForm()
    }
    
    verifyError(fieldName) {
        cy.get(this.fields[fieldName].selector).click();  
        cy.get("body").click(); 
        cy.get(this.fields[fieldName].error).should("be.visible").invoke("text").then((errorText) => {
                expect(errorText).to.equal(this.fields[fieldName].error_text); 
            });
    }

    validateNavigation(){
        cy.get(this.validate_page_button).should('be.visible');
        cy.get(this.validate_page_text).should('be.visible').invoke('text').should('include', "6-digit code sent to your mobile")
    }
}