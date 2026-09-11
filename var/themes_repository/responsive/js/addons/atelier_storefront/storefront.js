(function (_, $) {
    'use strict';

    $.ceEvent('on', 'ce.commoninit', function (context) {
        context.find('.ty-btn__primary').each(function () {
            var button = $(this);
            if (!button.attr('data-atelier-ready')) {
                button.attr('data-atelier-ready', 'true');
            }
        });
    });
}(Tygh, Tygh.$));
