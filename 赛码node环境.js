process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    var arr = input.split("\n");
    arr.pop();

    for (var i=0; i<arr.length; i++) {
        input_array=arr[i].split(" ");



    }
});



//本地测试环境
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
        var count = 0;
        var line = arr[nLine++].trim();
        var line2 = arr[nLine++].trim();
        if(line=='' || line2==''){
            continue;
        }
        line = line.split(' ');



    }
});