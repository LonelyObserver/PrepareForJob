process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input="";
var arr="";
process.stdin.on('data',function(data){
    input +=data;
});


function find(x) {
    var count=0;
    while(count<100000){
        if(x % 1000000007 !=0 ){
            x = 8*x +7;
            count++;
        }
        else {
            console.log(count);
            break;
        }
    }
    if(count==100000){
        console.log(-1);
    }

};

process.stdin.on('end',function(){
    var nLine = 0;
    arr = input.split("\n");
    while(nLine<arr.length){
        var line = arr[nLine++].trim();
        if(line==''){
            continue;
        }
        line = parseInt(line);

        find(line);


    }
});

