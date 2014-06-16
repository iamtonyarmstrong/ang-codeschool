(function(){
    console.log("starting angular");
    var app = angular.module('store',[]);

    app.controller("StoreController", function(){
        this.products = gems;
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
            this.whichTab();
        };

        this.isSelected = function(checkTab){
            return this.tab === checkTab; //remember the === determines type AND value equality and returns a boolean
        };

        this.whichTab = function(){
            return console.log('tab: ' + this.tab);
        };

    });

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };

    });

    var gems = [
        {
            "name": "Azurite",
            "price": 2.95,
            "description": "some stuff",
            "canPurchase": true,
            "soldOut": false,
            "reviews": [
                {
                    "stars": 5,
                    "author": "Blah Blah",
                    "body": "This is a fantastic gem!! I love this..."
                },
                {
                    "stars": 3,
                    "author": "Blah Blah, Jr",
                    "body": "Meh. It's OK, kinda small for the price...I'm not totally in love with this gem..."
                }
            ]
        },
        {
            "name": "Dodecahedron",
            "price": 6.95,
            "description": "some extra stuff",
            "canPurchase": true,
            "soldOut": false,
            "reviews": [
                {
                    "stars": 5,
                    "author": "Jane Doe",
                    "body": "Fantastic gem!! I love it..."
                },
                {
                    "stars": 3,
                    "author": "John Doe",
                    "body": "My wife likes it so it's OK I guess."
                }
            ]
        }]; 

}());

