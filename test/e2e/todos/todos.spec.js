describe('Home Page', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('http://localhost:9999');
    });
    it('successfully clicks on Add Item ', () => {
        // eslint-disable-next-line no-undef
        cy.get('[data-test-id="todo-add-item"]').click();
    });

    it('accepts text input', () => {
        const text = 'some text';

        // eslint-disable-next-line no-undef
        cy.get('[type="text"]')
            .type(text)
            .should('have.value', text);
    });
    it('creates new todo', () => {
        const text = 'some new text';
        // eslint-disable-next-line no-undef
        cy.get('[type="text"]')
            .type(text)
            .type('{enter}')
            .should('have.value', '');

        // eslint-disable-next-line no-undef
        cy.get('[data-test-id="todo-item"]').should('have.length', 4);
    });
    it('checks off an item', () => {
        // eslint-disable-next-line no-undef
        cy.get('[data-test-id="todo-item"]').first().click();
        // eslint-disable-next-line no-undef
        cy.get('[data-test-id="todo-item"]').should('have.length', 2);
    });
});
