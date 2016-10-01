/**
 * Created by joker on 16/9/1.
 */
/*蛇形矩阵*/

function main(n) {
    var row = [];
    for(var i=0;i<n;i++) {
        row[i] = [];
        for(var j=0;j<n;j++) {
            row[i][j]=0;
        }
    }

    var x = 0;
    var y = 0;
    var k = 0;
    while(k<n*n) {
        while (y < n-1 && row[x][y]==0) {
            row[x][y] = ++k;
            y++;
        }
        if(row[x][y]!=0){
            y--;
            x++;
        }
        while (x < n-1 && row[x][y]==0) {
            row[x][y] = ++k;
            x++;
        }
        if(row[x][y]!=0){
            x--;
            y--;
        }
        while (y > 0  && row[x][y]==0) {
            row[x][y] = ++k;
            y--;
        }
        if(row[x][y]!=0){
            y++;
            x--;
        }
        while (x > 0  && row[x][y]==0) {
            row[x][y] = ++k;
            x--;
        }
        if(row[x][y]!=0){
            x++;
            y++;
        }
    }

    for(var i=0;i<n;i++) {
        for(var j=0;j<n;j++) {
            console.log(row[i][j]);
        }
    }
}


main(6);