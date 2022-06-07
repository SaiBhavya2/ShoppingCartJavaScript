let totalPrice =0;
function shoppingCart(productName,quantity,process) {
    const products = [
        {
            name:"Apple",
            price:"$2"
        },
        {
            name:"orange",
            price:"$3"
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

const  cart = (productName,quantity,process) =>{
    console.log(productName,quantity)
    if(process === "add"){
        for(let obj in products){
            if(productName === products[obj].name) {
            totalPrice+= Number(products[obj].price.split("$")[1]*quantity);
            }
        }
    } else if(process === "remove"){
        for(let obj in products){
            if(productName === products[obj].name){
                totalPrice-=Number(products[obj].price.split("$")[1]*quantity);
            }
        }
    }
    return totalPrice;
    }
    return cart(productName,quantity,process);

};

module.exports=shoppingCart;
