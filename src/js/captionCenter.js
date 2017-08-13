$(window).on('resize load',resizeFunc);

function resizeFunc() {
    var resize;

    resize = setTimeout(function() {

        $('#centerHeading').css('top',($(window).height() - $('#centerHeadingInner').outerHeight())/2 );

    }, 250);
}