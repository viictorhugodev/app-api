import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {

  constructor(private router: Router) { }

  redireccionar(): void {
    this.router.navigate(['/']);
  }
}
