const _popularItems = '#homefeatured'
const _searchBar = '#search_query_top'
const _searchButton = "button[name='submit_search']"

const testData = require('../helpers/test_data.json')
const utils = require('../helpers/utils')

class HomePage
{
    static homePageUrl()
    {
       utils.urlAndAssert(testData.baseUrl)
       //cy.visit("https://prestashop.ryviushop.com/")
    }

    static popularItemsAssertion()
    {
        cy.wrap(_popularItems).should('have.length', 13)
    }

    static blouseSearch()
    {
        cy.wait(5000)
        cy.get("#search_query_top", { timeout: 10000 }).should("be.visible");
        utils.typeText(_searchBar, testData.blouseSearch)
        utils.clickElement(_searchButton)
    }
}
module.exports = HomePage