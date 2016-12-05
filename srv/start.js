import S from 'seneca'

const seneca = S({log: 'test'})

seneca.add({role: 'items'}, (msg, done) => {
	let r = ''

	switch(msg.cmd) {
		case 'find':
			r = {id: 0}
			break
		case 'findAll':
			r = [{id: 0}, {id: 1}]
			break
		default:
			r = {}
	}

	done(null, r)
}).
use('mesh', {
	isbase: true,
	pin: 'role:items'
})
