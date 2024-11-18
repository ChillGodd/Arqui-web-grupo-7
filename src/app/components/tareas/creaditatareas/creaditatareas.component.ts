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
import { UserService } from '../../../services/users.service';
import { Tareas } from '../../../models/tareas.model';
import { Proyecto } from '../../../models/proyectos.model';
import { TareasService } from '../../../services/tareas.service';
import { ProyectosService } from '../../../services/proyectos.service';

@Component({
  selector: 'app-creaditatareas',
  standalone: true,
  imports: [MatButtonModule,MatSelectModule,MatFormFieldModule,CommonModule,NgIf,MatDatepickerModule
    ,MatNativeDateModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './creaditatareas.component.html',
  styleUrl: './creaditatareas.component.css'
})
export class CreaditatareasComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  tarea: Tareas = new Tareas();
  edicion: boolean = false;
  id: number = 0; 
  proyectos: Proyecto[]=[];

  constructor(
    private formBuilder: FormBuilder, 
    private tareasService: TareasService,
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
    estado: ['', Validators.required],
    fechaLimite: ['', Validators.required],
    horasEmpleadas: ['', Validators.required],
    proyect: ['', Validators.required],
  });

  this.proyectoService.list().subscribe((data: Proyecto[]) => {
    console.log(data);  // Añade esto para verificar los datos en la consola
    this.proyectos = data;
  }); 
}

registrar(): void{
  if(this.form.valid){
    this.tarea.nombre = this.form.value.nombre ;
    this.tarea.descripcion = this.form.value.descripcion;
    this.tarea.estado=this.form.value.estado;
    this.tarea.fechaLimite=this.form.value.fechaLimite;
    this.tarea.horasEmpleadas=this.form.value.horasEmpleadas;
    this.tarea.proyecto.idProyecto = this.form.value.proyect;
    

    if(this.edicion){
      this.tareasService.update(this.tarea, this.tarea.idTareas).subscribe(() => {
        this.tareasService.list().subscribe((data) => {
          this.tareasService.setList(data);
        });
        this.router.navigate(['/tareas']);
      });
    } else {
      this.tareasService.insert(this.tarea).subscribe(() => {
        this.tareasService.list().subscribe((data) => {
          this.tareasService.setList(data);
        });
        this.router.navigate(['/tareas']);
      });
    }
  }
}
 init() {
   if (this.edicion) {
     this.tareasService.listId(this.id).subscribe((data) => {
       this.form.patchValue({
         nombre: data.nombre,
         descripcion: data.descripcion,
         proyect: data.proyecto,
       });
     });
   }
 }
}