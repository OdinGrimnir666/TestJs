
  function validSolution(board){

    let colum = [];

    let row = [];


    for (let index = 0; index < board.length; index++) {
        const result = board[index].reduce((sum, current) => sum + current, 0)

        row.push(result);
    }

    
    
    
    for (i = 0; i < board.length; i++) {
        let col = []
		for (j = 0; j < board.length; j++) {
            col.push(board[j][i])
		}
        colum.push(col.reduce((sum, current) => sum + current, 0));
        
	}
    
    rowRes= row.some((elem) => elem !== 45)
    const colRes = colum.some((elem) => elem !== 45)


    

    return colRes === rowRes;
  }

  