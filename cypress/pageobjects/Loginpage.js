// const loginSession = () => {
//   cy.visit(`${URL}/login`)
//   cy.get('.btn-signin').click()
//   wait(100)
//   cy.get('#login_email_help > .ant-form-item-explain-error')
//     .invoke('text')
//     .then((text) => {
//       expect(text.trim()).to.equal('Please input your email')
//     })
//   cy.get('#login_password_help > .ant-form-item-explain-error')
//     .invoke('text')
//     .then((text) => {
//       expect(text.trim()).to.equal('Please input your password')
//     })
//   cy.screenshot()
// }
// export default loginSession
