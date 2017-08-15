webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <app-scene></app-scene>\n        </div>\n        <div class=\"col-xs-4\">\n          <app-director></app-director>\n        </div>\n      </div>\n    </div> \n  </div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scene_scene_component__ = __webpack_require__("../../../../../src/app/scene/scene.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__director_director_component__ = __webpack_require__("../../../../../src/app/director/director.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_drpoService_service__ = __webpack_require__("../../../../../src/app/shared/drpoService.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__scene_scene_component__["a" /* SceneComponent */],
            __WEBPACK_IMPORTED_MODULE_6__director_director_component__["a" /* DirectorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__shared_drpoService_service__["a" /* drpoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/director/director.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/director/director.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Directors Desk</h2>\n<hr>\n<div style=\"height: 500px; max-height: 500px; overflow: scroll;\">\n\t<div class=\"list-group-item disabled\">\n\t\t<h4 class=\"list-group-item-heading\"> \n\t\tCharacters\n\t\t</h4>\n\t</div> \n\t<ng-container *ngFor=\"let char of characters\">\n\t\t<div class=\"list-group-item\" *ngIf=\"char.options.ctrl == true\">\n\t\t\t<h4 class=\"list-group-item-heading\">\n\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t{{char.name}} \n\t\t\t\t<small>\n\t\t\t\t\t<input \tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\ttype=\"checkbox\" \n\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"\n\t\t\t\t\t\t\t\t\t[attr.name]=\"char.uid\" \n\t\t\t\t\t\t\t\t\t[attr.id]=\"char.uid\" \n\t\t\t\t\t\t\t\t\t[checked]=\"char.options.toggled\" \n\t\t\t\t\t\t\t\t\t(change)=\"char.options.toggled = !char.options.toggled\">\n\t\t\t\t</small>\n\t\t\t\t<ul>\n\t\t\t\t\t<ng-container *ngFor=\"let f of char.figures\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t{{ f.title }} \n\t\t\t\t\t\t\t\t\t<input \tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.name]=\"char.uid+'figure'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"f.id\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"f.active = !f.active\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"f.active\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ul>\n\t\t\t</h4>\n\t\t\t</div>\n\t</ng-container>\n\t<div class=\"list-group-item disabled\">\n\t\t<h4 class=\"list-group-item-heading\"> \n\t\tSounds\n\t\t</h4>\n\t</div>\n\t<div class=\"list-group-item\">\n\t\t<ol>\n\t\t\t<ng-container *ngFor=\"let s of sounds\"><!-- general sounds -->\n\t\t\t\t<ng-container *ngIf=\"s.type == 'general'\">\n\t\t\t\t\t<span \t[attr.class]=\"'btn btn-xs btn-'+[s.color]\"\n\t\t\t\t\t\t\t\t\t(click)=\"playSound(s.src)\"\n\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"\n\t\t\t\t\t>{{s.title}}</span>\t\t\t\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\t\t</ol>\t\n\t\t<ol>\n\t\t\t<ng-container *ngFor=\"let s of sounds\"><!-- regular text -->\n\t\t\t\t<ng-container *ngIf=\"s.type == 'roles_std'\">\n\t\t\t\t\t<span \t[attr.class]=\"'btn btn-xs btn-'+[s.color]\"\n\t\t\t\t\t\t\t\t\t(click)=\"playSound(s.src)\"\n\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"\n\t\t\t\t\t>{{s.title}}</span>\t\t\t\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\t\t</ol>\t\n\t\t<ol>\n\t\t\t<ng-container *ngFor=\"let s of sounds\"><!-- text (roles swapped) -->\n\t\t\t\t<ng-container *ngIf=\"s.type == 'roles_swapped'\">\n\t\t\t\t\t<span \t[attr.class]=\"'btn btn-xs btn-'+[s.color]\"\n\t\t\t\t\t\t\t\t\t(click)=\"playSound(s.src)\"\n\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"\n\t\t\t\t\t>{{s.title}}</span>\t\t\t\n\t\t\t\t</ng-container>\n\t\t\t</ng-container>\n\t\t</ol>\t\n\t</div>\n\t<div class=\"list-group-item disabled\">\n\t\t<h4 class=\"list-group-item-heading\"> \n\t\tSet Items\n\t\t</h4>\n\t</div>\n\t<!-- drop controls  -->\n\t<!-- - - - -  - - - -->\n\t<ng-container *ngFor=\"let o of drpo\">\n\t\t<div class=\"list-group-item\" *ngIf=\"o.options.ctrl == true\">\n\t\t\t<h4 class=\"list-group-item-heading\">\n\t\t\t\t<ng-container [ngSwitch]=\"o.type\">\t\n\t\t\t\t\t<span \t*ngSwitchDefault \n\t\t\t\t\t\t\t\t\tclass=\"glyphicon glyphicon-picture\"></span>\n\t\t\t\t\t<span \t*ngSwitchCase=\"'camera'\" \n\t\t\t\t\t\t\t\t\tclass=\"glyphicon glyphicon-facetime-video\"></span>\n\t\t\t\t\t<span \t*ngSwitchCase=\"'light'\" \n\t\t\t\t\t\t\t\t\tclass=\"glyphicon glyphicon-lamp\"></span>  \n\t\t\t\t</ng-container>\n\t\t\t\t{{o.title}} \n\t\t\t\t<small>\n\t\t\t\t\t<input \tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\ttype=\"checkbox\" \n\t\t\t\t\t\t\t\t\t[attr.name]=\"o.uid\" \n\t\t\t\t\t\t\t\t\t[attr.id]=\"o.uid\" \n\t\t\t\t\t\t\t\t\t[checked]=\"o.options.toggled\" \n\t\t\t\t\t\t\t\t\t(change)=\"o.options.toggled = !o.options.toggled\">\n\n\t\t\t\t\t<input \t*ngIf=\"o.type == 'camera'\"\n\t\t\t\t\t\t\t\t\tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\tname=\"cameraSwitch\" \n\t\t\t\t\t\t\t\t\t[attr.value]=\"o.uid\" \n\t\t\t\t\t\t\t\t\t(change)=\"o.options.active = !o.options.active\"\n\t\t\t\t\t\t\t\t\t[attr.checked]=\"o.options.active\" >\n\t\t\t\t</small>\n\t\t\t\t<ng-container *ngIf=\"o.type == 'light'\">\n\t\t\t\t\t\t<input \t[attr.id]=\"o.uid+'-range'\"\n\t\t\t\t\t\t\t\t\t\ttype=\"range\" \n\t\t\t\t\t\t\t\t\t\tmin=\"0\" \n\t\t\t\t\t\t\t\t\t\tmax=\"5\" \n\t\t\t\t\t\t\t\t\t\tstep=\"0.25\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"o.light.intensity\"\n\t\t\t\t\t\t\t\t\t\t(change)=\"o.light.intensity = $event.target.value\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\">\n\n\t\t\t\t\t\t<label style=\"color: #ffffff; background-color: lightgrey;\">W <input \tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\t\t[attr.name]=\"o.uid+'-color'\"\n\t\t\t\t\t\t\t\t\t\tvalue=\"#ffffff\" \n\t\t\t\t\t\t\t\t\t\t(change)=\"o.light.color = $event.target.value\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"></label>\n\n\t\t\t\t\t\t<label style=\"color: #ffe162; background-color: lightgrey;\">Y <input \tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\t\t[attr.name]=\"o.uid+'-color'\"\n\t\t\t\t\t\t\t\t\t\tvalue=\"#ffe162\" \n\t\t\t\t\t\t\t\t\t\t(change)=\"o.light.color = $event.target.value\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"></label>\n\n\t\t\t\t\t\t<label style=\"color: #df1a42; background-color: lightgrey;\">R <input \tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\t\t[attr.name]=\"o.uid+'-color'\"\n\t\t\t\t\t\t\t\t\t\tvalue=\"#df1a42\" \n\t\t\t\t\t\t\t\t\t\t(change)=\"o.light.color = $event.target.value\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"></label>\n\n\t\t\t\t\t\t<label style=\"color: #010B65; background-color: lightgrey;\">B <input \tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\t\t[attr.name]=\"o.uid+'-color'\"\n\t\t\t\t\t\t\t\t\t\tvalue=\"#010B65\" \n\t\t\t\t\t\t\t\t\t\t(change)=\"o.light.color = $event.target.value\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"></label>\n\n\t\t\t\t\t\t<label style=\"color: #6bfe00; background-color: lightgrey;\">G <input \tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\t\ttype=\"radio\" \n\t\t\t\t\t\t\t\t\t\t[attr.name]=\"o.uid+'-color'\"\n\t\t\t\t\t\t\t\t\t\tvalue=\"#6bfe00\" \n\t\t\t\t\t\t\t\t\t\t(change)=\"o.light.color = $event.target.value\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"></label>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngIf=\"o.animation != null\">\n\t\t\t\t\t\t<ol *ngFor=\"let a of o.animation\">\n\t\t\t\t\t\t\t\t<label>{{a.title}} <input \tstyle=\"display: inline;\" \n\t\t\t\t\t\t\t\t\ttype=\"checkbox\" \n\t\t\t\t\t\t\t\t\t[attr.name]=\"o.uid+'-'+a.title\" \n\t\t\t\t\t\t\t\t\t[attr.id]=\"o.uid+'-'+a.title\" \n\t\t\t\t\t\t\t\t\t[checked]=\"a.state\" \n\t\t\t\t\t\t\t\t\t(change)=\"a.state = !a.state\"\n\t\t\t\t\t\t\t\t\tstyle=\"cursor:pointer;\"></label>\t\n\t\t\t\t\t\t</ol>\n\t\t\t\t</ng-container>\n\n\t\t\t</h4>\n\t\t\t</div>\n\t</ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/director/director.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_drpoService_service__ = __webpack_require__("../../../../../src/app/shared/drpoService.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectorComponent = (function () {
    function DirectorComponent(drpoS) {
        this.drpoS = drpoS;
        this.audio = new Audio();
        this.drpo = drpoS.drpo;
        this.characters = drpoS.characters;
        this.sounds = drpoS.sounds;
    }
    DirectorComponent.prototype.ngOnInit = function () {
    };
    DirectorComponent.prototype.playSound = function (src) {
        this.audio.src = '../../assets/' + src;
        this.audio.load();
        this.audio.play();
    };
    return DirectorComponent;
}());
DirectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-director',
        template: __webpack_require__("../../../../../src/app/director/director.component.html"),
        styles: [__webpack_require__("../../../../../src/app/director/director.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_drpoService_service__["a" /* drpoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_drpoService_service__["a" /* drpoService */]) === "function" && _a || Object])
], DirectorComponent);

