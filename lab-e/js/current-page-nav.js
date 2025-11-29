// STEP C: Get the current URL for the page
var currentURL = window.location.href;

// STEP D: Grab all the top-level <a> elements inside the <nav> element at the top of the page (inside the <header> element)
var navLinks = document.querySelector("header nav").querySelectorAll(":scope > a");

// STEP E: Create a place to store the href value for each <a> element
var linkHref;

// STEP F: For each <a> element in the NodeList navLinks, compare the href property with the URL for the current page
for (var i = 0; i < navLinks.length; i++) {

    // STEP G: Grab the href property of each <a> (element)
    linkHref = navLinks[i].href;
    
    // STEP H: Check for a match with the current page
    if (linkHref === currentURL) {
    
        // STEP I: They match - so this <a> is the link for the current page
        navLinks[i].classList.add("active");
        
    // STEP I: They match - so this <a> is the link for the current page
    }
}
