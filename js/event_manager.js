define([
    'jQuery'
],
function($) {
    function on(events, selector, data, handler){
        return dispatcher.on(events, selector, data, handler);
    }

    function trigger(eventType, extraParameters){
        return dispatcher.triggerHandler(eventType, extraParameters);
    }

    EventManager = function() {
        obj.on      = on;
        obj.trigger = trigger;
    }

    var dispatcher = $({});

    return EventManager;
});