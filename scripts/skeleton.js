//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    console.log($('#navbarPlaceholder').load('./text/nav.html'));
    console.log($('#footerPlaceholder').load('./text/footer.html'));
}
//invoke the function
loadSkeleton();

/* tooltip (Chinese hoverover bar in nav.html) */
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});