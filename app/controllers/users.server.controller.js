'use strict'

const User = require('mongoose').model('User')

exports.create = (req, res, next) => {
	const user = new User(req.body)

	user.save( err => {
		if (err) {
			return next(err)
		} else {
			res.json(user)
		}
	})
}