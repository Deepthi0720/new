import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginmenuComponent } from './loginmenu/loginmenu.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',redirectTo:'dashboardLink',pathMatch:'full'
  },
  {
    path:'dashboardLink',component:DashboardComponent
  },
  {
    path:'loginLink',component:LoginComponent
  },
  {
    path:'registerLink',component:RegisterComponent
  },
  {
    path:'loginmenuLink',component:LoginmenuComponent
  },
  {
    path:'adminLink',component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
