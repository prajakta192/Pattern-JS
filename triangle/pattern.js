function main(n){
	triPattern_two(n)
}
main(5)
/*increasing triangle pattern 

*	
* *
* * *
* * * * 
								
*/

// rows = n times

function triPattern_one(n){
	//run outer loop n times
	for(let row = 1; row <= n; row++){
		//for every row run column
		// col = times of row. 1r => 1c 2r => 2c 3r => 3c etc.
		for(let col = 1; col <= row; col++){
			document.write('* ')
		}
		//after every row add break
		document.write('<br/>')
	}
}
//triPattern_one(4)

//decresing triangle pattern
/*decreasing triangle pattern 
             n = 5
* * * * *    row 1 col 1 = 5
* * * *      row 2 col 2 = 4
* * *        row 3 col 3 = 3
* *          row 4 col 4 = 2
*            row 5 col 5 = 1
								
*/

function triPattern_two(n){
	//run outer loop = n times
	for(let row = 1; row <= n; row++){
		//for every row run column
		for(let col = 1; col <= n - row + 1; col++){
			document.write('* ')

		}
		//after every row add break
		document.write('<br/>')
	}
}
//triPattern_two(5)