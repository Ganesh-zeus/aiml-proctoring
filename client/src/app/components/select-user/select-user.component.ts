import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css'],
})
export class SelectUserComponent implements OnInit {
  selectUserForm = new FormGroup({
    label: new FormControl('', [Validators.required]),
  });

  userList = [];
  selectedUser = '';
  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.http
        .get('http://localhost:64000/FileManager', {
          headers: new HttpHeaders(),
        }).subscribe((users:any) => {
          this.userList = users;
          if(this.userList.length > 0)
          this.selectedUser = this.userList[0];
        });    
  }

  selectUser(event:any){
    this.selectedUser = event.target.value;
    console.log(this.selectedUser);
  }

  navigateTo() {
    this.router.navigate(['../', 'add-user'], { relativeTo: this.route });
  }

  goToProctoringTest(){
    // let headers = new HttpHeaders();
    // this.http
    //   .get('http://localhost:64000/FileManager/'+this.selectedUser, {
    //     headers: new HttpHeaders(),
    //   }).subscribe((data) => {
    //     console.log(data);
        
    //   });;



    this.router.navigate(['../', 'proctoring-test',this.selectedUser], {
      relativeTo: this.route,
    });
  }
}
