/* js provided by https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9 */

let items = document.getElementsByClassName("slide"),
    totalItems = items.length,
    slide = 0,
    moving = true;

 
initCarousel();

function initCarousel() {
  console.log(items);
        setInitialClasses();
        setEventListeners();
        // Set moving to false so that the carousel becomes interactive
        moving = false;
      }    
// make it rain
function setInitialClasses() {
  console.log(items);
  // This assumes there are at least three items.
    // Targets the previous, current, and next items
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }
  // Set event listeners
  function setEventListeners() {
    let next = document.getElementsByClassName('nextSlide')[0],
        prev = document.getElementsByClassName('prevSlide')[0];
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

function disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)
    
    moving = true;
    // setTimeout runs its function once after the given time
    setTimeout(function(){
      moving = false
    }, 500);
  }   
    
 



  

  function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if(!moving) {
      // temporarily disable interactivity
      disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      let newPrevious = slide - 1,
          newNext = slide + 1,
          oldPrevious = slide - 1,
          oldNext = slide + 1;
      // Test if carousel has more than three items
      
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)){
          oldNext = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (slide === 0) {
          newPrevious = (totalItems - 1);
          oldPrevious = (totalItems - 1);
          oldNext = (slide + 1);
        } else if (slide === (totalItems -1)) {
          newPrevious = (slide - 1);
          newNext = 0;
          oldNext = 1;
        }
        // Now we've worked out where we are and where we're going, 
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        items[oldPrevious].className = "slide";
        items[oldNext].className = "slide";
        // Add new classes
        items[newPrevious].className = "slide" + " prev";
        items[slide].className = "slide" + " active";
        items[newNext].className = "slide" + " next";
     
    }
  }
  // Next navigation handler
function moveNext() {
    // Check if moving
    console.log("pushed next");
    if (!moving) {
      // If it's the last slide, reset to 0, else +1
      if (slide === (totalItems - 1)) {
        slide = 0;
      } else {
        slide++;
      }
      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }
  // Previous navigation handler
  function movePrev() {
    // Check if moving
    console.log("pushed prev");
    if (!moving) {
      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = (totalItems - 1);
      } else {
        slide--;
      }
            
      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }

  function presentFeature(event){
    let src = event.target.getAttribute("src");
   
    let featured = document.querySelector('.starred')

    featured.setAttribute("src", src);
    

  }

let featurePic = document
.querySelectorAll('.picPos');
if (featurePic){
  featurePic.forEach(el => {
    
    el.addEventListener('click', presentFeature);
  });
}  
    