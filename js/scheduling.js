define([
	'jQuery',
	'Underscore',
	'Backbone',
	'Handlebars',
	'EventManager',
	'model/Rule',
	'model/Week',
	'model/Assignment',
	'model/Deployment',
	'model/CourseDeployment',
	'model/SectionDeployment',
	'view/week',
	'view/schedule'
], function($, _, Backbone, Handlebars, EventManager, Rule, Week, Assignment, Deployment, CourseDeployment, SectionDeployment, WeekView, ScheduleView) {

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

	// main app view
	var AppView = Backbone.View.extend({
		initialize: function() {
			var weeks = new WeekCollection([new Week({number: 1}), new Week({number: 2}), new Week({number: 3})]);
			this.week_picker = new WeekView({el: $('#week_picker'), weeks: weeks});
			this.week_picker.render();

			this.schedule = new ScheduleView({el: $('#schedule'), week: new Week({number: 2}), assignments: new AssignmentCollection([])});
			this.schedule.render();
		}
	});

	return new AppView();
});
