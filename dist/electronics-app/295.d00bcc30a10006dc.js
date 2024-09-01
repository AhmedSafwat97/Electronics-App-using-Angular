"use strict";(self.webpackChunkElectronics_App=self.webpackChunkElectronics_App||[]).push([[295],{295:(p,s,e)=>{e.r(s),e.d(s,{AccountComponent:()=>d});var a=e(177),c=e(8934),t=e(4438),n=e(1626);let h=(()=>{class r{constructor(o){this._HttpClient=o,this.Token=`Bearer ${localStorage.getItem("token")}`}GetUserData(){return this._HttpClient.get("https://web-api-ecommerce-byahmedsafwat.vercel.app/api/v1/auth/LoginUser",{headers:new n.Lr({Authorization:this.Token})})}static#t=this.\u0275fac=function(i){return new(i||r)(t.KVO(n.Qq))};static#e=this.\u0275prov=t.jDH({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var l=e(231);let d=(()=>{class r{constructor(o,i){this._userInfoServices=o,this._Spinner=i,this.userData={}}ngOnInit(){this._Spinner.show(),this._userInfoServices.GetUserData().subscribe({next:o=>{console.log(o),o?this._Spinner.hide():this._Spinner.show()},error:o=>{console.log(o)}})}static#t=this.\u0275fac=function(i){return new(i||r)(t.rXU(h),t.rXU(l.D))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-account"]],standalone:!0,features:[t.aNF],decls:69,vars:4,consts:[[1,"container"],[1,"text-muted","mt-5"],[1,"fw-bold"],[1,"row"],[1,"col-12","col-lg-2"],[1,"text-muted","Pointer"],["routerLink","/ConfirmedOrders",1,"text-muted","Pointer"],["routerLink","/cart",1,"text-muted","Pointer"],["routerLink","/wishlist",1,"text-muted","Pointer"],[1,"col-0","col-lg-1"],[1,"col-12","col-lg-9"],[1,"mt-4"],[1,"row","mb-4"],[1,"col"],["data-mdb-input-init","",1,"form-outline"],["for","form6Example1",1,"form-label"],["type","text","id","form6Example1",1,"form-control",3,"placeholder"],["for","form6Example2",1,"form-label"],["type","text","id","form6Example2",1,"form-control",3,"placeholder"],["for","form6Example3",1,"form-label"],["type","email","id","form6Example3",1,"form-control",3,"placeholder"],["for","form6Example4",1,"form-label"],["type","text","id","form6Example4",1,"form-control",3,"placeholder"],["data-mdb-input-init","",1,"form-outline","mb-4"],["for","form6Example5",1,"form-label"],["type","text","id","form6Example5","placeholder","Enter new password",1,"form-control"],["type","text","id","form6Example6","placeholder","Additional info",1,"form-control"],["type","email","id","form6Example7","placeholder","Confirm your email address",1,"form-control"],[1,"d-flex","justify-content-end"],["data-mdb-ripple-init","","type","button",1,"main-btn"]],template:function(i,m){1&i&&(t.j41(0,"section",0)(1,"p",1),t.EFF(2,"Home / "),t.j41(3,"span",2),t.EFF(4,"Account"),t.k0s()()(),t.j41(5,"section",0)(6,"div",3)(7,"div",4)(8,"div")(9,"h5"),t.EFF(10,"Manage Account"),t.k0s(),t.j41(11,"h6",5),t.EFF(12,"My Profile"),t.k0s(),t.j41(13,"h6",5),t.EFF(14,"Address Book"),t.k0s(),t.j41(15,"h6",5),t.EFF(16,"My Payment Options"),t.k0s()(),t.nrm(17,"hr"),t.j41(18,"div")(19,"h5"),t.EFF(20,"My Orders"),t.k0s(),t.j41(21,"h6",6),t.EFF(22,"Confirmed Orders"),t.k0s(),t.j41(23,"h6",7),t.EFF(24,"MY Cart"),t.k0s()(),t.nrm(25,"hr"),t.j41(26,"div")(27,"h5"),t.EFF(28,"Wishlist"),t.k0s(),t.j41(29,"h6",8),t.EFF(30,"My WishList"),t.k0s()()(),t.nrm(31,"dir",9),t.j41(32,"div",10)(33,"h5"),t.EFF(34,"Edit Your Profile"),t.k0s(),t.j41(35,"form",11)(36,"div",12)(37,"div",13)(38,"div",14)(39,"label",15),t.EFF(40,"First name"),t.k0s(),t.nrm(41,"input",16),t.k0s()(),t.j41(42,"div",13)(43,"div",14)(44,"label",17),t.EFF(45,"Last name"),t.k0s(),t.nrm(46,"input",18),t.k0s()()(),t.j41(47,"div",12)(48,"div",13)(49,"div",14)(50,"label",19),t.EFF(51,"Email"),t.k0s(),t.nrm(52,"input",20),t.k0s()(),t.j41(53,"div",13)(54,"div",14)(55,"label",21),t.EFF(56,"Phone"),t.k0s(),t.nrm(57,"input",22),t.k0s()()(),t.j41(58,"div",23)(59,"label",24),t.EFF(60,"Password Changes"),t.k0s(),t.nrm(61,"input",25),t.k0s(),t.j41(62,"div",23),t.nrm(63,"input",26),t.k0s(),t.j41(64,"div",23),t.nrm(65,"input",27),t.k0s(),t.j41(66,"div",28)(67,"button",29),t.EFF(68,"Save Changes"),t.k0s()()()()()()),2&i&&(t.R7$(41),t.Y8G("placeholder",m.userData.FName),t.R7$(5),t.Y8G("placeholder",m.userData.LName),t.R7$(6),t.Y8G("placeholder",m.userData.Email),t.R7$(5),t.Y8G("placeholder",m.userData.Phone))},dependencies:[a.MD,c.Wk]})}return r})()},231:(p,s,e)=>{e.d(s,{D:()=>t});var a=e(4438),c=e(6554);let t=(()=>{class n{constructor(l){this.spinner=l}show(){this.spinner.show()}hide(){this.spinner.hide()}static#t=this.\u0275fac=function(d){return new(d||n)(a.KVO(c.ex))};static#e=this.\u0275prov=a.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);