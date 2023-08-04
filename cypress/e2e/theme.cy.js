import { iniciarSesion } from "./login.cy";
describe('Prueba de Inicio de Sesión y Cambio de Tema', () => {

    before(() => {
        iniciarSesion();
    });

    it('Iniciar sesión con éxito y cambiar el tema', () => {
  
      cy.wait(2000);
  

      cy.get('.nightshift-toggle').then(($button) => {
        const isDarkTheme = $button.find('.moon').is(':visible');
  

        cy.get('.nightshift-toggle').click();
  

        if (isDarkTheme) {

          cy.get('.sun').should('be.visible');
        } else {

          cy.get('.moon').should('be.visible');
        }
      });
    });
  });
