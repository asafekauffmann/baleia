import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.component.html',
  styleUrls: ['./pag1.component.css']
})
export class Pag1Component implements OnInit {
  

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  vaiParaOutraPagina() {
     this.router.navigate(['/pg2']);
  }


}
