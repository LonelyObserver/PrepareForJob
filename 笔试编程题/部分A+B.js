//3862767 6 13530293 3
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input="";
var arr="";
process.stdin.on('data',function(data){
    input +=data;
});

process.stdin.on('end',function(){
    var nLine = 0;
    var A,Da,B,Db;
    var Pa ="";
    var Pb ="";
    arr = input.split("\n");
    while(nLine<arr.length){
        var line = arr[nLine++].trim();
        if(line==''){
            continue;
        }
        line = line.split(' ');
        A = line[0].split('');
        Da = line[1];
        B = line[2].split('');
        Db = line[3];



        for(var i=0;i<A.length;i++) {
            if(A[i]==Da) {
                Pa +=Da;
            }
        }
        for(var j=0;j<B.length;j++) {
            if(B[j]==Db) {
                Pb +=Db;
            }
        }
        console.log(parseInt(Pa)+parseInt(Pb));

    }
});