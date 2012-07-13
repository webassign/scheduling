define([
	'jQuery',
	'Underscore',
	'Backbone',
	'Handlebars',
	'moment',
	'model/Week',
	'text!templates/week.html'
], function($, _, Backbone, Handlebars, moment, Week, template) {
	return WeekView = Backbone.View.extend({

		template: Handlebars.compile(template),
		events: {
			'click .week': 'changeWeek'
		},

		initialize: function() {},

		render: function() {
			var self = this,
				data = {
					weeks: this.options.weeks.toJSON()
				};
			$.each(data.weeks, function(key, week) {
				week.first_day = self.formatDate(week.start);
			});
			this.$el.html(this.template(data));
			return this;
		},

		formatDate: function(timestamp) {
			return moment.unix(timestamp).format('MMM D');
		},

		changeWeek: function (event) {
			var number = $(event.currentTarget).data('week-num');
			this.$el.find('[data-week-num="'+number+'"]').addClass('selected');
			console.log(number);
		}
	});
});