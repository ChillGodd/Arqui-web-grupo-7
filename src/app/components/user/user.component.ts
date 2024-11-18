<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaruserComponent } from "../user/listaruser/listaruser.component";
=======
import { Component } from '@angular/core';
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a

@Component({
  selector: 'app-user',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, ListaruserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {}
}
=======
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
>>>>>>> 8018b2f14df1fdbfc51183bbbc7b97463961555a
