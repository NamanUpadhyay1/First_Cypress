const home_page = require('../page_objects/home')
const product_page = require('../page_objects/productPage')

describe('Verify the user is able to see all the 7 popular products on the home page', () => 
{
  it('Redirecting to the correct URL', () => 
  {
    home_page.homePageUrl()
  })

  it('Asserting the presence of 7 popular items on the home page', () => 
  {
    home_page.popularItemsAssertion()
  })
})

describe('Verify the user is able to search for blouse', ()=>
{
  it('Search for the product blouse and click the first product', ()=>
  {
    home_page.homePageUrl()
    home_page.blouseSearch()
    product_page.assertBlouseListings()
    product_page.assertTheUrlOfTheProduct()
  })
})