define([
	'jQuery',
	'Underscore',
	'Backbone'
], function($, _, Backbone) {
	return Rule = Backbone.Model.extend({
		defaults: function() {
			return {
				type: "due",
				relative_to: "today",
				unit: "days",
				quantity: 0,
				time: "23:45:43",
				meet_day: null
			};
		},

		initialize: function() {},
		validate: function() {}
	});
});