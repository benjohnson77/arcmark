//= require jquery/jquery
//= require raphael
//= require_tree .


$(document).ready(function(){

	function arcs(n){
		var top = $('#overview').position().top;
		var height = $('#overview').height();
		var y = top+height ;
		var x = $('#overview').width();
		var center = x/2;
		var R = 100;

		var paper_1 = Raphael(0, top, x, height);
		xmod = 60;
		for (i = 0; i < n; i++) { 
			var xmod = xmod + 25; 
		
			var arcs = paper_1.path(['m', center+xmod, height+xmod, 'a', 1100-xmod*2, 1600-xmod*2, 1, 1, 1, -90, 90]);
			arcs.attr("stroke", "#ccc");
			//arcs.animate({path: arcs}, 1000);
		};
	};

	var a = arcs(6);
});