var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subAnchors = $('.submenu a');

subAnchors.attr('class', 'icon-dot-circled');

menuLinks.hover(function (e) {
    e.preventDefault();
    menuItems.removeClass('menu-item-act');
    $(this).parent().addClass('menu-item-act');
});

subAnchors.on('hover focus', function (e) {
    if (e.type === 'hover' || e.type === 'focus') {
        subAnchors.attr('class', 'icon-dot-circled');
        $(this).attr('class', 'icon-ok');
    }
});

menuLinks.focus(function (e) {
    menuItems.removeClass('menu-item-act');
    $(this).parent().addClass('menu-item-act');
});