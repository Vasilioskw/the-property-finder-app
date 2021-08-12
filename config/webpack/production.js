process.env.NODE_ENV = process.env.NODE_ENV || 'production'


const webpack = require('webpack')
environment.plugins.prepend('Provide', 
    new webpack.ProvidePlugin({
         $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery',
        popper: ['popper.js', 'default']
    })
)

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

// export default production