//window.js
define(function(){
   function Window() {}

   Window.prototype = {
       alert: function(){},
       confirm: function(){},
       prompt: function(){}
   }
   return {
       Window: Window
   }
});


//main.js 调用
require(['window'],function(w){
    new w.Window().alert();
})