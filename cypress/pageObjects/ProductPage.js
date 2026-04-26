class ProductPage
{
    productUrl()
    {
        return cy.url();
    }
    getShopName(){
        return cy.get('h1.my-4');
    }
    addProducts(){
        cy.get('.card.h-100').find('.btn').each(($e1, index, $list)=>{
            cy.wrap($e1).click();
            
        })
    }
    checkOutButton()
    {
       return cy.get('.btn-primary');
    }
    checkItemsInStock(){
        
    }

} export default ProductPage;