process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input="";
var arr="";
process.stdin.on('data',function(data){
    input +=data;
});

function Rev(num) {
    var numStr=num.toString();
    var array =[];
    array = numStr.split('');
    array.reverse();
    var len  = array.length;
    for(var i=0;i<len;i++){
        if(array[0]=="0"){
            array.shift();
        }
        else {
            break;
        }
    }
    return parseInt(array.join(''));
}

process.stdin.on('end',function(){
    var nLine = 0;
    arr = input.split("\n");
    while(nLine<arr.length){
        var x;
        var y;
        var res;
        var line = arr[nLine++].trim();
        if(line==''){
            continue;
        }
        line = line.split(' ');

        x = parseInt(line[0]);
        y = parseInt(line[1]);
        res = Rev(Rev(x)+Rev(y));
        console.log(res);

    }
});