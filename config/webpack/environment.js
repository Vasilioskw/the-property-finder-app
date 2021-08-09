const { environment } = require('@rails/webpacker')


const webpack = require('webpack')
environment.plugins.prepend('Provide', 
    new webpack.ProvidePlugin({
         $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery',
        popper: ['popper.js', 'default']
    })
)

// module.exports = environment

export default environment