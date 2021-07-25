// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"



require("@rails/ujs").start()

require("jquery");
require("./includes/properties");

var jQuery = require("jquery")
global.$ = global.jQuery = jQuery
window.$ = window.jQuery = jQuery

require("bootstrap");

require(".includes/properties");



Rails.start()
ActiveStorage.start()


// const { environment } = require('@rails/webpacker')



module.exports = environment