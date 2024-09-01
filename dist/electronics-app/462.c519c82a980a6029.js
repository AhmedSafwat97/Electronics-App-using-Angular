"use strict";(self.webpackChunkElectronics_App=self.webpackChunkElectronics_App||[]).push([[462],{462:(b,u,i)=>{i.r(u),i.d(u,{CartComponent:()=>s});var n=i(177),l=i(8934),t=i(4438),p=i(4705),d=i(231);const m=c=>["/paymentData",c];function r(c,_){if(1&c){const e=t.RV6();t.j41(0,"tr")(1,"td"),t.nrm(2,"img",25),t.j41(3,"span",4),t.EFF(4),t.k0s()(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td")(8,"div",26)(9,"button",27,0),t.bIt("click",function(){const o=t.eBV(e).$implicit,h=t.sdS(10),v=t.XpG();return t.Njj(v.DecrementQuantity(o,h))}),t.EFF(11,"-"),t.k0s(),t.j41(12,"span",28),t.EFF(13),t.k0s(),t.j41(14,"button",29,1),t.bIt("click",function(){const o=t.eBV(e).$implicit,h=t.sdS(15),v=t.XpG();return t.Njj(v.IncrementQuantity(o,h))}),t.EFF(16,"+"),t.k0s()()(),t.j41(17,"td"),t.EFF(18),t.k0s(),t.j41(19,"td",30)(20,"span",31),t.bIt("click",function(){const o=t.eBV(e).$implicit,h=t.XpG();return t.Njj(h.removeFromTheCart(o.product._id))}),t.nrm(21,"i",32),t.k0s()()()}if(2&c){const e=_.$implicit;t.R7$(2),t.FS9("src",e.product.images[0],t.B4B),t.R7$(2),t.JRh(e.product.Name),t.R7$(2),t.JRh(e.product.price),t.R7$(7),t.SpI(" ",e.quantity," "),t.R7$(5),t.JRh(e.product.price*e.quantity)}}let s=(()=>{class c{constructor(e,a,o,h){this._ProductService=e,this._Renderer2=a,this._Router=o,this._Spinner=h,this.CartProducts=[],this.TotalPrice=0,this.Quantity=1,this.cartId=""}removeFromTheCart(e){this._Spinner.show(),this._ProductService.RemoveCartProducts(e).subscribe({next:a=>{"Product removed successfully"===a.message&&(this.CartProducts=a.data.items,this.TotalPrice=a.totalPrice,this._ProductService.CartItems.next(this.CartProducts.length),a?this._Spinner.hide():this._Spinner.show()),0===this.CartProducts.length&&this._Router.navigate(["/home"])},error:a=>{console.log(a)}})}IncrementQuantity(e,a){e.quantity+=1,this.UpdateCartItem(e),console.log(e.quantity)}DecrementQuantity(e,a){e.quantity>1?(e.quantity-=1,this.UpdateCartItem(e)):this._Renderer2.setAttribute(a,"disabled","true")}UpdateCartItem(e){this._ProductService.AddProductToCart(e.product._id,e.quantity).subscribe({next:a=>{console.log(a.message)}})}ngOnInit(){this._Spinner.show(),this._ProductService.GetCartProducts().subscribe({next:e=>{this.CartProducts=e.data.items,this.TotalPrice=e.totalPrice,this.cartId=e.data._id,e?this._Spinner.hide():this._Spinner.show()},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(a){return new(a||c)(t.rXU(p.b),t.rXU(t.sFG),t.rXU(l.Ix),t.rXU(d.D))};static#e=this.\u0275cmp=t.VBU({type:c,selectors:[["app-cart"]],standalone:!0,features:[t.aNF],decls:61,vars:8,consts:[["Increment",""],["Decrement",""],[1,"container"],[1,"text-muted","mt-5"],[1,"fw-bold"],[1,"container","d-flex","justify-content-center"],[1,"table","mt-3",2,"border","1px solid black"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row","colspan","4"],[1,"fw-bold",2,"width","100px"],[1,"main-btn","my-2","mx-2",2,"background-color","transparent","color","#EA4335","outline","1px solid #EA4335"],[1,"container","mt-4"],[1,"row"],[1,"col-0","col-lg-1"],[1,"col-12","col-lg-5"],[1,"input-group"],["type","search","placeholder","Coupon Code","aria-label","Search","aria-describedby","search-addon",1,"form-control","rounded"],["type","button","data-mdb-ripple-init","",1,"main-btn"],[1,"Total-cart"],[1,"fw-bold","mb-2"],[1,"d-flex","justify-content-between","align-items-center","mt-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex","justify-content-center","align-items-center"],["routerLinkActive","router-link-active",1,"main-btn",3,"disabled","routerLink"],["width","50","alt","",3,"src"],[1,"quantity"],[1,"main-btn",2,"background-color","transparent","color","black","outline","1px solid black",3,"click"],[1,"mx-2"],[1,"main-btn",3,"click"],[2,"width","20px"],[1,"btn","btn-danger",3,"click"],[1,"fa-solid","fa-trash"]],template:function(a,o){1&a&&(t.j41(0,"section",2)(1,"p",3),t.EFF(2,"Home / "),t.j41(3,"span",4),t.EFF(4,"Cart"),t.k0s()(),t.j41(5,"div",5)(6,"table",6)(7,"thead")(8,"tr")(9,"th",7),t.EFF(10,"Product"),t.k0s(),t.j41(11,"th",7),t.EFF(12,"Price"),t.k0s(),t.j41(13,"th",7),t.EFF(14,"Quantity"),t.k0s(),t.j41(15,"th",7),t.EFF(16,"Total"),t.k0s(),t.j41(17,"th",7),t.EFF(18,"Action"),t.k0s()()(),t.j41(19,"tbody"),t.DNE(20,r,22,5,"tr",8),t.j41(21,"tr")(22,"th",9),t.EFF(23,"Total"),t.k0s(),t.j41(24,"td",10),t.EFF(25),t.k0s()()()()(),t.j41(26,"button",11),t.EFF(27,"Back To Shop"),t.k0s()(),t.j41(28,"section",12)(29,"div",13),t.nrm(30,"div",14),t.j41(31,"div",15)(32,"div",16),t.nrm(33,"input",17),t.j41(34,"button",18),t.EFF(35,"Apply Coupon"),t.k0s()()(),t.j41(36,"div",15)(37,"div",19)(38,"h5",20),t.EFF(39,"Cart Total"),t.k0s(),t.j41(40,"div",21)(41,"p"),t.EFF(42,"Subtotal"),t.k0s(),t.j41(43,"p"),t.EFF(44),t.k0s()(),t.nrm(45,"hr"),t.j41(46,"div",22)(47,"p"),t.EFF(48,"Shipping"),t.k0s(),t.j41(49,"p"),t.EFF(50,"Free"),t.k0s()(),t.nrm(51,"hr"),t.j41(52,"div",22)(53,"p"),t.EFF(54,"Total"),t.k0s(),t.j41(55,"p",4),t.EFF(56),t.k0s()(),t.j41(57,"div",23)(58,"button",24),t.EFF(59,"Proceed To Checkout"),t.k0s()()()(),t.nrm(60,"div",14),t.k0s()()),2&a&&(t.R7$(20),t.Y8G("ngForOf",o.CartProducts),t.R7$(5),t.SpI("",o.TotalPrice," EGP"),t.R7$(19),t.SpI("",o.TotalPrice," EGP"),t.R7$(12),t.SpI("",o.TotalPrice," EGP"),t.R7$(2),t.Y8G("disabled",o.CartProducts.length<1)("routerLink",t.eq3(6,m,o.cartId)))},dependencies:[n.MD,n.Sq,l.iI,l.Wk,l.wQ],styles:[".Total-cart[_ngcontent-%COMP%]{border:1px solid black;padding:15px}.quantity[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}@media screen and (max-width: 450px){.quantity[_ngcontent-%COMP%]{flex-direction:column-reverse}}"]})}return c})()},4705:(b,u,i)=>{i.d(u,{b:()=>p});var n=i(1626),l=i(4412),t=i(4438);let p=(()=>{class d{constructor(r){this._HttpClient=r,this.Token=`Bearer ${localStorage.getItem("token")}`,this.CartItems=new l.t(0)}GetAllProduct(r=8,s=1){return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product?page=${s}&limit=${r}`)}filterProduct(r=null,s="",c=null,_=null,e=null){return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product?name=${r}&categoryName=${s}&brandName=${c}&maxPrice=${_}&minPrice=${e}`)}SearchProducts(r){return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product?name=${r}`)}GetSaleProduct(r,s){return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product/sale/discount?page=${s||1}&limit=${r||8}`)}GetBestseller(){return this._HttpClient.get("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product/best/seller?limit=4")}GetAllCategories(){return this._HttpClient.get("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/categories")}GetCategoryBrand(r){return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Categorybrands/${r}`)}GetCategoryProducts(r){return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product?categoryName=${r}`)}GetAllBrands(){return this._HttpClient.get("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Brand")}GetProductDetails(r){return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Product/${r}`)}GetRelatedProduct(r){return this._HttpClient.get(`https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/product/related/${r}`)}AddProductToCart(r,s){return this._HttpClient.post("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Cart/",{},{headers:new n.Lr({Authorization:this.Token,productid:r,quantity:s.toString()})})}GetCartProducts(){return this._HttpClient.get("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Cart/",{headers:new n.Lr({Authorization:this.Token})})}RemoveCartProducts(r){return this._HttpClient.delete("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Cart/",{headers:new n.Lr({Authorization:this.Token,ProductId:r})})}AddProductToFav(r){return this._HttpClient.post("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Wishlist",{},{headers:new n.Lr({Authorization:this.Token,productid:r})})}RemoveProductFromFav(r){return this._HttpClient.delete("  https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Wishlist/",{headers:new n.Lr({Authorization:this.Token,productid:r})})}GetFavProducts(){return this._HttpClient.get("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Wishlist/",{headers:new n.Lr({Authorization:this.Token})})}GetOrdersProducts(){return this._HttpClient.get("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/Cart/ConfirmedOders",{headers:new n.Lr({Authorization:this.Token})})}static#t=this.\u0275fac=function(s){return new(s||d)(t.KVO(n.Qq))};static#e=this.\u0275prov=t.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},231:(b,u,i)=>{i.d(u,{D:()=>t});var n=i(4438),l=i(6554);let t=(()=>{class p{constructor(m){this.spinner=m}show(){this.spinner.show()}hide(){this.spinner.hide()}static#t=this.\u0275fac=function(r){return new(r||p)(n.KVO(l.ex))};static#e=this.\u0275prov=n.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()}}]);