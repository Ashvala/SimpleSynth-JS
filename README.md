SimpleSynth.js
====================

Re-creating the magic of [ Simple Synth!](http://github.com/ashvala/simplesynth) But, on WebKit!


Demo: 
=====================

http://ashvala.github.io/SimpleSynth-JS


Requires: 
=====================

- A modern WebKit browser that implements the WebAudio APIs

- JQuery


How it works:
=====================

This uses WebKit's webaudio APIs, which comes with stuff like Oscillators and what not. 

How to use it:
======================

- Include JQuery, probably from the google hosted libraries

 
```
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```

- Include StupidSimpleSynth.js

```
	<script src="SimpleSynth.js"> </script>
```

- For the moment, frequencies are hard coded in, so, if you want to enter a custom frequency (looking at you, microtonal music enthusiasts), all you have to do is add 

```
	var Note_name = new note("NoteName", MIDINote, frequency);
```
to SimpleSynth.js

The default behaviour is to take the ID attribute from a div or button with the class "key".

- Create a button with class "key" and ID as your note name

Example: 

```
	<button class="key" id="A4"> A4 </button> 
```

Open the page on Chrome/Safari and press the button. A sine wave should be generated with that. 

Purpose:
=======================

To get you started with your WebAudio geekery.


License:
==============

MIT License. Yeah!
