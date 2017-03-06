$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#f2f2f2', '#48445C', '#48445C', '#48445C', '#48445C', '#92AAC7'],
        anchors: ['homepage', 'aboutme', 'myskills', 'mywebprojects', 'mydataprojects', 'contactme'],
        menu: '#menu',
        paddingTop: '5%',
        slidesNavigation: 'true'
    });
});
