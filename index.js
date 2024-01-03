const express = require('express')
const Razorpay=require('razorpay')
const app = express()
const path = require('path');
const router = express.Router();
app.use(express.json())
app.get('/', (req, res) => {
    res.send("hi")
});


app.get('/payment',(req, res) =>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
    console.log(__dirname)
});   
app.post('/order', async(req, res) => {
    const amount = req.body.amount

    var instance = new Razorpay({
        key_id:"rzp_test_Kkhlwm7ClOQXaZ",
        key_secret:"FeEPfmxESK5Y0BNAbTt63Q31",
    });
    var option = {
        amount: amount*100,
        currency: "INR",
        receipt: 'order_rcptid_11'
    };
    // instance.orders.create(option, function (error, order) {
    //     console.log(order);
    //  });
    const myOrder = await instance.orders.create(option)

    res.status(200).json({
        sucess: true,
        amount,
        order:myOrder
    })
});





app.listen(1234, () => { 
    console.log("port is connect")
})
