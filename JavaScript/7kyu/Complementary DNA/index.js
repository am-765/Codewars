function DNAStrand(dna){
	return dna.split('').map(el => {
		switch (el) {
			case 'A':
				return 'T'
				break;
			case 'T':
				return 'A'
				break;
			case 'C':
				return 'G'
				break;
			case 'G':
				return 'C'
				break;
			default:
				break;
		}
	}).join('');
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTG"));
console.log(DNAStrand("GTAT"));