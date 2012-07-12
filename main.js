require.config({
	paths: {
		jQuery:     'lib/jquery-1.7.2',
		Underscore: 'lib/underscore',
		Backbone:   'lib/backbone',
		Handlebars: 'lib/handlebars',
		moment:     'lib/moment',
		model:      'model',
		view:       'view'
	},
	shim: {
		'Backbone': {
			deps:    ['Underscore', 'jQuery'],
			exports: 'Backbone'
		},
		'Handlebars': {
			exports: 'Handlebars'
		},
		'jQuery': {
			exports: '$'
		},
		'Underscore': {
			exports: '_'
		}
	}
});

require([
	'scheduling'
], function(App){});