(function($) {

    var methods = {
        init : function(options) {
            this.each(function() {
                $(this).attr('contentEditable', true);
            });
            this.on('keydown', function(event) {
                
            });

        },
        hide : function() {
        },
    };

    var settings = $.extend( {
        'max_sync_width' : 20;
    }, options);


    $.fn.ubarinput = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(
                arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.ubarinput');
        }
    };
})(jQuery);
