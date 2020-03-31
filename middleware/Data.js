const axios = require('axios')

module.exports = async function(req, res, next) {
	try {
		const {
			data: { Valute: valute },
		} = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')

		usdAndEurRate = { usdRate: valute.USD.Value, eurRate: valute.EUR.Value }

		req.usdAndEurRate = usdAndEurRate

		next()
	} catch (err) {
		res.status(500).send('Server Error')
	}
}
