define([
	'jQuery',
	'Underscore',
	'Backbone',
	'Handlebars',
	'moment',
	'model/Assignment',
	'view/assignment',
	'text!templates/schedule.html'
], function($, _, Backbone, Handlebars, moment, Assignment, AssignmentView, template) {
	return WeekView = Backbone.View.extend({

		template: Handlebars.compile(template),
		events: {},
		assignmentViews: {},

		initialize: function() {
			self = this;
			$.each(this.options.assignments, function(key, assignment) {
				self.assignmentViews[assignment.get('id')] = new AssignmentView({model: assignment});
			});
		},

		render: function() {
			var self = this,
				start = moment.unix(this.options.week.get('start')),
				end = moment.unix(this.options.week.get('end'));

			var data = {
				current_week: {
					number:      this.options.week.get('number'),
					start_month: start.format('MMM'),
					start_day:   start.format('D'),
					end_month:   end.format('MMM'),
					end_day:     end.format('D'),
					same_month:  start.month() == end.month()
				}
			};
			
			this.$el.html(this.template(data));
			return this;
		},
	});
});