const DNAPairs = {
	A: 'T',
	T: 'A',
	C: 'G',
	G: 'C',
}

function DNAStrand(dna){
	return dna.replace(/./g, a => DNAPairs[a])
}