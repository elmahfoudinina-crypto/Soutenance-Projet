const p = require("prompt-sync")()
let choice;
function menu (){
     
console.log("1.Ajouter un nouveau candidat :")
console.log("2. Ajouter plusieurs candidats à la fois.")
console.log("3. Afficher la liste des candidats :")
console.log("4. Voter pour un candidat :")
console.log("5. Modifier les informations d'un candidat :")
console.log("6. Supprimer un candidat :")
console.log("7. Rechercher des candidats :")
console.log("8. Statistiques de l'élection :")
console.log("0. Quitter :")
} 

  let candidats = []
  let cin = p("CIN: ")
    let nom = p("NOM: ")
    let prenom = p(" PRENOM: ")
    let age = p("AGE: ")
    let partiPolitique = p("PARTIPOLITIQUE: ")

function ajouteruncandidat(){
     

    let candidat ={
        cin : cin ,
        nom : nom ,
        prenom : prenom , 
        age : age ,
        Partipolitique : partipolitique ,
        Votes : []
    };
       candidats.push(candidat);
       console.log("Candidat ajouté avec succès")

  }
    
        function ajouter_plusieurs_candidats(){
            let answer = p("you want to add an candidat ? (yes/no)")
            while(answer === "yes"){
                ajouteruncandidat()
                answer = p("Do you want add an another candidat ? ")
            }

        }




do{

   menu();

choice = Number(p("Enter youre choice"));
   switch(choice){
        
    case 1 : 
        ajouteruncandidat()
          break; 

    case 2 : 
       (console.log("2"))
         break;


    case 3 :
        (console.log("3"))
          break;

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

