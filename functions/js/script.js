let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ______het is een tekst, dus het heeft "" nodig_____ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ____________ waarom? ______het is een getal en heeft geen "" nodig______ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? _als je voor het eerst variabele gaat aanmaken, moet je eerst de variabele declareren door let ervoor te schrijven._ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _______regel 17_______ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde ____________ de waarde noemen we een Atribute__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _______ op het scherm met de tekst _________ deze tekst staan op regel _______ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ___________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? ___________________ en waar wordt deze in je HTML aangeroepen? ____________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ___________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? ___________________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? ___________________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _________regel 32_____ en wanneer wordt deze aangeroepen ______als je op de knop drukt_____ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ______________ en waar komt de waarde van getal vandaan? ____________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? __________queryselector link met element op regel 32_________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _________het zorgt ervoor dat je alleen het antwoord kan zien____________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _____________________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan ______________ en waar komt de waarde van kleur vandaan? ____________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? _uit_het_index.html_bestand_op_regel_44_de_30px___ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _____________________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ______er is een alert_____ en wanneer gebeurt dat _____als je de pagina opstart of refreshed_____ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _______als je de pagina opstart dan is er een alert met een text die verandert____________ vul je antwoord in op de lijn.