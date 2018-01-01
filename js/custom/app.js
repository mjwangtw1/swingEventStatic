'use strict';

console.log('Hello this is app.js 1634');

var SwingEventApi = ' https://f2qiac05il.execute-api.us-west-2.amazonaws.com/master';
var inputType = 'swing';

$.ajax({
    method: "POST",
    url: SwingEventApi,
    contents: { 'type' : 'swing'},
    data: JSON.stringify ({ type: inputType}),
    dataType: 'json',
    contentType: 'application/json'
})
.done(function( msg ) {
    //alert( "Api Result " + msg );
    console.log(msg);
});