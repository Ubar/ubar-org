(function($) {

    var methods = {
        init : function(options) {
            this.each(function() {
                $(this).attr('contentEditable', true);
            });
            var ranges = Array();
            // load websocket library and fetch document
            if(ranges.length === 0) {
                var range = document.createRange();
                range.setStartBefore(this.get(0).firstChild);
                range.setEndAfter(this.get(0).lastChild);
                ranges.push(range);
            }
            this.on('keydown', function(event) {
                // split on borders
                alert(ranges[0]);
            });

        },
        hide : function() {
        },
    };

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
