// /* eslint-disable no-undef */
// const { default: MailSlurp } = require("mailslurp-client");

// describe("template spec", () => {
//   // const email = 'nihar+9@coindelta.io';
//   let ID;
//   let emailAddress;
//   let Password = Cypress.env("DEFAULT_PASSWORD");
//   let URL = Cypress.env("BASE_URL");
//   const mailslurp = new MailSlurp({
//     apiKey: Cypress.env("MAILSLURP_API"),
//   });
//   let KYCUser;

//   before(async () => {
//     const { id, emailAddress: email } = await mailslurp.createInbox();
//     ID = id;
//     emailAddress = email;
//   });
//   beforeEach(() => {
//     cy.viewport(1366, 768); // Set viewport to 550px x 750px
//   });
//   it("Signup", () => {
//     // https://on.cypress.io/type
//     // Log the extracted OTP (optional)
//     // const code = /([0-9]{5})$/.exec(email.body)[1];
//     cy.visit(`${URL}/register`);
//     cy.get("#register_firstName")
//       .type("Test")
//       .should("have.value", "Test");
//     cy.get("#register_lastName")
//       .type("demo")
//       .should("have.value", "demo");
//     cy.get("#register_email")
//       .type(emailAddress)
//       .should("have.value", emailAddress);
//     cy.get("#register_password")
//       .type(Password)
//       .should("have.value", Password);
//     cy.get("#register_confirmPassword")
//       .type(Password)
//       .should("have.value", Password);
//       cy.get(".ant-checkbox-input").check();
//       cy.get('iframe')
//       .first()
//       .its('0.contentDocument.body')
//       .should('not.be.undefined')
//       .and('not.be.empty')
//       .then(cy.wrap)
//       .find('#recaptcha-anchor')
//       .should('be.visible')
//       .click();
//       cy.intercept("POST", "https://www.google.com/recaptcha/api2/userverify**").as("captchaRequest");

//       cy.wait('@captchaRequest').its('response.statusCode').should('eq', 200).then(() => {
//         cy.get(".btn-create").click();
//       });

//     cy.wrap(mailslurp.waitForLatestEmail(ID)).then((email) => {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(email.body, "text/html");
//       const otpElement = doc.querySelector(".container strong");
//       const otpValue = otpElement.textContent.trim();
//       cy.log(`Extracted OTP: ${otpValue}`);
//       cy.get("#login_otp")
//         .type(otpValue, { delay: 100 })
//         .should("have.value", otpValue);
//       cy.get(".btn-signin").click();
//       cy.get("#login_email")
//         .type(emailAddress, { delay: 10 })
//         .should("have.value", emailAddress);
//       cy.get("#login_password")
//         .type(Password, { delay: 10 })
//         .should("have.value", Password);
//     });
//   });

//   // it('Login with Email and Wait for OTP Email', () => {
//   //   // Intercept the POST request to handle the 422 error
//   //   cy.intercept('POST', 'https://betaapi.adoptingelsalvador.gob.sv/login').as('loginRequest');

//   //   cy.visit('http://localhost:3000/login');

//   //   // Perform login with credentials
//   //   cy.get('#login_email')
//   //     .type('b2cad513-ac6f-4dd4-9999-1611ae9dbed2@mailslurp.com', { delay: 100 })
//   //     .should('have.value', 'b2cad513-ac6f-4dd4-9999-1611ae9dbed2@mailslurp.com');

//   //   cy.get('#login_password').type('Test@1234', { delay: 100 }).should('have.value', 'Test@1234');

//   //   cy.get('.ant-btn').click();

//   //   // Wait for the failed login request
//   //   cy.wait('@loginRequest').then((interception) => {
//   //     // Check if the request resulted in a 422 status code
//   //     if (interception.response.statusCode === 422) {
//   //       // Wait for the latest email after the failed login attempt
//   //       // const mailslurp = new MailSlurp({ apiKey: 'YOUR_API_KEY_HERE' }); // Replace with your MailSlurp API key

//   //       cy.wrap(mailslurp.waitForLatestEmail('b2cad513-ac6f-4dd4-9999-1611ae9dbed2')).then((email) => {
//   //         const parser = new DOMParser();
//   //         const doc = parser.parseFromString(email.body, 'text/html');
//   //         const otpElement = doc.querySelector('.container strong'); // Update the selector based on your HTML structure
//   //         const otpValue = otpElement.textContent.trim(); // Extract OTP value
//   //         cy.log(`Extracted OTP: ${otpValue}`);

