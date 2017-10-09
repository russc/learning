const measures = music['score-partwise'].part.measure;
let pitches = [].sort();

function combine(step, octave){
    
    if(!pitches.includes(step + octave)){
        pitches.push(step + octave)    
    }
}

measures.map(measure => measure.note.map(note => {
    if(note.pitch !== undefined){
        const  { step, octave } = note.pitch;
        
        combine(step, octave);
    }
}));

console.log(pitches.sort());

















