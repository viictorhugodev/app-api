import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  data: any;
  dataSlice: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.fetchData().subscribe((response) => {
      this.data = response;
      this.dataSlice = this.data.Users.slice(0,30)
    });
  }

  redireccionar(): void {
    this.router.navigate(['/imagen']);
  }
}
