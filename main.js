///////////// Burger Menu //////////////
// First we define our js variables 
const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')
// then we start righting our new function
function toggleBurgerMenu() {
// log the click just to check its working. feel free to remove after you are done
  console.log('click')
  // here we check to see if the burger button has the class of active
  if (burgerButton.classList.contains("active")){
  // more consle.log for testing
    console.log('has active')
    // remove the class of active
    burgerButton.classList.remove("active")
    // gsap to close the email
    gsap.to(burgerMenu, {
    // width to shrink it
        width: 0,
     //padding to minimilistic so it wont overflow
        padding: '2px 0',
    })
} else {
	// console for more testing
    console.log('no has active')
    // re-adds the class for tracking
    burgerButton.classList.add("active")
    // opens up the burger menu and does the opsite of the close
    gsap.to(burgerMenu, {
        width: "auto",
        opacity: 1,
        padding: '2px 1.5rem'
    })
  }
}

// finally link it to the click action of the burger button
burgerButton?.addEventListener('click', toggleBurgerMenu)


/////////////////////// nav point //////////////////////////
//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const navPoints = document.querySelectorAll(".navpoint")

// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
navPoints.forEach(object => {

// First we define our js variables 
const subPoints = object.querySelector('.sub-points')
// then we start righting our new function
function toggleSubPoints() {
// log the click just to check its working. feel free to remove after you are done
  console.log('click')
  // here we check to see if the burger button has the class of active
  if (object.classList.contains("active")){
  // more consle.log for testing
    console.log('has active')
    // remove the class of active
    object.classList.remove("active")
    // gsap to close the email
    gsap.to(subPoints, {
    // width to shrink it
        width: 0,
     //padding to minimilistic so it wont overflow
        padding: '2px 0',
    })
} else {
	// console for more testing
    console.log('no has active')
    // re-adds the class for tracking
    object.classList.add("active")
    // opens up the burger menu and does the opsite of the close
    gsap.to(subPoints, {
        width: "auto",
        opacity: 1,
        padding: '2px 1.5rem'
    })
  }
}

// finally link it to the click action of the burger button
object.addEventListener('mouseenter', toggleSubPoints)
object.addEventListener('mouseleave', toggleSubPoints)
})

///////////////////////// scroll in from bottom ///////////////////////
//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const headings = document.querySelectorAll(".scroll-in-from-bottom")


// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
headings.forEach(object => {

// we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
      scrollTrigger: {
      	// this is what is triggering the start of the animation
          trigger: object,
        	// this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in trigger element or screen) )   
          start: "top bottom",
			// same as start but the end point of the animation          
          end: "top center",
          // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
          scrub: true,
          // last but not least this helps us to visualize the script
          markers: false,
      }
    }).from(object,{
        y: 200,
        opacity:0
    })
})

///////////////////////// scroll in from left ///////////////////////
//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const scrollLeft = document.querySelectorAll(".scroll-in-from-left")


// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
scrollLeft.forEach(object => {

// we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
      scrollTrigger: {
      	// this is what is triggering the start of the animation
          trigger: object,
        	// this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in trigger element or screen) )   
          start: "top bottom",
			// same as start but the end point of the animation          
          end: "top center",
          // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
          scrub: true,
          // last but not least this helps us to visualize the script
          markers: false,
      }
    }).from(object,{
        x: -300,
        opacity:0
    })
})

////////////////////////////// gallery animation //////////////////////////////
//  first we are finding all of the elements that have a class of scroll-in-from-bottom
let animatedImages = document.querySelectorAll('.gallery-scroll')

animatedImages.forEach(img => {
  let tl = gsap.timeline({
    // duration: "2",
    scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none none",
        scrub: true,
        markers: true,
    },
    marker: true
  })
  .to(img, {scale: '1',})
  .to(img, {scale: '1', })
  .to(img, {scale: '.5',})
})