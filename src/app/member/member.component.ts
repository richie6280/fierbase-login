import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
