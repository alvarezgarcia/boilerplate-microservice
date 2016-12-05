// color-client.js
var Seneca = require('seneca')

Seneca({log: 'test'})

// load the mesh plugin
.use('mesh')

.ready( function () {
    var seneca = this

    seneca.act({role: 'items', cmd: 'find'}, function (err, out) {

        console.log(out)

        // disconnect from the network
        this.close()
    })

		seneca.act({role: 'items', cmd: 'findAll'}, function (err, out) {

        // prints #FF0000
        console.log(out)

        // disconnect from the network
        this.close()
    })

})
