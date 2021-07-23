// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs").start();


const webpack = require('webpack')
environment.plugins.prepend('Provide', 
    new webpack.ProvidePlugin({
         $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery',
        popper: ['popper.js', 'default']
    })
)

require("bootstrap");
require("./includes/properties");

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"

Rails.start()
ActiveStorage.start()


const { environment } = require('@rails/webpacker')



module.exports = environment
