//square pattern

function pattern_square(n){
	//run the outer loop = n times
	for(let row = 1; row <= n; row++){
		//for every row, run the col
		for(let col = 1; col <= n; col++){
			document.write('* ')
		}
		//add break after every row
		document.write('<br/>')
	}
}

pattern_square(5)