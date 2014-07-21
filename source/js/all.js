//= require jquery/jquery
//= require raphael
//= require_tree .


$(document).ready(function(){

	function arcs(id,n,type,mod,size){
		var top = $(id).position().top;
		var height = $(id).height();
		var width = $(id).width();
		var center = width/2;
		var R = 100;

		var paper = Raphael(0, top, width, height);
		xmod = 0;
		for (i = 0; i < n; i++) { 
			var xmod = xmod + mod;

			switch(type) {
    			case 1:
        		  var startx = center+xmod; 
				  var starty = height+xmod; 
				  var spin = -90;
				  var angle = 90;
				  var elx = size-(xmod*4);
				  var ely = size+(size*0.25)-(xmod*4);
				  var dir = 1;	
				  var quad = 1;
				    break;
    			case 2:
  			      var startx = 0; 
				  var starty = height/2+xmod;
				  var spin = -90;
				  var angle = 90;
				  var elx = size-xmod*4;
				  var ely = size+(size*0.25)-(xmod*4);
				  var dir = 0;	
				  var quad = 1;
        			break;
    			case 3:
        		  var startx = center+xmod; 
				  var starty = height+xmod; 
				  var spin = 90;
				  var angle = 90;
				  var elx = size-(xmod*4);
				  var ely = size+(size*0.25)-(xmod*4);
				  var dir = 0;	
				  var quad = 1;
        			break;
        		case 4:
  			      var startx = center+xmod; 
				  var starty = -(height/2);
				  var spin = 90;
				  var angle = 180;
				  var elx = size-xmod*4;
				  var ely = size+(size*0.25)-(xmod*4);
				  var dir = 1;
				  var quad = 1;	
        			break;	        			
    			default:
    			  var startx = center+xmod;
				  var starty = height+xmod;
        			break;
			}

			var path_string = ['m', startx, starty, 'a', elx, ely, 3, quad, dir, spin, angle];
			var arcs = paper.path(path_string);
			arcs.attr("stroke", "#4babe0");
			arcs.toBack();

		};
	};
	// ElementID , number of arcs, arctype, offset, size 
	var a = arcs('#overview',5,1,15,1500);
	var a = arcs('#overview',5,2,30,2500);
	var a = arcs('#overview',5,3,15,2000);
	var a = arcs('#overview',5,4,15,1000);
});