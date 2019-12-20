import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-page-principal-frais',
  templateUrl: './page-principal-frais.page.html',
  styleUrls: ['./page-principal-frais.page.scss'],
})
export class PagePrincipalFraisPage implements OnInit {

  fichierJSON: any=[];

  TabFiche=[];

  selectedvalue=0;

  mois=0;


  user:any={login:"",mdp:"",id:""};

  constructor(private router:Router, private activeRoute:ActivatedRoute,private http:HttpClient) { 
    this.activeRoute.queryParams.subscribe(params =>{
      this.user=this.router.getCurrentNavigation().extras.state;
    });
  
  this.execReq();

   }

  ngOnInit() {
  }

  deconnexion(){
    this.router.navigate(['/home']);
  }

  Edit(item){
    let param : NavigationExtras = {state:{item:item}}
    this.router.navigate(['/detail-fiche'], param);
  }

  ChangeMois(){
    this.mois=this.selectedvalue;
    this.execReq();
  }

  execReq(){
    this.TabFiche=[];
    this.http.get("http://192.168.2.4/~sflachet/appliweb/public/index.php/getAPIFiche")
    .subscribe(results => {
      this.fichierJSON = results;     // on récupère la liste des fiches (présentes dans l'API en format JSON) dans la variable fichierJSON
      // on va boucler sur la liste des fiches
      this.fichierJSON.forEach(fiche => {

        var today = new Date(fiche.datecreation.date); 

        var dd = today.getDate(); 
        var mm = today.getMonth() + 1;   
        var yyyy = today.getFullYear(); 

        // /!\Ne pas prêter attention aux erreurs : C'EST NORMAL
        

        
        if(this.user.id==fiche.idVisiteur) //on teste la connection pour obtenir seulement les fiches du visiteur qui c'est connecté a
        {
        
          if (mm < 10) { 
              mm = '0' + mm;
          } 

          var today = mm + '/' + yyyy; //Mise en forme de la date
          if(this.mois == 0 || mm == this.mois){
            this.TabFiche.push({id: fiche.id,etat: fiche.idEtat, dateCreation: today, montant: fiche.montant_rembourse });  //On ajoute la fiche au tableau qui contient toutes les fiches
          }
          } 
       }); 
    });
  }

}
