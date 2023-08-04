export function iniciarSesion() {
  cy.visit('http://localhost:2368/ghost/#/signin');
  cy.get('input[name="identification"]').type('u202118067@upc.edu.pe');
  cy.get('input[name="password"]').type('2Fabricio4');
  cy.get('button.login').click();
}
