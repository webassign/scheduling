define([
	'jQuery',
	'Underscore',
	'Backbone'
], function($, _, Backbone) {
	return Week = Backbone.Model.extend({
		defaults: function() {
			return {
				number: 3,
				start: 384762389,
				end: 290834008
			};
		},

		initialize: function() {},
		validate: function() {}
	});
});