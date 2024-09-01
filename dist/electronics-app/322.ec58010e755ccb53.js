"use strict";(self.webpackChunkElectronics_App=self.webpackChunkElectronics_App||[]).push([[322],{1322:(M,h,s)=>{s.r(h),s.d(h,{SearchComponent:()=>T});var _=s(177),m=s(8934),g=s(1626),p=s(119),f=s(3240),u=s(2796),c=s(4341),e=s(4438),C=s(231),P=s(5935),v=s(4705);const E=(n,l,t)=>({id:"Products",itemsPerPage:n,currentPage:l,totalItems:t});function S(n,l){if(1&n&&(e.j41(0,"option",21),e.EFF(1),e.k0s()),2&n){const t=l.$implicit;e.Y8G("value",t._id+":"+t.Name),e.R7$(),e.JRh(t.Name)}}function F(n,l){if(1&n&&(e.j41(0,"option",21),e.EFF(1),e.k0s()),2&n){const t=l.$implicit;e.Y8G("value",t.Name),e.R7$(),e.JRh(t.Name)}}function j(n,l){if(1&n&&(e.j41(0,"div",26),e.nrm(1,"app-product-cart",27),e.k0s()),2&n){const t=l.$implicit,r=l.index;e.R7$(),e.Y8G("Product",t)("i",r)}}function R(n,l){if(1&n){const t=e.RV6();e.j41(0,"div",28)(1,"pagination-controls",29),e.bIt("pageChange",function(o){e.eBV(t);const i=e.XpG(2);return e.Njj(i.pageChanged(o))})("pageBoundsCorrection",function(o){e.eBV(t);const i=e.XpG(2);return e.Njj(i.pageChanged(o))}),e.k0s()()}2&n&&(e.R7$(),e.Y8G("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0))}function B(n,l){if(1&n&&(e.j41(0,"div")(1,"div",22)(2,"div",23),e.DNE(3,j,2,2,"div",24),e.nI1(4,"paginate"),e.k0s()(),e.DNE(5,R,2,4,"div",25),e.k0s()),2&n){const t=e.XpG();e.R7$(3),e.Y8G("ngForOf",e.i5U(4,2,t.Products,e.sMw(5,E,t.pageSize,t.CurrentPage,t.total))),e.R7$(2),e.Y8G("ngIf",t.total>0)}}function N(n,l){1&n&&(e.j41(0,"div",30)(1,"h5",31),e.EFF(2,"No Products Found"),e.k0s(),e.j41(3,"button",32),e.EFF(4,"Back To Home"),e.k0s()())}let T=(()=>{class n{constructor(t,r,o,i,d){this._Spinner=t,this._ScrollService=r,this._formBuilder=o,this._ActivatedRoute=i,this._ProductService=d,this.Products=[],this.pageSize=12,this.CurrentPage=1,this.total=20,this.pageLimit=8,this.pageName="AllProducts",this.Brands=[],this.Category=[],this.selectedCategory="",this.selectedBrand="",this.CId="",this.CName="",this.filterForm=this._formBuilder.group({productName:[""],selectedCategory:[""],selectedBrand:[""],minPrice:[""],maxPrice:[""]}),this.PathName=this._ActivatedRoute.snapshot.paramMap.get("PathName")}onCategoryChange(t){const o=t.target.value,[i,d]=o.split(":");this.CId=i,this.CName=d,this._ProductService.GetCategoryBrand(i).subscribe({next:a=>{this.Brands=a},error:a=>{console.error("Error fetching products:",a)}})}onSubmit(){this._Spinner.show(),this._ProductService.filterProduct(this.filterForm.value.productName,this.CName,this.filterForm.value.selectedBrand,this.filterForm.value.maxPrice,this.filterForm.value.minPrice).subscribe({next:t=>{this.Products=t.data,this.pageSize=this.pageLimit,this.CurrentPage=t.PageNumber,this.total=t.TotalProducts,this.CName="",this.filterForm.value.selectedBrand="",this._Spinner.hide()},error:t=>{console.error("Error fetching products:",t)}})}pageChanged(t){this._Spinner.show(),this._ProductService.GetAllProduct(this.pageLimit,t).subscribe({next:r=>{this.Products=r.data,this.pageSize=this.pageLimit,this.CurrentPage=r.PageNumber,this.total=r.TotalProducts,this._Spinner.hide(),setTimeout(()=>this._ScrollService.scrollToElement("scrollTarget"),0)},error:r=>{console.error("Error fetching products:",r)}})}ngOnInit(){this._Spinner.show(),this._ProductService.GetAllCategories().subscribe({next:t=>{this.Category=t.data},error:t=>{console.error("Error fetching products:",t)}}),this._ActivatedRoute.params.subscribe(t=>{this._ProductService.SearchProducts(t.target).subscribe({next:r=>{this.Products=r.data,this.pageSize=this.pageLimit,this.CurrentPage=r.PageNumber,this.total=r.TotalProducts,this._Spinner.hide(),setTimeout(()=>this._ScrollService.scrollToElement("scrollTarget"),0)},error:r=>{console.error("Error fetching products:",r)}})})}static#e=this.\u0275fac=function(r){return new(r||n)(e.rXU(C.D),e.rXU(P.b),e.rXU(c.ok),e.rXU(m.nX),e.rXU(v.b))};static#t=this.\u0275cmp=e.VBU({type:n,selectors:[["app-search"]],standalone:!0,features:[e.aNF],decls:41,vars:9,consts:[["noProducts",""],["id","scrollTarget"],[1,"container","my-3"],[1,"mb-3"],[1,"fw-bold"],[1,"d-flex","justify-content-center"],[1,"row","gy-2","gx-3","align-items-center",3,"ngSubmit","formGroup"],[1,"col-auto"],["data-mdb-input-init","",1,"form-outline"],["formControlName","productName","type","text","placeholder","ProductName",1,"form-control"],["formControlName","selectedCategory",1,"select",3,"ngModelChange","change","ngModel"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","selectedBrand",1,"select",3,"ngModelChange","change","ngModel"],[1,"col-auto","d-flex","justify-content-center","flex-wrap"],["formControlName","minPrice","type","text","placeholder","Min Price",1,"form-control"],["formControlName","maxPrice","type","text","placeholder","Max Price",1,"form-control"],["data-mdb-ripple-init","","type","submit",1,"main-btn",3,"disabled"],[1,"my-5","container"],[1,"d-flex","justify-content-center","align-items-center","w-100"],[4,"ngIf","ngIfElse"],[3,"value"],[1,"mt-5"],[1,"d-flex","flex-wrap","justify-content-center","align-items-center","flex-wrap"],["style","position: relative;",4,"ngFor","ngForOf"],["class","d-flex justify-content-center mt-3",4,"ngIf"],[2,"position","relative"],[3,"Product","i"],[1,"d-flex","justify-content-center","mt-3"],["id","Products","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",1,"my-pagination",3,"pageChange","pageBoundsCorrection","maxSize","directionLinks","autoHide","responsive"],[1,"container","d-flex","justify-content-center","align-items-center",2,"flex-direction","column"],[1,"text-muted","mt-5"],["routerLink","/home",1,"main-btn","my-2","mx-2",2,"background-color","transparent","color","#EA4335","outline","1px solid #EA4335"]],template:function(r,o){if(1&r){const i=e.RV6();e.j41(0,"div",1)(1,"section",2)(2,"p",3),e.EFF(3,"Home / "),e.j41(4,"span",4),e.EFF(5,"Search"),e.k0s()(),e.j41(6,"div",5)(7,"form",6),e.bIt("ngSubmit",function(){return e.eBV(i),e.Njj(o.onSubmit())}),e.j41(8,"div",7)(9,"div",8),e.nrm(10,"input",9),e.k0s()(),e.j41(11,"div",7)(12,"select",10),e.mxI("ngModelChange",function(a){return e.eBV(i),e.DH7(o.selectedBrand,a)||(o.selectedBrand=a),e.Njj(a)}),e.bIt("change",function(a){return e.eBV(i),e.Njj(o.onCategoryChange(a))}),e.j41(13,"option",11),e.EFF(14,"Select a category"),e.k0s(),e.DNE(15,S,2,2,"option",12),e.k0s()(),e.j41(16,"div",7)(17,"select",13),e.mxI("ngModelChange",function(a){return e.eBV(i),e.DH7(o.selectedCategory,a)||(o.selectedCategory=a),e.Njj(a)}),e.bIt("change",function(a){return e.eBV(i),e.Njj(o.onCategoryChange(a))}),e.j41(18,"option",11),e.EFF(19,"Select a Brand"),e.k0s(),e.DNE(20,F,2,2,"option",12),e.k0s()(),e.j41(21,"div",14)(22,"div")(23,"div",8),e.nrm(24,"input",15),e.k0s()(),e.j41(25,"div")(26,"div",8),e.nrm(27,"input",16),e.k0s()()(),e.j41(28,"div",7)(29,"button",17),e.EFF(30,"Filter"),e.k0s()()()()(),e.j41(31,"section",18)(32,"div",19)(33,"div"),e.EFF(34,"We Found "),e.j41(35,"span",4),e.EFF(36),e.k0s(),e.EFF(37," Results"),e.k0s()(),e.DNE(38,B,6,9,"div",20)(39,N,5,0,"ng-template",null,0,e.C5r),e.k0s()()}if(2&r){const i=e.sdS(40);e.R7$(7),e.Y8G("formGroup",o.filterForm),e.R7$(5),e.R50("ngModel",o.selectedBrand),e.R7$(3),e.Y8G("ngForOf",o.Category),e.R7$(2),e.R50("ngModel",o.selectedCategory),e.R7$(3),e.Y8G("ngForOf",o.Brands),e.R7$(9),e.Y8G("disabled",!o.filterForm.touched),e.R7$(7),e.JRh(o.Products.length),e.R7$(2),e.Y8G("ngIf",o.Products.length>0)("ngIfElse",i)}},dependencies:[_.MD,_.Sq,_.bT,m.iI,m.Wk,g.q1,p.Rl,f.h,u.ed,u.kf,u.ej,c.YN,c.qT,c.xH,c.y7,c.me,c.wz,c.BC,c.cb,c.X1,c.j4,c.JD]})}return n})()}}]);