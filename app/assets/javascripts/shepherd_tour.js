var startShepherdTour = function () {
  var shepherd;

  shepherd = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
      // showCancelLink: true       // TODO: get this link working
    }
  });

  Shepherd.mediator = new Shepherd.Evented;
  Shepherd.mediator.on('dashboardRendered', shepherd.next);
  Shepherd.mediator.on('albumIndexRendered', shepherd.next);
  Shepherd.mediator.on('photoUploadRendered', shepherd.next);
  Shepherd.mediator.on('albumNewRendered', shepherd.next);
  Shepherd.mediator.on('photoFavoritesRendered', shepherd.next);
  // Shepherd.mediator.on('photoExploreRendered', shepherd.next);

  shepherd.addStep('welcome', {
    text: 'Welcome to Pyramid. We make collabaration stream-lined and efficent-- ' + 
    'in the professional, academic, & personal spheres. If you would prefer to roam our site ' + 
    'on your own, please feel free to deactivate our site tour below. We hope you enjoy!',
    attachTo: '#start_here',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
	    {
	        text: 'Next',
	        classes: 'shepherd-button-example-primary',
	        action: function() {
	          window.location = 'http://www.thepyramidapp.com/session/new';
	          shepherd.next;
	        }
	    },
      	{
	        text: 'Deactivate Tour',
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
	    // {
	    //     text: 'Next',
	    //     classes: 'shepherd-button-example-primary',
	    //     action: function() {
	    //       window.location = 'http://www.thepyramidapp.com/session/new';
	    //       shepherd.next;
	    //     }
	    // },
      	{
	        text: 'End',
	        classes: 'shepherd-button-primary',
	        action: function () {
	          endShepherdTour(shepherd);
	        }
      	}
    ]
  });
  shepherd.addStep('photostream', {
    title: 'Photostream',
    text: 'Photos that you uploaded will appear in your Photostream',
    attachTo: '#photostream-low-nav-link bottom',//'#photostream-low-nav-link bottom',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: shepherd.back
      }, {
        text: 'Next',
        action: function () {
          Backbone.history.navigate('#photos/favorites', { trigger: true });
        }
      }
    ]
  });

  shepherd.addStep('favorites', {
    title: 'Favorites',
    text: 'Your favorites is a collection of all photos that you have ' +
      'starred.',
    attachTo: '#favorites-low-nav-link bottom',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: shepherd.back
      }, {
        text: 'Next',
        action: function () {
          Backbone.history.navigate('#albums', { trigger: true });
        }
      }
    ]
  });

  shepherd.addStep('albums', {
    title: 'Albums',
    text: 'You can organize your photos into albums, which will be displayed here',
    attachTo: '#albums-low-nav-link bottom',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: shepherd.back
      }, {
        text: 'Next',
        action: function () {
          Backbone.history.navigate('#albums/new', { trigger: true });
        }
      }
    ]
  });

  shepherd.addStep('newAlbums', {
    title: 'New Albums',
    text: 'To create new albums, simply drag and drop your photos listed ' +
      'below into the center pane.',
    attachTo: '#instruction-text-2 bottom',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: shepherd.back
      }, {
        text: 'Next',
        action: function () {
          Backbone.history.navigate('#photos/explore', { trigger: true });
          shepherd.next();
        }
      }
    ]
  });

  shepherd.addStep('explorePhotos', {
    title: 'Explore Photos',
    text: 'You can scroll through this page of photos, which is populated ' +
      'with the most popular photos on Flickr. Try scrolling to the bottom,' +
      'see if you can!',
    // attachTo: '#instruction-text-2 bottom',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-secondary',
        action: shepherd.back
      }, {
        text: 'Done',
        classes: 'shepherd-button-secondary',
        action: function () {
          endShepherdTour(shepherd);
        }
      }
    ]
  });

  shepherd.start();
}

var endShepherdTour = function (shepherd) {
  Shepherd.mediator.off('photostreamRendered');
  Shepherd.mediator.off('albumIndexRendered');
  Shepherd.mediator.off('photoUploadRendered');
  Shepherd.mediator.off('albumNewRendered');
  Shepherd.mediator.off('photoFavoritesRendered');

  shepherd.cancel();
}