//   //         // Fill OTP value in the OTP input field
//   //         cy.get('#login_otp').type(otpValue, { delay: 100 }).should('have.value', otpValue);
//   //       });
//   //     }
//   //   });
//   // });

//   it("Signin-Siginout", () => {
//     cy.visit(`${URL}/login`);
//     cy.get("#login_email")
//       .type(emailAddress, { delay: 10 })
//       .should("have.value", emailAddress);
//     cy.get("#login_password")
//       .type(Password, { delay: 10 })
//       .should("have.value", Password);
//     cy.get(".btn-signin").click();
//     cy.get('.top-right-wrap > .sc-dkmUuB > .ninjadash-nav-actions__author > .ninjadash-nav-action-link').click();
//     cy.get(".user-dropdwon__bottomAction").click();
//   });
//   it("Apply-immigration & Check Payment", () => {
//     cy.visit(`${URL}/login`);
//     cy.get("#login_email")
//       .type(emailAddress, { delay: 10 })
//       .should("have.value", emailAddress);
//     cy.get("#login_password")
//       .type("Test@1234", { delay: 10 })
//       .should("have.value", "Test@1234");
//     cy.get(".btn-signin").click();
//     cy.get(".top-button").click();
//     cy.get("#account_first_name")
//       .type("Test", { delay: 10 })
//       .should("have.value", "Test");
//     cy.get("#account_middle_name")
//       .type("Test", { delay: 10 })
//       .should("have.value", "Test");
//     cy.get("#account_last_name")
//       .type("Test", { delay: 10 })
//       .should("have.value", "Test");
//     cy.get("#account_dob")
//       .type("1999-04-06", { force: true }, { delay: 10 })
//       .should("have.value", "1999-04-06");
//     cy.get(".ant-picker-cell-selected").click();
//     cy.get('#account_nationality').type("Australia{enter}", { delay: 10 });
//     cy.get(
//       ":nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item"
//     ).click();
//     cy.get('[title="Male"] > .ant-select-item-option-content').click();
//     cy.get("#account_phone_country_code")
//       .type("91", { delay: 10 })
//       .should("have.value", "91");
//     cy.get("#account_phone")
//       .type("9712355577", { delay: 10 })
//       .should("have.value", "9712355577");
//     cy.get(".ant-btn").click();
//     cy.get("#account_resid_building_name")
//       .type("Testbuilding", { delay: 10 })
//       .should("have.value", "Testbuilding");
//     cy.get("#account_resid_street")
//       .type("132ft", { delay: 10 })
//       .should("have.value", "132ft");
//     cy.get("#account_resid_city")
//       .type("sevenhills", { delay: 10 })
//       .should("have.value", "sevenhills");
//     cy.get("#account_resid_zipcode")
//       .type("380013", { delay: 10 })
//       .should("have.value", "380013");
//     cy.get("#account_resid_state")
//       .type("sydney", { delay: 10 })
//       .should("have.value", "sydney");
//     cy.get("#account_resid_country").type("Australia{enter}", { delay: 10 });
//     cy.get("#account_issue_date").click();
//     cy.get(".ant-picker-today-btn").click();
//     cy.get(`input[type=file]`).selectFile("cypress/fixtures/Demoimg.jpg", {
//       force: true,
//     });
//     cy.get(".proced-btn").click();
//     cy.get(`input[type=file]`).selectFile("cypress/fixtures/Demoimg.jpg", {
//       force: true,
//     });
//     cy.get(".ant-checkbox-input").check();
//     cy.get(".proced-btn > span").click();
//     cy.get(".ant-btn-primary").click();
//     cy.get('.steps-action > .ant-btn').click();
//     cy.get(":nth-child(1) > .pay-button > img").click();
//     cy.get(".steps-action > .ant-btn").click();
//     // cy.intercept(
//     //   "POST",
//     //   "https://betaapi.adoptingelsalvador.gob.sv/bitfinex/submitInvoice"
//     // ).as("submitInvoiceRequest");
//     // cy.wait("@submitInvoiceRequest").then(() => {
//     cy.get("p > a")
//       .invoke("attr", "href")
//       .then((linkUrl) => {
//         cy.log("The URL of the link is:", linkUrl);
//         const splitLinkUrl = linkUrl.split("/");
//         const orderIdFromLink = splitLinkUrl[splitLinkUrl.length - 1];
//         cy.log("Extracted Order ID from link:", orderIdFromLink);
//         cy.get(".ant-btn").click(); // Click on the button after the POST request completes
//         cy.get(".overview-button").click();
//         cy.intercept(
//           "POST",
//           "https://betaapi.adoptingelsalvador.gob.sv/bitfinex/getUserPayments"
//         ).as("Getpaymentrecipt");
//         cy.wait("@Getpaymentrecipt").then(() => {
//           cy.request({
//             method: "POST",
//             url: "https://betaapi.adoptingelsalvador.gob.sv/bitfinex/updatePayment",
//             body: {
//               id: orderIdFromLink,
//               type: "ECOMMERCE",
//               amount: "0.10",
//               currency: "USD",
//               orderId: "Test123",
//               t: 86399,
//               status: "COMPLETED",
//               payment: {
//                 txid: "5119b4caaad1af22bebb2373995d8ecd8dfb23cc1971d0347aaa516b4e0f3e3a",
//                 amount: 0.00006262,
//                 currency: "BTC",
//                 method: "BITCOIN",
//                 status: "COMPLETED",
//                 confirmations: 6,
//                 created_at: "2021-01-06 21:16:28",
//                 updated_at: "2021-01-06 21:16:28",
//                 depositId: 1357996,
//               },
//             },
//           }).then((response) => {
//             expect(response.status).to.eq(200);
//             cy.reload();
//             cy.get(":nth-child(3) > :nth-child(2) > span")
//               .invoke("text")
//               .then((text) => {
//                 expect(text.trim()).to.equal("SUBMITTED");
//               });
//           });
//         });
//       });
//     // });
//   });
//   it("Admin Status verification", () => {
//     cy.visit(`${URL}/login`);
//     cy.get("#login_email")
//       .type("demo@tether.to", { delay: 10 })
//       .should("have.value", "demo@tether.to");
//     cy.get("#login_password")
//       .type("Test@123", { delay: 10 })
//       .should("have.value", "Test@123");
//     cy.get(".btn-signin").click();
//     cy.get(".ant-table-tbody > :nth-child(1) > :nth-child(2)")
//       .invoke("text")
//       .then((text) => {
//         expect(text.trim()).to.equal(emailAddress);
//       });
//     cy.get(".ant-table-tbody > :nth-child(1) > :nth-child(3) > div")
//       .invoke("text")
//       .then((text) => {
//         expect(text.trim()).to.equal("COMPLETED");
//       });

