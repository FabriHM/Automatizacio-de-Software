import { iniciarSesion } from "./login.cy.js";
describe('Editar el nombre del usuario', () => { 

    before(() => {
        iniciarSesion();
    });
        
    it('Editar nombre del usuario insertando numeros', () => { 
        cy.visit('http://localhost:2368/ghost/#/settings/staff/fabricio');

        cy.wait(5000);

        cy.get('#user-name').clear();

        // Obtener el campo de entrada y borrar su contenido (si lo hay)
        cy.get('#user-name').type('123456789');

        cy.contains('Save').click();
        cy.wait(2000);
    }); 
}); 
