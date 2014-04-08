'use strict';

angular.module('3dPokemonApp')
    .controller('MainCtrl', function ($scope) {
        $scope.pokemon = [
            {
                name: "Pikachu",
                url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTu2IWz_od01mH0W5eUkuMDwHESetUdCZjlPi5g6O_OHneQowJX"
            },
            {
                name: "Ugly Thing",
                url: "http://i1.cdnds.net/13/24/618x497/gaming-pokemon-x-and-y-artwork-3.jpg"

            }
        ]
    });
