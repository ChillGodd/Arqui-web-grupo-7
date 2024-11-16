import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgIf } from '@angular/common';
import { Mensajes } from '../../../models/mensajes.model';
import { MensajesService } from '../../../services/mensajes.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-creaditarmensajes',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    NgIf,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './creaditamensajes.component.html',
  styleUrls: ['./creaditamensajes.component.css']
})
export class CreaditarmensajesComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  mensaje: Mensajes = new Mensajes();
  edicion: boolean = false;
  id: number = 0;
  usuarios: User[] = [];  

  constructor(
    private formBuilder: FormBuilder,
    private mensajesService: MensajesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = this.id != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      contenido: ['', Validators.required],
      fecha: ['', Validators.required],
      leido: [false, Validators.required],
      usuario: ['', Validators.required],
    });

    
    this.mensajesService.list().subscribe((data) => {
      this.usuarios = data.map((mensaje) => mensaje.user);  
    });
  }

  registrar(): void {
    if (this.form.valid) {
      this.mensaje.Contenido = this.form.value.contenido;
      this.mensaje.Fecha = this.form.value.fecha;
      this.mensaje.Leido = this.form.value.leido;
      this.mensaje.user = this.form.value.usuario;

      if (this.edicion) {
        // Actualizar mensaje
        this.mensajesService.update(this.mensaje, this.mensaje.idMensaje).subscribe(() => {
          this.mensajesService.list().subscribe((data) => {
            this.mensajesService.setList(data);  
          });
          this.router.navigate(['/mensajes']);  
        });
      } else {
        
        this.mensajesService.insert(this.mensaje).subscribe(() => {
          this.mensajesService.list().subscribe((data) => {
            this.mensajesService.setList(data);  
          });
          this.router.navigate(['/mensajes']);  
        });
      }
    }
  }

  init() {
    if (this.edicion) {
      this.mensajesService.listId(this.id).subscribe((data) => {
        this.form = this.formBuilder.group({
          contenido: new FormControl(data.Contenido),
          fecha: new FormControl(data.Fecha),
          leido: new FormControl(data.Leido),
          usuario: new FormControl(data.user),
        });
      });
    }
  }
}
