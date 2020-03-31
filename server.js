const express = require('express')
const debug = require('debug')('http')
const app = express()

app.use(express.json({ extended: false }))
app.use('/api', require('./routes/api'))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	debug('listening')
	console.log(`App listening on port: ${PORT}`)
})
