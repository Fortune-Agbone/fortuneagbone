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

//script for the Home button to close the menu div
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

//script for the About button to close the menu div
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

//script for the Skills button to close the menu div
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
//end of Skills script

//script for the Projects button to close the menu div
$(function () {
    $('#jsprojects-click').click(function () {
        ++menuStatus;
        if (menuStatus % 2 === 0) {
            $('.jsmenu-buttons-container').slideUp(100);
        }
        else{
            $('.jsmenu-buttons-container').slideUp(100);
        }
    })
})
//end of Projects script

//script for the Contact button to close the menu div
$(function () {
    $('#jscontact-click').click(function () {
        ++menuStatus;
        if (menuStatus % 2 === 0) {
            $('.jsmenu-buttons-container').slideUp(100);
        }
        else{
            $('.jsmenu-buttons-container').slideUp(100);
        }
    })
})
//end of Contact script

//script to close the webpage menu navigation box when in mobile view with the bottom close menu button
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