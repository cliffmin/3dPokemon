'use strict';

angular.module('3dPokemonApp')
    .controller('MainCtrl', function ($scope) {
        $scope.pokemon = [
            {
                name: "Person1",
                body: "420 blaze it",
                hashTags: ["#420", "#stonerlife"]
            },
            {
                name: "Crazy Joe",
                body: "420 blaze it",
                hashTags: ["#420", "#stonerlife"]
            },
            {
                name: "Person1",
                body: "420 blaze it",
                hashTags: ["#420", "#stonerlife"]
            }
        ]
    });
