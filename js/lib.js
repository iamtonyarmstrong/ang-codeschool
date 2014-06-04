//Revealing module pattern...my favorite!
/*
    Be mindful of how you set up the self executing function in the self-executing 
    anonymous function, when using the Revealing Module pattern. If you do the following
    when setting up the function, you have to have an object for pub. For ex:

    var IAT = (function(IAT, undefined)){
        var pub = {},
                ...
                ;
        somethingPrivate = function(){};
                
        pub.publicMethod = function(){};

        return pub; 
    }(window.IAT = window.IAT || {}));

 
    HOWEVER, If you do it like this:

      var IAT = (function(pub, undefined)){
        var someVars,
            ...
            ... ;
        somethingPrivate = function(){}; 

        pub.publicMethod = function(){};

        return pub; 
    }(IAT || {}));  

    you pass IAT into the function, you've already declared pub so you don't need to
    set up the pub object explicitly. Saves the overhead of creating a new object. 

    Pay attention to the subtle differences...
*/

var IAT = (function(pub, undefined){
    "use strict";

    //NB: pub = {} creates object to add public methods and members to...   
    //The remainder are just standard vars that I declare 
    var init;

    //populate vars  
    element = document.getElementById('top');
    selectAllCheckbox = document.getElementById('selectAll');

    //private functions
    init = function(){
        console.log('inited');
    };


    //public methods
    pub.ready = function(){
        return init();
    };

    pub.bindListeners = function(){
        element.addEventListener('click', clickDiv, false);
        selectAllCheckbox.addEventListener('click', selectAllCheckboxes, false);
    };

    //return the public elements
    return pub;

}(IAT || {}));

//remember, you have to call the public methods to get things to work...
IAT.ready();
IAT.bindListeners();


