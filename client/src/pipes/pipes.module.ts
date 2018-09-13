import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import {FilterPipe} from "./filter.pipe";


export const pipes = [
  FilterPipe
];

@NgModule({
  declarations:[pipes],
  imports: [IonicModule],
  exports: [pipes]
})

export class PipesModule { }
