import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar
  }
}