var _a;
//# sourceMappingURL=director.component.js.map

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a-scene {\n\tmin-height: 500px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Romeo &amp; Julia - Act 2, Scene 2</h2>\n<hr>\n    <!--Preloader-->\n    <div id=\"wrapper\" #preloader>\n        <div id=\"timer\"></div>\n        <div class=\"timer-section section-left\">\n            <img src=\"assets/bilder/titelbild1.png\" width=\"100%\" height=\"100%\">\n        </div>\n        <div class=\"timer-section section-right\">\n            <img src=\"assets/bilder/titelbild2.png\" width=\"100%\" height=\"100%\">\n        </div>\n    </div>\n    <a-scene embedded id=\"scene\" style=\"height: 500px; max-height: 500px;\" #one>\n        <a-assets> \n            <!-- drop assets for simple objects and geometric forms -->\n            <ng-container *ngFor=\"let o of drpo\">\n              <ng-container *ngIf=\"o.options.toggled == true && o.appearance != null\">\n                <ng-container *ngIf=\"o.appearance.material\">\n                    <img [id]=\"o.uid+'-mtl'\" [attr.src]=\"'../../assets/'+o.appearance.material\">\n                </ng-container>\n                <ng-container *ngIf=\"o.appearance.obj\">\n                    <a-asset-item [id]=\"o.uid+'-obj'\" [attr.src]=\"'../../assets/'+o.appearance.obj\"></a-asset-item>\n                    <a-asset-item [id]=\"o.uid+'-mtl'\" [attr.src]=\"'../../assets/'+o.appearance.mtl\"></a-asset-item> \n                </ng-container>\n              </ng-container>   \n            </ng-container>\n            <!-- drop assets for characters -->\n            <ng-container *ngFor=\"let char of characters\">\n              <ng-container *ngIf=\"char.options.toggled == true\">  \n                <ng-container *ngFor=\"let part of char.parts\">\n                    <ng-container *ngIf=\"part.appearance.obj\">\n                        <a-asset-item [id]=\"char.uid+'_'+part.title+'-obj'\" [attr.src]=\"'../../assets/'+part.appearance.obj\"></a-asset-item>\n                        <a-asset-item [id]=\"char.uid+'_'+part.title+'-mtl'\" [attr.src]=\"'../../assets/'+part.appearance.mtl\"></a-asset-item> \n                    </ng-container>\n                </ng-container>\n              </ng-container>\n            </ng-container>\n        </a-assets>\n\n        <!-- loop through all simple objects and geometric forms -->\n        <ng-container *ngFor=\"let o of drpo\">\n          <ng-container *ngIf=\"o.options.toggled == true\">  \n          <!-- -->\n            <a-box *ngIf=\"o.type == 'box'\"\n                    [id]=\"o.uid\"\n                    [attr.width]=\"o.form.width\"\n                    [attr.height]=\"o.form.height\" \n                    [attr.depth]=\"o.form.depth\"  \n                    [attr.material]=\"'src: #'+o.uid+'-mtl'\" \n                    [attr.color]=\"o.appearance.color\" \n                    [attr.position]=\"(o.position[0].x != null ? o.position[0].x : '')+' '+(o.position[0].y != null ? o.position[0].y : '')+' '+(o.position[0].z != null ? o.position[0].z : '')\"\n                    [attr.rotation]=\"(o.rotation[0].x != null ? o.rotation[0].x : '')+' '+(o.rotation[0].y != null ? o.rotation[0].y : '')+' '+(o.rotation[0].z != null ? o.rotation[0].z : '')\"\n                    [attr.scale]=\"(o.scale[0].x != null ? o.scale[0].x : '')+' '+(o.scale[0].y != null ? o.scale[0].y : '')+' '+(o.rotation[0].z != null ? o.rotation[0].z : '')\"\n                    >     \n                    <ng-container *ngIf=\"o.animation\">\n                        <ng-container *ngFor=\"let a of o.animation\">\n                            <ng-container *ngIf=\"a.state == true || a.autostart == true\">\n                                <a-animation    *ngFor=\"let c of a.changes\"\n                                                [attr.attribute]=\"c.attribute\" \n                                                [attr.to]=\"c.to\" \n                                                [attr.dur]=\"c.dur\">\n                                                [attr.delay]=\"(c.delay != null ? c.delay : '0')\"\n                                </a-animation>   \n                            </ng-container>\n                        </ng-container>\n                    </ng-container>\n            </a-box>\n            <!-- -->\n            <a-plane *ngIf=\"o.type == 'plane'\"\n                    [id]=\"o.uid\"\n                    [attr.width]=\"o.form.width\"\n                    [attr.height]=\"o.form.height\" \n                    [attr.depth]=\"o.form.depth\"  \n                    [attr.material]=\"'src: #'+o.uid+'-mtl'\" \n                    [attr.color]=\"o.appearance.color\" \n                    [attr.position]=\"(o.position[0].x != null ? o.position[0].x : '')+' '+(o.position[0].y != null ? o.position[0].y : '')+' '+(o.position[0].z != null ? o.position[0].z : '')\"\n                    [attr.rotation]=\"(o.rotation[0].x != null ? o.rotation[0].x : '')+' '+(o.rotation[0].y != null ? o.rotation[0].y : '')+' '+(o.rotation[0].z != null ? o.rotation[0].z : '')\"\n                    [attr.scale]=\"(o.scale[0].x != null ? o.scale[0].x : '')+' '+(o.scale[0].y != null ? o.scale[0].y : '')+' '+(o.rotation[0].z != null ? o.rotation[0].z : '')\"\n                    >     \n            </a-plane>\n            <!-- -->\n            <a-entity   *ngIf=\"o.type == 'object'\"\n                        [id]=\"o.uid\"\n                        [attr.obj-model]=\"'obj: #' + o.uid + '-obj; mtl: #' + o.uid + '-mtl'\" \n                        [attr.position]=\"(o.position[0].x != null ? o.position[0].x : '')+' '+(o.position[0].y != null ? o.position[0].y : '')+' '+(o.position[0].z != null ? o.position[0].z : '')\"\n                        [attr.rotation]=\"(o.rotation[0].x != null ? o.rotation[0].x : '')+' '+(o.rotation[0].y != null ? o.rotation[0].y : '')+' '+(o.rotation[0].z != null ? o.rotation[0].z : '')\"\n                        [attr.scale]=\"(o.scale[0].x != null ? o.scale[0].x : '')+' '+(o.scale[0].y != null ? o.scale[0].y : '')+' '+(o.scale[0].z != null ? o.scale[0].z : '')\"\n                    > \n                    <ng-container *ngIf=\"o.animation\">\n                        <ng-container *ngFor=\"let a of o.animation\">\n                            <ng-container *ngIf=\"a.state == true || a.autostart == true\">\n                                <a-animation    *ngFor=\"let c of a.changes\"\n                                                [attr.attribute]=\"c.attribute\" \n                                                [attr.to]=\"c.to\" \n                                                [attr.dur]=\"c.dur\">\n                                                [attr.delay]=\"(c.delay != null ? c.delay : '0')\"\n                                </a-animation>   \n                            </ng-container>\n                        </ng-container>\n                    </ng-container>\n            </a-entity>\n            <!-- drop cameras -->\n            <a-entity   *ngIf=\"o.type == 'camera'\"\n                        [attr.position]=\"(o.position[0].x != null ? o.position[0].x : '')+' '+(o.position[0].y != null ? o.position[0].y : '')+' '+(o.position[0].z != null ? o.position[0].z : '')\"\n                        [attr.rotation]=\"(o.rotation[0].x != null ? o.rotation[0].x : '')+' '+(o.rotation[0].y != null ? o.rotation[0].y : '')+' '+(o.rotation[0].z != null ? o.rotation[0].z : '')\"\n                    >\n                <a-camera   [id]=\"o.uid\"\n                            [attr.active]=\"o.options.active\"\n                    >\n                    <ng-container *ngIf=\"o.animation\">\n                        <ng-container *ngFor=\"let a of o.animation\">\n                            <ng-container *ngIf=\"a.state == true || a.autostart == true\">\n                                <a-animation    *ngFor=\"let c of a.changes\"\n                                                [attr.attribute]=\"c.attribute\" \n                                                [attr.to]=\"c.to\" \n                                                [attr.dur]=\"c.dur\">\n                                                [attr.delay]=\"(c.delay != null ? c.delay : '0')\"\n                                </a-animation>   \n                            </ng-container>\n                        </ng-container>\n                    </ng-container>\n                </a-camera>   \n            </a-entity>\n            <!-- drop lights -->\n            <a-light    *ngIf=\"o.type == 'light'\"\n                        [id]=\"o.uid\" \n                        [attr.type]=\"o.light.type\"\n                        [attr.color]=\"o.light.color\"  \n                        [attr.intensity]=\"o.light.intensity\"\n                        [attr.position]=\"(o.position[0].x != null ? o.position[0].x : '')+' '+(o.position[0].y != null ? o.position[0].y : '')+' '+(o.position[0].z != null ? o.position[0].z : '')\"\n                    >\n            </a-light>\n\n          </ng-container>\n        </ng-container>\n\n        <!-- drop characters by loop -->\n        <ng-container *ngFor=\"let char of characters\">\n          <ng-container *ngIf=\"char.options.toggled == true\">  \n            <!-- drop separate parts of character -->\n            <ng-container *ngFor=\"let part of char.parts\">\n            <!-- part is object -->\n                <ng-container *ngIf=\"part.type == 'object'\">\n                    <a-entity   [id]=\"char.uid+'_'+part.title\"\n                                [attr.obj-model]=\"'obj: #' + char.uid+'_'+part.title + '-obj; mtl: #' + char.uid+'_'+part.title + '-mtl'\" \n                                [attr.position]=\"(part.position[0].x != null ? part.position[0].x : '')+' '+(part.position[0].y != null ? part.position[0].y : '')+' '+(part.position[0].z != null ? part.position[0].z : '')\"\n                                [attr.rotation]=\"(part.rotation[0].x != null ? part.rotation[0].x : '')+' '+(part.rotation[0].y != null ? part.rotation[0].y : '')+' '+(part.rotation[0].z != null ? part.rotation[0].z : '')\"\n                                [attr.scale]=\"(part.scale[0].x != null ? part.scale[0].x : '')+' '+(part.scale[0].y != null ? part.scale[0].y : '')+' '+(part.scale[0].z != null ? part.scale[0].z : '')\"\n                            > \n                        <ng-container   *ngFor=\"let f of char.figures\">\n                            <ng-container   *ngIf=\"f.active == true\">\n                                <a-animation    attribute=\"position\"\n                                                [attr.to]=\"(part.position[f.id].x != null ? part.position[f.id].x : '')+' '+(part.position[f.id].y != null ? part.position[f.id].y : '')+' '+(part.position[f.id].z != null ? part.position[f.id].z : '')\"\n                                                dur=\"5000\">\n                                </a-animation>\n                                <a-animation    attribute=\"rotation\"\n                                                [attr.to]=\"(part.rotation[f.id].x != null ? part.rotation[f.id].x : '')+' '+(part.rotation[f.id].y != null ? part.rotation[f.id].y : '')+' '+(part.rotation[f.id].z != null ? part.rotation[f.id].z : '')\"\n                                                dur=\"5000\">\n                                </a-animation>\n                                <a-animation    attribute=\"scale\"\n                                                [attr.to]=\"(part.scale[f.id].x != null ? part.scale[f.id].x : '')+' '+(part.scale[f.id].y != null ? part.scale[f.id].y : '')+' '+(part.scale[f.id].z != null ? part.scale[f.id].z : '')\"\n                                                dur=\"5000\">\n                                </a-animation>\n                            </ng-container>\n                        </ng-container>\n                    </a-entity>\n                </ng-container>\n                <!-- part is box -->\n                <ng-container *ngIf=\"part.type == 'box'\">\n                    <a-box  [id]=\"char.uid+'_'+part.title\"\n                            [attr.width]=\"part.form.width\"\n                            [attr.height]=\"part.form.height\" \n                            [attr.depth]=\"part.form.depth\"  \n                            [attr.color]=\"part.appearance.color\" \n                            [attr.position]=\"(part.position[0].x != null ? part.position[0].x : '')+' '+(part.position[0].y != null ? part.position[0].y : '')+' '+(part.position[0].z != null ? part.position[0].z : '')\"\n                            [attr.rotation]=\"(part.rotation[0].x != null ? part.rotation[0].x : '')+' '+(part.rotation[0].y != null ? part.rotation[0].y : '')+' '+(part.rotation[0].z != null ? part.rotation[0].z : '')\"\n                            [attr.scale]=\"(part.scale[0].x != null ? part.scale[0].x : '')+' '+(part.scale[0].y != null ? part.scale[0].y : '')+' '+(part.rotation[0].z != null ? part.rotation[0].z : '')\"\n                            >     \n                            <ng-container   *ngFor=\"let f of char.figures\">\n                                <ng-container   *ngIf=\"f.active == true\">\n                                    <a-animation    attribute=\"position\"\n                                                    [attr.to]=\"(part.position[f.id].x != null ? part.position[f.id].x : '')+' '+(part.position[f.id].y != null ? part.position[f.id].y : '')+' '+(part.position[f.id].z != null ? part.position[f.id].z : '')\"\n                                                    dur=\"5000\">\n                                    </a-animation>\n                                    <a-animation    attribute=\"rotation\"\n                                                    [attr.to]=\"(part.rotation[f.id].x != null ? part.rotation[f.id].x : '')+' '+(part.rotation[f.id].y != null ? part.rotation[f.id].y : '')+' '+(part.rotation[f.id].z != null ? part.rotation[f.id].z : '')\"\n                                                    dur=\"5000\">\n                                    </a-animation>\n                                    <a-animation    attribute=\"scale\"\n                                                    [attr.to]=\"(part.scale[f.id].x != null ? part.scale[f.id].x : '')+' '+(part.scale[f.id].y != null ? part.scale[f.id].y : '')+' '+(part.scale[f.id].z != null ? part.scale[f.id].z : '')\"\n                                                    dur=\"5000\">\n                                    </a-animation>\n                                </ng-container>\n                            </ng-container>\n                    </a-box>\n                </ng-container>\n                <!-- part is cylinder -->\n                <ng-container *ngIf=\"part.type == 'cylinder'\">\n                    <a-box  [id]=\"char.uid+'_'+part.title\"\n                            [attr.width]=\"part.form.width\"\n                            [attr.height]=\"part.form.height\" \n                            [attr.depth]=\"part.form.depth\" \n                            [attr.radius]=\"part.form.radius\"  \n                            [attr.color]=\"part.appearance.color\" \n                            [attr.position]=\"(part.position[0].x != null ? part.position[0].x : '')+' '+(part.position[0].y != null ? part.position[0].y : '')+' '+(part.position[0].z != null ? part.position[0].z : '')\"\n                            [attr.rotation]=\"(part.rotation[0].x != null ? part.rotation[0].x : '')+' '+(part.rotation[0].y != null ? part.rotation[0].y : '')+' '+(part.rotation[0].z != null ? part.rotation[0].z : '')\"\n                            [attr.scale]=\"(part.scale[0].x != null ? part.scale[0].x : '')+' '+(part.scale[0].y != null ? part.scale[0].y : '')+' '+(part.rotation[0].z != null ? part.rotation[0].z : '')\"\n                            >     \n                            <ng-container   *ngFor=\"let f of char.figures\">\n                                <ng-container   *ngIf=\"f.active == true\">\n                                    <a-animation    attribute=\"position\"\n                                                    [attr.to]=\"(part.position[f.id].x != null ? part.position[f.id].x : '')+' '+(part.position[f.id].y != null ? part.position[f.id].y : '')+' '+(part.position[f.id].z != null ? part.position[f.id].z : '')\"\n                                                    dur=\"5000\">\n                                    </a-animation>\n                                    <a-animation    attribute=\"rotation\"\n                                                    [attr.to]=\"(part.rotation[f.id].x != null ? part.rotation[f.id].x : '')+' '+(part.rotation[f.id].y != null ? part.rotation[f.id].y : '')+' '+(part.rotation[f.id].z != null ? part.rotation[f.id].z : '')\"\n                                                    dur=\"5000\">\n                                    </a-animation>\n                                    <a-animation    attribute=\"scale\"\n                                                    [attr.to]=\"(part.scale[f.id].x != null ? part.scale[f.id].x : '')+' '+(part.scale[f.id].y != null ? part.scale[f.id].y : '')+' '+(part.scale[f.id].z != null ? part.scale[f.id].z : '')\"\n                                                    dur=\"5000\">\n                                    </a-animation>\n                                </ng-container>\n                            </ng-container>\n                    </a-box>\n                </ng-container>\n\n            </ng-container>\n          </ng-container>\n        </ng-container>\n      </a-scene>"

/***/ }),

