import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatSlideToggleModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule, 
  MatInputModule,
  MatIconModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ], 
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
