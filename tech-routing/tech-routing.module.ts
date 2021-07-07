import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { WebwebComponent } from '../webweb/webweb.component';
import { JavajavaComponent } from '../javajava/javajava.component';
const routes:Routes = [
  {path:'web', component:WebwebComponent },
  {path:'java', component:JavajavaComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebwebComponent,JavajavaComponent]

