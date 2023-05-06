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
        cy.visit(url, { timeout: 10000, retryOnStatusCodeFailure: true, retryOnNetworkFailure: true });
        cy.url().should('include', url)
    }
}
module.exports = Utils