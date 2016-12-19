'use strict'

exports.render = (req, res) => {
	if (req.session.lastVisit) {
		console.log(`last visit ${req.session.lastVisit}`)
	}

	req.session.lastVisit = new Date()

	res.render('index', {title: 'Hello World, Run Maeve Run!'})
}
