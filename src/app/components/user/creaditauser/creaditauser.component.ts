<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators,ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgIf } from '@angular/common';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/users.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Roles } from '../../../models/roles.model';
import { RolesService } from '../../../services/roles.service';
=======
import { Component } from '@angular/core';
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

@Component({
  selector: 'app-creaditauser',
  standalone: true,
<<<<<<< HEAD
  imports: [MatButtonModule,MatSelectModule,MatFormFieldModule,CommonModule,NgIf,MatDatepickerModule,
    MatNativeDateModule,ReactiveFormsModule,MatInputModule,],
  templateUrl: './creaditauser.component.html',
  styleUrls: ['./creaditauser.component.css'],
})
export class CreaditauserComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: User = new User();
  edicion: boolean = false;
  id: number = 0;
  listaderoles: Roles[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private rS: RolesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = this.id != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      nombreUser: ['', Validators.required],
      contrasenia: ['', Validators.required],
      fecha: ['', Validators.required],
      enabled: ['', Validators.required],
      rol: [null, Validators.required],
    });

    if (this.edicion) {
      this.userService.listId(this.id).subscribe((data: User) => {
        this.form.patchValue(data);
      });
    }
    this.rS.list().subscribe((data: Roles[]) => {
      this.listaderoles = data;
    });
  }

  registrar(): void {
    if (this.form.valid) {
      this.user.nombreUser = this.form.value.nombreUser;
      this.user.contrasenia = this.form.value.contrasenia;
      this.user.fecha = this.form.value.fecha;
      this.user.enabled=this.form.value.enabled;
      this.user.rol.idRol = this.form.value.rol;

      const selectedRoleId = this.form.value.rol; 
      this.rS.listId(selectedRoleId).subscribe((selectedRole: Roles) => { 
        this.user.rol = selectedRole});

      if (this.edicion) {
        this.userService.update(this.user, this.user.idUser).subscribe((data) => {
          this.userService.list().subscribe((data) => {
            this.userService.setList(data);
          });
          this.router.navigate(['/user']);
        });
      } else {
        this.userService.insert(this.user).subscribe((data) => {
          this.userService.list().subscribe((data) => {
            this.userService.setList(data);
          });
          this.router.navigate(['/user']);
        });
      }
    } else {
      console.log('Formulario no válido');
    }
  }

  init() {
    if (this.edicion) {
      this.userService.listId(this.id).subscribe((data: User) => {
        this.user = data;
        this.form.patchValue(data);
      });
    }
  }
}
=======
  imports: [],
  templateUrl: './creaditauser.component.html',
  styleUrl: './creaditauser.component.css'
})
export class CreaditauserComponent {

}
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
