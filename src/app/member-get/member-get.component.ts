import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-get',
  templateUrl: './member-get.component.html',
  styleUrls: ['./member-get.component.css']
})
export class MemberGetComponent implements OnInit {

  displayedColumns: string[] = ['name', 'bio', 'age', 'action'];
  data: Member[] = [];
  isLoadingResults = true;
  private members: Observable<Member[]>;

  constructor(private api: MemberService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllMembers()
      .subscribe((res: any) => {
        this.data = res;
        console.log(`Retorno All Members ${JSON.stringify(this.data)}`);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  deleteMember(id: number) {
    this.api.deleteMember(id)
      .subscribe((res: any) => {
        this.data = res;
        console.log(`Retorno Delete ${JSON.stringify(this.data)}`);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  memberDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateMember(id: number) {
    this.router.navigate(['edit', id]);
  }

}
