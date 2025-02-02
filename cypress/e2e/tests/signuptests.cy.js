import signUpTestData from "../../fixtures/signupdata.json";
import personalData from "../../fixtures/personalinfo.json";
import {signuppage} from "../pages/signuppage.cy";
import {personalinfopage} from "../pages/personalinfopage.cy"
import {loginpage} from "../pages/loginpage.cy" 

describe("The automation tests for signup are here", ()=> {
    const signUp = new signuppage()
    const personalinfo = new personalinfopage()
    const login = new loginpage()
    before(()=>{
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
    })

    it("Sign up using valid email & password", ()=>{
        cy.visit(signUpTestData.signup_url);
        signUp.completeSignUp(signUpTestData.newUserSignUp.email, signUpTestData.newUserSignUp.password)
        cy.url().should('include', '/personal-info')
        personalinfo.logoutOfSite();
    })

    it('User can not sign up with same email again', ()=>{
        cy.visit(signUpTestData.signup_url);
        signUp.completeSignUp(signUpTestData.newUserSignUp.email, signUpTestData.newUserSignUp.password)
        signUp.verifySingleEmailSignupOnly();
    })

    it('User can not sign up without work email', ()=>{
        signUp.verifyWorkEmailSignupOnly(signUpTestData.invalid_emails, signUpTestData.newUserSignUp.password)
    })

    it('Email and Password error validation', ()=>{
        signUp.verifyEmptyEmailFieldError()
        signUp.verifyPassword(signUpTestData.invalid_passwords)
    })   
    
    it("Log into site using previous credential", ()=>{
        cy.visit(signUpTestData.login_url);
        login.login(signUpTestData.newUserSignUp);
        cy.url().should('include', '/personal-info')
    })

    it('Each field should show error if empty', ()=>{
        for(const field in personalinfo.fields) {
            personalinfo.verifyError(field);
        }
    }) 

    it('Personal Information Update', ()=>{
        personalinfo.fillPersonalDetails(personalData)
        personalinfo.validateNavigation()
    })
})