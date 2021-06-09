/// <reference types="cypress" />

context('Coderbyte awardco', () => {
  describe('go to sales from home page to ensure demo page is reachable.', () =>{
    it('should click button to go to https://www.award.co/demo', () =>{
    cy.visit('https://www.award.co')
    cy.get('a.button-navigation.demo.w-button')
    .click()
    cy.url().should('eq', 'https://www.award.co/demo')
    })
  })

  beforeEach(() => {
    cy.visit('https://www.award.co/demo')
  })

  describe('Ensure we are on correct page and before each is correct.', () =>{
    it('should be on https://www.award.co/demo', () =>{
      cy.url('eq', 'https://www.award.co/demo')
      .should('contain', '/demo')

    })
    it('should be contain a h1 to ensure url is not showing wrong page', () =>{
     cy.get('h1.display.serif.small.white.center-div').should('contain.text', "Let’s Talk")

    })
  })

  describe('click cookie banner and go to correct page', () => {
    it('should have a cookie banner appear onload', () => {
      cy.get('div.notice-bar.cookiemodal')
      
    })
      
    it('have a cookie banner appear onload', () => {
      cy.get('div.notice-bar.cookiemodal').should('contain', 'a')
    })

    it('should take you to https://www.award.co/cookies', () => {
      cy.get('div.notice-bar.cookiemodal').should('contain', 'a')
      cy.get('div.notice-bar.cookiemodal').contains('a').click()
      cy.url('eq', 'https://www.award.co/cookies').should('contain', '/cookies')
      
    })
    it('should dissmiss banner when dismiss is clicked.', () => {
      cy.get('div.button.small.closecookie')
      cy.get('div.button.small.closecookie').click()
      cy.get('div.button.small.closecookie').should('not.exist')
      
      
    })
  })
  

  describe('Check for form, Filling out single fieldset, checking for err if no value', () => {
    it('should show that form is there and check if there is a first name fieldset column', () => {
      cy.get('form#hsForm_f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1')
      .find('fieldset.form-columns-2')
    })

    it('should get the first name field set', () => {
      cy.get('form#hsForm_f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1').within(() => {
        cy.get('input#firstname-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1') 
      })
    })

    it('should type in the first name field set', () => {
      cy.get('form#hsForm_f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1').within(() => {
        cy.get('input#firstname-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1')
        .type('Test') 
      })
    })

    it('should require an entry in field set', () => {
      cy.get('form#hsForm_f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1').within(() => {
        cy.get('input#firstname-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1')
        .type('{enter}')
        cy.get('label.hs-error-msg')
      })
    })
    
  })
})


