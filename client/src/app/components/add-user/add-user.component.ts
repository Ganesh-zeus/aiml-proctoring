import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  addUserForm = new FormGroup({
    label: new FormControl('', [Validators.required]),
  });

  fileToUpload: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
  }

  saveFileInfo() {
    if (this.addUserForm.valid && this.fileToUpload) {
      const formData: FormData = new FormData();

      formData.append('myFile', this.fileToUpload);
      formData.append('label', this.addUserForm.value.label);

      this.http
        .post('http://localhost:64000/FileManager', formData, {
          headers: new HttpHeaders(),
        })
        .subscribe(() => {
          alert('File uploaded');

          // reset form inputs
          this.addUserForm.value.label = '';
          this.fileToUpload = null;

          // redirect to home
          this.router.navigate(['../', 'select-user'], {
            relativeTo: this.route,
          });
        });
    } else {
      alert('Fill all form details correctly!');
    }
  }
}
