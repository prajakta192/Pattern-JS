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
triPattern_one(4)