import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Layouts/blank-layout/blank-layout.component').then(m => m.BlankLayoutComponent),
        children: [
            {path : '' , redirectTo : "home" , pathMatch : "full"} ,
            {path: 'home', loadComponent: () => import('./Component/home/home.component').then(m => m.HomeComponent) , title: 'Home'},
            {path: 'about', loadComponent: () => import('./Component/about/about.component').then(m => m.AboutComponent) , title: 'About'},
            {path: 'contact', loadComponent: () => import('./Component/contact/contact.component').then(m => m.ContactComponent) , title: 'Contact'},
            {path: 'cart', 
                canActivate: [authGuard],
                loadComponent: () => import('./Component/cart/cart.component').then(m => m.CartComponent) , title: 'Cart'},
            {path: 'wishlist', 
                canActivate: [authGuard],
                loadComponent: () => import('./Component/wishlist/wishlist.component').then(m => m.WishlistComponent) , title: 'Wishlist'},

        ]
    
    } ,   
{
    path: '',
    loadComponent: () => import('./Layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
        {path : '' , redirectTo : "login" , pathMatch : "full"} ,
        {path: 'login', loadComponent: () => import('./Component/Auth/login/login.component').then(m => m.LoginComponent) , title: 'Login'},
        {path: 'register', loadComponent: () => import('./Component/Auth/register/register.component').then(m => m.RegisterComponent) , title: 'Register'}
    ]
} ,


{
    path: '**', loadComponent: () => import('./Component/not-found/not-found.component').then(m => m.NotFoundComponent)   
}



]

 

