const _productList = '[class="product_list grid row"]'

class ProductPage
{
    static assertBlouseListings()
    {
        cy.get(_productList).each(($element) =>
         {
            cy.wrap($element).should('contain', 'blouse').then(() => 
            {
              cy.log($element.text())

              if (index === 0) 
              {
                cy.wrap($element).click()
              }

            })
          })
    }

    static assertTheUrlOfTheProduct()
    {
        cy.url().should('eq', 'https://prestashop.ryviushop.com/blouses/2-blouse.html?search_query=blouse&results=1')
    }
}
module.exports = ProductPage