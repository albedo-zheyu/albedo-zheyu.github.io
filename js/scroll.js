$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var header = $('#header');
        
        if (scrollTop > 0) {
            var newHeight = Math.max(70, 400 - scrollTop); // Minimum height is 70px
            header.css('height', newHeight + 'px');
            header.css('line-height', newHeight + 'px'); // Keep the text vertically centered
            
            var newFontSize = Math.max(24, 36 - scrollTop / 10); // Minimum font size is 24px
            header.find('h1').css('font-size', newFontSize + 'px');
        }
    });
});
