/**
 * Created by joker on 16/9/6.
 */
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
        var line = arr[nLine++];
        var line2 = arr[nLine++];
        if(line=='' || line2==''){
            continue;
        }
        line=line.toLowerCase();
        line2=line2.toLowerCase();

        if(line.indexOf(line2)==-1){
            console.log(count);
        }
        else {
            var a = line.indexOf(line2);
            while(a!=-1){
                a= line.indexOf(line2,a+1);
                count++;
            }
            console.log(count);
        }
    }
});