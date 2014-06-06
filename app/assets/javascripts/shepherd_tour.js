var startShepherdTour = function () {
  var shepherd;

  shepherd = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-element shepherd-open shepherd-theme-arrows'
    }
  });

  Shepherd.mediator = new Shepherd.Evented;
  Shepherd.mediator.on('dashboardRendered', shepherd.next);
  Shepherd.mediator.on('projectsRendered', shepherd.next);

  shepherd.addStep('welcome', {
    text: 'Welcome to Pyramid! We strive to make collabaration stream-lined & efficent ' + 
    'to help you succeed in your professional, academic, & even personal endeavors.',
    attachTo: '#start_here',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
	    {
	        text: 'Sign In',
	        classes: 'shepherd-button-example-primary',
	        action: function() {
	        	shepherd.next;
	        	window.location = '/session/new';
	        }
	    },
      	{
	        text: 'Hide',
	        classes: 'shepherd-button-primary',
	        action: function () {
	          endShepherdTour(shepherd);
	        }
      	}
    ]
  });

  shepherd.addStep('explainDemos', {
    text: 'If you are not a Pyramid user, please feel free to sign in with one of our demo accounts. ' + 
    'We hope you find Pyramid useful in your professional, academic, & personal endeavors.',
    attachTo: '.form-container',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
	    {
	        text: 'Next',
	        classes: 'shepherd-button-example-primary',
	        action: function() {
	          window.location = '#projects';
	          shepherd.next;
	        }
	    },
      	{
	        text: 'End',
	        classes: 'shepherd-button-primary',
	        action: function () {
	          endShepherdTour(shepherd);
	        }
      	}
    ]
  });

  shepherd.addStep('explainDashboard', {
    text: 'Phoream',
    attachTo: '#photostream-low-nav-link bottom',//'#photostream-low-nav-link bottom',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: shepherd.back
      }, {
        text: 'Finish',
        action: function () {
          Backbone.history.navigate('#photos/favorites', { trigger: true });
          endShepherdTour(shepherd);
        }
      }
    ]
  });

  shepherd.start();
}

var endShepherdTour = function (shepherd) {
  Shepherd.mediator.off('dashboardRendered');
  Shepherd.mediator.off('projectsRendered');

  shepherd.cancel();
}