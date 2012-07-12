define([
	'jQuery',
	'Underscore',
	'Backbone'
], function($, _, Backbone) {
	return Assignment = Backbone.Model.extend({
		defaults: function() {
			return {
				name: "foo",
				id: 345,
				category: "bar"
			};
		},

		initialize: function() {}
	});
});