/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var navSection = document.querySelector('#navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function buildNewSection(){
    const fragment = document.createDocumentFragment();
    let numHeader = document.querySelectorAll('.landing__container').length + 1;

    // my new section
    var newSection = document.createElement('section');
    newSection.id = 'section'+ numHeader;
    newSection.setAttribute('data-nav','Section ' + numHeader);
    
    // my div
    var myDiv = document.createElement('div');
    myDiv.setAttribute('class','landing__container');
    newSection.appendChild(myDiv);

    // content
    // h2
    var myH2 = document.createElement('h2');
    myH2.innerHTML = 'Section ' + numHeader;
    myDiv.appendChild(myH2);

    // paragraph
    var myP1 = document.createElement('p'); 
    myP1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
    myDiv.appendChild(myP1);
    
    var myP2 = document.createElement('p');
    myP2.innerHTML = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
    myDiv.appendChild(myP2);
    
    fragment.appendChild(newSection);
    document.getElementsByTagName('main')[0].appendChild(fragment);
}
buildNewSection();
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav

function buildNav(){
    const fragment = document.createDocumentFragment();
    let numHeader = document.querySelectorAll('.landing__container').length;
    for(let i = 0; i < numHeader; i++){
        var newElement = document.createElement('li');
        var count = i+1;
        newElement.innerHTML = '<a class="menu__link">Section ' + count + '</a>';
        fragment.appendChild(newElement);
    }
    navSection.appendChild(fragment);
};
buildNav();

// Add class 'active' to section when near top of viewport
function checkScroll(event){
    let activation = document.querySelectorAll('.landing__container');
    let navBar = document.querySelectorAll('.menu__link');
    let landingContainer = document.getElementsByTagName('section');
    for(let i = 0;i<activation.length;i++)
    {
        const containerInAt = activation[i].getBoundingClientRect();
        if(containerInAt.y < (100*(i+1)) && containerInAt.y > -(100*(i+1)))
        {
            landingContainer[i].classList.add('your-active-class');
            navBar[i].classList.add('active');
        }else {
            landingContainer[i].classList.remove('your-active-class');
            navBar[i].classList.remove('active');
        }
    }
}


// Scroll to anchor ID using scrollTO event

function scrillTo(){
    let navBar = document.getElementById('navbar__list').getElementsByTagName('a');
    let landingContainer = document.getElementsByTagName('section');
    const numHeader = document.querySelectorAll('.landing__container').length;
    for(let i = 0; i < numHeader; i++)
    {
        navBar[i].href= '#'+landingContainer[i].id;
    }
}
document.documentElement.style.scrollBehavior = 'smooth';
scrillTo();


/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('scroll',checkScroll);

// Build menu 

// Scroll to section on link click

// Set sections as active


