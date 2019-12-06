import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-bookmark-frm',
  templateUrl: './bookmark-frm.component.html',
  styleUrls: ['./bookmark-frm.component.scss']
})

export class BookmarkFrmComponent implements OnInit {
router: Router;
public  group:  string  =  "";
public  name:  string  =  "";
public  url:  string  =  "";

  constructor( router: Router) {
    this.router = router;
   }

  ngOnInit() {}

  onConfirm() {
    var storedNames = JSON.parse(localStorage.getItem("bookmark"));
    var obj = JSON.parse('{"group": "'+ this.group +'", "name": "'+ this.name +'", "url": "'+ this.url +'"}'); 
    storedNames.push(obj);
    localStorage.setItem("bookmark", JSON.stringify(storedNames)); 
  	this.router.navigate(['/bookmarkmain']);
  }

  onCancel() {
  	this.router.navigate(['/bookmarkmain']);
  }

}
