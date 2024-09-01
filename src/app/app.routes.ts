import {  Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './Guards/auth.guard';
import { loginGuard } from './Guards/login.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Layouts/blank-layout/blank-layout.component').then(m => m.BlankLayoutComponent),
        children: [
            {path : '' , redirectTo : "home" , pathMatch : "full"} ,
            {path: 'home', loadComponent: () => import('./Component/home/home.component').then(m => m.HomeComponent) , title: 'Home'},
            {path: 'about', loadComponent: () => import('./Component/about/about.component').then(m => m.AboutComponent) , title: 'About'},
            {path: 'contact', loadComponent: () => import('./Component/contact/contact.component').then(m => m.ContactComponent) , title: 'Contact'},
            {path: 'product-details/:id', loadComponent: () => import('./Component/product-details/product-details.component').then(m => m.ProductDetailsComponent) , title: 'Product Details'},
            {path: 'Products/:PathName', loadComponent: () => import('./Component/products-page/products-page.component').then(m => m.ProductsPageComponent) , title: 'Products'},
            {path: 'category/:Name', loadComponent: () => import('./Component/catygory-page/category').then(m => m.CatygoryPageComponent) , title: 'Category'},
            
            {path: 'Search/:target', loadComponent: () => import('./Component/search/search.component').then(m => m.SearchComponent) , title: 'Search'},

            
            
            {path: 'ConfirmedOrders', 
                canActivate: [authGuard],
                loadComponent: () => import('./Component/all-orders/all-orders.component').then(m => m.AllOrdersComponent) , title: 'My Orders'},
            {path: 'cart', 
                canActivate: [authGuard],
                loadComponent: () => import('./Component/cart/cart.component').then(m => m.CartComponent) , title: 'Cart'},
            {path: 'wishlist', 
                canActivate: [authGuard],
                loadComponent: () => import('./Component/wishlist/wishlist.component').then(m => m.WishlistComponent) , title: 'Wishlist'},

                {path: 'paymentData/:id', 
                    canActivate: [authGuard],
                    loadComponent: () => import('./Component/payment-data/payment-data.component').then(m => m.PaymentDataComponent) , title: 'Payment Form'},
    
                    {path: 'Account', 
                        canActivate: [authGuard],
                        loadComponent: () => import('./Component/account/account.component').then(m => m.AccountComponent) , title: 'Account'},
        
        ]
    
    } ,   
{
    path: '',
    canActivate: [loginGuard],
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
