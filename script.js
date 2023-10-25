
/* 
cena 300 Kč za 1 tričko při objednání: 1 až 49 kusů, objednávka XS,
cena 250 Kč za 1 tričko při objednání: 50 až 200 kusů, objednávka S,
cena 200 Kč za 1 tričko při objednání: 201 až 500 kusů, objednávka M,
cena 150 Kč za 1 tričko při objednání: 501 až 1000 kusů, objednávka L,
cena 120 Kč za 1 tričko při objednání: nad 1001 kusů, objednávka XL,

*/

const pocetKusuTricek =prompt("Zadejte do objednávky počet kusů triček.")

const objXs = 300 
const objS = 250
const objM = 200
const objL = 150
const objXl = 120


if (pocetKusuTricek >= 1 && pocetKusuTricek <= 49) {

    document.body.innerHTML += "<p>Celková cena Vaší objednávky je: "+ objXs * pocetKusuTricek + " Kč</p>"
}

 else if (pocetKusuTricek >= 50 && pocetKusuTricek <=200) {

    document.body.innerHTML += "<p>Celková cena Vaší objednávky je: "+ objS * pocetKusuTricek + " Kč</p>"
}
else if (pocetKusuTricek >= 201 && pocetKusuTricek <=500) {

    document.body.innerHTML += "<p>Celková cena Vaší objednávky je: "+ objM * pocetKusuTricek + " Kč</p>"
}

else if (pocetKusuTricek >= 501 && pocetKusuTricek <=1000) {

    document.body.innerHTML += "<p>Celková cena Vaší objednávky je: "+ objL * pocetKusuTricek + " Kč</p>"
}

else if (pocetKusuTricek >1001) {

    document.body.innerHTML += "<p>Celková cena Vaší objednávky je: "+ objXl * pocetKusuTricek + " Kč</p>"
}