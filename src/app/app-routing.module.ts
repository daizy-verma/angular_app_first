import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './core/layout/auth/auth.component';
import { UserLayoutComponent } from './core/layout/user-layout/user-layout.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: AuthComponent, 
    children: [
      {path:'register',component:RegisterComponent},
      {path:'',component:LoginComponent},
      // {path:'logout',component:LogoutComponent}
    ]
  },

  {
    path: '',
    component: UserLayoutComponent, 
    children: [

  {path:'home',component:HomeComponent},

  {path:'about',component:AboutComponent},

  {path:'services',component:ServicesComponent,canActivate:[authGuard]},

  {path:'contact',component:ContactComponent},

  { path: 'pipes', loadChildren: () => import('./pipes-eg/pipes-eg.module').then(m => m.PipesEgModule), canActivate:[authGuard]},
  { path: 'styling', loadChildren: () => import('./styling/styling.module').then(m => m.StylingModule), canActivate:[authGuard]},
  { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule), canActivate:[authGuard]},
  { path: 'directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule), canActivate:[authGuard]},
  { path: '', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule), canActivate:[authGuard]}
    
]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
