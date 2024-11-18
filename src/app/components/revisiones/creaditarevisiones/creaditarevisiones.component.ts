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
import { Revisiones } from '../../../models/revisiones.model';
import { RevisionesService } from '../../../services/revisiones.service';
import { Proyecto } from '../../../models/proyectos.model';
import { ProyectosService } from '../../../services/proyectos.service';

@Component({
  selector: 'app-creaditarevisiones',
  standalone: true,
  imports: [MatButtonModule, MatSelectModule, MatFormFieldModule, CommonModule, NgIf,
    MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './creaditarevisiones.component.html',
  styleUrls: ['./creaditarevisiones.component.css']
})
export class CreaditarevisionesComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  revision: Revisiones = new Revisiones();
  edicion: boolean = false;
  id: number = 0;
  proyectos: Proyecto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private revisionesService: RevisionesService,
    private proyectoService: ProyectosService,
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
      Comentario: ['', Validators.required],
      Puntuacion: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      Fecha: ['', Validators.required],
      proyect: ['', Validators.required],
    });

    this.proyectoService.list().subscribe((data: Proyecto[]) => {
      this.proyectos = data;
    });
  }

  registrar(): void {
    if (this.form.valid) {
      this.revision.comentario = this.form.value.Comentario;
      this.revision.puntuacion = this.form.value.Puntuacion;
      this.revision.fecha = this.form.value.Fecha;
      this.revision.proyecto.idProyecto = this.form.value.proyect;

      if (this.edicion) {
        this.revision.idRevision = this.id; // Asegúrate de asignar el ID a la revisión
        this.revisionesService.update(this.revision, this.id).subscribe(() => {
          this.revisionesService.list().subscribe((data) => {
            this.revisionesService.setList(data);
          });
          this.router.navigate(['/revisiones']);
        });
      } else {
        this.revisionesService.insert(this.revision).subscribe(() => {
          this.revisionesService.list().subscribe((data) => {
            this.revisionesService.setList(data);
          });
          this.router.navigate(['/revisiones']);
        });
      }
    }
  }

  init(): void {
    if (this.edicion) {
      this.revisionesService.listaId(this.id).subscribe((data) => {
        this.revision = data;
        this.form.patchValue({
          Comentario: data.comentario,
          Puntuacion: data.puntuacion,
          Fecha: data.fecha,
          proyect: data.proyecto.idProyecto,
        });
      });
    }
  }
}
