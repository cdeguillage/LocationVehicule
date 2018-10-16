"use strict";  // Permet de n'avoir aucune erreur dans le script !!!


// Datas vehicles
var vehicules = {
        "Peugeot 208": [
            "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km supplémentaire)",
            "999 €",
            "Agence de Paris",
            "assets/image/vehicule1.png"
        ],
        "Ford Focus": [
            "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,5/km supplémentaire)",
            "999 €",
            "",
            "assets/image/vehicule2.png"
        ],
        "Audi A1": [
            "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 km (0,55/km supplémentaire)",
            "1100 €",
            "Agence de Paris",
            "assets/image/vehicule3.png"
        ],
        "Opel Mokka": [
            "Diesel, 5 portes, GPS, AutoRadio, Forfait 1000 mk (0,4/km supplémentaire)",
            "1150 €",
            "Agence de Paris",
            "assets/image/vehicule4.png"
        ]
};


// Retrouver les éléments HTML
var body = $("body");
var btnValider = $(".valider");
var listeVehicules = $(".listeVehicules");


// JQuery Ouverture du document
$(document).ready(function () {

    btnValider.on("click", function () {

        $.each(vehicules, function (key1, value1) {

            var nomVehicule = "";
            var description = "";
            var prix = "";
            var prixSuppl = "";
            var locImage = "";

            // Nom du véhicule
            nomVehicule = key1;

            $.each(vehicules[key1], function (key2, value2) {

                // On parcourt le tableau pour chaque élément du véhicule
                switch (key2) {
                    // Description
                    case 0:
                        description = value2;
                        break;

                    // Prix
                    case 1:
                        prix = value2;
                        break;

                    // Prix supplémentaire
                    case 2:
                        prixSuppl = value2;
                        break;

                    // Image
                    case 3:
                        locImage = value2;
                        break;

                    // Inconnu au bataillon
                    default:
                        break;
                }

            });

            console.log(nomVehicule);
            console.log(description);
            console.log(prix);
            console.log(prixSuppl);
            console.log(locImage);

            // Création de la liste des véhicules
            // Créer la playlist Track list
            var elem_vehicule = $("<div></div>");
            elem_vehicule.addClass("vehicule");

            var elem_image = $("<img></img>");

            var elem_vehicule_h5 = $("<h5></h5>");
            elem_vehicule_h5.html(nomVehicule);
            elem_vehicule.append(elem_vehicule_h5);


            listeVehicules.append(elem_vehicule);


        });
        
    });

});

