define([
	'jQuery',
	'Underscore',
	'Backbone',
	'Handlebars',
	'moment',
	'model/Week'
], function($, _, Backbone, Handlebars, moment, Week) {
	return WeekView = Backbone.View.extend({

		template: Handlebars.compile('<div>{{#each weeks}}<div class="week" data-week_num="{{{number}}}"><span class="week_num">{{{number}}}</span><span class="first_day">{{{first_day}}}</span></div>{{/each}}</div>'),
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
			var number = $(event.currentTarget).data('week_num');
			this.$el.find('[data-week_num="'+number+'"]').addClass('selected');
			console.log(number);
		}
	});
});