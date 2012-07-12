(function($) {

	var methods = {
		init : function(options) {
			this.each(function() {
				$(this).attr('contentEditable', true);
			});
			this.on('keydown',function(event){
				if( event.keyCode === 32 ){
					alert($this);
				}
				
				var selection = window.getSelection();
				var range = selection.getRangeAt(0);
				var node = range.startContainer;
				var span = node.parentNode;
				
				alert( $(span).text() + ': ' + range.startOffset );
				
			});
			
			$('[contenteditable]').on('focus', function() {
			    $this = $(this);
			    //alert(this);
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
 *  /* $(document).on("keydown", function(event) { //insertNodeAtCursor(
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
