class ShoppingCart{
    
    
    ShoppingCart(productName,quantity) {
        this.productName = productName;
        this.quantity = quantity;
    }

product(){
    const products = [
        {
            name:"Apple",
            price:"$4.95"
        },
        {
            name:"orange",
            price:"$3.99"
        },{
            name:"Mango",
            price:"$3"
        },{
            name:"banana",
            price:"$5"
        },{
            name:"pineapple",
            price:"$3"
        },{
            name:"jackfruit",
            price:"$10"
        }
    ]

    return products;
}

addProduct(productName,quantity) {
    const products = this.product();
    for(let obj in products){
        const splitp = Number(products[obj].price.split("$")[1]);
        
        console.log("splitp"+splitp);
        var totalPrice =0;
        if(productName.toLowerCase() === products[obj].name.toLocaleLowerCase()) {
            console.log("splitp"+splitp);
            totalPrice += (splitp * quantity); 
        }
            
        
    }
    
    return totalPrice.toFixed(2); 
}

removeProduct(productName,quantity) {
    const products = this.product();
    for(let obj in products){
        const splitp = Number(products[obj].price.split("$")[1]);
        
        var totalPrice =0;
        if(productName.toLowerCase() === products[obj].name.toLocaleLowerCase()) {
            totalPrice -= (splitp * quantity); 
        }
        
    }
    return totalPrice.toFixed(2); 

}
    




}

module.exports=ShoppingCart;
