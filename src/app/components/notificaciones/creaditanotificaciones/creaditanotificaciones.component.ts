import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgIf } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Notificaciones } from '../../../models/notificaciones.model';
import { NotificacionesService } from '../../../services/notificaciones.service';
import { UserService } from '../../../services/users.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-creaditanotificaciones',
  standalone: true,
  imports: [
    MatButtonModule, MatSelectModule, MatFormFieldModule, CommonModule, NgIf,
    MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './creaditanotificaciones.component.html',
  styleUrls: ['./creaditanotificaciones.component.css']
})
export class CreaditaNotificacionesComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  notificacion: Notificaciones = new Notificaciones();
  edicion: boolean = false;
  id: number = 0;
  users: User[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private notificacionesService: NotificacionesService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = this.id != null; // Si hay un ID, estamos en modo edición
      this.init();
    });

    this.form = this.formBuilder.group({
      mensaje: ['', Validators.required],
      tipoNotificacion: ['', Validators.required],
      fechaNotificacion: ['', Validators.required],
      user: ['', Validators.required],
    });

    this.userService.list().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  registrar(): void {
    if (this.form.valid) {
      this.notificacion.mensaje = this.form.value.mensaje;
      this.notificacion.tipoNotificacion = this.form.value.tipoNotificacion;
      this.notificacion.fechaNotificacion = this.form.value.fechaNotificacion;
      this.notificacion.user.idUser = this.form.value.user;

      if (this.edicion) {
        this.notificacion.idNotificacion = this.id; // Asegúrate de asignar el ID a la notificación
        this.notificacionesService.update(this.notificacion, this.id).subscribe(() => {
          this.notificacionesService.list().subscribe((data) => {
            this.notificacionesService.setList(data);
          });
          this.router.navigate(['/notificaciones']);
        });
      } else {
        this.notificacionesService.insert(this.notificacion).subscribe(() => {
          this.notificacionesService.list().subscribe((data) => {
            this.notificacionesService.setList(data);
          });
          this.router.navigate(['/notificaciones']);
        });
      }
    }
  }

  init(): void {
    if (this.edicion) {
      this.notificacionesService.listId(this.id).subscribe((data) => {
        this.notificacion = data;
        this.form.patchValue({
          mensaje: data.mensaje,
          tipoNotificacion: data.tipoNotificacion,
          fechaNotificacion: data.fechaNotificacion,
          user: data.user.idUser,
        });
      });
    }
  }
}