//= require jquery/jquery
//= require raphael
//= require_tree .


$(document).ready(function(){
	var top = $('#overview').position().top;
	var height = $('#overview').height();
	var y = top+height ;
	var x = $('#overview').width();
	var center = x/2;
	var R = 100;
	var paper_1 = Raphael(0, top, x, height);
	
	var xmod = 60;	
	var arcs = paper_1.path(['M', center, height, "A", 1000, 1600, 1, 1, 1, -90, 90]);
	var arcs = paper_1.path(['M', center+xmod+30, height, "A",1000, 1600, 1, 1, 1, -90, 90]);
	var arcs = paper_1.path(['M', center+xmod+30, height, "A",1000, 1600, 1, 1, 1, -90, 90]);
	var arcs = paper_1.path(['M', center+xmod+30, height, "A",1000, 1600, 1, 1, 1, -90, 90]);
	var arcs = paper_1.path(['M', center+xmod+30, height, "A",1000, 1600, 1, 1, 1, -90, 90]);
	var arcs = paper_1.path(['M', center+xmod+30, height, "A",1000, 1600, 1, 1, 1, -90, 90]);
});