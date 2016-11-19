(function () {
"use strict";

angular.module('public')
.controller('NewsletterController', NewsletterController);

NewsletterController.$inject = ['MenuService','FavoriteService'];
function NewsletterController(MenuService, FavoriteService) {
    var newsletter = this;
    newsletter.form = {
        firstName : "",
        lastName: "",
        email: "",
        phone: " ",
        menuNumber: "",
        meal: ""
    };
    newsletter.notation = 0;
    newsletter.send = function(){
        var result = MenuService.checkNewsletter(newsletter.form.menuNumber)
        .then(function(response){
            newsletter.notation = 2;
            newsletter.form.meal = response.data
            FavoriteService.saveFav(newsletter.form);
        },function(response){
            newsletter.notation = 1;
        });
    };
}
})();
