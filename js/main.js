var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subAnchors = $('.submenu a');

subAnchors.attr('class', 'icon-dot-circled');


subAnchors.on('mouseover focus', function (e) {
    if (e.type === 'mouseover' || e.type === 'focus') {
        subAnchors.attr('class', 'icon-dot-circled');
        $(this).attr('class', 'icon-ok');
        $(this).addClass('tab-on');
    }
});
menuLinks.on('mouseover focus', function (e) {
    if (e.type === 'mouseover' || e.type === 'focus') {
        menuItems.removeClass('menu-item-act');
        $(this).parent().addClass('menu-item-act');
    }
});