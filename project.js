const p = require("prompt-sync")()
let choice;
let candidats=[{cin : "AB123456",nom : "Boushaba",prenom : "Soufiane",partiPolitique : "Indépendant",age: 40,},{cin : "AB123456",nom : "Boushaba",prenom : "Soufiane",partiPolitique : "Indépendant",age: 40,}]
do{

   menu();

choice = Number(p("Enter youre choice"));
   switch(choice){
        
    case 1 : 
        ajouteruncandidat()
          break; 

    case 2 : 
         ajouter_Plus_Candidats()
         break;


    case 3 : 
     Afficher_laliste_descandidats()
       
         
   
    case 4 : 
        (console.log("4"))     
          break;
          
    case 5 : 
        (console.log("5"))
            break;
            
    case 6: 
        (console.log("6"))        
            break;

    case 7 : 
        (console.log("7"))
            break;
            
    case 8 : 
        (console.log("8")) 
             break;

   } 
}  
    while(choice !==0 )
function menu (){
  
console.log("============= les choix =============")
console.log("1.Ajouter un nouveau candidat :")
console.log("2. Ajouter plusieurs candidats à la fois.")
console.log("3. Afficher la liste des candidats :")
console.log("4. Voter pour un candidat :")
console.log("5. Modifier les informations d'un candidat :")
console.log("6. Supprimer un candidat :")
console.log("7. Rechercher des candidats :")
console.log("8. Statistiques de l'élection :")
console.log("0. Quitter :")
console.log("======================================")

} 

function ajouteruncandidat(){
    let Cin = p("CIN: ")
    let Nom = p("NOM: ")
    let Prenom = p("PRENOM: ")
    let Age = p("AGE: ")
    let PartiePolitiquev = p("PARTIEPOLITIQUE: ")
    let Electeurs = []
     
    let objet = {
        cin : Cin,
        nom : Nom,
        prenom : Prenom,
        age : Age,
        partiepolitique : PartiePolitiquev ,
        electeurs : Electeurs

    };


        candidats.push(objet)
       console.log("Candidat ajouté avec succès") 

}
 
function Affichage_des_candidats(candidat,index){

    console.log("-candidat " + (index+1) + " : ");
    console.log("CIN : " + candidat.cin);
    console.log("NOM : " + candidat.nom);
    console.log("PRENOM : " + candidat.prenom);
    console.log("AGE : " + candidat.age);
    console.log("Partiepolique : " + candidat.partiepolitique);
    console.log("Nombre de votes : " + candidat.electeurs.length);
    console.log("=================================="); 
} 
     
function ajouter_Plus_Candidats(){
    let reponse 

    do{
        ajouteruncandidat()
        reponse = p("voulez-vous ajouter un autre candidat ? ")
     }while(reponse === "oui" || reponse === "OUI")

} 

function Affichage_une_Liste_normal(){
    if(candidats.length === 0 ){
        console.log("aucun candidat")
        return;
    }

    for(let i = 0 ; i < candidats.length ; i++){
            Affichage_des_candidats(candidats[i],i);
    }
}

function affichage_par_tri(){
    let vote_candidat = []
    for(let i = 0 ; i < candidats.length ; i++){
        vote_candidat[i] = candidats[i]
    }
    for(let i = 0 ; i < vote_candidat.length ; i++ ){
        for(let j = i+1 ; j < vote_candidat.length ; i++){
            if(vote_candidat[j].electeurs.length > vote_candidat[i].electeurs.length){
                let temporaire = vote_candidat[i];
                vote_candidat[i]=vote_candidat[j];
                vote_candidat[j]=temporaire 
            }
        }
    }
    for(let i = 0 ; i < vote_candidat.length ; i++){
         Affichage_des_candidats(candidats[i],i)
        
    }
}

function affichage_par_PARTIPOLITIQUE(){
    let partirechercher = p("ecrire le nom de la politique convenable")
    let trouverparti = false;
    for(let i = 0 ; i < candidats.length; i++){
        if(candidats[i].PartiePolitiquev.toLowercase() == partirechercher ){
            Affichage_des_candidats(candidats[i],i)
            trouverparti = true;
        }
    }
    if(trouverpartie === false){
        console.log("Aucun resultat trouver concernant cette partipolitique")
    }
}
 
function menu2(){
    console.log("1-affichage normal")
    console.log("2-affichage par tri")
    console.log("3-affichage par filtrer")
    console.log("4-revenir le menu precedent")

}

function voter_sur_un_candidat(){
    if(candidats.length === 0){
        console.log("aucun candidat enregister içi");
        return;
    }
    let cinELECTEUR = p("entrer votre cin pour votez ...")
    for(let i = 0; i<candidats.length; i++){
        for(let j = 0; j<candidats.length; i++){
            if(candidats[i].electeurs[j] === cinELECTEUR){
                console.log("deja voté")
                return;
            }
        }

    }


    console.log("verification d'ok , vous pouvez voter ")
    for(let N=0 ; N<candidats.length ; N++){
        Affichage_des_candidats(candidats[N],N);}
        let cinCANDIDAT = p("saissez le cin de candidat pour voter")
        let candidatAtrouvrer = null;


        for(let i=0 ; i<candidats.length ; i++){
            if(candidats[i].Cin === cinCANDIDAT){
                candidatAtrouvrer = candidats[i]
                break;
            }

    }

    if(candidatAtrouvrer === null){
        console.log("verification échoue : candidat introuvable " )
    }
    else{
        let voteur = candidatAtrouvrer.electeurs.length 
        candidatAtrouvrer.electeurs[voteur] = cinELECTEUR
        console.log("vote avec succée " + candidatAtrouvrer.Prenom + " " + candidatAtrouvrer.Nom)
    }
} 
  





















let candidat = [{Cin : "AE147852" ,
     Nom : "LALLA" , 
     Prenom : "NISSRINE" ,
     Age : 35 ,
     Partipolitique : "LES OLIVES" ,
     votes : ['h' , 'g' , 'j' , 'e'  ]
    },
    {Cin : "DF123654",
     Nom : "jojoo" , 
     Prenom : "Houda" ,
     Age : 55 ,
     Partipolitique : "LES OLIVES" ,
     votes : ['k' , 1 , 'g', 'l' , 'm' ]

    },{ Cin : "hj123",
     Nom : "Lola" , 
     Prenom : "ACHRAF" ,
     Age : 37 ,
     Partipolitique : "LES OLIVES" ,
     votes : [ 'b' , 'c' ,'d' ]

    },{
        Cin : "lm12345",
     Nom : "alawi" , 
     Prenom : "khadija" ,
     Age : 44 ,
     Partipolitique : "LES OLIVES" ,
     votes : [4 , 44 , 'e', 'a' , 'M' ]

    },{
        Cin : "LK1478",
     Nom : "kela" , 
     Prenom : "mariam" ,
     Age : 25 ,
     Partipolitique : "LES OLIVES" ,
     votes : ['q' , 's' , 'x']

    },{
        Cin : "as15998",
     Nom : "lam" , 
     Prenom : "Achraf" ,
     Age : 20 ,
     Partipolitique : "Machi so9k" ,
     votes : ['ù' , 15 , 20 ]

    }]























 
     