let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ______het is een tekst, dus het heeft "" nodig_____ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ____________ waarom? ______het is een getal en heeft geen "" nodig______ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? _als je voor het eerst variabele gaat aanmaken, moet je eerst de variabele declareren door let ervoor te schrijven._ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _______regel 17_______ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de _______Parameter___________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde _____onclick_______ de waarde noemen we een _______Atribute__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een ____alert___ op het scherm met de tekst _________ Timothy van den Beitel ____regel 17___ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ____nee, want ander linkt het niet meer met het html document_______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? ____het verandert tussen de 2 afbeeldingen als je er op klikt_______________ en waar wordt deze in je HTML aangeroepen? _______op 23_____ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ____die moet je veranderen in de "" van de onclick_______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _____het zorgt ervoor dat je alleen een Id kan gebruiken______________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _________het laat de afbeelding zien die verborgen was__________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen _________regel 32_____ en wanneer wordt deze aangeroepen ______als je op de knop drukt_____ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _______van regel 2 met de waarde 3_______ en waar komt de waarde van getal vandaan? ____________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? __________queryselector link met element op regel 32_________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? _________het zorgt ervoor dat je alleen het antwoord kan zien____________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _________het telt op bij het getal____________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______regel 44________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _____this_________ en waar komt de waarde van kleur vandaan? _____Orange_______ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? _uit_het_index.html_bestand_op_regel_44_de_30px___ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? ______het verandert de kleur, grootte, element_______________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ______er is een alert_____ en wanneer gebeurt dat _____als je de pagina opstart of refreshed_____ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _______als je de pagina opstart dan is er een alert met een text die verandert____________ vul je antwoord in op de lijn.