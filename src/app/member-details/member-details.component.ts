import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  id: number;
  member: Member;

  constructor(private route: ActivatedRoute, private router: Router, private api: MemberService) { }

  ngOnInit() {
    this.member = new Member();

    this.id = this.route.snapshot.params['id'];

    this.api.getMember(this.id)
      .subscribe(data => {
        console.log(data);
        this.member = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['members']);
  }

}
