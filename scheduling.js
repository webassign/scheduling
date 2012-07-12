$(function(){

	// Models
	var Rule = Backbone.Model.extend({
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

	var Week = Backbone.Model.extend({
		defaults: function() {
			return {
				number: 3,
				start: formatDate(new Date().getTime()/1000),
				end: 290834008
			};
		},

		initialize: function() {},
		validate: function() {}
	});

	var Assignment = Backbone.Model.extend({
		defaults: function() {
			return {
				name: "foo",
				id: 345,
				category: "bar"
			};
		},

		initialize: function() {}
	});

	var Deployment = Backbone.Model.extend({
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

	var CourseDeployment = Deployment.extend({
		defaults: function() {
			return {
				assignment_id: null,
				sections: new SectionDeploymentCollection()
			};
		},

		initialize: function() {},
		validate: function() {}
	});

	var SectionDeployment = Deployment.extend({
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
	var WeekView = Backbone.View.extend({

		template: Handlebars.compile('<div>{{#each week}}<div class="week" data-week_num="{{{number}}}"><span class="week_num">{{{number}}}</span><span class="first_day">{{{start}}}</span></div>{{/each}}</div>'),
		events: {
			'click .week': 'changeWeek'
		},


		initialize: function() {},

		render: function() {
			this.$el.html(this.template({week: this.model.toJSON()}));
			return this;
		},

		changeWeek: function (event) {
			var number = $(event.currentTarget).data('week_num');
			
		}
	});

	var App = Backbone.View.extend({
		initialize: function() {
			var weeks = new WeekCollection([new Week({number: 1}), new Week({number: 2}), new Week({number: 3})]);
			this.week_picker = new WeekView({el: $('#week_picker'), model: weeks});
			this.week_picker.render();
		}
	});

	window.app = new App();

	function formatDate(timestamp) {
		var date = new Date(timestamp * 1000);
		return date.toLocaleDateString();
	}











});
