// describe("Session Example", () => {
//   let URL = Cypress.env("BASE_URL");
//   const loginSession = (username, password) => {
//     cy.session([username, password], () => {
//       cy.visit(`${URL}/login`);
//       cy.get("#login_email")
//         .type(username, { delay: 10 })
//         .should("have.value", username);
//       cy.get("#login_password")
//         .type(password, { delay: 10 })
//         .should("have.value", password);
//       cy.get(".btn-signin").click();
//       cy.get(".top-button").click();
//       // You can add more assertions or actions after successful login if needed
//     });
//   };
//   it.only("stores and retrieves data across tests using cy.session()", () => {
//     cy.request({
//       method: "POST",
//       url: "https://betaapi.adoptingelsalvador.gob.sv/bitfinex/updatePayment",
//       body: {
//         id: '65842f4de1313a50406c512c',
//         type: "ECOMMERCE",
//         amount: "0.10",
//         currency: "USD",
//         orderId: "Test123",
//         t: 86399,
//         status: "COMPLETED",
//         payment: {
//           txid: "5119b4caaad1af22bebb2373995d8ecd8dfb23cc1971d0347aaa516b4e0f3e3a",
//           amount: 0.00006262,
//           currency: "BTC",
//           method: "BITCOIN",
//           status: "COMPLETED",
//           confirmations: 6,
//           created_at: "2021-01-06 21:16:28",
//           updated_at: "2021-01-06 21:16:28",
//           depositId: 1357996,
//         },
//       },
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//       cy.reload();
//       cy.get(":nth-child(3) > :nth-child(2) > span")
//         .invoke("text")
//         .then((text) => {
//           expect(text.trim()).to.equal("SUBMITTED");
//         });
//     });
//   })
//   it("stores and retrieves data across tests using cy.session()", () => {
//     loginSession("22c4dd2e-22cc-47c6-9725-bf3159155850@mailslurp.com", "Test@1234");
//   });
//   it("a across tests using cy.session()", () => {
//     loginSession("22c4dd2e-22cc-47c6-9725-bf3159155850@mailslurp.com", "Test@1234");
//   });
// });
