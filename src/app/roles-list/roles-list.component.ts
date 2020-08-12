import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {
  roles: any[];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:3000/api/roles")
    .subscribe(roles => {
      this.roles = roles;
    })
  }

}
