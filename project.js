const p = require("prompt-sync")()
let choice;
let candidatS = [ {
    cIN : "478552",
    nOM : "khadija",
    pRENOM : "ola",
    aGE : 14,
    pARTIEPOLITIQUE: "PAM",
    eLECTEURS :['r'],

}, {
    cIN: "55555",
    nOM: "lala",
    pRENOM: "NESMA" ,
    aGE: 22,
    pARTIEPOLITIQUE: "PAM",
    eLECTEURS :[4, 44, 'e', 'a', 'M'],     

}, {
    cIN: "LK1478",
    nOM: "kela",
    pRENOM: "mariam",
    aGE: 25,
    pARTIEPOLITIQUE:"MODERNITE",
    eLECTEURS:['q', 's', 'x'] 

}, {
    cIN: "as15998",
    nOM: "lam",
    pRENOM: "Achraf",
    aGE: 20,
    pARTIEPOLITIQUE:"MODERNITE",
    eLECTEURS: ['ù', 'k', 'u']

}]

do {

    menu();

    choice = Number(p("Enter your choice"));
    switch (choice) {

        case 1:
            ajouteruncandidat()
            break;
        case 2:
            ajouter_Plus_Candidats()
            break;
        case 3:
            menu2();
            let choixx = Number(p("Taper votre choix convenable"))
            switch(choixx){
                case 1: 
                    Affichage_une_Liste_normal()
                    break;
                case 2:
                    affichage_par_tri()
                    break;
                case 3:
                    affichage_par_PARTIPOLITIQUE()
                    break;
            }
            break;
        case 4:
            voter_sur_un_candidat()
            break;
        case 5:
            modifiercandidat()
            break;
        case 6:
            suprimercandidat()
            break;
        case 7:
            chercher_un_candidat()
            break;

    }
}
while (choice !== 0)
function menu() {

    console.log("*****************les choix*******************")
    console.log("1.nouveau candidat :")
    console.log("2.plusieurs candidats à la fois.")
    console.log("3.la liste des candidats :")
    console.log("4. Voter sur un candidat :")
    console.log("5. Modifier les informations d'un candidat :")
    console.log("6. Supprimer un candidat :")
    console.log("7. Rechercher des candidats :")
    console.log("8. Statistiques de l'élection :")
    console.log("0. Quitter :")
    console.log("*********************************************")

}
function ajouteruncandidat() {
    let Cin = p("CIN: ")
    let Nom = p("NOM: ")
    let Prenom = p("PRENOM: ")
    let Age = p("AGE: ")
    let PartiePolitiquev = p("PARTIEPOLITIQUE: ")

    let objet = {
        cIN: Cin,
        nOM: Nom,
        pRENOM: Prenom,
        aGE: Age,
        pARTIEPOLITIQUE: PartiePolitiquev,
        eLECTEURS :[]

    };


    candidatS.push(objet)
    console.log("Candidat ajouté avec succès")

}
function Affichage_des_candidats(candidat, index) {

    console.log("-candidat " + (index + 1) + " : ");
    console.log("CIN : " + candidat.cIN);
    console.log("NOM : " + candidat.nOM);
    console.log("PRENOM : " + candidat.pRENOM);
    console.log("AGE : " + candidat.aGE);
    console.log("Partiepolique : " + candidat.pARTIEPOLITIQUE);
    console.log("Nombre de votes : " + candidat.eLECTEURS.length);
    console.log("==================================");
}
function ajouter_Plus_Candidats() {
    let reponse

    do {
        ajouteruncandidat()
        reponse = p("voulez-vous ajouter un autre candidat ? ").toLowerCase()
    } while (reponse === "yes" )

}
function Affichage_une_Liste_normal() {
    if (candidatS.length === 0) {
        console.log("aucun candidat")
        return;
    }

    for (let i = 0; i < candidatS.length; i++) {
        Affichage_des_candidats(candidatS[i], i);
    }
}
function affichage_par_tri() {
    let vote_des_candidats = [];

    for (let i = 0; i < candidatS.length; i++) {
        vote_des_candidats[i] = candidatS[i];
    }

    for (let i = 0; i < vote_des_candidats.length - 1; i++) {
        for (let j = i + 1; j < vote_des_candidats.length; j++) {

            if (
                vote_des_candidats[j].eLECTEURS.length >
                vote_des_candidats[i].eLECTEURS.length
            ) {
                let temp = vote_des_candidats[i];
                vote_des_candidats[i] = vote_des_candidats[j];
                vote_des_candidats[j] = temp;
            }
        }
    }

    for (let i = 0; i < vote_des_candidats.length; i++) {
        Affichage_des_candidats(vote_des_candidats[i], i);
    }
}
function affichage_par_PARTIPOLITIQUE() {
    let partirechercher = p("ecrire le nom de la politique convenable")
    let trouverparti = false;
    for (let i = 0; i < candidatS.length; i++) {
        if (candidatS[i].pARTIEPOLITIQUE == partirechercher) {
            Affichage_des_candidats(candidatS[i], i)
            trouverparti = true;
        }
    }
    if (trouverparti === false) {
        console.log("Aucun resultat trouver concernant cette partipolitique")
    }
}
function menu2() {
    console.log("1-affichage normal")
    console.log("2-affichage par tri")
    console.log("3-affichage par filtrer")
    console.log("0-revenir le menu precedent")

}
function voter_sur_un_candidat() {
    if (candidatS.length === 0) {
        console.log("aucun candidat enregister içi");
        return;
    }
    let cinELECTEUR = p("entrer votre cin pour votez ...")
    for (let i = 0; i < candidatS.length; i++) {
        for (let j = 0; j < candidatS[i].length; i++) {
            if (candidatS[i].eLECTEURS[j] === cinELECTEUR) {
                console.log("deja voté")
                return;
            }
        }

    }

    console.log("verification d'ok , vous pouvez voter ")
    for (let N = 0; N < candidatS.length; N++) {
        Affichage_des_candidats(candidatS[N], N);
    }
    let cinCANDIDAT = p("saissez le cin de candidat pour voter")
    let candidatAtrouvrer = null;


    for (let i = 0; i < candidatS.length; i++) {
        if (candidatS[i].cIN === cinCANDIDAT) {
            candidatAtrouvrer = candidatS[i]
            break;
        }

    }

    if (candidatAtrouvrer === null) {
        console.log("verification échoue : candidat introuvable ")
    }
    else {
        let electeur = candidatAtrouvrer.eLECTEURS.length
        candidatAtrouvrer.eLECTEURS[electeur] = cinELECTEUR
        console.log("vote avec succée " + candidatAtrouvrer.pRENOM + " " + candidatAtrouvrer.nOM)
    }
}
function modifiercandidat(){
    if(candidatS.length === 0){
        console.log("AUCUN CONDIDAT A MODIFIER")
        return;
    }
    console.log("------LISTE DES CANDIDATS------")
    Affichage_une_Liste_normal()
    let cin = p("ajouter CIN du candidat: ")
    let index = -1
    for(let i=0 ; i<candidatS.length ;i++){
        if(candidatS[i].cIN === cin){
            index=i
            break;
        }
    }
    if(index === -1){
        console.log("verification echoue: candidat introuvable")
        return;
    }
    console.log("verification OK: "+ candidatS[index].pRENOM +""+candidatS[index].nOM)
    console.log("1-modifier la partie politique")
    console.log("2-modifier l'age")
    let choix = Number(p("que voulez vous modifier? "))
    if(choix===1){
        let nvpartiepol=p("entrer nouvelle partiepolitique: ")
        candidatS[index].pARTIEPOLITIQUE =nvpartiepol
        console.log("Partie politique modifie avec succee ") 
    }else if(choix===2){
        let nvage = Number(p("Enter le nouvel age : "))
        candidatS[index].aGE = nvage
        console.log("age modifie")
    }else{
        console.log("CHOIX FAUX!!!!!")
    }
}
function suprimercandidat(){
    if(candidatS.length===0){
        console.log("aucun condidat")
        return;
    }
    let cinsupr=p("saisir cin a suprimer: ")
    let index = false;
    for(i=0;i<candidatS.length;i++){
        if(candidatS[i].cIN === cinsupr){
            index = true ;
            break;
        }
    }
    if(index === false){
        console.log("candidat introuvable")
    }

let nouveauTableau = [];

for (let i = 0; i < candidatS.length; i++) {
    if (i != index) {
        nouveauTableau[nouveauTableau.length] = candidatS[i];
    }
}

candidatS = nouveauTableau;

console.log("vous avez supprimer ce candidat avec succée");

}

function chercher_un_candidat() {
    let nom_A_chercher = p("ENTRER LE NOM DU CANDIDAT...");
    let trouve = false;

    for (let i = 0; i < candidatS.length; i++) {
        if (candidatS[i].nOM.toLowerCase() === nom_A_chercher.toLocaleLowerCase()) {
            Affichage_des_candidats(candidatS[i], i);
            trouve = true;
        }
    }

    if (!trouve) {
        console.log("candidat introuvable");
    }
}
