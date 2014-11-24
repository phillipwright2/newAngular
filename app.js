var myApp = angular.module('myApp', []);

myApp.controller('mainController', function(, ){

    // var userDomainCheck = .userDomainCheck;



    .getURL = function(userDomainCheck) {
        //return the promise directly.
        .domainResults = [];
        return .jsonp('http://domains.bootname.com/api/v1/domain/' + userDomainCheck + '?callback=JSON_CALLBACK')
            // .then means "do this then do this"
            .then(function(result) {
                console.log(result.data);
                for(var i = 0; i < result.data.length; i++) {
                    .domainResults.push(result.data[i]);
                }
            });

        };

        .itemArray = [];
        .addToList = function(item) {
            .itemArray.push(item);  
        }



    });