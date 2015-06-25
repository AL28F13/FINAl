// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btnmenu').on ('tap',function() {
		navigator.vibrate(2000);
		alert ("hola")
	
	$('.ui-btn-icon-bottom').on('tap', function (){
		flash ($(this));
		audio.play($(this).attr('id'));
	});
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('btnmenu', 'audio/C.mp3', function(){}, function(msg){alert ("Error " + msg);});
	
}); 
});

});
