(function () {
"use strict";

MyInfoController.$inject = ['info'];
angular.module('public')
.controller('MyInfoController', MyInfoController);

function MyInfoController(info) {
    var myinfo = this;
    myinfo.info = info;
}
})();