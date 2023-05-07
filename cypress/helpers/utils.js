class Utils
{
    static clickElement(locator)
    {
        cy.get(locator).click()
    }

    static typeText(locator, text)
    {
        cy.get(locator).type(text)
    }

    static urlAndAssert(url)
    {
        cy.visit(url, { timeout: 30000, retryOnStatusCodeFailure: true, retryOnNetworkFailure: true });
        cy.wait(5000)
        cy.url().should('include', url)
    }
}
module.exports = Utils