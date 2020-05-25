import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  memberForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private api: MemberService, private router: Router) {
  }

  ngOnInit() {
    this.memberForm = this.formBuilder.group({
      name: ['', Validators.required],
      bio: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.memberForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.memberForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.memberForm.value));
    this.api.createMember(this.memberForm.value)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/members']);
  }

  onReset() {
    this.submitted = false;
    this.memberForm.reset();
  }
}
