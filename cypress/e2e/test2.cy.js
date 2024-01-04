// /* eslint-disable no-undef */
// const { wait } = require("@testing-library/user-event/dist/utils");
// const { default: MailSlurp } = require("mailslurp-client");

// describe("template spec", () => {
//   const Email = "805fd13a-d7e8-4a7a-8c58-7387d2f0aeff@mailslurp.com";
//   let Password = Cypress.env("DEFAULT_PASSWORD");
//   let URL = Cypress.env("BASE_URL");
//   const mailslurp = new MailSlurp({
//     apiKey: Cypress.env("MAILSLURP_API"),
//   });
//   // it("KYC verification", () => {
//   //   cy.visit(`${URL}/login`);
//   //   cy.get("#login_email")
//   //     .type("demo@tether.to", { delay: 10 })
//   //     .should("have.value", "demo@tether.to");
//   //   cy.get("#login_password")
//   //     .type("Test@123", { delay: 10 })
//   //     .should("have.value", "Test@123");
//   //   cy.get(".btn-signin").click();
//   //   cy.get(".ant-table-tbody > :nth-child(1) > :nth-child(2)")
//   //     .invoke("text")
//   //     .then((text) => {
//   //       expect(text.trim()).to.equal(emailAddress);
//   //     });
//   //   cy.get(".ant-table-tbody > :nth-child(1) > :nth-child(3) > div")
//   //     .invoke("text")
//   //     .then((text) => {
//   //       expect(text.trim()).to.equal("COMPLETED");
//   //     });
//   //     cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(6) > div') .invoke("text")
//   //     .then((text) => {
//   //       expect(text.trim()).to.equal("VERIFIED");
//   //     });
//   // });

//   it("Signup", () => {
//     // https://on.cypress.io/type
//     // Log the extracted OTP (optional)
//     // const code = /([0-9]{5})$/.exec(email.body)[1];
//     cy.visit(`${URL}/register`);
//     cy.get("#register_firstName")
//       .type("Test", { delay: 100 })
//       .should("have.value", "Test");
//     cy.get("#register_lastName")
//       .type("demo", { delay: 100 })
//       .should("have.value", "demo");
//     cy.get("#register_email")
//       .type(Email, { delay: 10 })
//       .should("have.value", Email);
//     cy.get("#register_password")
//       .type(Password, { delay: 10 })
//       .should("have.value", Password);
//     cy.get("#register_confirmPassword")
//       .type(Password, { delay: 100 })
//       .should("have.value", Password);
//     cy.get(".ant-checkbox-input").check();
//     cy.get("iframe")
//       .first()
//       .its("0.contentDocument.body")
//       .should("not.be.undefined")
//       .and("not.be.empty")
//       .then(cy.wrap)
//       .find("#recaptcha-anchor")
//       .should("be.visible")
//       .click();
//     cy.intercept(
//       "POST",
//       "https://www.google.com/recaptcha/api2/userverify**"
//     ).as("captchaRequest");

//     cy.wait("@captchaRequest")
//       .its("response.statusCode")
//       .should("eq", 200)
//       .then(() => {
//         cy.get(".btn-create").click();
//       });

//     // cy.wrap(mailslurp.waitForLatestEmail(ID)).then((email) => {
//     //   const parser = new DOMParser();
//     //   const doc = parser.parseFromString(email.body, "text/html");
//     //   const otpElement = doc.querySelector(".container strong");
//     //   const otpValue = otpElement.textContent.trim();
//     //   cy.log(`Extracted OTP: ${otpValue}`);
//     //   cy.get("#login_otp")
//     //     .type(otpValue, { delay: 100 })
//     //     .should("have.value", otpValue);
//     //   cy.get(".btn-signin").click();
//     //   cy.get("#login_email")
//     //     .type(Email, { delay: 10 })
//     //     .should("have.value", Email);
//     //   cy.get("#login_password")
//     //     .type(Password, { delay: 10 })
//     //     .should("have.value", Password);
//     // });
//   });

//   // it("should delete all emails from Mailtrap inbox", () => {
//   //   const apiKey = Cypress.env("MAILSLURP_API");
//   //   const inboxId = "bc37f8af-a437-4f33-a82e-eb908c61e89d"; // You'll need your specific Mailtrap inbox ID
//   //   cy.log(apiKey);
//   //   mailslurp.emptyInbox(inboxId);
//   // });
//   it.only("Forgot password", () => {
//     const inboxId = "805fd13a-d7e8-4a7a-8c58-7387d2f0aeff"; // You'll need your specific Mailtrap inbox ID

//     cy.intercept(
//       "DELETE",
//       `https://javascript.api.mailslurp.com/emptyInbox?inboxId=${inboxId}`
//     ).as("deleteInbox");

//     mailslurp.emptyInbox(inboxId);
//     cy.wait(2000)
//       // .its("response.statusCode")
//       // .should("eq", 204)
//       .then(() => {
//         cy.visit(`${URL}/forgot-password`);
//         cy.get("#forgotPass_email")
//           .type(Email, { delay: 10 })
//           .should("have.value", Email);
//         cy.get(".btn-reset").click();
//         cy.get("#forgotPass_password")
//           .type(Password, { delay: 10 })
//           .should("have.value", Password);
//         cy.get("#forgotPass_email")
//           .type(Password, { delay: 10 })
//           .should("have.value", Password).then(()=>{
//         // ADD Delete Mail function HERE
//         cy.wrap(mailslurp.waitForLatestEmail(inboxId)).then((email) => {
//           const parser = new DOMParser();
//           cy.log(email);
//           const doc = parser.parseFromString(email.body, "text/html");
//           cy.log(doc);
//           const otpElement = doc.querySelector("div > p > b");
//           cy.log(otpElement);
//           const otpValue = otpElement.textContent.trim();
//           cy.log(`Extracted OTP: ${otpValue}`);
//           cy.get("#forgotPass_text")
//             .type(otpValue, { delay: 100 })
//             .should("have.value", otpValue);
//           cy.get(".ant-btn > span").click();
//         })
//         });
//       });
//   });
//   // it("Forgot password", () => {
//   //   cy.visit(`${URL}/login`);
//   //   cy.get("#login_email")
//   //     .type(Email, { delay: 10 })
//   //     .should("have.value", Email);
//   //   cy.get("#login_password")
//   //     .type(Password, { delay: 10 })
//   //     .should("have.value", Password);
//   //   cy.get(".btn-signin").click();
//   //   cy.get(".overview-button").click();
//   //   cy.intercept(
//   //     "POST",
//   //     "https://betaapi.adoptingelsalvador.gob.sv/bitfinex/getUserPayments"
//   //   ).as("Getpaymentrecipt");
//   //   cy.wait("@Getpaymentrecipt").then(() => {
//   //     cy.get(".ant-table-row > :nth-child(6)")
//   //       .invoke("text")
//   //       .then((val) => {
//   //         cy.log(val, "valll");
//   //         cy.get(".ant-table-row > :nth-child(6)")
//   //           .invoke("text")
//   //           .then((val) => {
//   //             cy.log(val, "valll");

//   //             cy.get(':nth-child(3) > :nth-child(2) > span').invoke('text').then((text) => {
//   //               expect(text.trim()).to.equal('SUBMITTED');
//   //             });
//   //           });
//   //       });
//   //   });
//   // });
// });
