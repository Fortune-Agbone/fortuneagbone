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