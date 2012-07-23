(function($) {

	var methods = {
		init : function(options) {
			this.each(function() {
				$(this).attr('contentEditable', true);
			});
			this.on('keydown', function(event) {

				var selection = window.getSelection();
				var range = selection.getRangeAt(0);
				var node = range.startContainer;
				var offset = range.startOffset;

				var span = $(node.parentNode);

				if (span.attr("id") != "ubarcursor") {
					var cursor = $("#ubarcursor");
					var curparent = cursor.parent();

					var tmptext = cursor.text();
					cursor.detach();
					var curpartext = curparent.text();

					var newtext = tmptext + curpartext;
					curparent.html(newtext);
				}

				if (event.keyCode === 32) {

					/*if(span.attr("id") == "ubarcursor") {
						var cursorcontent = span.html();
						span.parent().before($('<span>' + cursorcontent + '</span>'));
						$('#ubarcursor').detach();
					}*/
					
					var space = $('<span class="foo">_</span>');
					if (span.text().length > 1) {
						var right_span = $('<span>'
								+ span.text().substring(range.startOffset,
										span.text().length) + '</span>');
						span.text(span.text().substring(0, range.startOffset));
					}
					span.after(space);
					space.after(right_span);
					
					
					var newcursor = $('<span id="ubarcursor">&#x200b;<span>');
					right_span.prepend(newcursor);

					selection.removeAllRanges();
					range.setStartAfter(newcursor.get(0));
					selection.addRange(range);

					return false;
				}
			});

			$('[contenteditable]').on('focus', function() {
				$this = $(this);
			})
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

// function split

function insertNodeAtCursor(node) {
	var range, html;
	if (window.getSelection && window.getSelection().getRangeAt) {
		selection = window.getSelection();
		range = selection.getRangeAt(0);
		range.insertNode(node);
	} else if (document.selection && document.selection.createRange) {
		range = document.selection.createRange();
		html = (node.nodeType == 3) ? node.data : node.outerHTML;
		range.pasteHTML(html);
	} else {
		alert("no range");
	}
}

/**
 * /* $(document).on("keydown", function(event) { //insertNodeAtCursor(
 * document.createTextNode( char ) );
 * 
 * var char = String.fromCharCode( event.which ); ubarrange.insertNode(
 * document.createTextNode( char ) ) });
 * 
 * 
 * $(document).on( "mousedown", function(event) { var obj = event.target; var
 * jobj = $(event.target).filter("span");
 * 
 * var range = document.caretRangeFromPoint( event.clientX, event.clientY); //
 * var conatiner = range.startContainer; var index = range.startOffset;
 * 
 * var text = jobj.text(); var tex1 = text.substring(0, index); var tex2 =
 * text.substring(index, text.length);
 * 
 * jobj.text(tex1).after("<span>" + tex2 + "</span>");
 * 
 * $(".ubarcurser").removeClass("ubarcurser"); jobj.addClass("ubarcurser");
 * 
 * //ubarrange = document.createRange(); //ubarrange.setStartAfter(obj);
 * 
 * return true; // range.insertNode( document.createTextNode( //
 * conatiner.nodeName ) ); });
 * 
 * 
 */
