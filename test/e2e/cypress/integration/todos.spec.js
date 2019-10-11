describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('successfully clicks on Add Item ', () => {
        cy.get('[data-testid="todo-add-item"]').click();
    });

    it('accepts text input', () => {
        const text = 'some text';

        cy.get('[type="text"]')
            .type(text)
            .should('have.value', text);
    });
    it('creates new todo', () => {
        const text = 'some new text';
        cy.get('[type="text"]')
            .type(text)
            .type('{enter}')
            .should('have.value', '');

        cy.get('[data-testid="todo-item"]').should('have.length', 4);
    });
    it('checks off an item', () => {
        cy.get('[data-testid="todo-item"]').first().click();
        cy.get('[data-testid="todo-item"]').should('have.length', 2);
    });
});
