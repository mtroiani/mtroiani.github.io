$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#f2f2f2', '#54445C', '#444C5C', '#445C54', '#48445C', '#92AAC7'],
        anchors: ['homepage', 'aboutme', 'myskills', 'mywebprojects', 'mydataprojects', 'contactme'],
        menu: '#menu',
        paddingTop: '5%',
        slidesNavigation: 'true'
    });
});
