// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import * as ActiveStorage from "@rails/activestorage";
import "@fortawesome/fontawesome-free";
import "..assets/stylesheets/application"

import "@fortawesome/fontawesome-free";
import "..assets/stylesheets/application"

require("@rails/ujs").start()

var jQuery = require("jquery")
global.$ = global.jQuery = jQuery
window.$ = window.jQuery = jQuery

require("bootstrap")
// require("@fortawesome/fontawesome-free")

import "toastr";
import toastr from 'toastr';
toastr.options = {
    progressBar: true,
    "positionClass": "toast-top-right",
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
global.toastr = toastr;

console.log("application.js working")

require("./packs/includes/properties.js");

 






// const { environment } = require('@rails/webpacker')


module.exports = environment
// export default environment