'use strict';

console.log('Hello this is app.js 1631');

var SwingEventApi = ' https://f2qiac05il.execute-api.us-west-2.amazonaws.com/master';

$.ajax({
    method: "POST",
    url: SwingEventApi,
    data: { name: "John", location: "Boston" }
})
.done(function( msg ) {
    alert( "Api Result " + msg );
});