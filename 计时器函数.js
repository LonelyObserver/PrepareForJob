function time(nSecond) {
    var arr =[];
    var h,m,s;
    var H,M,S;
    var d = document.getElementById("time");
    arr = nSecond.split(":");
    h = parseInt(arr[0]);
    m = parseInt(arr[1]);
    s = parseInt(arr[2]);
    setInterval(function(){
        if(s<60) {
            s+=1;
        } else {
            s=0;
            if(m<60) {
                m+=1;
            } else {
                m=0;
                if(h<24){
                    h+=1;
                } else {
                    h=0;
                }
            }
        }

        H = h.toString().length ==1 ? "0"+h.toString() : h.toString();
        M = m.toString().length ==1 ? "0"+m.toString() : m.toString();
        S = s.toString().length ==1 ? "0"+s.toString() : s.toString();

        d.innerHTML = H + ":" +M +":"+S;

    },1000);

}