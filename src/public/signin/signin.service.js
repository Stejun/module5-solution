(function () {
"use strict";

angular.module('public')
.service('FavoriteService', FavoriteService);

function FavoriteService() {
    var choice = {empty: true};

    this.saveFav = function(formData){
        choice = formData;
    };
    this.loadFav = function(){
        return choice;  
    };
}
})();
