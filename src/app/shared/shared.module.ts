import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/others/search/search.component';
import { BtnAddComponent } from './components/buttons/btn-add/btn-add.component';
import { BtnDeleteComponent } from './components/buttons/btn-delete/btn-delete.component';
import { ConfirmDeleteComponent } from './components/modals/confirm-delete/confirm-delete.component';
import { DialogModule } from '@angular/cdk/dialog';
import { FiltersComponent } from './components/others/filters/filters.component';
import { NotFoundComponent } from './components/others/not-found/not-found.component';
import { ConfirmSaveComponent } from './components/modals/confirm-save/confirm-save.component';



@NgModule({
  declarations: [
    SearchComponent,
    BtnAddComponent,
    BtnDeleteComponent,
    ConfirmDeleteComponent,
    FiltersComponent,
    NotFoundComponent,
    ConfirmSaveComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports:[
    SearchComponent,
    BtnAddComponent,
    BtnDeleteComponent,
    FiltersComponent,
    ConfirmSaveComponent
  ]
})
export class SharedModule { }
