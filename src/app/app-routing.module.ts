import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PrincipalComponent} from './principal/principal.component';

const router:Routes=[
{path:'',redirectTo:'principal',pathMatch:'full'},
{path:'principal',component:PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
