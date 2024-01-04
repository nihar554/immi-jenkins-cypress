const { wait } = require('@testing-library/user-event/dist/utils')

/* eslint-disable no-undef */
describe('template spec', () => {
  const URL = Cypress.env('BASE_URL')
  const emailAddress = '8aa653ed-0994-445a-8b3d-a0fc8229f327@mailslurp.com'
  const Password = Cypress.env('DEFAULT_PASSWORD')
  beforeEach(() => {
    cy.viewport(1366, 768) // Set viewport to 550px x 750px
  })
  it('Test signup validation for input field.', () => {
    cy.visit(`${URL}/register`)
    cy.get('.ant-btn').click()
    wait(100)
    cy.get('#register_firstName_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please input your first name')
      })

    cy.get('#register_lastName_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please input your last name')
      })
    cy.get('#register_email_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please input your email')
      })
    cy.get('#register_password_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please input your password')
      })
    cy.get('#register_confirmPassword_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please input your confirm password')
      })
    cy.get('#register_checked_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please accept the terms & conditions')
      })
    cy.screenshot()
  })
  it('Test signin validation for input field.', () => {
    cy.visit(`${URL}/login`)
    cy.get('.btn-signin').click()
    wait(100)
    cy.get('#login_email_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please input your email')
      })
    cy.get('#login_password_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please input your password')
      })
    cy.screenshot()
  })

  it('Test visa validation for input field.', () => {
    cy.visit(`${URL}/login`)
    cy.get('#login_email').type(emailAddress).should('have.value', emailAddress)
    cy.get('#login_password').type(Password).should('have.value', Password)
    cy.get('.btn-signin').click()
    cy.get('.top-button').click()
    // TO CHECK VALIDATION OF STEP 1 (NAME & CONTACT)
    cy.get('.ant-btn').click()
    cy.get('#account_first_name_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Input Your First Name')
      })
    cy.screenshot()
    cy.get('#account_last_name_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Input Your Last Name')
      })
    cy.get('#account_dob_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Select Your Date of Birth')
      })
    cy.get('#account_nationality_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Select Your Nationality')
      })
    cy.get('#account_gender_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Select Your Gender')
      })
    cy.get('#account_phone_country_code_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Enter Your Country Code')
      })
    cy.get('#account_first_name').type('Test').should('have.value', 'Test')
    cy.get('#account_middle_name').type('Test').should('have.value', 'Test')
    cy.get('#account_last_name').type('Test').should('have.value', 'Test')
    cy.get('#account_dob').type('1999-04-06', { force: true }).should('have.value', '1999-04-06')
    cy.get('.ant-picker-cell-selected').click()
    cy.get('#account_nationality').type('Australia{enter}')
    cy.get(
      ':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'
    ).click()
    cy.get('[title="Male"] > .ant-select-item-option-content').click()
    cy.get('#account_phone_country_code').type('91').should('have.value', '91')
    cy.get('#account_phone').type('9712355577').should('have.value', '9712355577')
    cy.get('.ant-btn').click()
    // STEP 2 VALIDATION
    cy.get('.proced-btn').click()
    cy.get('#account_resid_building_name_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Input Building Name / Number')
      })
    cy.screenshot()
    cy.get('#account_resid_street_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Input Your Street Name')
      })
    cy.get('#account_resid_city_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Input Your City Name')
      })
    cy.get('#account_resid_zipcode_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Input Your Area Name')
      })
    cy.get('#account_resid_country_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Select Your Country Name')
      })
    cy.get('#account_issue_date_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Select Your Issue Date')
      })
    cy.get('#account_proof_of_res_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Upload Proof of Residence')
      })
    cy.get('#account_resid_building_name').type('Testbuilding').should('have.value', 'Testbuilding')
    cy.get('#account_resid_street').type('132ft').should('have.value', '132ft')
    cy.get('#account_resid_city').type('sevenhills').should('have.value', 'sevenhills')
    cy.get('#account_resid_zipcode').type('380013').should('have.value', '380013')
    cy.get('#account_resid_state').type('sydney').should('have.value', 'sydney')
    cy.get('#account_resid_country').type('Australia{enter}')
    cy.get('#account_issue_date').click()
    cy.get('.ant-picker-today-btn').click()
    cy.get('input[type=file]').selectFile('cypress/fixtures/Demoimg.jpg', {
      force: true
    })
    cy.get('.proced-btn').click()
    cy.get('.proced-btn').click()
    cy.get('#passport_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please Choose Passport')
      })
    cy.get('#termsAndConditon_help > .ant-form-item-explain-error')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.equal('Please accept the terms & conditions')
      })
  })
})
