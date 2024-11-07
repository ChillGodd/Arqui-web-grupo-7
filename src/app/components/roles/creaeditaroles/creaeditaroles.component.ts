import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Roles } from '../../../models/roles.model';
import { RolesService } from '../../../services/roles.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-creaeditaroles',
  standalone: true,
  providers: [],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule,CommonModule],
  templateUrl: './creaeditaroles.component.html',
  styleUrl: './creaeditaroles.component.css'
})
export class CreaeditarolesComponent {
  form:FormGroup=new FormGroup({})
  roles:Roles=new Roles();

  id:number = 0
  edicion:boolean = false


  constructor(
    private formBuilder:FormBuilder, 
    private rS:RolesService,
    private router:Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void{
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
      this.edicion = data['id']!=null
      //data de la tabla 
      this.init()
    })



    this.form = this.formBuilder.group({
      hcodigo:[''],
      hnombre:['',Validators.required],
      hdescripcion:['',Validators.required]
    });
  }
  aceptar(){
    if (this.form.valid) {
      this.roles.idRol=this.form.value.hcodigo;
      this.roles.nombre=this.form.value.hnombre;
      this.roles.descripcion=this.form.value.hdescripcion;
      this.rS.insert(this.roles).subscribe((data) => {
        this.rS.list().subscribe(data =>{
          this.rS.setList(data);
        })
      })
    }
    this.router.navigate(['roles'])
  }
  init(){
    if(this.edicion){
     this.rS.listId(this.id).subscribe((data)=>{
       this.form = new FormGroup({
        hcodigo: new FormControl(data.idRol),
        hnombre: new FormControl(data.nombre),
        hdescripcion: new FormControl(data.descripcion),
       });
     });
    }
  }
}
