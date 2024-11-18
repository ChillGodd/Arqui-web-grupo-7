import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators,ReactiveFormsModule,FormControl,} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgIf } from '@angular/common';
import { Hosting } from '../../../models/hosting.model';
import { HostingService } from '../../../services/hosting.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Proyecto } from '../../../models/proyectos.model';
import { ProyectosService } from '../../../services/proyectos.service';

@Component({
  selector: 'app-creaditahosting',
  standalone: true,
  imports: [MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    NgIf,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,],
  templateUrl: './creaditahosting.component.html',
  styleUrl: './creaditahosting.component.css'
})
export class CreaditahostingComponent {
  form: FormGroup = new FormGroup({});
  hosting: Hosting = new Hosting();
  edicion: boolean = false;
  id: number = 0;
  proyectos: Proyecto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private hostingService: HostingService,
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
      tipo: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      fechaAdquisicion: ['', Validators.required],
      fechaExpiracion: ['', Validators.required],
      proyecto: ['', Validators.required],
    });

    this.proyectoService.list().subscribe((data: Proyecto[]) => {
      this.proyectos = data;
    });
  }

  registrar(): void {
    if (this.form.valid) {
      this.hosting.tipo = this.form.value.tipo;
      this.hosting.url = this.form.value.url;
      this.hosting.fechaAdquisicion = this.form.value.fechaAdquisicion;
      this.hosting.fechaExpiracion = this.form.value.fechaExpiracion;
      this.hosting.proyecto = { idProyecto: this.form.value.proyecto } as Proyecto; 
  
      if (this.edicion) {
        this.hostingService.update(this.hosting, this.id).subscribe(() => {
          this.router.navigate(['/hosting']);
        });
      } else {
        this.hostingService.insert(this.hosting).subscribe(() => {
          this.router.navigate(['/hosting']);
        });
      }
    }
  }
  
  init() {
    if (this.edicion) {
      this.hostingService.listId(this.id).subscribe((data) => {
        this.form = this.formBuilder.group({
          tipo: new FormControl(data.tipo),
          url: new FormControl(data.url),
          fechaAdquisicion: new FormControl(new Date(data.fechaAdquisicion)),
          fechaExpiracion: new FormControl(new Date(data.fechaExpiracion)),  
          proyecto: new FormControl(data.proyecto?.idProyecto),
        });
      });
    }
  }
  
  
}

