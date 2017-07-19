$(function() {
    $("head").append('<link rel="stylesheet" type="text/css" href="https://jacquev6.github.io/ribbon.css">');
    var project_link = '<p class="jacquev6_ribbon_hidden">hidden</p>';
    if(typeof jacquev6_ribbon_github == "string") {
        project_link = '<p><a href="https://github.com/jacquev6/' + jacquev6_ribbon_github + '">Fork me on GitHub</a></p>';
    }
    $("body").prepend(
        '<div id="jacquev6_ribbons"><div>'
        + project_link
        + '<p><a href="http://vincent-jacques.net/">More projects by jacquev6</a></p>'
        + '</div></div>'
    );
});
