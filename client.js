import express from 'express'
import S from 'seneca'

const seneca = S({log: 'test'})
const app = express()


seneca.use('mesh').
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

