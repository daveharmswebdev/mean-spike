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

exports.list = (req, res, next) => {
	User.find({}, (err, users) => {
		if (err) {
			return next(err)
		} else {
			res.json(users)
		}
	})
}

exports.read = (req, res) => {
	console.log('req.user', req.user)
	res.json(req.user)
}

exports.userByID = (req, res, next, id) => {
	console.log('id', id)
	User.findOne({
		_id: id
	}, (err, user) => {
		if (err) {
			return next(err)
		} else {
			req.user = user
			next()
		}
	})
}