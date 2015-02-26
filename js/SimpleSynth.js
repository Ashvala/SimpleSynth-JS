C2 = {frequency: 65.41};
Cs2 = {frequency: 69.30};
D2 = {frequency: 73.42};
Ds2 = {frequency: 77.78};
E2 = {frequency: 82.41};
F2 = {frequency: 87.31};
Fs2 = {frequency: 92.50};
G2 = {frequency: 98.00};
Gs2 = {frequency: 103.82};
A2 = {frequency: 110};
As2 = {frequency: 116.52};
B2 = {frequency: 123.47};
C3 = {frequency: (C2.frequency*2)};
Cs3 = {frequency: (Cs2.frequency*2)};
D3 = {frequency: (D2.frequency*2)};
Ds3 = {frequency: (Ds2.frequency*2)};
E3 = {frequency: (E2.frequency*2)};
F3 = {frequency: (F2.frequency*2)};
Fs3 = {frequency: (Fs2.frequency*2)};
G3 = {frequency: (G2.frequency*2)};
Gs3 = {frequency: (Gs2.frequency*2)};
A3 = {frequency: (A2.frequency*2)};
As3 = {frequency: (As2.frequency*2)};
B3 = {frequency: (B2.frequency*2)};
C4 = {frequency: (C2.frequency*4)};
Cs4 = {frequency: (Cs2.frequency*4)};
D4 = {frequency: (D2.frequency*4)};
Ds4 = {frequency: (Ds2.frequency*4)};
E4 = {frequency: (E2.frequency*4)};
F4 = {frequency: (F2.frequency*4)};
Fs4 = {frequency: (Fs2.frequency*4)};
G4 = {frequency: (G2.frequency*4)};
Gs4 = {frequency: (Gs2.frequency*4)};
A4 = {frequency: (A2.frequency*4)};
As4 = {frequency: (As2.frequency*4)};
B4 = {frequency: (B2.frequency*4)};
C5 = {frequency: (C2.frequency*8)};

$(document).ready(function(){
	var context = new webkitAudioContext();
	oscillator = context.createOscillator();
	var osci_bool = 0;	
	oscillator.noteOn(0);
	var active_osci = $(".active").attr("id");	
	console.log(active_osci);
	$(".osc_type").click(function(){
		active_osci = $(this).attr("id");		
		var current = $(this);
		$(".osc_type").each(function(){
			if ($(this).hasClass("active") === true && $(this).attr("id") !== active_osci && $(this) !== current){
			    console.log($(this));
			    $(this).removeClass("active");
			    current.addClass("active");
		
			}
		    });
	    });
	$(".key").mousedown(function(){
		val = $(this).attr("id");
		oscillator.frequency.value = eval(val).frequency;
		oscillator.type = active_osci;
		str = oscillator.frequency.value + "::" + val; 
		$("#freq_mon").val(str);
		oscillator.connect(context.destination);
	    }).mouseup(function(){
		    oscillator.disconnect(context.destination);		    
		});
    });
