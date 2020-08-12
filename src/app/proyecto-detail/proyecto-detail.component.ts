import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.css']
})
export class ProyectoDetailComponent implements OnInit {

  proyectoForm = this.fb.group({
    nombre: [null, Validators.required],
    descripcion: null,
    fechaInicio: [null, Validators.required],
    fechaFin: null
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
