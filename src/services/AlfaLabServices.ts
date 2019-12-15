import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class AlfaLabServices{
    VisitHome: string;
    quranUrl: string;
    GetCount: any;
    funeralsUrlMosque: string;
    funtestcity: string;
    funtestcountry: string;
    funtest: string;
    funeralsUrlfunerals: string;
    funeralsUrl: string;
    apiKey: string;
    http: any;
    Complaints: any;
    instgramfeed: string;
    tamany: any;
    Users: any;
    offers: string;
    slider: any;
    static get parameters() {
    return [Http];
}

constructor(http:Http){
this.http =http;
this.apiKey='klpJFMrBlAESRbeHMJd0fMG16e6e_8ik';
// this.funeralsUrlMosque='https://api.mlab.com/api/1/databases/funeralsdb/collections/mosque';
this.VisitHome ='https://api.mlab.com/api/1/databases/alfalabdb/collections/visithome';
this.Complaints='https://api.mlab.com/api/1/databases/alfalabdb/collections/complaints';
this.tamany='https://api.mlab.com/api/1/databases/alfalabdb/collections/tamany';
this.offers='https://api.mlab.com/api/1/databases/alfalabdb/collections/offers';
this.slider ='https://api.mlab.com/api/1/databases/alfalabdb/collections/slider';
this.instgramfeed ='https://api.instagram.com/v1/users/self/media/recent/?access_token=5557661284.1677ed0.5bd59092ddaf4ba2849bede200e3415b'
this.Users='https://api.mlab.com/api/1/databases/alfalabdb/collections/users'

}
private _url= 'assets/country.json';




    getinstgramfeed(){
        return this.http.get(this.instgramfeed).map(res => res.json());
    }

    gettamany(){
    
        return this.http.get(this.tamany+'?apiKey='+this.apiKey).map(res => res.json());
        
    }
    getOffers(){
    
        return this.http.get(this.offers+'?apiKey='+this.apiKey).map(res => res.json());
        
    }
    getslider(){
    
        return this.http.get(this.slider+'?apiKey='+this.apiKey).map(res => res.json());
        
    }
addVisitHome(visithome){
var headers=new Headers();
headers.append('Content-Type','application/json');
return this.http.post(this.VisitHome+'?apiKey='+this.apiKey,JSON.stringify(visithome),{headers:headers})
.map(res=> res.json());
}

addUser(userinfo){
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.Users+'?apiKey='+this.apiKey,JSON.stringify(userinfo),{headers:headers})
    .map(res=> res.json());
    }
addComplaints(Complaints){
    var headers=new Headers();
headers.append('Content-Type','application/json');
return this.http.post(this.Complaints+'?apiKey='+this.apiKey,JSON.stringify(Complaints),{headers:headers})
.map(res=> res.json());
}


GetUserByPhoneNum(PhoneNum){
    // return this.http.get(this.Users+'?q={"PhoneNum":'+phonenum+'}'+'?apiKey='+this.apiKey).map(res => res.json());
    return this.http.get(this.Users+'?q={"PhoneNum": "'+PhoneNum+'"}'+'&c=fales'+'&apiKey='+this.apiKey).map(res => res.json());

    return this.http.get(this.Users+'?apiKey='+this.apiKey).map(res => res.json());

}

GetUserByEmail(email){
    // return this.http.get(this.Users+'?q={"PhoneNum":'+phonenum+'}'+'?apiKey='+this.apiKey).map(res => res.json());
    return this.http.get(this.Users+'?q={"Email": "'+email+'"}'+'&c=fales'+'&apiKey='+this.apiKey).map(res => res.json());

    return this.http.get(this.Users+'?apiKey='+this.apiKey).map(res => res.json());

}


}