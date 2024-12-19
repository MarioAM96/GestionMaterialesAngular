import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Para usar ngModel en el formulario
import { MatInputModule } from '@angular/material/input'; // Para los campos de entrada
import { MatButtonModule } from '@angular/material/button'; // Para el botón de login
import { MatFormFieldModule } from '@angular/material/form-field'; // Para el formulario de Material
import { MatIconModule } from '@angular/material/icon'; // Para los iconos si los usas

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const url = 'https://api.tvmax.ec/api/get-user/1UliJqH6oNuZEk6l72r7alxHe5QOyYGS6ZzS8NtyfYP4/materiales-fibramax-65bb0c225f90.json'; // URL de la API
    const body = {
      email: this.loginData.username,
      password: this.loginData.password
    };

    this.http.post(url, body).subscribe({
      next: (response) => {
        console.log('Login exitoso', response);
        // Redirige al usuario a la vista del dashboard si el login es exitoso
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error de login', err);
        // Aquí puedes agregar lógica para mostrar un mensaje de error al usuario
      }
    });
  }
}
