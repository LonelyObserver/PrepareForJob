process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input="";
var arr="";
process.stdin.on('data',function(data){
    input +=data;
});

process.stdin.on('end',function(){
    var R2 = input;
    var res=0;
    var count=0;
    var R = Math.sqrt(R2);
    if(Math.pow(Math.round(R),2) == R2) {
        res += 4;
    }

    for(var i=1;i<R;i++) {
       for(var j=R-1;j>1;j--) {
           if(Math.pow(i,2)+Math.pow(j,2)==R2) {
               count++;
           }
           else if(Math.pow(i,2)+Math.pow(j,2)>R2){
               break;
           }

       }
    }

    res += 8*count;
    console.log(res);
});