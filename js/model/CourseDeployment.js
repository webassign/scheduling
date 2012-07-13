define([
	'jQuery',
	'Underscore',
	'Backbone',
	'model/Rule',
	'model/Deployment',
	'model/SectionDeployment'
], function($, _, Backbone, Rule, Deployment) {
	return CourseDeployment = Deployment.extend({
		defaults: function() {
			return {
				assignment_id: null,
				sections: new SectionDeploymentCollection()
			};
		},

		initialize: function() {},
		validate: function() {}
	});
});