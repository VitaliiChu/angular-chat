import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat/chat.component';
import { ContactListComponent } from './contact-list/contact-list.component';


const routes: Routes = [
  { path: 'chat/:contact', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
