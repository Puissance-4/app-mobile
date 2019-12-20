import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-fiche',
  templateUrl: './detail-fiche.page.html',
  styleUrls: ['./detail-fiche.page.scss'],
})
export class DetailFichePage implements OnInit {

  item:any=[];

  fichierJSONFraisHF: any=[];
  fichierJSONFraisF: any=[];


  TabFraisHF=[];
  TabFraisF=[];

  constructor(private router:Router, private activeRoute:ActivatedRoute, private http:HttpClient) {
    let env=this;
    this.activeRoute.queryParams.subscribe(params =>{
      this.item=this.router.getCurrentNavigation().extras.state;
      this.item = this.item.item;

      this.http.get("http://192.168.2.4/~sflachet/appliweb/public/index.php/getAPIFraisHF")
      .subscribe(results => {
        env.fichierJSONFraisHF = results;     // on récupère la liste des fraisHF (présents dans l'API en format JSON) dans la variable fichierJSONFraisHF
      
        // on va boucler sur la liste des fraisHF
        env.fichierJSONFraisHF.forEach(fraisHF => {
  
          var today = new Date(fraisHF.date.date); 
  
          var dd = today.getDate(); 
          var mm = today.getMonth() + 1;   
          var yyyy = today.getFullYear(); 
  
          // /!\Ne pas pretter attention au erreur C'EST NORMAL
  
          if (dd < 10) { 
              dd = '0' + dd; 
          } 
          if (mm < 10) { 
              mm = '0' + mm; 
          } 
  
          var today = dd + '/' + mm + '/' + yyyy; //Mise en forme de la date
  
          //On ajoute le frais au Tab
          if(env.item.id==fraisHF.idFiche){ //On verifie si le frais correspond bien à la fiche choisie
            
            env.TabFraisHF.push({date: today, montant: fraisHF.montant, libelle: fraisHF.libelle, validite: fraisHF.validite});
          }
          
        });
      });
      this.http.get("http://192.168.2.4/~sflachet/appliweb/public/index.php/getAPIFraisF")
      .subscribe(results => {
        env.fichierJSONFraisHF = results;     // on récupère la liste des fraisHF (présents dans l'API en format JSON) dans la variable fichierJSONFraisHF
      
        // on va boucler sur la liste des fraisHF
        env.fichierJSONFraisHF.forEach(fraisF => {
  
          //On ajoute le frais au Tab
          if(env.item.id==fraisF.idFiche){ //On verifie si le frais correspond bien à la fiche choisie
            env.TabFraisF.push({nom: fraisF.idType, quantite: fraisF.quantite});
          }
        });
      });
    });

  }

  ngOnInit() {
  }

}
