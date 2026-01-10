describe('Form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test subscribe form', () => {
        cy.contains(/Testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('test@test.com')
        cy.contains(/Successfully subbed: test@test.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: test@test.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: test@test.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('test@test.io')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: test@test.io!/i).should('exist')

        cy.get('@subscribe-input').clear()
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
    })
}
)