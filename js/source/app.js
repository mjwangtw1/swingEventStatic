
'use strict';
console.log('Hello this is app.js 1843');

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
    //console.log();

    var allList = msg.body.items;
    var regular_Events = allList[2];
    var hotEvent = allList[4];
    var suggEvent = allList[7];
    console.log(allList);

    //Mount Hit Events
    $("#template_hot").tmpl(hotEvent).appendTo("#hot_event");

    //Mount Regular Events - here add loops later
    $("#template_items").tmpl(regular_Events).appendTo(".mentionEventList");

    //Mount the Rest
    $("#template_sugg").tmpl(suggEvent).appendTo(".allEventList");

});