/***/ "../../../../../src/app/scene/scene.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_drpoService_service__ = __webpack_require__("../../../../../src/app/shared/drpoService.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SceneComponent = (function () {
    function SceneComponent(http, elementRef, drpoS) {
        this.http = http;
        this.elementRef = elementRef;
        this.drpoS = drpoS;
        this.intensity = 1;
        this.drpo = drpoS.drpo;
        this.characters = drpoS.characters;
    }
    SceneComponent.prototype.ngAfterViewInit = function () {
        var el = this.preloader;
        setTimeout(function () {
            el.nativeElement.remove();
        }, 5000);
    };
    return SceneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('preloader'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _a || Object)
], SceneComponent.prototype, "preloader", void 0);
SceneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-scene',
        template: __webpack_require__("../../../../../src/app/scene/scene.component.html"),
        styles: [__webpack_require__("../../../../../src/app/scene/scene.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_drpoService_service__["a" /* drpoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_drpoService_service__["a" /* drpoService */]) === "function" && _d || Object])
], SceneComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=scene.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/drpoService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_drpo__ = __webpack_require__("../../../../../src/assets/drpo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_characters__ = __webpack_require__("../../../../../src/assets/characters.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_sounds__ = __webpack_require__("../../../../../src/assets/sounds.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drpoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var drpoService = (function () {
    function drpoService() {
        this.drpo = __WEBPACK_IMPORTED_MODULE_1__assets_drpo__["a" /* DigitalRepresentedPhysicalObjects */];
        this.characters = __WEBPACK_IMPORTED_MODULE_2__assets_characters__["a" /* Characters */];
        this.sounds = __WEBPACK_IMPORTED_MODULE_3__assets_sounds__["a" /* Sounds */];
    }
    return drpoService;
}());
drpoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], drpoService);

