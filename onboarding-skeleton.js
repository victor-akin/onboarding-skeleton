/**
 * Hello,
 * Thanks for taking the time out to look at this plugin
 * Hope you find it useful, get to use and enjoy using it.
 * 
 * Creator: Victor Akinyokun
 * vicgbadebo@gmail.com
 */

/**
 * onboardingSkeleton object with custom edits
 */


/**
 * add event handler for 'click' to begin tour
 */
let tour = document.getElementById('start-tour')

/**
 * list of all sections you want users to know of
 * while using the app
 */
let onBoardingTips = document.getElementsByClassName('onboarding-skel')
let boardingTipCurrentIndex = 0

// maaking it global so we can remove it at the end of the tour
let shade = undefined


/**
 * 
 * @description create background shade html element
 */
function createShade() {
    let body = document.querySelector('body')
    shade = document.createElement('DIV')
    body.appendChild(shade)
    
    shade.style.position = 'absolute'
    shade.style.height = '330%'
    shade.style.width = '100%'

    onbooardingStyleProps(shade, 'shade')
    shade.className = 'onboarding-shade'
}

/**
 * 
 * @description create onboarding html elements
 * @returns {Object} object containing onboarding html elements
 */
function createOnBoardingContent(){
    
    let onBoardingContainer = document.createElement('DIV')
    let onBoardingText = document.createElement('SPAN')
    let onBoardingArrow = document.createElement('SPAN')
    
    onBoardingContainer.className = 'onboarding-container'
    onBoardingText.className = 'onboarding-text'
    onBoardingArrow.className = 'onboarding-arrow'

    onBoardingContainer.addEventListener('click', onTipTap)

    return {
        onBoardingContainer,
        onBoardingText,
        onBoardingArrow
    }
}

/**
 * 
 * @param {HTMLElement} el 
 * @param {String} name 
 * @description set custom style properties for onboarding elements
 */
function onbooardingStyleProps(el, name){
    let keys = Object.keys(onboardingSkeleton[name])
    keys.forEach(function(prop) {
        el.style[prop] = onboardingSkeleton[name][prop]
    })
}

/**
 * 
 * @param {Event} e
 * @description event handler for onclick event on onBoardingContainer element
 */
function onTipTap(e){
    // this will be at the end of the tip
    if(boardingTipCurrentIndex == onBoardingTips.length) {
        onBoardingTips[boardingTipCurrentIndex -1].removeChild(e.target.parentNode)
        onBoardingTips[boardingTipCurrentIndex -1].style.zIndex = 0;  
        
        boardingTipCurrentIndex = 0
        // remove shade
        let body = document.querySelector('body')
        body.removeChild(shade)
        return
    }
    showTip(boardingTipCurrentIndex, e)
}

/**
 * 
 * @param {Number} currentIndex
 * @param {Event} e event from onclick event on onBoardingContainer element
 * @description show next tip, hide previous tip and scroll
 */

function showTip(currentIndex, e){
    // remove onBoardingContainer and tip and zIndex of tip container
    if(currentIndex > 0){
        let prev = currentIndex - 1
        onBoardingTips[prev].removeChild(e.target.parentNode)
        onBoardingTips[prev].style.zIndex = 0;  
    }
    
    let content = createOnBoardingContent()

    // create elements and nest them
    content.onBoardingText.innerHTML = onboardingSkeleton.tips[currentIndex]
    content.onBoardingContainer.appendChild(content.onBoardingText)
    content.onBoardingContainer.appendChild(content.onBoardingArrow)
    onBoardingTips[currentIndex].appendChild(content.onBoardingContainer)

    // set custom properties and position of onborading elements
    onbooardingStyleProps(content.onBoardingContainer, 'container')
    onbooardingStyleProps(content.onBoardingArrow, 'arrow')
    content.onBoardingContainer.style.left = `${onBoardingTips[currentIndex].clientWidth + 10}px`
    
    // scroll to next onboarding tip
    window.scrollTo(onBoardingTips[currentIndex].offsetLeft, onBoardingTips[currentIndex].offsetTop-40)
    
    // show with z-index
    onBoardingTips[currentIndex].style.zIndex = 10;
    
    boardingTipCurrentIndex += 1
}

tour.addEventListener('click', function(e) {
    createShade()

    showTip(boardingTipCurrentIndex)
})

tour.click()


