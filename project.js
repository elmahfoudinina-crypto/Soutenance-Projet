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
        ajouter_plusieurs_candidats()
         break;


    case 3 :
        choice = Number(p("Enter youre choice"));
   switch(choice){
          case 1:
       affichage_candidat_liste_simple()
          case 2 :
            
        affichage_par_trier()
          case 3 :
        affichage_par_PARTIPOLITIQUE()
          break;
   }
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
  
 
