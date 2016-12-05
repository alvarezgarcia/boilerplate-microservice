import S from 'seneca'

const seneca = S({log: 'test'})

seneca.add({role: 'items', cmd: 'find'}, (msg, done) => {
	done(null, {id: 0})
}).
add({role: 'items', cmd: 'findAll'}, (msg, done) => {
	done(null, [{id: 0}, {id: 1}])
}).
use('mesh', {
	isbase: true,
	pin: 'role:items'
})
/*
var Seneca = require('seneca')({log: 'test'})

Seneca.add('format:hex', function (msg, done) {

    // red is the only color supported!
	var color = 'red' === msg.color ? '#FF0000' : '#FFFFFF'

	done(null, {
		color: color
	})
})
.use('mesh', {
	isbase: true,
	pin: 'format:hex'
})
*/
