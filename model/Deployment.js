define([
	'jQuery',
	'Underscore',
	'Backbone',
	'model/Rule'
], function($, _, Backbone, Rule) {
	return Deployment = Backbone.Model.extend({
		defaults: function() {
			return {
				week_number: 0,
				rule_set: {
					due: new Rule(),
					first: new Rule(),
					last: new Rule()
				},
				restrictions: false
			};
		},

		initialize: function() {},
		validate: function() {}
	});
});