(self.webpackChunknew_store=self.webpackChunknew_store||[]).push([[941],{941:(t,n,e)=>{"use strict";e.r(n),e.d(n,{ProductsModule:()=>B});var i=e(274),o=e(961);function c(t,n,e,i,o,c,r){try{var s=t[c](r),a=s.value}catch(g){return void e(g)}s.done?n(a):Promise.resolve(a).then(i,o)}function r(t){return function(){var n=this,e=arguments;return new Promise(function(i,o){var r=t.apply(n,e);function s(t){c(r,i,o,s,a,"next",t)}function a(t){c(r,i,o,s,a,"throw",t)}s(void 0)})}}var s=e(606),a=e(72),g=e(744);class p{constructor(t,n){this.count=t,this.source=n}call(t,n){return n.subscribe(new u(t,this.count,this.source))}}class u extends g.L{constructor(t,n,e){super(t),this.count=n,this.source=e}error(t){if(!this.isStopped){const{source:n,count:e}=this;if(0===e)return super.error(t);e>-1&&(this.count=e-1),n.subscribe(this._unsubscribeAndRecycle())}}}var d=e(561),m=e(948),l=e(887);let h=(()=>{class t{constructor(t){this.httpClient=t,this.API_URL="https://young-sands-07814.herokuapp.com/api/"}get(t){return this.httpClient.get(this.API_URL+t).pipe((0,a.K)(t=>{return console.error("err request",t,t.status),n=t,new m.y(t=>t.error(n));var n}),function(t=-1){return n=>n.lift(new p(t,n))}(3),(0,d.U)(t=>t.map(t=>Object.assign(Object.assign({},t),{taxes:.19*t.price})))).toPromise()}}return t.\u0275fac=function(n){return new(n||t)(s.LFG(l.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),f=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}onGoHome(){console.log("Go Home"),this.router.navigate(["/"])}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(o.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-header"]],decls:20,vars:0,consts:[[1,"section-menu"],[3,"click"],["src","./assets/imgs/header/logo.svg","alt",""],[1,"list-menu"],[1,"section-cart"],["src","./assets/imgs/header/icon-cart.svg","alt",""],["src","./assets/imgs/header/image-avatar.png","alt",""]],template:function(t,n){1&t&&(s.TgZ(0,"header"),s.TgZ(1,"section",0),s.TgZ(2,"figure",1),s.NdJ("click",function(){return n.onGoHome()}),s._UZ(3,"img",2),s.qZA(),s.TgZ(4,"ul",3),s.TgZ(5,"li"),s._uU(6,"Collections"),s.qZA(),s.TgZ(7,"li"),s._uU(8,"Men"),s.qZA(),s.TgZ(9,"li"),s._uU(10,"Women"),s.qZA(),s.TgZ(11,"li"),s._uU(12,"About"),s.qZA(),s.TgZ(13,"li"),s._uU(14,"Contact"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(15,"section",4),s.TgZ(16,"button"),s._UZ(17,"img",5),s.qZA(),s.TgZ(18,"figure"),s._UZ(19,"img",6),s.qZA(),s.qZA(),s.qZA())},styles:["header[_ngcontent-%COMP%]{height:100px;display:flex;justify-content:space-between;border-bottom:1px solid #e9e9e9}header[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0}header[_ngcontent-%COMP%]   .section-menu[_ngcontent-%COMP%]{display:flex;align-items:center}header[_ngcontent-%COMP%]   .section-menu[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{cursor:pointer}header[_ngcontent-%COMP%]   .section-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;display:flex}header[_ngcontent-%COMP%]   .section-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 15px;color:var(--color-letter);cursor:pointer}header[_ngcontent-%COMP%]   .section-cart[_ngcontent-%COMP%]{display:flex;align-items:center;grid-gap:30px;gap:30px}header[_ngcontent-%COMP%]   .section-cart[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#0000;border:none}header[_ngcontent-%COMP%]   .section-cart[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px}@media (max-width: 920px){.list-menu[_ngcontent-%COMP%]{display:none!important}}"]}),t})(),x=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}onGoViewDetail(){this.router.navigate(["products/product-view",this.product.id])}onAddCart(){console.log("add cart")}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(o.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-product"]],inputs:{product:"product"},decls:11,vars:3,consts:[[1,"container-product"],[1,"info-product",3,"click"],["alt","no-image-product",3,"src"],[1,"container-cart-button"],[3,"click"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"section",1),s.NdJ("click",function(){return n.onGoViewDetail()}),s.TgZ(2,"h3"),s._uU(3),s.qZA(),s.TgZ(4,"figure"),s._UZ(5,"img",2),s.qZA(),s.TgZ(6,"p"),s._uU(7),s.qZA(),s.qZA(),s.TgZ(8,"div",3),s.TgZ(9,"button",4),s.NdJ("click",function(){return n.onAddCart()}),s._uU(10,"Add cart"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(3),s.hij(" ",n.product.title,""),s.xp6(2),s.Q6J("src",n.product.images[0],s.LSH),s.xp6(2),s.hij(" ",n.product.description,""))},styles:[".container-product[_ngcontent-%COMP%]{padding:5px}.container-product[_ngcontent-%COMP%]:hover{cursor:pointer;background:#f5f5f5}.container-product[_ngcontent-%COMP%]:hover   .container-product__image[_ngcontent-%COMP%]{opacity:.5}.container-product[_ngcontent-%COMP%]:hover   .container-product__info[_ngcontent-%COMP%]{opacity:1}.info-product[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:257px;height:260px}.info-product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:10px;font-size:13px;color:#1f1f1f;height:50px}.container-cart-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:0 0 10px}.container-cart-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{letter-spacing:1px;background:#fa7d1c;border:none;color:#fff;width:150px;border-radius:10px;height:34px;font-size:15px;cursor:pointer}"]}),t})();function M(t,n){if(1&t&&(s.TgZ(0,"div"),s._UZ(1,"app-product",2),s.qZA()),2&t){const t=n.$implicit;s.xp6(1),s.Q6J("product",t)}}function _(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"div",3),s.TgZ(1,"button",4),s.NdJ("click",function(){return s.CHM(t),s.oxw().onGetMoreProducts()}),s._uU(2,"More"),s.qZA(),s.qZA()}}let P=(()=>{class t{constructor(t,n){this.mainService=t,this.router=n,this.products=[],this.limitProducts=20,this.offsetProducts=0}ngOnInit(){var t=this;return r(function*(){try{t.products=yield t.getProducts({limit:t.limitProducts,offset:t.offsetProducts}),console.log({products:t.products})}catch(n){console.error("Error en ngOnInit")}})()}getProducts({limit:t,offset:n}){var e=this;return r(function*(){console.log("start",t,n);try{return yield e.mainService.get(`products?limit=${t}&offset=${n}`)}catch(i){return console.error("An ocuured an error",i),[]}})()}onGetMoreProducts(){var t=this;return r(function*(){t.offsetProducts++;let n=yield t.getProducts({limit:t.limitProducts,offset:t.offsetProducts});console.log(n),t.products=[...t.products,...n],console.log("this.products",t.products)})()}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(h),s.Y36(o.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-product-all"]],decls:4,vars:2,consts:[[4,"ngFor","ngForOf"],["class","container-more-products",4,"ngIf"],[3,"product"],[1,"container-more-products"],[3,"click"]],template:function(t,n){1&t&&(s._UZ(0,"app-header"),s.TgZ(1,"main"),s.YNc(2,M,2,1,"div",0),s.qZA(),s.YNc(3,_,3,0,"div",1)),2&t&&(s.xp6(2),s.Q6J("ngForOf",n.products),s.xp6(1),s.Q6J("ngIf",n.products.length>0))},directives:[f,i.sg,i.O5,x],styles:["main[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:20px;gap:20px}.container-more-products[_ngcontent-%COMP%]{text-align:center}.container-more-products[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{letter-spacing:3px;outline:none;background:#000;border:none;width:300px;height:50px;margin:40px 0;color:#fff;font-weight:700;border-radius:5px;cursor:pointer}"]}),t})(),C=(()=>{class t{constructor(){this.imageMain="",this.imageMainOtherTest="",this.viewBigMainImage=new s.vpe}set changeImg(t){this.imageMain=t}ngOnInit(){}ngOnChanges(t){}onChangeImageView(){this.viewBigMainImage.emit({image:this.imageMain})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-view-main-img"]],inputs:{changeImg:["imageMain","changeImg"],imageMainOtherTest:"imageMainOtherTest"},outputs:{viewBigMainImage:"viewBigMainImage"},features:[s.TTD],decls:2,vars:1,consts:[[3,"click"],["alt","",3,"src"]],template:function(t,n){1&t&&(s.TgZ(0,"figure",0),s.NdJ("click",function(){return n.onChangeImageView()}),s._UZ(1,"img",1),s.qZA()),2&t&&(s.xp6(1),s.Q6J("src",n.imageMain,s.LSH))},styles:["figure[_ngcontent-%COMP%]{display:flex;margin:20px 35px 40px 0}figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:475px;border-radius:10px;cursor:pointer}@media (max-width: 590px){img[_ngcontent-%COMP%]{max-width:394px!important}}"]}),t})(),O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-title-company"]],decls:2,vars:0,template:function(t,n){1&t&&(s.TgZ(0,"h3"),s._uU(1,"SNEAKER COMPANY"),s.qZA())},styles:["h3[_ngcontent-%COMP%]{color:var(--colorCompany);font-weight:900;font-size:13px;letter-spacing:1.5px}"]}),t})(),Z=(()=>{class t{constructor(){this.name=""}ngOnInit(){console.log(this.name)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-title-product"]],inputs:{name:"name"},decls:2,vars:1,template:function(t,n){1&t&&(s.TgZ(0,"p"),s._uU(1),s.qZA()),2&t&&(s.xp6(1),s.hij(" ",n.name,""))},styles:["p[_ngcontent-%COMP%]{font-weight:700;font-size:38px}"]}),t})(),v=(()=>{class t{constructor(){this.description=""}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-description-product"]],inputs:{description:"description"},decls:2,vars:1,template:function(t,n){1&t&&(s.TgZ(0,"p"),s._uU(1),s.qZA()),2&t&&(s.xp6(1),s.hij(" ",n.description,""))},styles:["p[_ngcontent-%COMP%]{font-weight:300;color:#71767a;letter-spacing:.5px;font-size:15px}"]}),t})();function w(t,n){if(1&t&&(s.TgZ(0,"div",4),s._uU(1),s.ALo(2,"currency"),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Oqu(s.xi3(2,1,t.price,"USD"))}}function I(t,n){if(1&t&&(s.TgZ(0,"div",5),s._uU(1),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Oqu(t.percentage)}}function y(t,n){if(1&t&&(s.TgZ(0,"div",6),s._uU(1),s.ALo(2,"currency"),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Oqu(s.xi3(2,1,t.oldPrice,"USD"))}}let A=(()=>{class t{constructor(){this.price=0,this.percentage="",this.oldPrice=0}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-price-product"]],inputs:{price:"price",percentage:"percentage",oldPrice:"oldPrice"},decls:5,vars:3,consts:[[1,"price-and-percentage"],["class","price-end",4,"ngIf"],["class","percentage",4,"ngIf"],["class","old-price",4,"ngIf"],[1,"price-end"],[1,"percentage"],[1,"old-price"]],template:function(t,n){1&t&&(s.TgZ(0,"section"),s.TgZ(1,"div",0),s.YNc(2,w,3,4,"div",1),s.YNc(3,I,2,1,"div",2),s.qZA(),s.YNc(4,y,3,4,"div",3),s.qZA()),2&t&&(s.xp6(2),s.Q6J("ngIf",n.price),s.xp6(1),s.Q6J("ngIf",n.percentage),s.xp6(1),s.Q6J("ngIf",n.oldPrice))},directives:[i.O5],pipes:[i.H9],styles:["section[_ngcontent-%COMP%]{margin:30px 0}section[_ngcontent-%COMP%]   .price-and-percentage[_ngcontent-%COMP%]{display:flex;grid-gap:20px;gap:20px}section[_ngcontent-%COMP%]   .price-and-percentage[_ngcontent-%COMP%]   .price-end[_ngcontent-%COMP%]{font-weight:700;font-size:28px}section[_ngcontent-%COMP%]   .price-and-percentage[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--colorCompany);background:#f8e0d1;padding:0 8px;border-radius:8px;font-weight:900;font-size:14px}section[_ngcontent-%COMP%]   .old-price[_ngcontent-%COMP%]{color:#bdb9b9;margin:10px 0 0;-webkit-text-decoration-line:line-through;text-decoration-line:line-through;font-size:15px;font-weight:600;letter-spacing:.5px}"]}),t})(),b=(()=>{class t{constructor(){this.amount=1,this.changeAmount=new s.vpe}ngOnInit(){}onAddLeastAmount(t){this.changeAmount.emit(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-amount-product"]],inputs:{amount:"amount"},outputs:{changeAmount:"changeAmount"},decls:7,vars:1,consts:[[1,"least","expand",3,"click"],[1,"amount"],[1,"more","expand",3,"click"]],template:function(t,n){1&t&&(s.TgZ(0,"section"),s.TgZ(1,"div",0),s.NdJ("click",function(){return n.onAddLeastAmount("least")}),s._uU(2," - "),s.qZA(),s.TgZ(3,"div",1),s._uU(4),s.qZA(),s.TgZ(5,"div",2),s.NdJ("click",function(){return n.onAddLeastAmount("more")}),s._uU(6," + "),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.hij(" ",n.amount," "))},styles:["section[_ngcontent-%COMP%]{max-width:150px;width:150px;display:grid;grid-template-columns:30% 40% 30%;background:#f7f8fd;align-items:center;justify-items:center;height:50px;border-radius:8px;box-shadow:2px 2px #eeeff5;font-weight:700}section[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;justify-content:center;align-items:center;color:var(--colorCompany);font-weight:900;cursor:pointer}section[_ngcontent-%COMP%]   .least[_ngcontent-%COMP%]:hover, section[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%]:hover{border:1px solid var(--colorCompany);border-radius:8px}"]}),t})(),T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-button-pay"]],decls:5,vars:0,consts:[["src","./assets/imgs/products/icon-cart.svg","alt","icon-cart"],[1,"text-add-cart"]],template:function(t,n){1&t&&(s.TgZ(0,"button"),s.TgZ(1,"figure"),s._UZ(2,"img",0),s.qZA(),s.TgZ(3,"div",1),s._uU(4," Add to cart "),s.qZA(),s.qZA())},styles:["button[_ngcontent-%COMP%]{height:50px;width:250px;background:#fa7d1c;border:none;border-radius:8px;display:flex;align-items:center;justify-content:center;grid-gap:25px;gap:25px;box-shadow:3px 3px #ffebda;cursor:pointer}button[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{margin:0}button[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px}button[_ngcontent-%COMP%]   .text-add-cart[_ngcontent-%COMP%]{color:#fff;font-weight:900;letter-spacing:.8px;font-size:13px}"]}),t})(),k=(()=>{class t{constructor(){this.image="",this.indexImage=0,this.currentPositionMainImage=0,this.refBackground="",this.currentPositionImage=!1,this.changeImage=new s.vpe}set changeImageCurrent(t){let n=document.getElementById(this.indexImage+""),e=document.getElementById(this.refBackground);t===this.indexImage?(null==n||n.classList.add("current-img"),e&&e.classList.add("back-img")):(null==n||n.classList.remove("current-img","back"),null==e||e.classList.remove("back-img"))}ngOnInit(){this.refBackground="background-img"+this.indexImage}ngAfterViewInit(){0===this.indexImage&&this.selectCurrentImage()}selectCurrentImage(){if(this.currentPositionMainImage===this.indexImage){let t=document.getElementById(this.indexImage+"");null==t||t.classList.add("current-img");let n=document.getElementById(this.refBackground);null==n||n.classList.add("back-img")}}onChangeImage(){this.changeImage.emit({index:this.indexImage})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-view-child-img"]],inputs:{image:"image",indexImage:"indexImage",changeImageCurrent:["currentPositionMainImage","changeImageCurrent"]},outputs:{changeImage:"changeImage"},decls:3,vars:3,consts:[[3,"click"],["alt","",3,"id","src"],[3,"id"]],template:function(t,n){1&t&&(s.TgZ(0,"figure",0),s.NdJ("click",function(){return n.onChangeImage()}),s._UZ(1,"img",1),s._UZ(2,"div",2),s.qZA()),2&t&&(s.xp6(1),s.Q6J("id",n.indexImage)("src",n.image,s.LSH),s.xp6(1),s.Q6J("id",n.refBackground))},styles:["figure[_ngcontent-%COMP%]{margin:0 24px 0 0;position:relative}figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100px;border-radius:10px;cursor:pointer}figure[_ngcontent-%COMP%]   .current-img[_ngcontent-%COMP%]{border:2px solid var(--colorCompany)}.back-img[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;height:100%;opacity:.5;background:#e5cbcb}@media (max-width: 590px){img[_ngcontent-%COMP%]{max-width:78px!important}}"]}),t})();function q(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"app-view-child-img",10),s.NdJ("changeImage",function(n){return s.CHM(t),s.oxw().onChangeImageMain(n)}),s.qZA()}if(2&t){const t=n.$implicit,e=n.index,i=s.oxw();s.Q6J("image",t)("indexImage",e)("currentPositionMainImage",i.currentPositionMainImage)}}function U(t,n){if(1&t){const t=s.EpF();s.TgZ(0,"div",11),s.NdJ("click",function(n){return s.CHM(t),s.oxw().onMainBackgroundMdl(n)}),s.TgZ(1,"div",12),s._UZ(2,"img",13),s.TgZ(3,"div",14),s.NdJ("click",function(n){return s.CHM(t),s.oxw().onNextImage("left",n)}),s.TgZ(4,"div",15),s._UZ(5,"img",16),s.qZA(),s.qZA(),s.TgZ(6,"div",17),s.TgZ(7,"div",18),s.NdJ("click",function(n){return s.CHM(t),s.oxw().onNextImage("rigth",n)}),s._UZ(8,"img",19),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=s.oxw();s.xp6(2),s.Q6J("src",t.imgMdlSelected,s.LSH)}}const J=[{path:"products-all",component:P},{path:"product-view/:id",component:(()=>{class t{constructor(){this.imagesChild=["./assets/imgs/products/image-product-1-thumbnail.jpg","./assets/imgs/products/image-product-2-thumbnail.jpg","./assets/imgs/products/image-product-3-thumbnail.jpg","./assets/imgs/products/image-product-4-thumbnail.jpg"],this.imagesMain=["./assets/imgs/products/image-product-1.jpg","./assets/imgs/products/image-product-2.jpg","./assets/imgs/products/image-product-3.jpg","./assets/imgs/products/image-product-4.jpg"],this.amountProduct=0,this.imageProduct=this.imagesMain[0],this.currentPositionMainImage=0,this.viewMdlImages=!1,this.imgMdlSelected="",this.currentIndexMdlImage=0}ngOnInit(){window.addEventListener("keydown",t=>{"Escape"!=t.key&&"Esc"!=t.key&&27!=t.keyCode||"BODY"!=t.target.nodeName||(t.preventDefault(),this.viewMdlImages=!1)},!0)}onChangeAmount(t){if("least"!==t)this.amountProduct++;else{if(1===this.amountProduct)return;this.amountProduct--}}onChangeImageMain(t){this.imageProduct=this.imagesMain[t.index],this.currentPositionMainImage=t.index}onViewMainImage(t){let n=this.imagesMain.findIndex(n=>n===t.image);this.currentIndexMdlImage=n,this.imgMdlSelected=this.imagesMain[n],this.viewMdlImages=!0}onNextImage(t,n){if(n.stopPropagation(),"left"===t){if(0===this.currentIndexMdlImage)return;this.imgMdlSelected=this.imagesMain[this.currentIndexMdlImage-1],this.currentIndexMdlImage-=1}else{if(this.currentIndexMdlImage===this.imagesMain.length-1)return;this.imgMdlSelected=this.imagesMain[this.currentIndexMdlImage+1],this.currentIndexMdlImage++}}onMainBackgroundMdl(t){this.viewMdlImages=!1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-product-view"]],decls:16,vars:6,consts:[[3,"imageMain","viewBigMainImage"],[1,"section-imgs-child"],[3,"image","indexImage","currentPositionMainImage","changeImage",4,"ngFor","ngForOf"],[1,"container-info-product"],["name","Fall Limited Edition Sneakers"],["description","These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer"],["percentage","50%",3,"price","oldPrice"],[1,"section-pay"],[3,"amount","changeAmount"],["class","view-mdl",3,"click",4,"ngIf"],[3,"image","indexImage","currentPositionMainImage","changeImage"],[1,"view-mdl",3,"click"],[1,"mdl-imgs"],["alt","",3,"src"],[1,"left",3,"click"],[1,"action"],["src","./assets/imgs/products/icon-previous.svg","alt",""],[1,"right"],[1,"action",3,"click"],["src","./assets/imgs/products/icon-next.svg","alt",""]],template:function(t,n){1&t&&(s._UZ(0,"app-header"),s.TgZ(1,"main"),s.TgZ(2,"div"),s.TgZ(3,"section"),s.TgZ(4,"app-view-main-img",0),s.NdJ("viewBigMainImage",function(t){return n.onViewMainImage(t)}),s.qZA(),s.qZA(),s.TgZ(5,"section",1),s.YNc(6,q,1,3,"app-view-child-img",2),s.qZA(),s.qZA(),s.TgZ(7,"div",3),s._UZ(8,"app-title-company"),s._UZ(9,"app-title-product",4),s._UZ(10,"app-description-product",5),s._UZ(11,"app-price-product",6),s.TgZ(12,"div",7),s.TgZ(13,"app-amount-product",8),s.NdJ("changeAmount",function(t){return n.onChangeAmount(t)}),s.qZA(),s._UZ(14,"app-button-pay"),s.qZA(),s.qZA(),s.YNc(15,U,9,1,"div",9),s.qZA()),2&t&&(s.xp6(4),s.Q6J("imageMain",n.imageProduct),s.xp6(2),s.Q6J("ngForOf",n.imagesChild),s.xp6(5),s.Q6J("price",125)("oldPrice",250),s.xp6(2),s.Q6J("amount",n.amountProduct),s.xp6(2),s.Q6J("ngIf",n.viewMdlImages))},directives:[f,C,i.sg,O,Z,v,A,b,T,i.O5,k],styles:["main[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;margin:60px 0;position:relative}main[_ngcontent-%COMP%]   .section-imgs-child[_ngcontent-%COMP%]{display:flex}main[_ngcontent-%COMP%]   .container-info-product[_ngcontent-%COMP%]{margin:55px 0 0 100px}main[_ngcontent-%COMP%]   .section-pay[_ngcontent-%COMP%]{display:flex;grid-gap:30px;gap:30px}main[_ngcontent-%COMP%]   .view-mdl[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#07060680}main[_ngcontent-%COMP%]   .view-mdl[_ngcontent-%COMP%]   .mdl-imgs[_ngcontent-%COMP%]{width:600px;height:650px;background-repeat:no-repeat;position:relative}main[_ngcontent-%COMP%]   .view-mdl[_ngcontent-%COMP%]   .mdl-imgs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}main[_ngcontent-%COMP%]   .view-mdl[_ngcontent-%COMP%]   .mdl-imgs[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{left:-20px}main[_ngcontent-%COMP%]   .view-mdl[_ngcontent-%COMP%]   .mdl-imgs[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .view-mdl[_ngcontent-%COMP%]   .mdl-imgs[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{position:absolute;font-size:27px;background:#fff;width:45px;height:45px;text-align:center;border-radius:50%;top:45%}main[_ngcontent-%COMP%]   .view-mdl[_ngcontent-%COMP%]   .mdl-imgs[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{right:-20px}main[_ngcontent-%COMP%]   .view-mdl[_ngcontent-%COMP%]   .mdl-imgs[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center;cursor:pi;cursor:pointer}main[_ngcontent-%COMP%]   .view-mdl[_ngcontent-%COMP%]   .mdl-imgs[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:11px;height:15px}@media (max-width: 1290px){main[_ngcontent-%COMP%]{grid-template-columns:1fr;justify-items:center}}@media (max-width: 1333px){.container-info-product[_ngcontent-%COMP%]{margin:55px 0 0!important}}"]}),t})()},{path:"**",redirectTo:"products-all"}];let N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,o.Bz.forChild(J)],o.Bz]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez]]}),t})(),B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,N,j]]}),t})()}}]);