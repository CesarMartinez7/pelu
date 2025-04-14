import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "footer", component: FooterComponent},
    {path: "navbar", component: NavbarComponent}
];
