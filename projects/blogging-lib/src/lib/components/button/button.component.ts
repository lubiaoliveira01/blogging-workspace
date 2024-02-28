import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [
    NgClass
  ],
})

export class ButtonComponent {

  @Input()
  public variant!: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'

  @Input()
  public size: 'sm' | 'md' | 'lg' = 'md'

}
