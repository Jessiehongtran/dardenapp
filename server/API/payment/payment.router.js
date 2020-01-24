const router = require("express").Router();
const stripe = require('stripe')('sk_test_hUaCZqgcFBl9qGN8kSF9EkWz002TofxCyY');

router.post('/', async (req, res) => {
    try {
        const {amount, source, receipt_email} = req.body

        console.log(amount, source, receipt_email)

        const charge = await stripe.charges.create({
            amount,
            currency: 'usd',
            source,
            receipt_email
        })

        console.log('charge', charge)

        if (!charge) throw new Error('charge unsuccessfuk')

        res.status(200).json({
            message: 'charge posted successfully',
            charge
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})
router.all('*', (_, res) => {
    res.json({message: 'please make a POST request to /stripe/charge'})
})

module.exports = router;