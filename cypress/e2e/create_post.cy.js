import { iniciarSesion } from "./login.cy.js";
describe('Crear un nuevo post en Ghost Admin', () => { 

    before(() => {
        iniciarSesion();
    });
        
    it('Crea un post con título y contenido', () => { 
        cy.visit('http://localhost:2368/ghost/#/dashboard');
    // Ir a la página para crear un nuevo post 
            
        cy.get('a[data-test-nav="new-story"]').click(); 
        cy.get('textarea.gh-editor-title').type('Título de mi nuevo post'); // Usamos la clase 'gh-editor-title' para identificar el textarea del título 
        cy.get('div.koenig-editor__editor').type('Contenido de mi nuevo post'); // Usamos la clase 'koenig-editor__editor' para identificar el div del contenido 
            
        // Publicar el post 
        cy.contains('button', 'Publish').click();    
        cy.get('div.gh-publish-setting-trigger').first().click();
        cy.get('button[data-test-button="continue"]').click();
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.get('button[data-test-button="close-publish-flow"]').click();
        cy.get('a[data-test-link="posts"]').click();
    }); 
}); 
