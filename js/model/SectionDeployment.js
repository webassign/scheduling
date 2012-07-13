define([
	'jQuery',
	'Underscore',
	'Backbone',
	'model/Rule',
	'model/Deployment'
], function($, _, Backbone, Rule, Deployment) {
	return SectionDeployment = Deployment.extend({
		defaults: function() {
			return {
				section_name: null,
				due: 0,
				first: 0,
				last: 0,
				scheduled: true
			};
		},

		initialize: function() {},
		validate: function() {}
	});
});