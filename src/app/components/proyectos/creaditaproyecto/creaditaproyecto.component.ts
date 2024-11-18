<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgIf } from '@angular/common';
import { Proyecto } from '../../../models/proyectos.model';
import { ProyectosService } from '../../../services/proyectos.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/users.service';

@Component({
  selector: 'app-creaditaproyectos',
  standalone: true,
  imports: [MatButtonModule, MatSelectModule, MatFormFieldModule, CommonModule, NgIf, MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './creaditaproyecto.component.html',
  styleUrl: './creaditaproyecto.component.css'
})
export class CreaditaproyectoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  proyecto: Proyecto = new Proyecto();
  edicion: boolean = false;
  users: User[] = [];
  id: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private proyectosService: ProyectosService,
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
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaTermina: ['', Validators.required],
      presupuesto: [0, Validators.required],
      user: ['', Validators.required],
    });
    if (this.edicion) {
      this.proyectosService.listId(this.id).subscribe((data: Proyecto) => {
        this.form.patchValue(data);
      });
    }
    
    this.userService.list().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  registrar(): void {
    if (this.form.valid) {
      this.proyecto.nombre = this.form.value.nombre;
      this.proyecto.descripcion = this.form.value.descripcion;
      this.proyecto.estado = this.form.value.estado;
      this.proyecto.fechaInicio = this.form.value.fechaInicio;
      this.proyecto.fechaFin = this.form.value.fechaTermina;
      this.proyecto.presupuesto = this.form.value.presupuesto;
      this.proyecto.user.idUser = this.form.value.user;

      if (this.edicion) {
        this.proyectosService.update(this.proyecto, this.proyecto.idProyecto).subscribe((data) => {
          this.proyectosService.list().subscribe((data) => {
            this.proyectosService.setList(data);
          });
          this.router.navigate(['/proyectos']);
        });
      } else {
        this.proyectosService.insert(this.proyecto).subscribe((data) => {
          this.proyectosService.list().subscribe((data) => {
            this.proyectosService.setList(data);
          });
          this.router.navigate(['/proyectos']);
        });
      }
    }
  }

  init() {
    if (this.edicion) {
      this.proyectosService.listId(this.id).subscribe((data: Proyecto) => {
        this.form.patchValue(data);
      });
    }
  }
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-creaditaproyecto',
  standalone: true,
  imports: [],
  templateUrl: './creaditaproyecto.component.html',
  styleUrl: './creaditaproyecto.component.css'
})
export class CreaditaproyectoComponent {

}
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
