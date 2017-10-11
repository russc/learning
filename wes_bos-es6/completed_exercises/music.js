const measures = music['score-partwise'].part.measure;
let pitches = [];

function rhythmData(note) {
	if (note.rest) {

	}
}

function pitchData(step, octave) {
	let pitch = step + octave;
	if (!pitches.includes(pitch)) {
		pitches.push(pitch);
	}
}


measures.map(measure => measure.note.map(note => {
	console.table(note);
	// POPULATE RHYTHMS OBJECT
	rhythmData(note);

	// POPULATE PITCHES ARRAY
	if (note.pitch !== undefined) {
		pitchData(note.pitch.step, note.pitch.octave);
	}
}));



console.table(pitches.sort());

















