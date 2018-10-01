import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItensComponent } from './itens/itens.component';

const routes: Routes = [
  {path: 'item', component: ItemComponent},
  {path: 'itens', component: ItensComponent},
  {path: '', component: ItensComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
