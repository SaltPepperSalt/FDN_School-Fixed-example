var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subAnchors = $('.submenu a');
var listAnchors = $('.board ul li a');
var boardHeading = $('.board section h2')
var ulheight = parseInt($('.relsite-list').slideDown(0).css("height"));
$("ulheight").css("height", "25px");

subAnchors.attr('class', 'icon-dot-circled');
listAnchors.attr('class', 'icon-dot-circled');


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

boardHeading.click(function (e) {
    boardHeading.parent().removeClass('board-act');
    $(this).parent().addClass('board-act');
    return false;
});



