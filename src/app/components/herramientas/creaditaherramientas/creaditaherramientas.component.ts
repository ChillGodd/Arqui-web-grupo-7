import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Herramientas } from '../../../models/herramientas.model';
<<<<<<< HEAD
import { Proyecto } from '../../../models/proyectos.model';
=======
import { Proyectos } from '../../../models/proyectos.model';
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
import { HerramientasService } from '../../../services/herramientas.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, NgIf } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
<<<<<<< HEAD
import { ProyectosService } from '../../../services/proyectos.service';
=======
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

@Component({
  selector: 'app-creaditaherramientas',
  standalone: true,
  imports: [MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    NgIf,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule],
  templateUrl: './creaditaherramientas.component.html',
  styleUrl: './creaditaherramientas.component.css'
})
export class CreaditaherramientasComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  herramienta: Herramientas = new Herramientas();
  edicion: boolean = false;
  id: number = 0;
<<<<<<< HEAD
  proyectos: Proyecto[] = [];
=======
  proyectos: Proyectos[] = [];  
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

  constructor(
    private formBuilder: FormBuilder,
    private herramientasService: HerramientasService,
<<<<<<< HEAD
    private proyectoService: ProyectosService,
=======
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = this.id != null;
      this.init();
    });
<<<<<<< HEAD
  
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      proyect: ['', Validators.required],
    });
  
    this.proyectoService.list().subscribe((data: Proyecto[]) => {
      console.log(data);  // Añade esto para verificar los datos en la consola
      this.proyectos = data;
    });
=======

    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      proyecto: ['', Validators.required],
    });

>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
    
  }

  registrar(): void {
    if (this.form.valid) {
      this.herramienta.nombre = this.form.value.nombre;
      this.herramienta.descripcion = this.form.value.descripcion;
<<<<<<< HEAD
      this.herramienta.proyecto.idProyecto=this.form.value.proyect;
  
      if (this.edicion) {
=======
      this.herramienta.proyecto = this.form.value.proyecto;

      if (this.edicion) {
        
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
        this.herramientasService.update(this.herramienta, this.herramienta.idHerramienta).subscribe(() => {
          this.herramientasService.list().subscribe((data) => {
            this.herramientasService.setList(data);
          });
<<<<<<< HEAD
          this.router.navigate(['/herramientas']);
        });
      } else {
=======
          this.router.navigate(['/herramientas']);  
        });
      } else {
        
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
        this.herramientasService.insert(this.herramienta).subscribe(() => {
          this.herramientasService.list().subscribe((data) => {
            this.herramientasService.setList(data);
          });
<<<<<<< HEAD
          this.router.navigate(['/herramientas']);
=======
          this.router.navigate(['/herramientas']);  
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
        });
      }
    }
  }

  init() {
    if (this.edicion) {
      this.herramientasService.listId(this.id).subscribe((data) => {
<<<<<<< HEAD
        this.form.patchValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          proyect: data.proyecto.idProyecto,
=======
        this.form = this.formBuilder.group({
          nombre: new FormControl(data.nombre),
          descripcion: new FormControl(data.descripcion),
          proyecto: new FormControl(data.proyecto),
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
        });
      });
    }
  }
}