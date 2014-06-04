var GLOBAL = (function(){
    var miscFunctions = {
        startFunct : function(){
            console.log('Inside Starter'); 
        },

        secondFunct : function(){

        }
    };

    return {
      igniter : function (){
                    console.log('ignited...');
                    return miscFunctions.startFunct();
                }

    };
}());

GLOBAL.igniter();
