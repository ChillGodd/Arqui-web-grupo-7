import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators,ReactiveFormsModule,FormControl,} from '@angular/forms';
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
import { UserService } from '../../../services/users.service';

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
    MatInputModule,
  ],
  templateUrl: './creaditamensajes.component.html',
  styleUrls: ['./creaditamensajes.component.css'],
})
export class CreaditarmensajesComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  mensaje: Mensajes = new Mensajes();
  edicion: boolean = false;
  id: number = 0;
  users: User[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private mensajesService: MensajesService,
    private userService: UserService,
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
      user: ['', Validators.required],
    });

    this.userService.list().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  registrar(): void {
    if (this.form.valid) {
        this.mensaje.contenido = this.form.value.contenido;
        this.mensaje.fecha = this.form.value.fecha;
        this.mensaje.leido = this.form.value.leido;
        this.mensaje.user.idUser = this.form.value.user; 

        if (this.edicion) {
            this.mensajesService.update(this.mensaje, this.id).subscribe(() => {
                this.router.navigate(['/mensajes']);
            });
        } else {
            this.mensajesService.insert(this.mensaje).subscribe(() => {
                this.router.navigate(['/mensajes']);
            });
        }
    }
}

  init() {
    if (this.edicion) {
      this.mensajesService.listId(this.id).subscribe((data) => {
        this.form = this.formBuilder.group({
          contenido: new FormControl(data.contenido),
          fecha: new FormControl(data.fecha),
          leido: new FormControl(data.leido),
          usuario: new FormControl(data.user.nombreUser),
        });
      });
    }
  }
}
