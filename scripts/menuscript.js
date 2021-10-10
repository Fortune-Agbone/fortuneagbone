//script to toggle the webpage menu navigation box when in mobile view
var menuStatus = 0

$(function () {
    $('#jsmenuicondiv').click(function () {
        ++menuStatus;
        if (menuStatus % 2 === 0) {
            $('.jsmenu-buttons-container').slideUp(300);
        }
        else{
            $('.jsmenu-buttons-container').slideDown(300);
        }
    })
})
//end of toggle menu script

//script for the Home menu button to close the menu div
$(function () {
    $('#jshome-click').click(function () {
        ++menuStatus;
        if (menuStatus % 2 === 0) {
            $('.jsmenu-buttons-container').slideUp(100);
        }
        else{
            $('.jsmenu-buttons-container').slideUp(100);
        }
    })
})
//end of Home script

//script for the About menu button to close the menu div
$(function () {
    $('#jsabout-click').click(function () {
        ++menuStatus;
        if (menuStatus % 2 === 0) {
            $('.jsmenu-buttons-container').slideUp(100);
        }
        else{
            $('.jsmenu-buttons-container').slideUp(100);
        }
    })
})
//end of About script

//script for the Skills menu button to close the menu div
$(function () {
    $('#js-skills-click').click(function () {
        ++menuStatus;
        if (menuStatus % 2 === 0) {
            $('.jsmenu-buttons-container').slideUp(100);
        }
        else{
            $('.jsmenu-buttons-container').slideUp(100);
        }
    })
})
//end of About script

//script to close the webpage menu navigation box when in mobile view
$(function () {
    $('#jsclosemenudiv').click(function () {
        ++menuStatus;
        if (menuStatus % 2 === 0) {
            $('.jsmenu-buttons-container').slideUp(300);
        }
        else{
            $('.jsmenu-buttons-container').slideUp(300);
        }
    })
})
//end of toggle menu script