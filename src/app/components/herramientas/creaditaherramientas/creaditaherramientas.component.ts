import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Herramientas } from '../../../models/herramientas.model';
import { Proyecto } from '../../../models/proyectos.model';
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
import { ProyectosService } from '../../../services/proyectos.service';

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
  proyectos: Proyecto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private herramientasService: HerramientasService,
    private proyectoService: ProyectosService,
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
      proyect: ['', Validators.required],
    });
  
    this.proyectoService.list().subscribe((data: Proyecto[]) => {
      console.log(data);  // Añade esto para verificar los datos en la consola
      this.proyectos = data;
    });
    
  }

  registrar(): void {
    if (this.form.valid) {
      this.herramienta.nombre = this.form.value.nombre;
      this.herramienta.descripcion = this.form.value.descripcion;
      this.herramienta.proyecto.idProyecto=this.form.value.proyect;
  
      if (this.edicion) {
        this.herramientasService.update(this.herramienta, this.herramienta.idHerramienta).subscribe(() => {
          this.herramientasService.list().subscribe((data) => {
            this.herramientasService.setList(data);
          });
          this.router.navigate(['/herramientas']);
        });
      } else {
        this.herramientasService.insert(this.herramienta).subscribe(() => {
          this.herramientasService.list().subscribe((data) => {
            this.herramientasService.setList(data);
          });
          this.router.navigate(['/herramientas']);
        });
      }
    }
  }

  init() {
    if (this.edicion) {
      this.herramientasService.listId(this.id).subscribe((data) => {
        this.form.patchValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          proyect: data.proyecto.idProyecto,
        });
      });
    }
  }
}