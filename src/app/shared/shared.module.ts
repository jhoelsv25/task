import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/others/search/search.component';
import { BtnAddComponent } from './components/buttons/btn-add/btn-add.component';
import { BtnDeleteComponent } from './components/buttons/btn-delete/btn-delete.component';
import { ConfirmDeleteComponent } from './components/modals/confirm-delete/confirm-delete.component';
import { DialogModule } from '@angular/cdk/dialog';
import { FiltersComponent } from './components/others/filters/filters.component';



@NgModule({
  declarations: [
    SearchComponent,
    BtnAddComponent,
    BtnDeleteComponent,
    ConfirmDeleteComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports:[
    SearchComponent,
    BtnAddComponent,
    BtnDeleteComponent,
    FiltersComponent
  ]
})
export class SharedModule { }
