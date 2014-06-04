var IAT = (function(pub, undefined){
    var extraVar;

    pub.addOnMethod = function(){
        extraVar = "added on";
        alert(extraVar);
    };  

    return pub;

}(IAT || {}));

IAT.addOnMethod();