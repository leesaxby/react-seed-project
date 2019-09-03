describe('Home Page', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('http://localhost:9999');
    });
    it('successfully clicks on Add Item ', () => {
        // eslint-disable-next-line no-undef
        cy.get('[data-test-id="todo-add-item"]').click();
    });

    it('accepts input', () => {
        const text = 'some text';

        // eslint-disable-next-line no-undef
        cy.get('[type="text"]')
            .type(text)
            .should('have.value', text);
    });
});
