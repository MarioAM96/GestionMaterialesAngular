import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'gestion-materiales';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Redirige automáticamente a la página de login cuando la aplicación se carga
    this.router.navigate(['/login']);
  }
}
