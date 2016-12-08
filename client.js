import express from 'express'
import Seneca from 'seneca'

const app = express()

const opts =  {
  seneca: {
    tag: 'api'
  },
  mesh: {
    bases: [
      "127.0.0.1:39000",
      "127.0.0.1:39001"
    ]
  }
}


Seneca(opts.seneca).
use('mesh', opts.mesh).
ready( function () {

    let seneca = this

		app.get('/items', (req, res) => {
			seneca.act({role: 'items', cmd: 'findAll'}, (err, out) => {
        res.json(out)
			})
		})

		app.get('/items/:id', (req, res) => {
			seneca.act({role: 'items', cmd: 'find'}, (err, out) =>  {
        res.json(out)
			})
		})

		app.listen(8000, () => {
			console.log('Started')
		})
})

