(function(){
    "use strict";
    console.log("inside app");
    var app = angular.module('notesApp',[]);

    app.controller('MainCtrl', [function(){
        console.log('Controller MainCtrl has been created.'); 

        //use self as a proxy for "this"
        var self = this;  
        self.message = "Hello";
        self.notes = arrayNotes;

        self.changeMessage = function(){
            self.message = "See ya!";
        };
    }]);

    var arrayNotes = [
        {
            label: "Item 1",
            item: "Deodorant",
            price: 2.59
        },
        {
            label: "Item 2",
            item: "Dish detergent",
            price: 3.59        
        },
        {
            label: "Item 3",
            item: "Q-Tips",
            price: 4.59            
        }

    ];

}());

