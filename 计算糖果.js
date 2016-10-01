process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input="";
var arr="";
process.stdin.on('data',function(data){
    input +=data;
});

process.stdin.on('end',function(){
    var nLine = 0;
    arr = input.split("\n");
    while(nLine<arr.length){
        var A;
        var B;
        var C;
        var count = 0;
        var line = arr[nLine++].trim();
        if(line==''){
            continue;
        }
        line = line.split(' ');
        A = (parseInt(line[0]) + parseInt(line[2]))/2;
        B = A - parseInt(line[0]);
        C = B - parseInt(line[1]);
        if(B+C == parseInt(line[3])){
            console.log(A+' '+B+' '+C);
        }
        else {
            console.log("No");
        }


    }
});