define([
	'jQuery',
	'Underscore',
	'Backbone'
], function($, _, Backbone) {
	return Week = Backbone.Model.extend({
		defaults: function() {
			return {
				number: 3,
				start: 1341602310,
				end: 1342207081,
			};
		},

		initialize: function() {},
		validate: function() {}
	});
});