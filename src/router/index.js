const { Router } = require("express");
const { products} = require("../shopping/list");


const router = Router();


let cartCookiesMiddleware = ( req, res, next)=>{
    const cartIds = JSON.parse(req.cookies.cart);
    req.cartIds = cartIds;
    next();
}
router.use(cartCookiesMiddleware);

let populateItemIds = (itemIds) =>{
    return itemIds.map(id => products.find(p=> p.id === id));
}


router.get('/cart', (req, res) => {
    
    // console.log(cart);
    const cartProducts  = req.cartIds.map(id=> products.find(p=> p.id === id))

    // const {userId} = req.params;
    // let shoppingCart = shoppingCarts.find(cart => cart.userId === userId);
    // res.json(shoppingCart.itemIds);

    res.json(cartProducts);
})


router.post('/cart', (req, res) => {
   
    const {itemId} = req.body;

    const updatedCartIds = [...req.cartIds, itemId]
    const updatedCartProducts = populateItemIds(updatedCartIds)
    res.cookie('cart', JSON.stringify(updatedCartIds));
    res.json(updatedCartProducts);
});


router.delete('/cart/:itemId', (req, res) => {
    const {itemId} = req.params;

    const updatedCartIds = req.cartIds.filter(id => id !== itemId)
    const updatedCartProducts = populateItemIds(updatedCartIds)
    res.cookie('cart', JSON.stringify(updatedCartIds));

    res.json(updatedCartProducts);
});


module.exports = router, cartCookiesMiddleware;