//# sourceMappingURL=drpoService.service.js.map

/***/ }),

/***/ "../../../../../src/assets/characters.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Characters; });
var Characters = [{
        "uid": "romeo",
        "name": "Romeo",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": true
        },
        "figures": [
            { "id": "0", "title": "std", "active": true },
            { "id": "1", "title": "knee", "active": false },
            { "id": "2", "title": "back2std", "active": false }
        ],
        "parts": [
            {
                "title": "body",
                "type": "object",
                "appearance": {
                    "obj": "objects/Romeo/romeo-body.obj",
                    "mtl": "objects/Romeo/romeo-body.mtl"
                },
                "position": [
                    { "x": "0.000", "y": "2.918", "z": "-12.5" },
                    { "x": "0.000", "y": "2.690", "z": "-11.260" },
                    { "x": "0.000", "y": "2.918", "z": "-12.5" },
                ],
                "scale": [
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": "0", "y": "100", "z": "0" },
                    { "x": null, "y": null, "z": null },
                ]
            },
            {
                "title": "left-arm",
                "type": "object",
                "appearance": {
                    "obj": "objects/Romeo/romeoleftarm.obj",
                    "mtl": "objects/Romeo/romeoleftarm.mtl"
                },
                "position": [
                    { "x": "0.0000", "y": "2.918", "z": "-12.5" },
                    { "x": "0.0006", "y": "2.690", "z": "-11.279" },
                    { "x": "0.0000", "y": "2.918", "z": "-12.5" },
                ],
                "scale": [
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": "0", "y": "100", "z": "0" },
                    { "x": null, "y": null, "z": null },
                ]
            }, {
                "title": "right-arm",
                "type": "object",
                "appearance": {
                    "obj": "objects/Romeo/romeorightarm.obj",
                    "mtl": "objects/Romeo/romeorightarm.mtl"
                },
                "position": [
                    { "x": "-0.05", "y": "2.918", "z": "-12.5" },
                    { "x": "0.007", "y": "2.690", "z": "-11.237" },
                    { "x": "-0.05", "y": "2.918", "z": "-12.5" },
                ],
                "scale": [
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": "0", "y": "100", "z": "0" },
                    { "x": null, "y": null, "z": null },
                ]
            }, {
                "title": "left-leg",
                "type": "object",
                "appearance": {
                    "obj": "objects/Romeo/romeoleftleg.obj",
                    "mtl": "objects/Romeo/romeoleftleg.mtl"
                },
                "position": [
                    { "x": "0.000", "y": "2.918", "z": "-12.5" },
                    { "x": "0", "y": "2.9", "z": "-11.4" },
                    { "x": "0.000", "y": "2.918", "z": "-12.5" },
                ],
                "scale": [
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": "6.131", "y": "8.652", "z": "-35.355" },
                    { "x": null, "y": null, "z": null },
                ]
            }, {
                "title": "right-leg",
                "type": "object",
                "appearance": {
                    "obj": "objects/Romeo/romeoleftleg.obj",
                    "mtl": "objects/Romeo/romeoleftleg.mtl"
                },
                "position": [
                    { "x": "-0.313", "y": "2.918", "z": "-12.5" },
                    { "x": "0.117", "y": "2.730", "z": "-10.987" },
                    { "x": "-0.313", "y": "2.918", "z": "-12.5" },
                ],
                "scale": [
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                    { "x": "0.200", "y": "0.200", "z": "0.200" },
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": "6.131", "y": "8.652", "z": "-35.355" },
                    { "x": null, "y": null, "z": null },
                ]
            }
        ]
    },
    {
        "uid": "tree",
        "name": "Baum",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": true
        },
        "figures": [
            { "id": "0", "title": "std", "active": true },
            { "id": "1", "title": "shaking", "active": false }
        ],
        "parts": [
            {
                "title": "treetrunk",
                "type": "cylinder",
                "appearance": { "material": null, "color": "brown" },
                "form": { "height": "5", "radius": "0.5" },
                "position": [
                    { "x": "-7", "y": "2.918", "z": "-13.3" },
                    { "x": "-7", "y": "2.918", "z": "-13.3" }
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": null, "y": null, "z": null }
                ],
                "scale": [
                    { "x": "1", "y": "1", "z": "1" },
                    { "x": "1", "y": "1", "z": "1" }
                ]
            },
            {
                "title": "Tree1",
                "type": "box",
                "appearance": { "material": null, "color": "#003300" },
                "form": { "height": "1", "width": "2.5", "depth": "1" },
                "position": [
                    { "x": "-7", "y": "5.421", "z": "-13.3" },
                    { "x": "-7", "y": "5.421", "z": "-13.3" }
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": null, "y": null, "z": null }
                ],
                "scale": [
                    { "x": "1", "y": "1", "z": "1" },
                    { "x": "1", "y": "1", "z": "1" }
                ]
            },
            {
                "title": "Tree2",
                "type": "box",
                "appearance": { "material": null, "color": "#003300" },
                "form": { "height": "1", "width": "2.5", "depth": "1" },
                "position": [
                    { "x": "-7", "y": "6.421", "z": "-13.3" },
                    { "x": "-7", "y": "6.421", "z": "-13.3" }
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": null, "y": null, "z": null }
                ],
                "scale": [
                    { "x": "1", "y": "1", "z": "1" },
                    { "x": "1", "y": "1", "z": "1" }
                ]
            },
            {
                "title": "Tree3",
                "type": "box",
                "appearance": { "material": null, "color": "#003300" },
                "form": { "height": "1", "width": "2.5", "depth": "1" },
                "position": [
                    { "x": "-7", "y": "4.421", "z": "-13.3" },
                    { "x": "-7", "y": "4.421", "z": "-13.3" }
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": null, "y": null, "z": null }
                ],
                "scale": [
                    { "x": "1", "y": "1", "z": "1" },
                    { "x": "1", "y": "1", "z": "1" }
                ]
            },
            {
                "title": "Tree4",
                "type": "box",
                "appearance": { "material": null, "color": "#003300" },
                "form": { "height": "1.5", "width": "2", "depth": "3" },
                "position": [
                    { "x": "-7", "y": "5.421", "z": "-13.3" },
                    { "x": "-7", "y": "5.421", "z": "-13.3" }
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": null, "y": null, "z": null }
                ],
                "scale": [
                    { "x": "1", "y": "1", "z": "1" },
                    { "x": "1", "y": "1", "z": "1" }
                ]
            },
            {
                "title": "Leaf1",
                "type": "box",
                "appearance": { "material": null, "color": "#003300" },
                "form": { "height": "0.1", "width": "0.3", "depth": "0.3" },
                "position": [
                    { "x": "-7", "y": "5.421", "z": "-14.2" },
                    { "x": "-7", "y": "1", "z": "-14.2" }
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": null, "y": null, "z": null }
                ],
                "scale": [
                    { "x": "1", "y": "1", "z": "1" },
                    { "x": "1", "y": "1", "z": "1" }
                ]
            },
            {
                "title": "Leaf2",
                "type": "box",
                "appearance": { "material": null, "color": "#003300" },
                "form": { "height": "0.1", "width": "0.3", "depth": "0.3" },
                "position": [
                    { "x": "-6.5", "y": "5.421", "z": "-12.4" },
                    { "x": "-6.5", "y": "1", "z": "-12.4" }
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": null, "y": null, "z": null }
                ],
                "scale": [
                    { "x": "1", "y": "1", "z": "1" },
                    { "x": "1", "y": "1", "z": "1" }
                ]
            },
            {
                "title": "Leaf3",
                "type": "box",
                "appearance": { "material": null, "color": "#003300" },
                "form": { "height": "0.1", "width": "0.3", "depth": "0.3" },
                "position": [
                    { "x": "-8", "y": "5.421", "z": "-14" },
                    { "x": "-8", "y": "1", "z": "-14" }
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": null, "y": null, "z": null }
                ],
                "scale": [
                    { "x": "1", "y": "1", "z": "1" },
                    { "x": "1", "y": "1", "z": "1" }
                ]
            },
            {
                "title": "Leaf4",
                "type": "box",
                "appearance": { "material": null, "color": "#003300" },
                "form": { "height": "0.1", "width": "0.3", "depth": "0.3" },
                "position": [
                    { "x": "-5.5", "y": "5.421", "z": "-13.3" },
                    { "x": "-5.5", "y": "1", "z": "-13.3" }
                ],
                "rotation": [
                    { "x": null, "y": null, "z": null },
                    { "x": null, "y": null, "z": null }
                ],
                "scale": [
                    { "x": "1", "y": "1", "z": "1" },
                    { "x": "1", "y": "1", "z": "1" }
                ]
            }
        ]
    }];
