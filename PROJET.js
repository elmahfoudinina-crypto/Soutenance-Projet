const p = require("prompt-sync")()
let choice;
/* function menu (){
  
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

}  */

    
    let cin
    let nom
    let prenom
    let age
    let partiepolitiquev

function ajouteruncandidat(){
     cin = p("CIN: ")
     nom = p("NOM: ")
     prenom = p("PRENOM: ")
     age = p("AGE: ")
     partiePolitiquev = p("PARTIEPOLITIQUE: ")

    let candidat ={
        cin : cin ,
        nom : nom ,
        prenom : prenom , 
        age : age ,
        Partiepolitique : partiepolitiquev ,
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
                partiePolitiquev = p("PARTIEPOLITIQUE: ")
        
            let candidat ={
        cin : cin ,
        nom : nom ,
        prenom : prenom , 
        age : age ,
        partiePolitique : partiepolitiquev ,
        L : []
    };
       candidats.push(candidat);
       console.log("Candidat ajouté avec succès")

                ajouteruncandidat()
                answer = p("Do you want add an another candidat ? ")
            }while(answer === "yes")}
   
         
    function Affichage_des_candidats(candidat,index){

             console.log("-candidat " + (index+1) + " : ");
             console.log("CIN : " + candidat.cin);
             console.log("NOM : " + candidat.nom);
             console.log("PRENOM : " + candidat.prenom);
             console.log("AGE : " + candidat.age);
             console.log("Partiepolique : " + candidat.partiepolitique);
             console.log("Nombre de votes  : " + candidat.Votes.length);
             console.log("=================================="); 
    } 
    
    function affichage_candidat_liste_simple(){
        if(candidats.length === 0){
            console.log("aucun candidat")
            return;
        }
    }
        

          for(let i = 0 ; i < candidats.length ; i++){
            Affichage_des_candidats(candidats[i],i);
          }


    function affichage_par_trier(){
       let Vote_candidat = []
        for(let i = 0 ; i < candidats.length ; i++){
            Vote_candidat[i] = candidats[i];
        }

        for(let i = 0 ; i < Vote_candidat.length ; i++)
            for(let j = i+1 ; j < Vote_candidat.length ; j++){
              if(Vote_candidat[j].Votes.length > Vote_candidat[i].Votes.length){
                let temporaire = Vote_candidat[i];
                Vote_candidat[i] = Vote_candidat[j];
                Vote_candidat[j] = temporaire;
              }
            }     
    }  
        for(let i = 0 ; i < Vote_candidat.length ; i++){
            Affichage_des_candidats(Vote_candidat[i], i);
        } 
    
        
    function affichage_par_PARTIPOLITIQUE(){
        let PartiRechercher = p("ecrire le nom de la partiepolitique à rechercher")
        let trouverlapartie = false;
        for(let i = 0 ; i < candidats.length ; i++)
             Affichage_des_candidats(candidats[i],i)
            trouverlapartie = true ; 
}
        if(trouverlapartie === false){
            console.log("aucune resultat a propos la partiepolitique")
        }



















    


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

