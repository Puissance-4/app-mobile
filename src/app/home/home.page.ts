import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  formulaire = {login : "", mdp : ""};

  fichierJSON: any=[];

  constructor(private router:Router, private http:HttpClient) { 
    this.http.get("http://192.168.2.4/~sflachet/appliweb/public/index.php/getAPIVisiteur")
    .subscribe(results => {
      this.fichierJSON = results;     // on récupère la liste des utilisateurs et leurs mots de passe (présents dans l'API en format JSON) dans la variable fichierJSON
    });

  }

  connexion(){
     
    let correct = false;
 
    // on va boucler sur la liste des users, pour vérifier la validité du login et du mot de passe rentrés par l'utilisateur
    this.fichierJSON.forEach(user => {

      if(user.login==this.formulaire.login && user.mdp==this.formulaire.mdp){
        this.router.navigate(['/page-principal-frais']);
        correct=true;
      }      
    });

    //affiche une alerte lorsque le mot de passe ou le login est éroné
    if(correct==false){ 
      alert("Login ou mot de passe incorrect !");
    }
  }
}
