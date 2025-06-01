import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngfor',
  templateUrl: './diretivas-ngfor.component.html',
  styleUrls: ['./diretivas-ngfor.component.css']
})
export class DiretivasNgforComponent implements OnInit {

  cursos: string[] = ["Angular", "Typescript"];
  constructor() { }

  ngOnInit() {
  }

}
