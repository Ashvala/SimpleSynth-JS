function note(name, MIDINote, frequency){ 
    this.name = name;
    this.MIDINote = MIDINote;
    this.frequency = frequency;
}

var C2 = new note("C2", 36, 65.41);
var Cs2 = new note("C#2", 37, 69.30);
var D2 = new note("D2", 38,73.42);
var Ds2 = new note("D#2", 39,77.78);
var E2 = new note("E2", 40, 82.41);
var F2 = new note("F2", 41, 87.31);
var Fs2 = new note("F#2", 42, 92.50);
var G2 = new note("G2", 43, 98.00);
var Gs2 = new note("G#2", 44, 103.82);
var A2 = new note("A2", 45, 110);
var As2 = new note("A#2", 46, 116.52);
var B2 = new note("B2", 47, 123.47);
var C3 = new note("C3", 48, (C2.frequency*2));
var Cs3 = new note("C#3", 49, (Cs2.frequency*2));
var D3 = new note("D3", 50, (D2.frequency*2));
var Ds3 = new note("D#3", 51, (Ds2.frequency*2));
var E3 = new note("E3", 52, (E2.frequency*2));
var F3 = new note("F3", 53,(F2.frequency*2));
var Fs3 = new note("F#3", 54, (Fs2.frequency*2));
var G3 = new note("G3", 55, (G2.frequency*2));
var Gs3 = new note("G#3", 56, (Gs2.frequency*2));
var A3 = new note("A3", 57, (A2.frequency*2));
var As3 = new note("A#3", 58, (As2.frequency*2));
var B3 = new note("B3", 59, (B2.frequency*2));
var C4 = new note("C4", 60, (C2.frequency*4));
var Cs4 = new note("C#4", 61, (Cs2.frequency*4));
var D4 = new note("D4", 62, (D2.frequency*4));
var Ds4 = new note("D5", 63, (Ds2.frequency*4));
var E4 = new note("E4", 64, (E2.frequency*4));
var F4 = new note("F4", 65, (F2.frequency*4));
var Fs4 = new note("F#4", 66, (Fs2.frequency*4));
var G4 = new note("G4", 67, (G2.frequency*4));
var Gs4 = new note("G#4", 68, (Gs2.frequency*4));
var A4 = new note("A4", 69, (A2.frequency*4));
var As4 = new note("A#4", 70, (As2.frequency*4));
var B4 = new note("B4", 71, (B2.frequency*4));
var C5 = new note("C5", 72, (C2.frequency*8));

$(document).ready(function(){
	var context = new webkitAudioContext();
	oscillator = context.createOscillator();
	var osci_bool = 0;
	
	oscillator.noteOn(0);
	$(".key").mousedown(function(){
		val = $(this).attr("id");
		oscillator.frequency.value = eval(val).frequency;
		$("#freq_mon").val(oscillator.frequency.value);
		oscillator.connect(context.destination);
	    }).mouseup(function(){
		    oscillator.disconnect(context.destination);
		});
    });
