const _popularItems = '#homefeatured'
const _searchBar = '#search_query_top'
const _searchButton = '[name="submit_search"]'

const testData = require('../helpers/test_data.json')
const utils = require('../helpers/utils')

class HomePage
{
    static homePageUrl()
    {
       utils.urlAndAssert(testData.baseUrl)
    }

    static popularItemsAssertion()
    {
        cy.get(_popularItems).should('have.length', 7).each(($item) =>{
        cy.log($item.text())
        })
    }

    static blouseSearch()
    {
        utils.typeText(_searchBar, testData.blouseSearch)
        utils.clickElement(_searchButton)
    }
}
module.exports = HomePage