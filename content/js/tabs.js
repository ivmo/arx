$('#gallery_tabs_content div.tab:not(:first)').hide();

    $('#gallery_tabs li').click(function(event) {
        event.preventDefault();
        $('#gallery_tabs_content div.tab').hide();
        $('#gallery_tabs .active-sort-item').removeClass("active-sort-item");
        $(this).addClass('active-sort-item');

        var clicked = $(this).find('a:first').attr('href');
        $('#gallery_tabs_content div.tab' + clicked).fadeIn('slow');

        return false;
    }).eq(0).addClass('active-sort-item');
