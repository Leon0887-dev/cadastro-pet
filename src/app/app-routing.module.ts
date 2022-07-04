import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component'
import {AnimalsCrudComponent} from './views/animals-crud/animals-crud.component'
import {ProductsCrudComponent} from './views/products-crud/products-crud.component'

import {AnimalsCreateComponent} from './components/animals/animals-create/animals-create.component'

import {ProductsCreateComponent} from './components/products/products-create/products-create.component'

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {      
    path:"animals",
    component:AnimalsCrudComponent
  },
  {      
    path:"products",
    component:ProductsCrudComponent
  },
  {      
    path:"animals/create",
    component:AnimalsCreateComponent
  },
  {      
    path:"products/create",
    component:ProductsCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
