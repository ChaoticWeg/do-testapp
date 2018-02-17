$(() => {
    
    var matches = window.location.pathname.match(/\/view\/([a-zA-Z0-9]+)(?:\/.+)?/);
    if (matches)
    {
        var which = matches[1];
        $("#nav-" + which).addClass("active");
    }
});