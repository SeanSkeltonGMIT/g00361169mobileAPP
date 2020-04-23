import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  constructor() { }
 
 
  userEmai:string; 
  ngOnInit() {
    
    //abandoned code for ionic storage
    /*this.storage.get("email").then(
      (data)=>{
        this.userEmai = data;
      }
    ).catch(
     (error) => {
       console.log("error");
     } 
    );

*/

}
}