//# sourceMappingURL=characters.js.map

/***/ }),

/***/ "../../../../../src/assets/drpo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitalRepresentedPhysicalObjects; });
var DigitalRepresentedPhysicalObjects = [{
        "uid": "julia",
        "type": "object",
        "title": "Julia",
        "comment": "",
        "options": { "toggled": true, "ctrl": true },
        "form": { "width": null, "height": null, "depth": null, },
        "appearance": { "mtl": "objects/Julia/julia.mtl", "obj": "objects/Julia/julia.obj", "color": "null" },
        "position": [
            { "x": "7", "y": "7.3", "z": "-14.471" }
        ],
        "rotation": [
            { "x": "0", "y": "-53.858", "z": "0" }
        ],
        "scale": [
            { "x": "0.200", "y": "0.200", "z": "0.200" }
        ],
        "animation": [
            {
                "title": "turn-back",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "position", "to": "7 7.3 -14.471", "dur": "1000" },
                    { "attribute": "rotation", "to": "0 -233.858 0", "dur": "1000" }
                ]
            },
            {
                "title": "std",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "position", "to": "7 7.3 -14.471", "dur": "1000" },
                    { "attribute": "rotation", "to": "0 -53.858 0", "dur": "1000" }
                ]
            },
            {
                "title": "fly",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "position", "to": "7 10 -14.471", "dur": "1000" },
                    { "attribute": "rotation", "to": "360 -53.858 0", "dur": "1000" }
                ]
            }, {
                "title": "land",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "position", "to": "7 7.3 -14.471", "dur": "1000" },
                    { "attribute": "rotation", "to": "-360 -53.858 0", "dur": "1000" }
                ]
            }
        ]
    }, {
        "uid": "curtain-left",
        "type": "box",
        "title": "The left curtain.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": true,
            "intesity": null
        },
        "form": {
            "width": "24",
            "height": "13",
            "depth": "0.1",
        },
        "appearance": {
            "material": "materials/curtain.jpg",
            "color": null
        },
        "position": [
            { "x": "-12", "y": "7", "z": "-10" },
            { "x": "0", "y": "0", "z": "0" },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
            { "x": null, "y": null, "z": null },
        ],
        "animation": [
            {
                "title": "animateOpen",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "width", "to": "5", "dur": "4000" }
                ]
            }, {
                "title": "animateClose",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "width", "to": "24", "dur": "6000" }
                ]
            }
        ]
    },
    {
        "uid": "curtain-right",
        "type": "box",
        "title": "The right curtain.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": true,
            "intesity": null
        },
        "form": {
            "width": "24",
            "height": "13",
            "depth": "0.1",
        },
        "appearance": {
            "material": "materials/curtain.jpg",
            "color": null
        },
        "position": [
            { "x": "12", "y": "7", "z": "-10" },
            { "x": "0", "y": "0", "z": "0" },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
            { "x": null, "y": null, "z": null },
        ],
        "animation": [
            {
                "title": "animateOpen",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "width", "to": "5", "dur": "4000" }
                ]
            }, {
                "title": "animateClose",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "width", "to": "24", "dur": "6000" }
                ]
            }
        ]
    },
    {
        "uid": "wall-right",
        "type": "box",
        "title": "The right theatre wall.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "1",
            "height": "14",
            "depth": "40",
        },
        "appearance": {
            "material": null,
            "color": "#581313"
        },
        "position": [
            { "x": "15",
                "y": "7",
                "z": "0"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "wall-left",
        "type": "box",
        "title": "The left theatre wall.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "1",
            "height": "14",
            "depth": "40",
        },
        "appearance": {
            "material": null,
            "color": "#581313"
        },
        "position": [
            { "x": "-15",
                "y": "7",
                "z": "0"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "wall-front",
        "type": "box",
        "title": "The background",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "30",
            "height": "14",
            "depth": "1",
        },
        "appearance": {
            "material": "materials/background.png",
            "color": null
        },
        "position": [
            { "x": "0",
                "y": "7",
                "z": "-20"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "ceiling",
        "type": "box",
        "title": "The theatres ceiling.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "30",
            "height": "1",
            "depth": "40",
        },
        "appearance": {
            "material": null,
            "color": "#000000"
        },
        "position": [
            { "x": "0",
                "y": "13.641",
                "z": "-0.009"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "floor",
        "type": "box",
        "title": "The theatres floor.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "30",
            "height": "1",
            "depth": "40",
        },
        "appearance": {
            "material": null,
            "color": "#352020"
        },
        "position": [
            { "x": "0",
                "y": "0",
                "z": "-0.8"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "stage",
        "type": "box",
        "title": "The theatres stage.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "30",
            "height": "2",
            "depth": "10",
        },
        "appearance": {
            "material": null,
            "color": "#000000"
        },
        "position": [
            { "x": "0",
                "y": "1",
                "z": "-14.5"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "entr-wall-right",
        "type": "box",
        "title": "The entrance halls right wall.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "1",
            "height": "14",
            "depth": "30",
        },
        "appearance": {
            "material": null,
            "color": "#cc9966"
        },
        "position": [
            { "x": "15",
                "y": "7",
                "z": "35"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "entr-wall-left",
        "type": "box",
        "title": "The entrance halls left wall.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "1",
            "height": "14",
            "depth": "30",
        },
        "appearance": {
            "material": null,
            "color": "#cc9966"
        },
        "position": [
            { "x": "-15",
                "y": "7",
                "z": "35"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "entr-wall-back",
        "type": "box",
        "title": "The entrance halls right wall.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "31",
            "height": "14",
            "depth": "1",
        },
        "appearance": {
            "material": null,
            "color": "#cc9966"
        },
        "position": [
            { "x": "0",
                "y": "6.726",
                "z": "48.357"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "entr-floor",
        "type": "box",
        "title": "The entrance halls floor.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "35",
            "height": "35",
            "depth": "1",
        },
        "appearance": {
            "material": null,
            "color": "#352020"
        },
        "position": [
            { "x": "0",
                "y": "0.01",
                "z": "34.603"
            },
        ],
        "rotation": [
            { "x": "-90", "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "entr-ceiling",
        "type": "box",
        "title": "The entrance halls ceiling.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "30",
            "height": "30",
            "depth": "1",
        },
        "appearance": {
            "material": null,
            "color": "#352020"
        },
        "position": [
            { "x": "0",
                "y": "14",
                "z": "34.603"
            },
        ],
        "rotation": [
            { "x": "-90", "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "entr-wall-door-inner-left",
        "type": "box",
        "title": "The entrance halls inner left front wall.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "7.5",
            "height": "14",
            "depth": "1",
        },
        "appearance": {
            "material": null,
            "color": "#cc9966"
        },
        "position": [
            { "x": "-11",
                "y": "7",
                "z": "20"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "entr-wall-door-inner-right",
        "type": "box",
        "title": "The entrance halls inner right front wall.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "7.5",
            "height": "14",
            "depth": "1",
        },
        "appearance": {
            "material": null,
            "color": "#cc9966"
        },
        "position": [
            { "x": "11",
                "y": "7",
                "z": "20"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "entr-wall-door-outer-left",
        "type": "box",
        "title": "The entrance halls outer left front wall.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "7.5",
            "height": "14",
            "depth": "0",
        },
        "appearance": {
            "material": null,
            "color": "#cc9966"
        },
        "position": [
            { "x": "-11.001",
                "y": "7",
                "z": "19.478"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "entr-wall-door-outer-right",
        "type": "box",
        "title": "The entrance halls outer right front wall.",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": false,
            "intesity": null
        },
        "form": {
            "width": "7.5",
            "height": "14",
            "depth": "0",
        },
        "appearance": {
            "material": null,
            "color": "#cc9966"
        },
        "position": [
            { "x": "11.001",
                "y": "7",
                "z": "19.478"
            },
        ],
        "rotation": [
            { "x": null, "y": null, "z": null },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    },
    {
        "uid": "poster1",
        "type": "plane",
        "title": "A Poster.",
        "comment": null,
        "options": { "toggled": true, "ctrl": false, "intesity": null },
        "form": { "width": "", "height": "", "depth": "", },
        "appearance": {
            "material": "materials/plakat1.jpg",
            "color": null
        },
        "position": [
            { "x": "-13.898",
                "y": "6.854",
                "z": "26.471"
            },
        ],
        "rotation": [
            { "x": "0", "y": "90", "z": "0" },
        ],
        "scale": [
            { "x": "5", "y": "5", "z": "0" },
        ]
    },
    {
        "uid": "poster2",
        "type": "plane",
        "title": "Another Poster.",
        "comment": null,
        "options": { "toggled": true, "ctrl": false, "intesity": null },
        "form": { "width": "", "height": "", "depth": "", },
        "appearance": {
            "material": "materials/plakat2.jpg",
            "color": null
        },
        "position": [
            { "x": "14.216",
                "y": "6.761",
                "z": "27.588"
            },
        ],
        "rotation": [
            { "x": "0", "y": "-90", "z": "0" },
        ],
        "scale": [
            { "x": "6", "y": "12", "z": "0" },
        ]
    },
    {
        "uid": "poster3",
        "type": "plane",
        "title": "Another Poster.",
        "comment": null,
        "options": { "toggled": true, "ctrl": false, "intesity": null },
        "form": { "width": "", "height": "", "depth": "", },
        "appearance": {
            "material": "materials/plakat3.jpg",
            "color": null
        },
        "position": [
            { "x": "14.216",
                "y": "10.130",
                "z": "38.702"
            },
        ],
        "rotation": [
            { "x": "0", "y": "-90", "z": "0" },
        ],
        "scale": [
            { "x": "7", "y": "5", "z": "0" },
        ]
    },
    {
        "uid": "poster4",
        "type": "plane",
        "title": "Another Poster.",
        "comment": null,
        "options": { "toggled": true, "ctrl": false, "intesity": null },
        "form": { "width": "", "height": "", "depth": "", },
        "appearance": {
            "material": "materials/plakat4.jpg",
            "color": null
        },
        "position": [
            { "x": "14.216",
                "y": "3.270",
                "z": "38.702"
            },
        ],
        "rotation": [
            { "x": "0", "y": "-90", "z": "0" },
        ],
        "scale": [
            { "x": "7", "y": "5", "z": "0" },
        ]
    },
    {
        "uid": "poster5",
        "type": "plane",
        "title": "Another Poster.",
        "comment": null,
        "options": { "toggled": true, "ctrl": false, "intesity": null },
        "form": { "width": "", "height": "", "depth": "", },
        "appearance": {
            "material": "materials/plakat5.jpg",
            "color": null
        },
        "position": [
            { "x": "-14.216",
                "y": "6.898",
                "z": "38.702"
            },
        ],
        "rotation": [
            { "x": "0", "y": "90", "z": "0" },
        ],
        "scale": [
            { "x": "7", "y": "5", "z": "0" },
        ]
    }, {
        "uid": "balcony",
        "type": "object",
        "title": "The balcony",
        "comment": "",
        "options": { "toggled": true, "ctrl": false, "intesity": null },
        "form": { "width": null, "height": null, "depth": null, },
        "appearance": { "mtl": "objects/Balkon/balkon.mtl", "obj": "objects/Balkon/balkon.obj", "color": "null" },
        "position": [
            { "x": "10", "y": "2.215", "z": "-16" }
        ],
        "rotation": [
            { "x": "0", "y": "204", "z": "0" }
        ],
        "scale": [
            { "x": null, "y": null, "z": null }
        ]
    }, {
        "uid": "Chairs",
        "type": "object",
        "title": "Chairs",
        "comment": null,
        "options": {
            "toggled": true,
            "ctrl": true,
            "intesity": null
        },
        "form": { "width": null, "height": null, "depth": null, },
        "appearance": { "mtl": "objects/Sitze/Stuhl.mtl", "obj": "objects/Sitze/Stuhl.obj", "color": "null" },
        "position": [
            { "x": "2.8", "y": "0", "z": "-1.28" }
        ],
        "rotation": [
            { "x": "0", "y": "270", "z": "0" },
        ],
        "scale": [
            { "x": null, "y": null, "z": null },
        ]
    }, {
        "uid": "camera0",
        "type": "camera",
        "title": "Camera 0",
        "comment": "null",
        "options": { "toggled": true, "ctrl": true, "intesity": null, "active": true },
        "position": [
            { "x": "0.7", "y": "3", "z": "39.315" },
        ],
        "rotation": [{ "x": null, "y": null, "z": null }],
        "animation": [
            {
                "title": "moveForward",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "position", "to": "0.7 3.0 -39.315", "dur": "10000", "delay": "30000" }
                ]
            }
        ]
    }, {
        "uid": "camera1",
        "type": "camera",
        "title": "Camera 1",
        "comment": "null",
        "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
        "position": [{ "x": "0.7", "y": "3", "z": "6" },],
        "rotation": [{ "x": null, "y": null, "z": null }]
    }, {
        "uid": "camera2",
        "type": "camera",
        "title": "Camera 2",
        "comment": "null",
        "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
        "position": [{ "x": "7.1", "y": "7.2", "z": "-15.4" },],
        "rotation": [{ "x": "0", "y": "120", "z": "0" },]
    }, {
        "uid": "camera3",
        "type": "camera",
        "title": "Camera 3",
        "comment": "null",
        "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
        "position": [{ "x": "0", "y": "2.918", "z": "-12.5" },],
        "rotation": [{ "x": "0", "y": "-70", "z": "0" },]
    }, {
        "uid": "camera4",
        "type": "camera",
        "title": "Camera 4",
        "comment": "null",
        "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
        "position": [{ "x": "0.7", "y": "10", "z": "6" },],
        "rotation": [{ "x": null, "y": null, "z": null }]
    }, {
        "uid": "camera5",
        "type": "camera",
        "title": "Camera 5",
        "comment": "null",
        "options": { "toggled": true, "ctrl": true, "intesity": null, "active": false },
        "position": [{ "x": "0.7", "y": "10", "z": "6" },],
        "rotation": [{ "x": null, "y": null, "z": null },],
    }, {
        "uid": "the_spot",
        "type": "light",
        "title": "Spot Light",
        "comment": "null",
        "options": { "toggled": true, "ctrl": true },
        "position": [
            { "x": "0", "y": "10", "z": "0" },
        ],
        "light": {
            "intensity": "0.5",
            "color": "#FFF",
            "type": "spot"
        }
    }, {
        "uid": "the_ambient",
        "type": "light",
        "title": "Ambient Light",
        "comment": "null",
        "options": { "toggled": true, "ctrl": true },
        "position": [
            { "x": "0", "y": "0", "z": "0" },
        ],
        "light": {
            "intensity": "1.0",
            "color": "#FFF",
            "type": "ambient"
        },
    }, {
        "uid": "door-right",
        "type": "object",
        "title": "The right door.",
        "comment": "",
        "options": { "toggled": true, "ctrl": true },
        "form": { "width": null, "height": null, "depth": null, },
        "appearance": { "mtl": "objects/Door/door.mtl", "obj": "objects/Door/door.obj", "color": "null" },
        "position": [
            { "x": "7.5", "y": "7.0", "z": "20.0" }
        ],
        "rotation": [
            { "x": "0", "y": "90", "z": "0" }
        ],
        "scale": [
            { "x": "0.4", "y": "0.5", "z": "0.5" }
        ],
        "animation": [
            {
                "title": "animateOpen",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "rotation", "to": "0 180 0", "dur": "4000" }
                ]
            }, {
                "title": "animateClose",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "rotation", "to": "0 90 0", "dur": "4000" }
                ]
            }
        ]
    }, {
        "uid": "door-left",
        "type": "object",
        "title": "The left door.",
        "comment": "",
        "options": { "toggled": true, "ctrl": true },
        "form": { "width": null, "height": null, "depth": null, },
        "appearance": { "mtl": "objects/Door/door.mtl", "obj": "objects/Door/door.obj", "color": "null" },
        "position": [
            { "x": "-7.5", "y": "7.0", "z": "20.0" }
        ],
        "rotation": [
            { "x": "0", "y": "-90", "z": "0" }
        ],
        "scale": [
            { "x": "0.4", "y": "0.5", "z": "0.5" }
        ],
        "animation": [
            {
                "title": "animateOpen",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "rotation", "to": "0 -180 0", "dur": "4000" }
                ]
            }, {
                "title": "animateClose",
                "autostart": false,
                "state": false,
                "changes": [
                    { "attribute": "rotation", "to": "0 -90 0", "dur": "4000" }
                ]
            }
        ]
    }];
//# sourceMappingURL=drpo.js.map

/***/ }),

/***/ "../../../../../src/assets/sounds.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sounds; });
var Sounds = [{
        "uid": "sound_applause",
        "title": "Crowd Applause",
        "comment": null,
        "src": "sound/Applause/crowd_applause.mp3",
        "color": "info",
        "type": "general"
    },
    {
        "uid": "sound_clapping",
        "title": "Hand Clapping",
        "comment": null,
        "src": "sound/Applause/hand_claps.mp3",
        "color": "info",
        "type": "general"
    },
    {
        "uid": "sound_boo",
        "title": "Boo",
        "comment": null,
        "src": "sound/Applause/boo.mp3",
        "color": "info",
        "type": "general"
    },
    {
        "uid": "romeo_sound_1",
        "title": "Romeo_1",
        "comment": null,
        "src": "sound/romeo/romeo1.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_1",
        "title": "Julia_1",
        "comment": null,
        "src": "sound/julia/julia1.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_2",
        "title": "romeo_2",
        "comment": null,
        "src": "sound/romeo/romeo2.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_2",
        "title": "Julia_2",
        "comment": null,
        "src": "sound/julia/julia2.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_3",
        "title": "Romeo_3",
        "comment": null,
        "src": "sound/romeo/romeo3.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_3",
        "title": "Julia_3",
        "comment": null,
        "src": "sound/julia/julia3.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_4",
        "title": "Romeo_4",
        "comment": null,
        "src": "sound/romeo/romeo4.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_4",
        "title": "Julia_4",
        "comment": null,
        "src": "sound/julia/julia4.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_5",
        "title": "Romeo_5",
        "comment": null,
        "src": "sound/romeo/romeo5.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_5",
        "title": "Julia_5",
        "comment": null,
        "src": "sound/julia/julia5.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_6",
        "title": "Romeo_6",
        "comment": null,
        "src": "sound/romeo/romeo6.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_6",
        "title": "Julia_6",
        "comment": null,
        "src": "sound/julia/julia6.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_7",
        "title": "Romeo_7",
        "comment": null,
        "src": "sound/romeo/romeo7.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_7",
        "title": "Julia_7",
        "comment": null,
        "src": "sound/julia/julia7.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_8",
        "title": "Romeo_8",
        "comment": null,
        "src": "sound/romeo/romeo8.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_8",
        "title": "Julia_8",
        "comment": null,
        "src": "sound/julia/julia8.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_9",
        "title": "Romeo_9",
        "comment": null,
        "src": "sound/romeo/romeo9.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_9",
        "title": "Julia_9",
        "comment": null,
        "src": "sound/julia/julia9.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_10",
        "title": "Romeo_10",
        "comment": null,
        "src": "sound/romeo/romeo10.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_10",
        "title": "Julia_10",
        "comment": null,
        "src": "sound/julia/julia10.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_11",
        "title": "Romeo_11",
        "comment": null,
        "src": "sound/romeo/romeo11.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_11",
        "title": "Julia_11",
        "comment": null,
        "src": "sound/julia/julia11.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_12",
        "title": "Romeo_12",
        "comment": null,
        "src": "sound/romeo/romeo12.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_sound_12",
        "title": "Julia_12",
        "comment": null,
        "src": "sound/julia/julia12.mp3",
        "color": "danger",
        "type": "roles_std"
    },
    {
        "uid": "romeo_sound_13",
        "title": "Romeo_13",
        "comment": null,
        "src": "sound/romeo/romeo13.mp3",
        "color": "primary",
        "type": "roles_std"
    },
    {
        "uid": "julia_rollentausch_1",
        "title": "Julia_R_1",
        "comment": null,
        "src": "sound/julia_verkehrt/julia1.mp3",
        "color": "primary",
        "type": "roles_swapped"
    },
    {
        "uid": "romeo_rollentausch_1",
        "title": "Romeo_R_1",
        "comment": null,
        "src": "sound/romeo_verkehrt/romeo1.mp3",
        "color": "danger",
        "type": "roles_swapped"
    },
    {
        "uid": "julia_rollentausch_2",
        "title": "Julia_R_2",
        "comment": null,
        "src": "sound/julia_verkehrt/julia2.mp3",
        "color": "primary",
        "type": "roles_swapped"
    },
    {
        "uid": "romeo_rollentausch_2",
        "title": "Romeo_R_2",
        "comment": null,
        "src": "sound/romeo_verkehrt/romeo2.mp3",
        "color": "danger",
        "type": "roles_swapped"
    },
    {
        "uid": "julia_rollentausch_3",
        "title": "Julia_R_3",
        "comment": null,
        "src": "sound/julia_verkehrt/julia3.mp3",
        "color": "primary",
        "type": "roles_swapped"
    },
    {
        "uid": "romeo_rollentausch_3",
        "title": "Romeo_R_3",
        "comment": null,
        "src": "sound/romeo_verkehrt/romeo3.mp3",
        "color": "danger",
        "type": "roles_swapped"
    },
    {
        "uid": "julia_rollentausch_4",
        "title": "Julia_R_4",
        "comment": null,
        "src": "sound/julia_verkehrt/julia4.mp3",
        "color": "primary",
        "type": "roles_swapped"
    },
    {
        "uid": "romeo_rollentausch_4",
        "title": "Romeo_R_4",
        "comment": null,
        "src": "sound/romeo_verkehrt/romeo4.mp3",
        "color": "danger",
        "type": "roles_swapped"
    },
    {
        "uid": "julia_rollentausch_5",
        "title": "Julia_R_5",
        "comment": null,
        "src": "sound/julia_verkehrt/julia5.mp3",
        "color": "primary",
        "type": "roles_swapped"
    },
    {
        "uid": "romeo_rollentausch_5",
        "title": "Romeo_R_5",
        "comment": null,
        "src": "sound/romeo_verkehrt/romeo5.mp3",
        "color": "danger",
        "type": "roles_swapped"
    },
    {
        "uid": "julia_rollentausch_6",
        "title": "Julia_R_6",
        "comment": null,
        "src": "sound/julia_verkehrt/julia6.mp3",
        "color": "primary",
        "type": "roles_swapped"
    },
    {
        "uid": "romeo_rollentausch_6",
        "title": "Romeo_R_6",
        "comment": null,
        "src": "sound/romeo_verkehrt/romeo6.mp3",
        "color": "danger",
        "type": "roles_swapped"
    },
    {
        "uid": "julia_rollentausch_7",
        "title": "Julia_R_7",
        "comment": null,
        "src": "sound/julia_verkehrt/julia7.mp3",
        "color": "primary",
        "type": "roles_swapped"
    },
    {
        "uid": "romeo_rollentausch_7",
        "title": "Romeo_R_7",
        "comment": null,
        "src": "sound/romeo_verkehrt/romeo7.mp3",
        "color": "danger",
        "type": "roles_swapped"
    },
    {
        "uid": "julia_rollentausch_8",
        "title": "Julia_R_8",
        "comment": null,
        "src": "sound/julia_verkehrt/julia8.mp3",
        "color": "primary",
        "type": "roles_swapped"
    },
    {
        "uid": "romeo_rollentausch_8",
        "title": "Romeo_R_8",
        "comment": null,
        "src": "sound/romeo_verkehrt/romeo8.mp3",
        "color": "danger",
        "type": "roles_swapped"
    }];
//# sourceMappingURL=sounds.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map