const express = require('express')
const debug = require('debug')('http')
const Data = require('../../middleware/Data')

const router = express.Router()

router.post('/', [Data], (req, res) => {
	try {
		const cartItems = req.body.cartItems
		const { usdRate, eurRate } = req.usdAndEurRate
		debug(cartItems)

		totalPriceInRub = cartItems.reduce(
			(total, { quantity, currency, price }) => {
				switch (currency) {
					case 'RUB':
						return total + quantity * price
					case 'USD':
						return total + quantity * price * usdRate
					case 'EUR':
						return total + quantity * price * eurRate
					default:
						return total
				}
			},
			0
		)

		const totalPrice = [
			{key: 1, RUB: totalPriceInRub.toFixed(2), USD: (totalPriceInRub / usdRate).toFixed(2), EUR: (totalPriceInRub / eurRate).toFixed(2) },
		]
		debug('totalPrice')
		debug(totalPrice)
	    res.json(totalPrice)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
})

module.exports = router