//     cy.get(":nth-child(1) > :nth-child(5) > div > a")
//       .invoke("attr", "href")
//       .then((linkUrl) => {
//         KYCUser = linkUrl;
//         cy.log("kyc", KYCUser);
//       });
//   });
//   it("KYC verification", () => {
//     cy.on("uncaught:exception", (err) => {
//       // Handle the exception here (log it, ignore it, etc.)
//       return false; // To prevent Cypress from failing the test
//     });
//     // Test steps
//     // cy.visit(`https://betaofficials.adoptingelsalvador.gob.sv/compliance/user/details?uid=401`);
//     cy.visit(`https://betaofficials.adoptingelsalvador.gob.sv/login`);
//     cy.get(
//       ":nth-child(2) > .custom-input-field > .bp3-input-group > .bp3-input"
//     )
//       ?.type("adm1@bitfinex.com")
//       .should("have.value", "adm1@bitfinex.com");

//     cy.get(
//       ":nth-child(3) > .custom-input-field > .bp3-input-group > .bp3-input"
//     )
//       ?.type("example123")
//       .should("have.value", "example123");

//     cy.get(":nth-child(4) > .bp3-button").click();
//     cy.visit(KYCUser);
//     cy.get(".bp3-dialog-footer-actions > .bp3-intent-success").click();
//     cy.get(".control-section-buttons > .bp3-intent-success").click();
//     cy.get(
//       ".bp3-dialog-body > .custom-input-field > .bp3-input-group > .bp3-input"
//     ).type("Testing");
//     cy.get(".bp3-dialog-footer-actions > .bp3-intent-primary").click();

