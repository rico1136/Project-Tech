const size = 19;
let chessBoard = '';

for (let i = 0; i<=size;i++){
    if(i%2 === 0){
        row(size, true);
        chessBoard = chessBoard + '\n';
    }else{
        row(size, false);
        chessBoard = chessBoard + '\n';
    }
}

function row(width, space){
        if(space === true){
            for (let j = 0; j<=(width/2);j++) {
                chessBoard = chessBoard + (' #');
            }
        }else{
            for (let j = 0; j<=(width/2);j++) {
                chessBoard = chessBoard + ('# ');
            }
        }
        return chessBoard;
}
console.log(chessBoard);

