define([
	'jQuery',
	'Underscore',
	'Backbone',
	'Handlebars',
	'model/Rule',
	'model/Week',
	'model/Assignment',
	'model/Deployment',
	'model/CourseDeployment',
	'model/SectionDeployment',
	'view/week'
], function($, _, Backbone, Handlebars, Rule, Week, Assignment, Deployment, CourseDeployment, SectionDeployment, WeekView) {

	// Collections
	var SectionDeploymentCollection = Backbone.Collection.extend({
		model: SectionDeployment,

		comparator: function(sectionDeployment) {
			sectionDeployment.get('name');
		}
	});

	var AssignmentCollection = Backbone.Collection.extend({
		model: Assignment,

		comparator: function(assignment) {
			return assignment.get('name');
		}
	});

	var CourseDeploymentCollection = Backbone.Collection.extend({
		model: CourseDeployment,

		comparator: function(courseDeployment) {
			return courseDeployment.get('assignment_id');
		}
	});

	var WeekCollection = Backbone.Collection.extend({
		model: Week,

		comparator: function(week) {
			return week.get('number');
		}
	})

	// Views
	var AppView = Backbone.View.extend({
		initialize: function() {
			var weeks = new WeekCollection([new Week({number: 1}), new Week({number: 2}), new Week({number: 3})]);
			this.week_picker = new WeekView({el: $('#week_picker'), weeks: weeks});
			this.week_picker.render();
		}
	});

	return new AppView();
});
