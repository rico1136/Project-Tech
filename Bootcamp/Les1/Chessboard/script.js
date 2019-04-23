const size = 20;
let chessBoard = '';
let black;
let white;

for (let i = 0; i<=size;i++){
    if(i%2 === 0){
        row(size, i);
        chessBoard = chessBoard + '\n';
    }else{
        row(size, i);
        chessBoard = chessBoard + '\n';
    }
}

function row(width, space){
        if(space%2 === 0){
            for (let j = 0; j<=width;j++) {
                black = ' ';
                white = '#';
                if (j%2 === 0){
                    chessBoard += black;
                }
                else{
                    chessBoard += white;
                }
            }
        }else{
            for (let j = 0; j<=width;j++) {
                black = '#';
                white = ' ';
                if (j%2 === 0){
                    chessBoard += black;
                }
                else{
                    chessBoard += white;
                }
            }
        }
        return chessBoard;
}
console.log(chessBoard);

