$(function() {
    
    var tracks = [
      {
        name:'GraphicDesign', 
        id:21,
        selected:false, 
        courseFeatures: {
          name:'Graphics Design',
          department:'ART-GRDS',
          description:'ARG',
          majorCreditHistory:'32',
          minorCreditHistory:'3'
        }
      },
			{
			  name:'Sculpture', 
			  id:22, 
			  selected:false,
			  courseFeatures: {
			    name:'ff Design',
			    department:'ART-divya',
			    description:'ARG',
			    majorCreditHistory:'ARG',
			    minorCreditHistory:'ARG'
			  }
			},
			{
			  name:'Photography', 
			  id:23,
			  selected:false, 
			  courseFeatures: {
			    name:'rr Design',
			    department:'ART-sindhu',
			    description:'ARG',
			    majorCreditHistory:'ARG',
			    minorCreditHistory:'ARGARG'
			  }
			},
			{
			  name:'Painting', 
			  id:24, 
			  selected:false,
			  courseFeatures: {
			    name:'ffd Design',
			    department:'ART-pooja',
			    description:'ARG',
			    majorCreditHistory:'ARG',
			    minorCreditHistory:'ARG'
			  }
			},
			{
			  name:'Programming', 
			  id:25,
			  selected:false, 
			  courseFeatures: {
			    name:'www Design',
			    department:'ART-jhn',
			    description:'ARGARG',
			    majorCreditHistory:'ARG',
			    minorCreditHistory:'ARG'
			  }
			 }
			];

    init();    
    
    function init() {
      populateUpdatedTemplate('selections', 'selections-container', {selections: tracks});
      document.getElementById('display-comparison').addEventListener("click", displayComparisons);
    } 
    
    function displayComparisons(){
      populateUpdatedTemplate('tracks-comparison', 'tracks-container', {tracks: getSelectedTracks()});
    	initializeComparisonCarousel();
    	attachPrevNextHandlers();
  	}
  	
  	function attachPrevNextHandlers() {
  	  document.getElementById('prev-course-section').addEventListener("click", goTo('prev'));
  	  document.getElementById('next-course-section').addEventListener("click", goTo('next'));
  	}
  	
  	function goTo(direction) {
  	  return function() {
  	    $("#comparison-carousel").trigger(direction + '.owl.carousel');
  	  }
  	}
  	
  	function getSelectedTracks() {
  	  var trackInputs = document.forms["demoForm"].elements['tracks'],
  	      selectedTracks = [];
  	      
  		trackInputs.forEach(function(input) {
  		  if(input.checked) {
  		    var selectedTrack = tracks.find(function(track) {
  		      return track.name === input.value;
  		    });
  		    selectedTracks.push(selectedTrack);
  		  }
  		});
  		
  		return selectedTracks;
  	}
  	
  	function populateUpdatedTemplate(preFormattedId, postFormattedId, data) {
  	  var preFormattedTemplate = document.getElementById(preFormattedId).import.body.innerHTML;
  	  var formattedTemplate = Mustache.render(preFormattedTemplate, data);
  	  document.getElementById(postFormattedId).innerHTML = formattedTemplate;
  	}
  	
  	function initializeComparisonCarousel() {
  	  $("#comparison-carousel").owlCarousel({
        items: 3,
        navigation : true
      });
  	}
});