(function(){
    console.log("starting angular");
    var app = angular.module('store',[]);

    app.controller("StoreController", function(){
        this.products = gems;
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(selectedTab){
            this.tab = selectedTab;
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }

    });

    var gems = 
    [{
        name:   "Azurite",
        price:  2.95,
        description: "some stuff",
        canPurchase: true,
        soldOut: false
    },
    {
        name:   "Dodecahedron",
        price:  2.95,
        description: "some more stuff",
        canPurchase: true,
        soldOut: false
    }]; 
}());

