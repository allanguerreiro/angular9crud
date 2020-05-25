import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  id: number;
  member: Member;

  constructor(private route: ActivatedRoute, private router: Router, private api: MemberService) { }

  ngOnInit() {
    this.member = new Member();

    this.id = this.route.snapshot.params['id'];

    this.api.getMember(this.id)
      .subscribe(data => {
        console.log(data)
        this.member = data;
      }, error => console.log(error)
      );
  }

  updateMember() {
    this.api.updateMember(this.id, this.member)
      .subscribe(data => console.log(data), error => console.log(error));
    this.member = new Member();
    this.gotoList();
  }

  onSubmit() {
    this.updateMember();
  }

  gotoList() {
    this.router.navigate(['/members']);
  }

}
