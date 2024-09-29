import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
    
    {path:'', component:IndexComponent},
    {path:'index', component:IndexComponent},
    {path:'about', component:AboutComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    // {path:'', component:IndexComponent},
    {path:'**', component:ErrorPageComponent},

];
