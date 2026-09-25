const p = require("prompt-sync")()
let choice;
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

    let candidats = []
    let cin
    let nom
    let prenom
    let age
    let partiPolitique 
    let partipolitiquev

function ajouteruncandidat(){
     cin = p("CIN: ")
     nom = p("NOM: ")
     prenom = p(" PRENOM: ")
     age = p("AGE: ")
     partiPolitique = p("PARTIPOLITIQUE: ")

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
            do{
                cin = p("CIN: ")
                console.log("****")
                nom = p("NOM: ")
                 console.log("****")
                prenom = p("PRENOM: ")
                 console.log("****")
                age = p("AGE: ")
                 console.log("****")
                partiPolitiquev = p("PARTIPOLITIQUE: ")
        
            let candidat ={
        cin : cin ,
        nom : nom ,
        prenom : prenom , 
        age : age ,
        partiPolitique : partipolitiquev ,
        Votes : []
    };
       candidats.push(candidat);
       console.log("Candidat ajouté avec succès")

                ajouteruncandidat()
                answer = p("Do you want add an another candidat ? ")
            }while(answer === "yes")}

        




do{

   menu();

choice = Number(p("Enter youre choice"));
   switch(choice){
        
    case 1 : 
        ajouteruncandidat(

        )
          break; 

    case 2 : 
        ajouter_plusieurs_candidats()
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