//     cy.wait(1000);
//     // Continue with your assertions after the POST request
//     cy.get(".control-section > .notice")
//       .invoke("text")
//       .then((text) => {
//         expect(text.trim()).to.equal("User verified");
//       });
//   });
//   it("Check Kyc Status ", () => {
//     cy.visit(`${URL}/login`);
//     cy.get("#login_email")
//       .type("demo@tether.to", { delay: 10 })
//       .should("have.value", "demo@tether.to");
//     cy.get("#login_password")
//       .type("Test@123", { delay: 10 })
//       .should("have.value", "Test@123");
//     cy.get(".btn-signin").click();
//     cy.get(".ant-table-tbody > :nth-child(1) > :nth-child(2)")
//       .invoke("text")
//       .then((text) => {
//         expect(text.trim()).to.equal(emailAddress);
//       });
//     cy.get(".ant-table-tbody > :nth-child(1) > :nth-child(3) > div")
//       .invoke("text")
//       .then((text) => {
//         expect(text.trim()).to.equal("COMPLETED");
//       });
//     cy.get(".ant-table-tbody > :nth-child(1) > :nth-child(6) > div")
//       .invoke("text")
//       .then((text) => {
//         expect(text.trim()).to.equal("VERIFIED");
//       });
//   });

//   // it("Change password", () => {
//   //   cy.visit(`${URL}/login`);
//   //   cy.get("#login_email")
//   //   .type(emailAddress, { delay: 10 })
//   //   .should("have.value", emailAddress);
//   //   cy.get("#login_password")
//   //     .type("Test@1234", { delay: 10 })
//   //     .should("have.value", "Test@1234");
//   //   cy.get(".btn-signin").click();
//   //   cy.get('.top-right-wrap > .sc-dkmUuB > .ninjadash-nav-actions__author > .ninjadash-nav-action-link').click();
//   //   cy.get('.user-dropdwon__links > :nth-child(1) > a').click();
//   //   cy.get("#changePassword_oldPass")
//   //     .type("Test@1234", { delay: 10 })
//   //     .should("have.value", "Test@1234");
//   //   cy.get("#changePassword_newPass")
//   //     .type("Test@1234", { delay: 10 })
//   //     .should("have.value", "Test@1234");
//   //   cy.get("#changePassword_confirmPass")
//   //     .type("Test@1234", { delay: 10 })
//   //     .should("have.value", "Test@1234");
//   //     // Intercept the changePassword API request
//   //     cy.get(".ant-btn-primary").click();
//   //     // cy.intercept(
//   //     //   "POST",
//   //     //   "https://betaapi.adoptingelsalvador.gob.sv/changePassword"
//   //     //   ).as("changePassword");

//   //   // Wait for the changePassword API request and access the response
//   //   // cy.wait("@changePassword").then((interception) => {
//   //   //   // Access the response body
//   //   //   const responseBody = interception.response.body;
//   //   //   // You can perform assertions or log the response body
//   //   //   cy.log("Change Password API Response: ", responseBody.msg);
//   //   //   // Continue with other test steps if needed
//   //   //   if (responseBody?.msg?.includes("PASSWORD_CHANGED")) {
//   //   //     cy.log("Password changed successfully!");
//   //   //     // Additional assertions or actions upon successful password change
//   //   //     cy.get(
//   //   //       ".top-right-wrap > .sc-bDumWk > .ninjadash-nav-actions__author > .ninjadash-nav-action-link"
//   //   //     ).click();
//   //   //     cy.get(".user-dropdwon__bottomAction").click();
//   //   //   } else {
//   //   //     cy.log("Password changed Failed!");
//   //   //     cy.get("nonexistent-element",{ timeout: 1000 }).should("exist");
//   //   //   }
//   //   // });
//   //   cy.get('.ant-message-custom-content > :nth-child(2)').contains('Password has been changed')
//   //   // cy.get(
//   //   //   ".top-right-wrap > .sc-bDumWk > .ninjadash-nav-actions__author > .ninjadash-nav-action-link"
//   //   // ).click();
//   //   // cy.get(".user-dropdwon__bottomAction").click();
//   // });
// });
