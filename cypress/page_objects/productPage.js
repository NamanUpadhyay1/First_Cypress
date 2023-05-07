const Utils = require("../helpers/utils")

const _productList = '[class="product_list grid row"]'
const _productClick = '[src="https://prestashop.ryviushop.com/7-home_default/blouse.jpg"]'

class ProductPage
{
    static assertBlouseListings()
    {
        cy.get(_productList).each(($element) =>
         {
            cy.wrap($element).should('contain', 'blouse').then(() => 
            {
              cy.log($element.text())
            })
            Utils.clickElement(_productClick)
          })
    }

    static assertTheUrlOfTheProduct()
    {
        cy.url().should('eq', 'https://prestashop.ryviushop.com/blouses/2-blouse.html?search_query=blouse&results=1')
    }
}
module.exports = ProductPage