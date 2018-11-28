webpackJsonp([3],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(fire, navCtrl, navParams, Tost, loadingCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Tost = Tost;
        this.loadingCtrl = loadingCtrl;
        this.email = '';
        this.password = '';
        this.myError = '';
    }
    RegisterPage.prototype.myRegister = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
            var loader = _this.loadingCtrl.create({
                content: "รอสักครู่ ...",
                duration: 1000
            });
            loader.present();
            //   this.Tost.showToastWithCloseButton("บันทึกข้อมูลสำเร็จ");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
            console.log(_this.email + "  " + _this.password);
            _this.myError = _this.email + "  " + _this.password;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
        }).catch(function (error) {
            // Handle Errors here.
            console.log(error);
            // ...
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\register\register.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Sign up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Email</ion-label>\n\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n<button ion-button full (click)="myRegister()">Register</button>\n\n  </ion-item>\n\n\n\n\n\n<!--<ion-item>\n\n       <p>{{myError}}</p>\n\n  </ion-item>-->\n\n   \n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_tost_service_tost_service__["a" /* TostServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonProvider = (function () {
    function PersonProvider(http, db) {
        this.http = http;
        this.db = db;
        console.log('Hello PersonProvider Provider');
    }
    // =========ฟังก์ชันร้องขอข้อมูลจาก Firebase แบบ Object =========
    PersonProvider.prototype.getObject = function (key) {
        return this.db.object('people/' + key);
    };
    // =========ฟังก์ชันร้องขอข้อมูลจาก Firebase แบบ List =========
    PersonProvider.prototype.getList = function () {
        return this.db.list('/people');
    };
    // =========ฟังก์ชันเพิ่มข้อมูล Firebase แบบ Object  =========
    PersonProvider.prototype.pushObject = function (object) {
        return this.db.list('people/').push(object);
    };
    PersonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], PersonProvider);
    return PersonProvider;
}());

//# sourceMappingURL=person.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__showre_showre__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_report_report__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tost_service_tost_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homeshow_homeshow__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var ReportPage = (function () {
    function ReportPage(navCtrl, platform, geolocation, camera, alertCtrl, app, loadingCtrl, Tost, reportProvider, actionSheetCtrl, file) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.reportProvider = reportProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.report = { category: "", topics: "", comment: "", lat: "", lng: "",
            MyData: "", email: "", status: "", email_unfix: "", email_fixing: "",
            email_fixed: "", image: "" };
        this.photos = [];
        this.basePath = '/report';
        this.objectToSave = new Array;
        this.takePictureOptions = {
            allowEdit: false,
            saveToPhotoAlbum: true,
            targetWidth: 720,
            targetHeight: 720,
            cameraDirection: this.camera.Direction.BACK,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.FILE_URI,
        };
        this.galleryOptions = {
            allowEdit: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 720,
            targetHeight: 720,
            correctOrientation: true
        };
        this.Date = new Date();
        this.getMyData();
        this.image = '';
    }
    ReportPage_1 = ReportPage;
    ReportPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        this.validate();
    };
    ReportPage.prototype.saveDetails = function (category, topics, comment, lat, lng, status) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "รอสักครู่ ...",
            duration: 1000
        });
        loader.present();
        this.report = {
            category: category,
            topics: topics,
            comment: comment,
            lat: lat,
            lng: lng,
            MyData: this.MyData,
            email: sessionStorage.getItem("email"),
            status: status,
            email_unfix: sessionStorage.getItem("email"),
            email_fixing: sessionStorage.getItem("email"),
            email_fixed: sessionStorage.getItem("email"),
            image: this.image
        };
        try {
            this.reportProvider.pushObject(this.report).then(function (res) {
                _this.Tost.showToastWithCloseButton("บันทึกข้อมูลสำเร็จ");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__showre_showre__["a" /* ShowrePage */]);
            });
        }
        catch (error) {
            this.Tost.showToastWithCloseButton(error);
        }
    };
    ReportPage.prototype.logout = function () {
        // Remove API token
        sessionStorage.removeItem("email");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__homeshow_homeshow__["a" /* HomeshowPage */]);
        var root = this.app.getRootNav();
        root.popToRoot();
        var alert = this.alertCtrl.create({
            title: 'ออกจากระบบ',
            message: 'ต้องการออกจากระบบ?',
            buttons: [
                {
                    text: 'ยกเลิก',
                    role: 'ยกเลิก',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ใช่',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ReportPage.prototype.onChange = function (SelectedValue) {
        console.log("Selected type", SelectedValue);
        this.validate();
    };
    ReportPage.prototype.cencel = function () {
        this.navCtrl.push(ReportPage_1);
    };
    ReportPage.prototype.deletePhoto = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'ต้องการลบรูปภาพนี้',
            message: '',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                }, {
                    text: 'ตกลง',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.photos.splice(index, 1);
                        //return true;
                    }
                }
            ]
        });
        confirm.present();
    };
    //ถ่ายรูปภาพ
    ReportPage.prototype.takePhoto = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'ถ่ายรูปภาพ',
                    icon: 'camera',
                    handler: function () {
                        _this.uploadFromCamera();
                    }
                } /*, {
                  text: 'เพิ่มรูปภาพ',
                  icon: 'images',
                  handler: () => {
                    this.uploadFromGallery();
                  }
                }*/
            ]
        });
        actionSheet.present();
    };
    ReportPage.prototype.refreshPicture = function () {
        var _this = this;
        var result = [];
        // load data from firebase...
        __WEBPACK_IMPORTED_MODULE_9_firebase_app__["database"]().ref('report').orderByKey().once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                // get the key/id and the data for display
                var element = childSnapshot.val();
                element.id = childSnapshot.key;
                result.push(element);
            });
            _this.pictures = result;
        });
    };
    ReportPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    ReportPage.prototype.uploadFromCamera = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "รอสักครู่ ...",
            duration: 10000
        });
        loader.present();
        this.camera.getPicture(this.takePictureOptions).then(function (imagePath) {
            return _this.makeFileIntoBlob(imagePath);
        }).then(function (imageBlob) {
            return _this.uploadToFirebase(imageBlob);
        }).then(function (uploadSnapshot) {
            loader.dismiss();
            _this.image = uploadSnapshot.downloadURL;
            return uploadSnapshot;
        }).then(function (_uploadSnapshot) {
            alert('บันทึกรูปภาพเรียบร้อยแล้ว');
        }, function (_error) {
            alert('Error ' + (_error.message || _error));
        });
    };
    ReportPage.prototype.makeFileIntoBlob = function (_imagePath) {
        return new Promise(function (resolve, reject) {
            window.resolveLocalFileSystemURL(_imagePath, function (fileEntry) {
                fileEntry.file(function (resFile) {
                    var reader = new FileReader();
                    reader.onloadend = function (evt) {
                        var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                        imgBlob.name = 'sample.jpg';
                        resolve(imgBlob);
                    };
                    reader.onerror = function (e) {
                        console.log('Failed file read: ' + e.toString());
                        reject(e);
                    };
                    reader.readAsArrayBuffer(resFile);
                });
            });
        });
    };
    ReportPage.prototype.uploadToFirebase = function (imgBlob) {
        var _this = this;
        var randomNumber = Math.floor(Math.random() * 256);
        console.log('Random number : ' + randomNumber);
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_9_firebase_app__["storage"]().ref(_this.basePath + randomNumber + '.jpg');
            var metadata = {
                contentType: 'image/jpeg',
            };
            var uploadTask = storageRef.put(imgBlob, metadata);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_9_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                var progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
                console.log(progress);
            }, function (error) {
                console.log(error);
                reject(error);
            }, function () {
                var url = uploadTask.snapshot.downloadURL;
                console.log('Saved picture url', url);
                resolve(uploadTask.snapshot);
            });
        });
    };
    // ========= ฟังก์ชัน validate ข้อมูล =========
    ReportPage.prototype.validate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var filters, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // =========ร้องขอข้อมูล Report จาก reportProvider แล้วเก็บไว้ใน this.reports =========
                    return [4 /*yield*/, this.reportProvider.getList().subscribe(function (list) {
                            // console.log("list", list);
                            _this.reports = list;
                        })];
                    case 1:
                        // =========ร้องขอข้อมูล Report จาก reportProvider แล้วเก็บไว้ใน this.reports =========
                        _a.sent();
                        filters = {
                            lat: [this.lat],
                            lng: [this.lng],
                            opts: [this.opts]
                        };
                        result = this.multiFilter(this.reports, filters);
                        // console.log("result",result);
                        if (result.length > 0) {
                            this.lat = "";
                            this.lng = "";
                            this.opts = "";
                            alert('ตำแหน่งนี้มีผู้รายงานแล้วค่ะ');
                            //   this.Tost.showToastWithCloseButton("ตำแหน่งนี้มีผู้รายงานแล้วค่ะ");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // ========= ฟังก์ชันค้นหาข้อมูใน Array โดยใส่ Array และ Key =========
    ReportPage.prototype.multiFilter = function (array, filters) {
        var filterKeys = Object.keys(filters);
        // filters all elements passing the criteria
        return array.filter(function (item) {
            // dynamically validate all filter criteria
            return filterKeys.every(function (key) { return !!~filters[key].indexOf(item[key]); });
        });
    };
    ReportPage.prototype.loadMap = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.geolocation.getCurrentPosition().then(function (position) {
                //  console.log('lat '+position.coords.latitude);  
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                var marker = new google.maps.Marker({
                    map: _this.map,
                    animation: google.maps.Animation.DROP,
                    position: _this.map.getCenter()
                });
            }).catch(function (error) {
                _this.error = 'Error getting location: ' + JSON.stringify(error);
            });
        });
    };
    ReportPage.prototype.getMyData = function () {
        var dateObj = new Date();
        var date = dateObj.getDate().toString();
        var month = dateObj.getMonth().toString();
        var year = dateObj.getFullYear().toString();
        this.MyData = date + '/' + month + '/' + year;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ReportPage.prototype, "mapElement", void 0);
    ReportPage = ReportPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\report\report.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      Report\n    </ion-title>\n    <ion-buttons end>\n\n     <!--<button ion-button  (click)="watch()"><ion-icon name="pin">&nbsp;&nbsp;</ion-icon>เพิ่มตำแหน่ง</button>--> \n      <button ion-button color="primary" (click)="logout()">Sign out</button>\n\n\n    </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n<!-- <script src="https://cdn.firebase.com/js/client/2.3.2/firebase.js"></script> -->\n <!-- To Load MAP -->\n <ion-content padding class="card-background-page">\n\n    <div #map id="map"></div>\n    \n\n\n    \n\n <!--   <img class="gomaps" src="assets/imgs/pfu.png" (click)="maps()"/>-->\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label>ประเภทของปัญหา</ion-label>\n      <ion-select [(ngModel)]="category" (ngModelChange)="onChange(category)">\n        <ion-option value="ขยะ" checked="true">ขยะ</ion-option>\n        <ion-option value="ไฟฟ้าและแสงสว่างภายนอกอาคาร">ไฟฟ้าและแสงสว่างภายนอกอาคาร</ion-option>\n        <ion-option value="ถนน">ถนน</ion-option>\n        <ion-option value="ระบายน้ำและปะปา">ระบายน้ำและปะปา</ion-option>\n        <ion-option value="สวน">สวน</ion-option>\n        <ion-option value="อื่นๆ">อื่นๆ</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n      <ion-list>\n\n            <ion-item class="list list-inset">\n              <ion-label>หัวข้อ :</ion-label>\n              <ion-input type="text" [(ngModel)]="topics" ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label class="list list-inset">รายละเอียดปัญหา :</ion-label>\n              <ion-input type="text" [(ngModel)]="comment"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>วันที่ : {{MyData}}</ion-label>\n            <!--  <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="date"></ion-datetime>-->\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="list list-inset">สถานะ</ion-label>\n                <ion-input type="text" [readonly]="isReadonly()" value="ยังไม่ได้แก้ไข" [(ngModel)]="status"></ion-input>\n              </ion-item>\n          </ion-list>\n\n\n     <!-- เพิ่มรูปภาพ -->\n\n      <button ion-button color="light" block (click)="takePhoto()"><ion-icon name="camera"></ion-icon>&nbsp;&nbsp;เพิ่มรูปภาพ</button>\n      \n\n    <!--<img src="" alt="" width="20%" height="20%" >\n\n       <ion-col col-6 *ngFor="let photo of pictures; let id = index">\n            <ion-card class="block">\n              <ion-icon name="trash" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n              <img [src]="base64Image" *ngIf="base64Image" />\n            </ion-card>\n        </ion-col>-->      \n\n{{image}}\n\n      <!--ปุ่มยืนยัน/ยกเลิก -->\n<div text-center align-items-center>\n    <button ion-button  (click)="saveDetails(category,topics,comment,lat,lng,status)">ยืนยัน</button>\n  <!-- <button ion-button  color="danger" (click)="logout()">ยกเลิก</button>--> \n</div>\n<p *ngIf="error">{{ error }}</p>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\report\report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_report_report__["a" /* ReportProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */]])
    ], ReportPage);
    return ReportPage;
    var ReportPage_1;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fixun_fixun__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixing_fixing__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fixed_fixed__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatusPage = (function () {
    function StatusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatusPage.prototype.fixun = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fixun_fixun__["a" /* FixunPage */]);
    };
    StatusPage.prototype.fixing = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fixing_fixing__["a" /* FixingPage */]);
    };
    StatusPage.prototype.figed = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__fixed_fixed__["a" /* FixedPage */]);
    };
    StatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-status',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\status\status.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>status</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-toolbar>\n        <ion-segment color="primary">\n          <ion-segment-button (click)="fixun()">ยังไม่ได้แก้ไข</ion-segment-button>\n          <ion-segment-button (click)="fixing()">กำลังแก้ไข</ion-segment-button>\n          <ion-segment-button (click)="figed()">แก้ไขเรียบร้อยแล้ว</ion-segment-button>\n        </ion-segment>\n      </ion-toolbar> \n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\status\status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], StatusPage);
    return StatusPage;
}());

//# sourceMappingURL=status.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__garbage_garbage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__light_light__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__road_road__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__water_water__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tree_tree__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__other_other__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TypeePage = (function () {
    function TypeePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TypeePage.prototype.Garbage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__garbage_garbage__["a" /* GarbagePage */]);
    };
    TypeePage.prototype.Light = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__light_light__["a" /* LightPage */]);
    };
    TypeePage.prototype.Road = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__road_road__["a" /* RoadPage */]);
    };
    TypeePage.prototype.Water = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__water_water__["a" /* WaterPage */]);
    };
    TypeePage.prototype.Tree = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tree_tree__["a" /* TreePage */]);
    };
    TypeePage.prototype.Other = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__other_other__["a" /* OtherPage */]);
    };
    TypeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-typee',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\typee\typee.html"*/'\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>ประเภทปัญหา</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-toolbar>\n        <ion-segment color="primary">\n          <ion-segment-button (click)="Garbage()">ขยะ</ion-segment-button>\n          <ion-segment-button (click)="Light()">ไฟฟ้าและแสงสว่างภายนอกอาคาร</ion-segment-button>\n          <ion-segment-button (click)="Road()">ถนน</ion-segment-button>\n          <ion-segment-button (click)="Water()">ระบายน้ำและปะปา</ion-segment-button>\n          <ion-segment-button (click)="Tree()">สวน</ion-segment-button>\n          <ion-segment-button (click)="Other()">อื่นๆ</ion-segment-button>\n        </ion-segment>\n      </ion-toolbar> \n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\typee\typee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TypeePage);
    return TypeePage;
}());

//# sourceMappingURL=typee.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TostServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TostServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TostServiceProvider = (function () {
    function TostServiceProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        console.log('Hello TostServiceProvider Provider');
    }
    TostServiceProvider.prototype.presentToast = function (taxt) {
        var toast = this.toastCtrl.create({
            message: taxt,
            duration: 3000
        });
        toast.present();
    };
    TostServiceProvider.prototype.showToastWithCloseButton = function (messages) {
        var toast = this.toastCtrl.create({
            message: messages,
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    TostServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
    ], TostServiceProvider);
    return TostServiceProvider;
}());

//# sourceMappingURL=tost-service.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/status/status.module": [
		387,
		2
	],
	"../pages/type/type.module": [
		388,
		1
	],
	"../pages/typee/typee.module": [
		389,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixunPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FixunPage = (function () {
    function FixunPage(fire, navCtrl, db, loadingCtrl, Tost, popoverCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.persons = db.list('/report');
        this.persons.subscribe(function (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (i === 0 || typeof _this.myUnFixList === "undefined") {
                    if (obj[i].status === "ยังไม่ได้แก้ไข") {
                        _this.myUnFixList = [{
                                category: obj[i].category,
                                comment: obj[i].comment,
                                lat: obj[i].lat,
                                lng: obj[i].lng,
                                status: obj[i].status,
                                topics: obj[i].topics,
                                email_unfix: obj[i].email_unfix,
                                image: obj[i].image,
                                myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                            }];
                    }
                }
                else {
                    if (obj[i].status === "ยังไม่ได้แก้ไข") {
                        _this.myUnFixList.push({
                            category: obj[i].category,
                            comment: obj[i].comment,
                            lat: obj[i].lat,
                            lng: obj[i].lng,
                            status: obj[i].status,
                            topics: obj[i].topics,
                            email_unfix: obj[i].email_unfix,
                            image: obj[i].image,
                            myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                        });
                    }
                }
            }
        });
    }
    FixunPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fixun',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\fixun\fixun.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>ยังไม่ได้แก้ไข</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of myUnFixList"> \n          \n          <ion-item>\n              <ion-note>\n                  <!-- ผู้รายงานปัญหา : {{person1.email}} -->\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>\n             \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.myDate}}</p>\n               <h3>สถานะ :  {{person1.status}}</h3>\n               <h3>ผู้เปลี่ยนสถานะ : {{person1.email_unfix}}</h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />\n                \n          </ion-item>\n\n        </ion-item-sliding>\n       \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\fixun\fixun.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], FixunPage);
    return FixunPage;
}());

//# sourceMappingURL=fixun.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FixingPage = (function () {
    function FixingPage(fire, navCtrl, db, loadingCtrl, Tost, popoverCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.persons = db.list('/report');
        this.persons.subscribe(function (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (i === 0 || typeof _this.myUnFixList === "undefined") {
                    if (obj[i].status === "กำลังแก้ไข") {
                        _this.myUnFixList = [{
                                category: obj[i].category,
                                comment: obj[i].comment,
                                lat: obj[i].lat,
                                lng: obj[i].lng,
                                status: obj[i].status,
                                topics: obj[i].topics,
                                email_fixing: obj[i].email_fixing,
                                image: obj[i].image,
                                myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                            }];
                    }
                }
                else {
                    if (obj[i].status === "กำลังแก้ไข") {
                        _this.myUnFixList.push({
                            category: obj[i].category,
                            comment: obj[i].comment,
                            lat: obj[i].lat,
                            lng: obj[i].lng,
                            status: obj[i].status,
                            topics: obj[i].topics,
                            email_fixing: obj[i].email_fixing,
                            image: obj[i].image,
                            myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                        });
                    }
                }
            }
        });
        /*"ยังไม่ได้แก้ไข" "กำลังแก้ไข" "แก้ไขเรียบร้อยแล้ว"*/
    }
    FixingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fixing',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\fixing\fixing.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>กำลังแก้ไข</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of myUnFixList"> \n          \n          <ion-item>\n              <ion-note>\n                  <!-- ผู้รายงานปัญหา : {{person1.email}} -->\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>\n             \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.myDate}}</p>\n               <h3>สถานะ :  {{person1.status}}</h3>\n               <h3>ผู้เปลี่ยนสถานะ : {{person1.email_fixing}}</h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />\n            <!--   <p>lat :   {{person1.lat}}</p>\n               <p>lng :   {{person1.lng}}</p>-->     \n          </ion-item>\n      \n      \n     \n        </ion-item-sliding>\n       \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\fixing\fixing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], FixingPage);
    return FixingPage;
}());

//# sourceMappingURL=fixing.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FixedPage = (function () {
    function FixedPage(fire, navCtrl, db, loadingCtrl, Tost, popoverCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.persons = db.list('/report');
        this.persons.subscribe(function (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (i === 0 || typeof _this.myUnFixList === "undefined") {
                    if (obj[i].status === "แก้ไขเรียบร้อยแล้ว") {
                        _this.myUnFixList = [{
                                category: obj[i].category,
                                comment: obj[i].comment,
                                lat: obj[i].lat,
                                lng: obj[i].lng,
                                status: obj[i].status,
                                topics: obj[i].topics,
                                email_unfix: obj[i].email_unfix,
                                email_fixing: obj[i].email_fixing,
                                email_fixed: obj[i].email_fixed,
                                image: obj[i].image,
                                myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                            }];
                    }
                }
                else {
                    if (obj[i].status === "แก้ไขเรียบร้อยแล้ว") {
                        _this.myUnFixList.push({
                            category: obj[i].category,
                            comment: obj[i].comment,
                            lat: obj[i].lat,
                            lng: obj[i].lng,
                            status: obj[i].status,
                            topics: obj[i].topics,
                            email_unfix: obj[i].email_unfix,
                            email_fixing: obj[i].email_fixing,
                            email_fixed: obj[i].email_fixed,
                            image: obj[i].image,
                            myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                        });
                    }
                }
            }
        });
        /*"ยังไม่ได้แก้ไข" "กำลังแก้ไข" "แก้ไขเรียบร้อยแล้ว"*/
    }
    FixedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fixed',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\fixed\fixed.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>แก้ไขเรียบร้อยแล้ว</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item-sliding *ngFor="let person1 of myUnFixList"> \n        \n        <ion-item>\n            <ion-note>\n                <!-- ผู้รายงานปัญหา : {{person1.email}} -->\n              <!-- ID : {{person1.$key}}-->\n             </ion-note>\n           \n           <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n            <p>หัวข้อ :  {{person1.topics}}\n             <p>ความคิดเห็น :   {{person1.comment}}</p>\n             <p>วันที่ :   {{person1.myDate}}</p>\n             <h3>สถานะ :  {{person1.status}}</h3>\n             <h3>ผู้รายงานปัญหา : {{person1.email_unfix}}</h3>\n             <h3>ผู้เปลี่ยนสถานะกำลังแก้ไข : {{person1.email_fixing}}</h3>\n             <h3>ผู้เปลี่ยนสถานะแก้ไขแล้ว :  {{person1.email_fixed}}</h3>\n             <img [src]="person1.image" style="width: 100%; height: auto;" />\n\n          <!--    email_fixed  -->     \n        </ion-item>\n    \n    \n   \n      </ion-item-sliding>\n     \n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\fixed\fixed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], FixedPage);
    return FixedPage;
}());

//# sourceMappingURL=fixed.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LightPage = (function () {
    function LightPage(fire, navCtrl, db, loadingCtrl, Tost, popoverCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.persons = db.list('/report');
        this.persons.subscribe(function (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (i === 0 || typeof _this.Light === "undefined") {
                    if (obj[i].category === "ไฟฟ้าและแสงสว่างภายนอกอาคาร") {
                        _this.Light = [{
                                category: obj[i].category,
                                comment: obj[i].comment,
                                lat: obj[i].lat,
                                lng: obj[i].lng,
                                status: obj[i].status,
                                topics: obj[i].topics,
                                email_fixing: obj[i].email_fixing,
                                image: obj[i].image,
                                myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                            }];
                    }
                }
                else {
                    if (obj[i].category === "ไฟฟ้าและแสงสว่างภายนอกอาคาร") {
                        _this.Light.push({
                            category: obj[i].category,
                            comment: obj[i].comment,
                            lat: obj[i].lat,
                            lng: obj[i].lng,
                            status: obj[i].status,
                            topics: obj[i].topics,
                            email_fixing: obj[i].email_fixing,
                            image: obj[i].image,
                            myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                        });
                    }
                }
            }
        });
        /*"garbage()">ขยะ
      "light()">ไฟฟ้าและแสงสว่างภายนอกอาคาร
      ="road()">ถนน
      ="water()">ระบายน้ำและปะปา
    ="tree()">สวน
      ="other()">อื่นๆ*/
    }
    LightPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-light',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\light\light.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>ไฟฟ้าและแสงสว่างภายนอกอาคาร</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of Light"> \n          \n          <ion-item>\n              <ion-note>\n                  <!-- ผู้รายงานปัญหา : {{person1.email}} -->\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>            \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.myDate}}</p>\n               <h3>สถานะ :  {{person1.status}}</h3>\n               <h3>ผู้เปลี่ยนสถานะ : {{person1.email_fixing}}</h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />               \n          </ion-item>   \n        </ion-item-sliding>      \n      </ion-list>\n</ion-content>'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\light\light.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], LightPage);
    return LightPage;
}());

//# sourceMappingURL=light.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RoadPage = (function () {
    function RoadPage(fire, navCtrl, db, loadingCtrl, Tost, popoverCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.persons = db.list('/report');
        this.persons.subscribe(function (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (i === 0 || typeof _this.Road === "undefined") {
                    if (obj[i].category === "ถนน") {
                        _this.Road = [{
                                category: obj[i].category,
                                comment: obj[i].comment,
                                lat: obj[i].lat,
                                lng: obj[i].lng,
                                status: obj[i].status,
                                topics: obj[i].topics,
                                email_fixing: obj[i].email_fixing,
                                image: obj[i].image,
                                myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                            }];
                    }
                }
                else {
                    if (obj[i].category === "ถนน") {
                        _this.Road.push({
                            category: obj[i].category,
                            comment: obj[i].comment,
                            lat: obj[i].lat,
                            lng: obj[i].lng,
                            status: obj[i].status,
                            topics: obj[i].topics,
                            email_fixing: obj[i].email_fixing,
                            image: obj[i].image,
                            myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                        });
                    }
                }
            }
        });
        /*"garbage()">ขยะ
      "light()">ไฟฟ้าและแสงสว่างภายนอกอาคาร
      ="road()">ถนน
      ="water()">ระบายน้ำและปะปา
    ="tree()">สวน
      ="other()">อื่นๆ*/
    }
    RoadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-road',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\road\road.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>ถนน</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of Road"> \n          \n          <ion-item>\n              <ion-note>\n                  <!-- ผู้รายงานปัญหา : {{person1.email}} -->\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>            \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.myDate}}</p>\n               <h3>สถานะ :  {{person1.status}}</h3>\n               <h3>ผู้เปลี่ยนสถานะ : {{person1.email_fixing}}</h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />               \n          </ion-item>   \n        </ion-item-sliding>      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\road\road.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], RoadPage);
    return RoadPage;
}());

//# sourceMappingURL=road.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WaterPage = (function () {
    function WaterPage(fire, navCtrl, db, loadingCtrl, Tost, popoverCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.persons = db.list('/report');
        this.persons.subscribe(function (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (i === 0 || typeof _this.Water === "undefined") {
                    if (obj[i].category === "ระบายน้ำและปะปา") {
                        _this.Water = [{
                                category: obj[i].category,
                                comment: obj[i].comment,
                                lat: obj[i].lat,
                                lng: obj[i].lng,
                                status: obj[i].status,
                                topics: obj[i].topics,
                                email_fixing: obj[i].email_fixing,
                                image: obj[i].image,
                                myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                            }];
                    }
                }
                else {
                    if (obj[i].category === "ระบายน้ำและปะปา") {
                        _this.Water.push({
                            category: obj[i].category,
                            comment: obj[i].comment,
                            lat: obj[i].lat,
                            lng: obj[i].lng,
                            status: obj[i].status,
                            topics: obj[i].topics,
                            email_fixing: obj[i].email_fixing,
                            image: obj[i].image,
                            myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                        });
                    }
                }
            }
        });
    }
    WaterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-water',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\water\water.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>ระบายน้ำและปะปา</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of Water"> \n          \n          <ion-item>\n              <ion-note>\n                  <!-- ผู้รายงานปัญหา : {{person1.email}} -->\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>            \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.myDate}}</p>\n               <h3>สถานะ :  {{person1.status}}</h3>\n               <h3>ผู้เปลี่ยนสถานะ : {{person1.email_fixing}}</h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />               \n          </ion-item>   \n        </ion-item-sliding>      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\water\water.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], WaterPage);
    return WaterPage;
}());

//# sourceMappingURL=water.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TreePage = (function () {
    function TreePage(fire, navCtrl, db, loadingCtrl, Tost, popoverCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.persons = db.list('/report');
        this.persons.subscribe(function (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (i === 0 || typeof _this.Tree === "undefined") {
                    if (obj[i].category === "สวน") {
                        _this.Tree = [{
                                category: obj[i].category,
                                comment: obj[i].comment,
                                lat: obj[i].lat,
                                lng: obj[i].lng,
                                status: obj[i].status,
                                topics: obj[i].topics,
                                email_fixing: obj[i].email_fixing,
                                image: obj[i].image,
                                myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                            }];
                    }
                }
                else {
                    if (obj[i].category === "สวน") {
                        _this.Tree.push({
                            category: obj[i].category,
                            comment: obj[i].comment,
                            lat: obj[i].lat,
                            lng: obj[i].lng,
                            status: obj[i].status,
                            topics: obj[i].topics,
                            email_fixing: obj[i].email_fixing,
                            image: obj[i].image,
                            myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                        });
                    }
                }
            }
        });
    }
    TreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tree',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\tree\tree.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>สวน</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of Tree"> \n          \n          <ion-item>\n              <ion-note>\n                  <!-- ผู้รายงานปัญหา : {{person1.email}} -->\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>            \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.myDate}}</p>\n               <h3>สถานะ :  {{person1.status}}</h3>\n               <h3>ผู้เปลี่ยนสถานะ : {{person1.email_fixing}}</h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />               \n          </ion-item>   \n        </ion-item-sliding>      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\tree\tree.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], TreePage);
    return TreePage;
}());

//# sourceMappingURL=tree.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OtherPage = (function () {
    function OtherPage(fire, navCtrl, db, loadingCtrl, Tost, popoverCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.persons = db.list('/report');
        this.persons.subscribe(function (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (i === 0 || typeof _this.Other === "undefined") {
                    if (obj[i].category === "อื่นๆ") {
                        _this.Other = [{
                                category: obj[i].category,
                                comment: obj[i].comment,
                                lat: obj[i].lat,
                                lng: obj[i].lng,
                                status: obj[i].status,
                                topics: obj[i].topics,
                                email_fixing: obj[i].email_fixing,
                                image: obj[i].image,
                                myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                            }];
                    }
                }
                else {
                    if (obj[i].category === "อื่นๆ") {
                        _this.Other.push({
                            category: obj[i].category,
                            comment: obj[i].comment,
                            lat: obj[i].lat,
                            lng: obj[i].lng,
                            status: obj[i].status,
                            topics: obj[i].topics,
                            email_fixing: obj[i].email_fixing,
                            image: obj[i].image,
                            myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                        });
                    }
                }
            }
        });
    }
    OtherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-other',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\other\other.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>อื่นๆ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of Other"> \n          \n          <ion-item>\n              <ion-note>\n                  <!-- ผู้รายงานปัญหา : {{person1.email}} -->\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>            \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.myDate}}</p>\n               <h3>สถานะ :  {{person1.status}}</h3>\n               <h3>ผู้เปลี่ยนสถานะ : {{person1.email_fixing}}</h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />               \n          </ion-item>   \n        </ion-item-sliding>      \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\other\other.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], OtherPage);
    return OtherPage;
}());

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homeshow_homeshow__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showre_showre__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__homeshow_homeshow__["a" /* HomeshowPage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__showre_showre__["a" /* ShowrePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n\n  <ion-tab [root]="tab4Root" tabTitle="Place" tabIcon="ios-pin"></ion-tab>\n\n <!-- <ion-tab [root]="tab1Root" tabTitle="Profile" tabIcon="ios-people"></ion-tab>-->\n\n\n\n <!-- \n\n<ion-tab [root]="tab1Root" tabTitle="Show Report" tabIcon="md-log-in"></ion-tab>\n\n --> \n\n</ion-tabs>'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tost_service_tost_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_person_person__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutPage = (function () {
    function AboutPage(fire, navCtrl, db, Tost, personProvider) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.Tost = Tost;
        this.personProvider = personProvider;
        this.person = { username: "", name: "", lname: "" };
        fire.auth.onAuthStateChanged(function (user) {
            if (!user) {
                navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
    }
    AboutPage.prototype.createPerson = function (username, name, lname) {
        var _this = this;
        this.person = {
            username: username,
            name: name,
            lname: lname
        };
        try {
            this.personProvider.pushObject(this.person).then(function (res) {
                _this.Tost.showToastWithCloseButton("บันทึกข้อมูลสำเร็จ");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            });
        }
        catch (error) {
            this.Tost.showToastWithCloseButton(error);
        }
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>\n\n      Sign up\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n      </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>First name</ion-label>\n\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Last name</ion-label>\n\n    <ion-input type="text" [(ngModel)]="lname"></ion-input>\n\n  </ion-item>\n\n  \n\n  \n\n\n\n  <!-- <ion-item>\n\n    <ion-label floating>Age</ion-label>\n\n    <ion-input type="number" [(ngModel)]="age"></ion-input>\n\n  </ion-item>-->\n\n\n\n <ion-item>\n\n   <button ion-button large color="danger" (click)="createPerson(username,name,lname)">\n\n        <ion-icon name="ios-add-circle"></ion-icon>\n\n         Register</button>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_person_person__["a" /* PersonProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_person_person__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(fire, navCtrl, db, personProvider, http) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.personProvider = personProvider;
        this.http = http;
        this.Persons = db.list('/people');
        fire.auth.onAuthStateChanged(function (user) {
            if (!user) {
                navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
    }
    HomePage.prototype.findAllPersons = function () {
        return this.db.object('people').map(__WEBPACK_IMPORTED_MODULE_7__user_user__["a" /* user */].fromJsonListUser);
    };
    HomePage.prototype.deletePerson = function (id) {
        this.Persons.remove(id);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>Profile</ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button icon-only (click)="gotoProfile()">\n\n         <ion-icon ios="ios-person" md="md-person"></ion-icon>\n\n      </button>\n\n    </ion-buttons>-->\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n    <ion-list>\n\n  <ion-item-sliding *ngFor="let person of Persons | async">\n\n    <ion-item>\n\n      \n\n      <ion-thumbnail item-start>\n\n           <img src="assets/img/person.png">\n\n\n\n      </ion-thumbnail>\n\n\n\n         <h2> Username : {{person.username}}</h2>\n\n        <p>Name :  {{person.name}}  {{person.lname}} \n\n         </p>\n\n        <ion-note>\n\n         User ID : {{person.$key}}\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n     <ion-item-options side="right">\n\n      <button ion-button color="primary" (click)="editPerson(person.$key,person.username,person.name,person.lname)">\n\n         <ion-icon ios="ios-create" md="md-create"></ion-icon>\n\n        Edit\n\n      </button>\n\n      <!-- <button ion-button color="danger" (click)="deletePerson(person.$key)">\n\n        <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n        Delete\n\n      </button>-->\n\n     \n\n    </ion-item-options>\n\n   \n\n\n\n  </ion-item-sliding>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_person_person__["a" /* PersonProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_report__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homeshow_homeshow__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editshowre_editshowre__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__showreportlist_showreportlist__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__status_status__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typee_typee__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__showre_showre__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editsta_editsta__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ShowlistPage = (function () {
    function ShowlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShowlistPage.prototype.reportnow = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__report_report__["a" /* ReportPage */]);
    };
    ShowlistPage.prototype.problem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__homeshow_homeshow__["a" /* HomeshowPage */]);
    };
    ShowlistPage.prototype.problemList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__showreportlist_showreportlist__["a" /* ShowreportlistPage */]);
    };
    ShowlistPage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editshowre_editshowre__["a" /* EditshowrePage */]);
    };
    ShowlistPage.prototype.status = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__status_status__["a" /* StatusPage */]);
    };
    ShowlistPage.prototype.type = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__typee_typee__["a" /* TypeePage */]);
    };
    ShowlistPage.prototype.statusType = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__showre_showre__["a" /* ShowrePage */]);
    };
    ShowlistPage.prototype.editstatus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__editsta_editsta__["a" /* EditstaPage */]);
    };
    ShowlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showlist',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\showlist\showlist.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>PINFIXUP</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div text-center align-items-center>\n      <button ion-button block color="light" (click)="reportnow()">รายงานปัญหา</button>\n      <button ion-button block color="light" (click)="problem()">ดูปัญหาบน Maps</button>\n      <button ion-button block color="light" (click)="problemList()">ดูรายงานปัญหา</button>\n      <button ion-button block color="light" (click)="edit()">แก้ไขข้อมูล</button>\n      <button ion-button block color="light" (click)="editstatus()">แก้ไขสถานะ</button>\n      <button ion-button block color="light" (click)="status()">ดูสถานะ</button>\n      <button ion-button block color="light" (click)="type()">ดูประเภท</button>\n      <button ion-button block color="light" (click)="statusType()">ดูสถานะและประเภท</button>\n    </div> \n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\showlist\showlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ShowlistPage);
    return ShowlistPage;
}());

//# sourceMappingURL=showlist.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return person; });
var person = (function () {
    function person($Key, email, id, category, topics, comment, MyDate, status, lat, lng) {
        this.$Key = $Key;
        this.email = email;
        this.id = id;
        this.category = category;
        this.topics = topics;
        this.comment = comment;
        this.MyDate = MyDate;
        this.status = status;
        this.lat = lat;
        this.lng = lng;
    }
    person.fromJsonList = function (array) {
        return array.map(person.fromJson);
    };
    person.fromJson = function (_a) {
        var $key = _a.$key, id = _a.id, category = _a.category, topics = _a.topics, comment = _a.comment, MyDate = _a.MyDate, lat = _a.lat, lng = _a.lng, status = _a.status, email = _a.email;
        return new person($key, id, email, category, topics, comment, MyDate, lat, lng, status);
    };
    return person;
}());

//# sourceMappingURL=person.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusedPage = (function () {
    function StatusedPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.person1 = {
            id: '',
            status: '',
            MyData: this.MyData
        };
        this.editdata = db.list('/report');
        this.person1.id = this.navParams.get('key');
        this.person1.status = this.navParams.get('status');
        this.person1.MyData = this.navParams.get('MyData');
        this.currentFixText = this.person1.status;
        this.Date = new Date();
        this.getMyData();
    }
    StatusedPage.prototype.editStatus = function () {
        var _this = this;
        try {
            var obj = void 0;
            console.log('aaaaaaaaaaa  ');
            console.log('this.currentfixtext', this.currentFixText);
            switch (this.currentFixText) {
                case "ยังไม่ได้แก้ไข": {
                    obj = {
                        email_unfix: sessionStorage.getItem("email"),
                        status: this.person1.status
                    };
                    break;
                }
                case "กำลังแก้ไข": {
                    obj = {
                        email_fixing: sessionStorage.getItem("email"),
                        status: this.person1.status
                    };
                    break;
                }
                case "แก้ไขเรียบร้อยแล้ว": {
                    obj = {
                        email_fixed: sessionStorage.getItem("email"),
                        status: this.person1.status
                    };
                    break;
                }
            }
            console.log('aaaaaaaaaaa  ', obj);
            this.editdata.update(this.person1.id, obj).then(function (uPerson) { _this.navCtrl.pop(); });
        }
        catch (error) {
            console.log(error);
        }
    };
    StatusedPage.prototype.getMyData = function () {
        var dateObj = new Date();
        var date = dateObj.getDate().toString();
        var month = dateObj.getMonth().toString();
        var year = dateObj.getFullYear().toString();
        this.MyData = date + '/' + month + '/' + year;
    };
    StatusedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statused',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\statused\statused.html"*/'<ion-header>\n\n  <ion-navbar  color= "dark">\n    <ion-title>Edit Status</ion-title>\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n\n\n        <h2>Edit Status</h2>\n        <ion-item>\n            <ion-label>วันที่ :{{MyData}}</ion-label>\n          </ion-item>\n        <ion-item>\n          <ion-label floating>แก้ไขสถานะ</ion-label>\n\n          <ion-select *ngIf="currentFixText==\'\'" [(ngModel)]="person1.status" >\n              <ion-option value="ยังไม่ได้แก้ไข" checked="true">ยังไม่ได้แก้ไข</ion-option>\n              <ion-option value="กำลังแก้ไข">กำลังแก้ไข</ion-option>\n              <ion-option value="แก้ไขเรียบร้อยแล้ว">แก้ไขเรียบร้อยแล้ว</ion-option>         \n            </ion-select>\n\n          <ion-select *ngIf="currentFixText==\'ยังไม่ได้แก้ไข\'" [(ngModel)]="person1.status" >\n              <ion-option value="ยังไม่ได้แก้ไข" checked="true">ยังไม่ได้แก้ไข</ion-option>\n              <ion-option value="กำลังแก้ไข">กำลังแก้ไข</ion-option>\n              <ion-option value="แก้ไขเรียบร้อยแล้ว">แก้ไขเรียบร้อยแล้ว</ion-option>         \n            </ion-select>\n\n         \n          <ion-select *ngIf="currentFixText==\'กำลังแก้ไข\'" [(ngModel)]="person1.status" >\n            <ion-option value="กำลังแก้ไข" checked="true">กำลังแก้ไข</ion-option>\n            <ion-option value="แก้ไขเรียบร้อยแล้ว">แก้ไขเรียบร้อยแล้ว</ion-option>         \n          </ion-select>\n\n          <ion-select *ngIf="currentFixText==\'แก้ไขเรียบร้อยแล้ว\'" [(ngModel)]="person1.status" >\n            <ion-option value="แก้ไขเรียบร้อยแล้ว" checked="true">แก้ไขเรียบร้อยแล้ว</ion-option>         \n          </ion-select>\n        </ion-item>\n        \n\n        <ion-item>\n        \n            <button ion-button color="secondary" (click)="editStatus()">\n                <ion-icon name="ios-build-outline"></ion-icon>\n               ยืนยัน</button>\n        </ion-item>\n        </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\statused\statused.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], StatusedPage);
    return StatusedPage;
}());

//# sourceMappingURL=statused.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditdatashowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { reported } from '../reported/reported';
var EditdatashowPage = (function () {
    function EditdatashowPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.person1 = {
            id: '',
            category: '',
            topics: '',
            comment: ''
        };
        this.editdata = db.list('/report');
        this.person1.id = this.navParams.get('key');
        this.person1.category = this.navParams.get('category');
        this.person1.topics = this.navParams.get('topics');
        this.person1.comment = this.navParams.get('comment');
    }
    EditdatashowPage.prototype.updateData = function (id, category, topics, comment) {
        var _this = this;
        this.editdata.update(this.person1.id, {
            category: this.person1.category,
            topics: this.person1.topics,
            comment: this.person1.comment
        }).then(function (uPerson) { _this.navCtrl.pop(); }, function (error) { console.log(error); });
    };
    EditdatashowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editdatashow',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\editdatashow\editdatashow.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>แก้ไขข้อมูล</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n\n        \n      <ion-item>\n        <ion-label floating>ประเภทของปัญหา</ion-label>\n        <ion-select [(ngModel)]="person1.category" >\n          <ion-option value="ขยะ">ขยะ</ion-option>\n          <ion-option value="ไฟฟ้าและแสงสว่างภายนอกอาคาร">ไฟฟ้าและแสงสว่างภายนอกอาคาร</ion-option>\n          <ion-option value="ถนน">ถนน</ion-option>\n          <ion-option value="ระบายน้ำและปะปา">ระบายน้ำและปะปา</ion-option>\n          <ion-option value="สวน">สวน</ion-option>\n          <ion-option value="อื่นๆ">อื่นๆ</ion-option>\n        </ion-select>\n      </ion-item>\n\n         <ion-item>\n          <ion-label floating>หัวข้อ</ion-label>\n          <ion-input type="text" [(ngModel)]="person1.topics"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>ความคิดเห็น</ion-label>\n          <ion-input type="text" [(ngModel)]="person1.comment"></ion-input>\n        </ion-item>\n         \n      \n         <ion-item>\n         \n            <button ion-button color="secondary" (click)="updateData(person1.id,person1.category,person1.topics,person1.comment)">\n                <ion-icon name="ios-build-outline"></ion-icon>\n               ยืนยัน</button>\n        </ion-item>\n      </ion-list>\n\n     \n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\editdatashow\editdatashow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], EditdatashowPage);
    return EditdatashowPage;
}());

//# sourceMappingURL=editdatashow.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowreportlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowreportlistPage = (function () {
    function ShowreportlistPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.persons = db.list('/report');
    }
    ShowreportlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showreportlist',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\showreportlist\showreportlist.html"*/'<ion-header>\n\n  <ion-navbar color= "dark">\n    <ion-title>ดูรายงานปัญหา</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of persons | async"> \n          \n          <ion-item>\n              <ion-note>\n                  ผู้รายงานปัญหา : {{person1.email}}\n                 \n               </ion-note>\n             \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.MyData}}</p>\n               <h3>สถานะ : {{person1.status}} </h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />   \n          </ion-item>\n        </ion-item-sliding>\n       \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\showreportlist\showreportlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], ShowreportlistPage);
    return ShowreportlistPage;
}());

//# sourceMappingURL=showreportlist.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfilePage = (function () {
    function UserProfilePage(storage, navCtrl, navParams) {
        //    this.getInfo.name  = this.navParams.get('name')
        //    this.getInfo.userPhoto  = this.navParams.get('userPhoto')
        //    this.getInfo.email  = this.navParams.get('email')
        //    this.getInfo.loggedin  = this.navParams.get('loggedin')
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getInfo = {
            name: '',
            userPhoto: '',
            email: '',
            loggedin: false
        };
        this.storage.get('name').then(function (val) {
            _this.getInfo.name = val;
        });
        this.storage.get('userPhoto').then(function (val) {
            _this.getInfo.userPhoto = val;
        });
        this.storage.get('email').then(function (val) {
            _this.getInfo.email = val;
        });
        this.storage.get('loggedin').then(function (val) {
            _this.getInfo.loggedin = val;
        });
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        //   this.storage.get('userPhoto').then((val) => {
        //    console.log('Your userPhoto is', val);
        //  });
        //   this.storage.get('email').then((val) => {
        //    console.log('Your email is', val);
        //  });
        //   this.storage.get('loggedin').then((val) => {
        //    console.log('Your loggedin is', val);
        //  });
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\user-profile\user-profile.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>userProfile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n  <img src="{{getInfo.userPhoto}}" style="width:100px"/>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n     {{getInfo.name}}\n\n      </ion-card-title>\n\n    <p>\n\n      {{getInfo.email}}\n\n    </p>\n\n        <p>\n\n    connected :  {{getInfo.loggedin}}\n\n    </p>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TypePage = (function () {
    function TypePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TypePage');
    };
    TypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-type',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\type\type.html"*/'<!--\n  Generated template for the TypePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>type</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\type\type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TypePage);
    return TypePage;
}());

//# sourceMappingURL=type.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(282);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_homeshow_homeshow__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_showre_showre__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_report_report__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_editshowre_editshowre__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_showmaps_showmaps__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_showstatus_showstatus__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_editsta_editsta__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_popover_popover__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_editdatashow_editdatashow__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_statused_statused__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_fixun_fixun__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_fixing_fixing__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_fixed_fixed__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_garbage_garbage__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_light_light__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_road_road__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_water_water__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_tree_tree__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_other_other__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_popover_type_popover_type__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_popoveredit_popoveredit__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_showlist_showlist__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_type_type__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_showreportlist_showreportlist__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_status_status__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_typee_typee__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_popover_typee_popover_typee__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_angularfire2__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_report_report__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_tost_service_tost_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_person_person__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Ionic Native






// Ionic Native



































// === Firebase Libary ===



// === Firebase Libary ===
// Provider



// Provider
// import { person } from '../pages/person/person';
var config = {
    apiKey: "AIzaSyCQ_ZJugFnPOFblg8QBBK9z0klYTcaG5CI",
    authDomain: "newpinfixup-1510728379097.firebaseapp.com",
    databaseURL: "https://newpinfixup-1510728379097.firebaseio.com",
    projectId: "newpinfixup-1510728379097",
    storageBucket: "newpinfixup-1510728379097.appspot.com",
    messagingSenderId: "799841448614"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_homeshow_homeshow__["a" /* HomeshowPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_showre_showre__["a" /* ShowrePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editshowre_editshowre__["a" /* EditshowrePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_showmaps_showmaps__["a" /* ShowmapsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_showstatus_showstatus__["a" /* ShowstatusPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_editsta_editsta__["a" /* EditstaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editshowre_editshowre__["a" /* EditshowrePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_editdatashow_editdatashow__["a" /* EditdatashowPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_statused_statused__["a" /* StatusedPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_fixun_fixun__["a" /* FixunPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_fixing_fixing__["a" /* FixingPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_fixed_fixed__["a" /* FixedPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_garbage_garbage__["a" /* GarbagePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_light_light__["a" /* LightPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_road_road__["a" /* RoadPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_water_water__["a" /* WaterPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_tree_tree__["a" /* TreePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_popover_type_popover_type__["a" /* PopoverTypePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_popoveredit_popoveredit__["a" /* PopovereditPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_showlist_showlist__["a" /* ShowlistPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_type_type__["a" /* TypePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_showreportlist_showreportlist__["a" /* ShowreportlistPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_typee_typee__["a" /* TypeePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_popover_typee_popover_typee__["a" /* PopoverTypeePage */]
                // person
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/status/status.module#StatusPageModule', name: 'StatusPage', segment: 'status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/type/type.module#TypePageModule', name: 'TypePage', segment: 'type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/typee/typee.module#TypeePageModule', name: 'TypeePage', segment: 'typee', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_46_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_47_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_48_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_user_profile_user_profile__["a" /* UserProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_homeshow_homeshow__["a" /* HomeshowPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_showre_showre__["a" /* ShowrePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editshowre_editshowre__["a" /* EditshowrePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_showmaps_showmaps__["a" /* ShowmapsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_showstatus_showstatus__["a" /* ShowstatusPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_editsta_editsta__["a" /* EditstaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editshowre_editshowre__["a" /* EditshowrePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_editdatashow_editdatashow__["a" /* EditdatashowPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_statused_statused__["a" /* StatusedPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_fixun_fixun__["a" /* FixunPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_fixing_fixing__["a" /* FixingPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_fixed_fixed__["a" /* FixedPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_garbage_garbage__["a" /* GarbagePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_light_light__["a" /* LightPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_road_road__["a" /* RoadPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_water_water__["a" /* WaterPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_tree_tree__["a" /* TreePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_other_other__["a" /* OtherPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_popover_type_popover_type__["a" /* PopoverTypePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_popoveredit_popoveredit__["a" /* PopovereditPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_showlist_showlist__["a" /* ShowlistPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_type_type__["a" /* TypePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_showreportlist_showreportlist__["a" /* ShowreportlistPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_typee_typee__["a" /* TypeePage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_popover_typee_popover_typee__["a" /* PopoverTypeePage */]
                // person
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_49__providers_report_report__["a" /* ReportProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_person_person__["a" /* PersonProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\testpinfixup\mapP\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return user; });
var user = (function () {
    function user($Key, id, username, name, lname) {
        this.$Key = $Key;
        this.id = id;
        this.username = username;
        this.name = name;
        this.lname = lname;
    }
    user.fromJsonListUser = function (array) {
        return array.map(user.fromJson);
    };
    user.fromJson = function (_a) {
        var $key = _a.$key, id = _a.id, username = _a.username, name = _a.name, lname = _a.lname;
        return new user($key, id, username, name, lname);
    };
    return user;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactPage = (function () {
    function ContactPage(storage, navCtrl, fire) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.fire = fire;
        this.getInfo = {
            name: '',
            userPhoto: '',
            email: '',
            loggedin: false
        };
    }
    ContactPage.prototype.logIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ContactPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    ContactPage.prototype.logOut = function () {
        this.fire.auth.signOut();
    };
    ContactPage.prototype.logInFacebook = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.FacebookAuthProvider()).then(function (res) {
            //  this.navCtrl.push(HomePage);
            console.log(res);
            _this.getInfo.name = res.user.displayName;
            _this.getInfo.userPhoto = res.user.photoURL;
            _this.getInfo.email = res.user.email;
            _this.getInfo.loggedin = true;
            _this.storage.set('name', res.user.displayName);
            _this.storage.set('userPhoto', res.user.photoURL);
            _this.storage.set('email', res.user.email);
            _this.storage.set('loggedin', 'true');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__["a" /* UserProfilePage */]);
        });
    };
    ContactPage.prototype.logInGoogle = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.GoogleAuthProvider()).then(function (res) {
            //              this.navCtrl.push(HomePage);
            console.log(res);
            _this.getInfo.name = res.user.displayName;
            _this.getInfo.userPhoto = res.user.photoURL;
            _this.getInfo.email = res.user.email;
            _this.getInfo.loggedin = true;
            _this.storage.set('name', res.user.displayName);
            _this.storage.set('userPhoto', res.user.photoURL);
            _this.storage.set('email', res.user.email);
            _this.storage.set('loggedin', 'true');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__["a" /* UserProfilePage */]);
            //this.navCtrl.push(UserProfilePage,{
            //    name :  this.getInfo.name   ,
            //    userPhoto : this.getInfo.userPhoto  ,
            //    email :  this.getInfo.email   ,
            //   loggedin : this.getInfo.loggedin
            //
            //        });
        });
    };
    ContactPage.prototype.logInTwitter = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth.TwitterAuthProvider()).then(function (res) {
            //   this.navCtrl.push(HomePage);
            console.log(res);
            _this.getInfo.name = res.user.displayName;
            _this.getInfo.userPhoto = res.user.photoURL;
            _this.getInfo.email = res.user.email;
            _this.getInfo.loggedin = true;
            _this.storage.set('name', res.user.displayName);
            _this.storage.set('userPhoto', res.user.photoURL);
            _this.storage.set('email', res.user.email);
            _this.storage.set('loggedin', 'true');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_profile_user_profile__["a" /* UserProfilePage */]);
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n      \n\n     <ion-item>\n\n        <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n\n     <button ion-button round (click)="logInFacebook()">Login by Facebook</button>\n\n    </ion-item>\n\n      \n\n           <ion-item>\n\n      <ion-icon ios="logo-googleplus" md="logo-googleplus"></ion-icon>\n\n     <button ion-button round (click)="logInGoogle()">Login by Google</button>\n\n    </ion-item>\n\n      \n\n           <ion-item>\n\n  <ion-icon ios="logo-twitter" md="logo-twitter"></ion-icon>\n\n     <button ion-button round (click)="logInTwitter()">Login by Twitter</button>\n\n    </ion-item>\n\n      \n\n     \n\n    <ion-item>\n\n       <ion-icon ios="ios-log-in" md="md-log-in"></ion-icon>\n\n     <button ion-button round (click)="logIn()">Login by Email</button>\n\n    </ion-item>\n\n      <ion-item>\n\n     <ion-icon ios="ios-person-add" md="md-person-add"  color="secondary"></ion-icon>\n\n     <button ion-button round  color="secondary"  (click)="register()">Register</button>\n\n    </ion-item>\n\n      \n\n        <ion-item>\n\n         <ion-icon ios="ios-log-out" md="md-log-out" color="danger" ></ion-icon>\n\n     <button ion-button round color="danger"  (click)="logOut()">Logout</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowmapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editshowre_editshowre__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_report_report__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShowmapsPage = (function () {
    function ShowmapsPage(fire, navCtrl, db, reportProvider) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.reportProvider = reportProvider;
        this.persons = db.list('/report');
        this.reportProvider.getList().subscribe(function (list) {
            console.log("list", list);
            _this.reports = list;
            console.log("this.reports", _this.reports);
        });
    }
    ShowmapsPage.prototype.deletePerson = function (id) {
        this.persons.remove(id);
    };
    ShowmapsPage.prototype.editPerson = function (id, opts, addH, addCom, myDate, lat, lng) {
        // console.log(  id, name,  lname, dept);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editshowre_editshowre__["a" /* EditshowrePage */], {
            key: id,
            opts: opts,
            addH: addH,
            addCom: addCom,
            myDate: myDate,
            lat: lat,
            lng: lng
        });
    };
    ShowmapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showmaps',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\showmaps\showmaps.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>PINFIXUP</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n  <ion-item-sliding *ngFor="let person of persons | async">\n    <ion-item>\n       <h2>ประเภทของปัญหา  : {{person.opts}}</h2>\n        <p>หัวข้อ :  {{person.addH}}\n         <p>ความคิดเห็น :   {{person.addCom}}</p>\n         <p>วันที่ :   {{person.myDate}}</p>\n         <p>lat :   {{person.lat}}</p>\n         <p>lng :   {{person.lng}}</p>\n        <ion-note>\n         ID : {{person.$key}}\n      </ion-note>\n    </ion-item>\n    <!--\n    <ion-item-options side="right">\n      <button ion-button color="primary" (click)="editPerson(person.$key,person.addH,person.addCom)">\n         <ion-icon ios="ios-create" md="md-create"></ion-icon>\n        Edit\n      </button>\n      <button ion-button color="danger" (click)="deletePerson(person.$key)">\n        <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n        Delete\n      </button>\n    </ion-item-options>-->\n  </ion-item-sliding>\n</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\showmaps\showmaps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_4__providers_report_report__["a" /* ReportProvider */]])
    ], ShowmapsPage);
    return ShowmapsPage;
}());

//# sourceMappingURL=showmaps.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowstatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reported_reported__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowstatusPage = (function () {
    function ShowstatusPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.statuss = db.list('/reported');
    }
    ShowstatusPage.prototype.findAllPersons = function () {
        return this.db.list('reported')
            .map(__WEBPACK_IMPORTED_MODULE_3__reported_reported__["a" /* reported */].fromJsonListstatus);
        // console.log(this.findAllPersons.toString);
    };
    ShowstatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showstatus',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\showstatus\showstatus.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>PINFIXUP</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let statused of status | async"> \n          \n          <ion-item>\n              <ion-note>\n                  ผู้รายงานปัญหา : {{statused.userid}}\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>\n             \n             <h2>ประเภทของปัญหา  : {{statused.opts}}</h2>\n              <p>หัวข้อ :  {{statused.addH}}\n               <p>ความคิดเห็น :   {{statused.addCom}}</p>\n               <p>วันที่ :   {{statused.myDate}}</p>\n              <p>สถานะ : {{statused.statuss}}</p>\n            <!--   <p>lat :   {{person1.lat}}</p>\n               <p>lng :   {{person1.lng}}</p>-->     \n          </ion-item>\n        </ion-item-sliding>\n \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\showstatus\showstatus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], ShowstatusPage);
    return ShowstatusPage;
}());

//# sourceMappingURL=showstatus.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reported; });
var reported = (function () {
    function reported($Key, email, category, topics, comment, MyData, status) {
        this.$Key = $Key;
        this.email = email;
        this.category = category;
        this.topics = topics;
        this.comment = comment;
        this.MyData = MyData;
        this.status = status;
    }
    reported.fromJsonListstatus = function (array) {
        return array.map(reported.fromJsonStatus);
    };
    reported.fromJsonStatus = function (_a) {
        var $key = _a.$key, email = _a.email, category = _a.category, topics = _a.topics, comment = _a.comment, MyData = _a.MyData, status = _a.status;
        return new reported($key, email, category, topics, comment, MyData, status);
    };
    return reported;
}());

//# sourceMappingURL=reported.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editsta_editsta__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverPage = (function () {
    function PopoverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverPage.prototype.EditSta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editsta_editsta__["a" /* EditstaPage */]);
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ template: "\n<ion-list>\n  <button ion-item (click)=\"EditSta()\">\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30</button>\n \n</ion-list>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__garbage_garbage__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverTypePage = (function () {
    function PopoverTypePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverTypePage.prototype.garbage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__garbage_garbage__["a" /* GarbagePage */]);
    };
    PopoverTypePage.prototype.light = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__garbage_garbage__["a" /* GarbagePage */]);
    };
    PopoverTypePage.prototype.road = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__garbage_garbage__["a" /* GarbagePage */]);
    };
    PopoverTypePage.prototype.water = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__garbage_garbage__["a" /* GarbagePage */]);
    };
    PopoverTypePage.prototype.tree = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__garbage_garbage__["a" /* GarbagePage */]);
    };
    PopoverTypePage.prototype.other = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__garbage_garbage__["a" /* GarbagePage */]);
    };
    PopoverTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ template: "\n<ion-list>\n  <button ion-item (click)=\"garbage()\">\u0E02\u0E22\u0E30</button>\n  <button ion-item (click)=\"light()\">\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01\u0E2D\u0E32\u0E04\u0E32\u0E23</button>\n  <button ion-item (click)=\"road()\">\u0E16\u0E19\u0E19</button>\n  <button ion-item (click)=\"water()\">\u0E23\u0E30\u0E1A\u0E32\u0E22\u0E19\u0E49\u0E33\u0E41\u0E25\u0E30\u0E1B\u0E30\u0E1B\u0E32</button>\n  <button ion-item (click)=\"tree()\">\u0E2A\u0E27\u0E19</button>\n  <button ion-item (click)=\"other()\">\u0E2D\u0E37\u0E48\u0E19\u0E46</button>\n</ion-list>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PopoverTypePage);
    return PopoverTypePage;
}());

//# sourceMappingURL=popover-type.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopovereditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editshowre_editshowre__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopovereditPage = (function () {
    function PopovereditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = { user: sessionStorage.getItem("email") };
    }
    PopovereditPage.prototype.Edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__editshowre_editshowre__["a" /* EditshowrePage */]);
    };
    PopovereditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ template: "\n<ion-list>\n  <button ion-item  *ngIf=\"login.user!=null\" (click)=\"Edit()\">\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</button>\n</ion-list>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PopovereditPage);
    return PopovereditPage;
}());

//# sourceMappingURL=popoveredit.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverTypeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__garbage_garbage__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverTypeePage = (function () {
    function PopoverTypeePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverTypeePage.prototype.garbage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__garbage_garbage__["a" /* GarbagePage */]);
    };
    PopoverTypeePage.prototype.light = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__garbage_garbage__["a" /* GarbagePage */]);
    };
    PopoverTypeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ template: "\n<ion-list>\n  <button ion-item (click)=\"garbage()\">\u0E02\u0E22\u0E30</button>\n  <button ion-item (click)=\"light()\">\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01\u0E2D\u0E32\u0E04\u0E32\u0E23</button>\n  <button ion-item (click)=\"road()\">\u0E16\u0E19\u0E19</button>\n  <button ion-item (click)=\"water()\">\u0E23\u0E30\u0E1A\u0E32\u0E22\u0E19\u0E49\u0E33\u0E41\u0E25\u0E30\u0E1B\u0E30\u0E1B\u0E32</button>\n  <button ion-item (click)=\"tree()\">\u0E2A\u0E27\u0E19</button>\n  <button ion-item (click)=\"other()\">\u0E2D\u0E37\u0E48\u0E19\u0E46</button>\n</ion-list>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PopoverTypeePage);
    return PopoverTypeePage;
}());

//# sourceMappingURL=popover-typee.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__showlist_showlist__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, app, fire, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.fire = fire;
        this.loadingCtrl = loadingCtrl;
        this.email = '';
        this.password = '';
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.myLogIn = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            console.log(user);
            console.log(_this.email + "  " + _this.password);
            // this.navCtrl.push(ReportPage)
            sessionStorage.setItem("email", user.email);
            _this.loadingCtrl.create({
                content: "รอสักครู่ ...",
                duration: 10000
            });
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__showlist_showlist__["a" /* ShowlistPage */]);
            var root = _this.app.getRootNav();
            root.popToRoot();
        }).catch(function (error) {
            console.log(error);
            this.navCtrl.push(LoginPage_1);
            {
                alert('กรุณากรอกใหม่อีกครั้ง');
            }
        });
        console.log("email:" + this.email + "password:" + this.password);
    };
    LoginPage.prototype.openSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n    <ion-title>Sign in</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n    \n\n    <ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Email</ion-label>\n\n    <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n<button ion-button full (click)="myLogIn()">Sign in</button> \n\n  </ion-item>\n\n</ion-list>\n\n<h5>สมัครสมาชิก </h5>\n\n<button  (click)="openSignup()">Sign up</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_person__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tost_service_tost_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editsta_editsta__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { EditshowrePage } from '../editshowre/editshowre';


//import { ShowstatusPage } from '../showstatus/showstatus';

//import { Savestatus } from '../../model/savestatus';




/*import { FixunPage } from '../fixun/fixun';
import { FixingPage } from '../fixing/fixing';
import { FixedPage } from '../fixed/fixed';*/
var ShowrePage = (function () {
    function ShowrePage(fire, navCtrl, db, loadingCtrl, Tost, 
        /*private reportProvider: ReportProvider,*/
        popoverCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.category = 'ขยะ'; // กำหนดค่าเริ่มต้น
        this.status = 'ยังไม่ได้แก้ไข'; // กำหนดค่าเริ่มต้น
        this.people = db.list('/report');
        this.loadReport();
    }
    ShowrePage.prototype.findAllPersons = function () {
        return this.db.list('report')
            .map(__WEBPACK_IMPORTED_MODULE_3__person_person__["a" /* person */].fromJsonList);
    };
    ShowrePage.prototype.deletePerson = function (id) {
        this.people.remove(id);
    };
    ShowrePage.prototype.editStatus = function (id, category, topics, comment, MyData, status, email, image) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__editsta_editsta__["a" /* EditstaPage */], {
            key: id,
            email: email,
            category: category,
            topics: topics,
            comment: comment,
            MyData: MyData,
            status: status,
            image: image
        });
    };
    ShowrePage.prototype.typeTrigger = function () {
        this.typeReport.open(); // เปิด select ของประเภทที่ซ่อน
    };
    ShowrePage.prototype.setStatus = function (status) {
        this.status = status; // เก็บสถานะของรายงานที่ดึงข้อมูลมา
        this.loadReport(); // เรียกใช้ฟังค์ชั่นดึกรายงานมาใหม่
    };
    ShowrePage.prototype.loadReport = function () {
        var _this = this;
        if (typeof this.peoples !== 'undefined') {
            if (this.peoples.length > 0) {
                this.peoples.length = 0; // ลบของเก่าออก
            }
        }
        // ดึงข้อมูลจาก firebase ตามสถานะที่เลือก
        this.db.list('/report', { query: {
                orderByChild: 'status',
                equalTo: this.status
            } }).subscribe(function (reports) {
            reports.forEach(function (report) {
                if (report.category === _this.category) {
                    // ตรวจว่าตัวแปร peoples เป็นอาร์เรย์ที่ถูกประกาศอย่างถูกต้องที่ใช้ฟังค์ชั่น push ได้ ถ้าไม่ก็จะประกาศก่อน
                    if (typeof _this.peoples === 'undefined') {
                        _this.peoples = [{
                                category: report.category,
                                comment: report.comment,
                                lat: report.lat,
                                lng: report.lng,
                                status: report.status,
                                topics: report.topics,
                                email_unfix: report.email_unfix,
                                email: report.email,
                                image: report.image,
                                myDate: (report.MyData === '' ? '' : report.MyData)
                            }];
                    }
                    else {
                        _this.peoples.push({
                            category: report.category,
                            comment: report.comment,
                            lat: report.lat,
                            lng: report.lng,
                            status: report.status,
                            topics: report.topics,
                            email_unfix: report.email_unfix,
                            email: report.email,
                            image: report.image,
                            myDate: (report.MyData === '' ? '' : report.MyData)
                        });
                    }
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('typeReport'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Select */])
    ], ShowrePage.prototype, "typeReport", void 0);
    ShowrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showre',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\showre\showre.html"*/'<ion-header>\n  <ion-navbar color="dark">\n      <ion-toolbar color="primary">\n    <ion-title>PINFIXUP</ion-title>\n\n    <ion-buttons right>            \n            <button ion-button icon-only color="royal" (click)="typeTrigger()">\n              <ion-icon name="ios-reorder-outline"></ion-icon>\n            </button>\n          </ion-buttons> \n    \n            \n      </ion-toolbar>\n      \n    \n\n  </ion-navbar>\n</ion-header>\n\n<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>\n\n<ion-content padding>\n  <!-- Select ธรรมดา แต่ซ่อนไว้ แล้วใช้ ChildRef เปิดขึ้นมาแทน -->\n    <ion-select [(ngModel)]="category" (ngModelChange)="loadReport()" style="visibility: hidden; height: 1px;" #typeReport>\n        <ion-option ion-item value="ขยะ">ขยะ</ion-option>\n        <ion-option ion-item value="ไฟฟ้าและแสงสว่างภายนอกอาคาร">ไฟฟ้าและแสงสว่างภายนอกอาคาร</ion-option>\n        <ion-option ion-item value="ถนน">ถนน</ion-option>\n        <ion-option ion-item value="ระบายน้ำและปะปา">ระบายน้ำและปะปา</ion-option>\n        <ion-option ion-item value="สวน">สวน</ion-option>\n        <ion-option ion-item value="อื่นๆ">อื่นๆ</ion-option>\n      </ion-select>\n\n <ion-toolbar>\n        <ion-segment color="primary">\n          <ion-segment-button (click)="setStatus(\'ยังไม่ได้แก้ไข\')">ยังไม่ได้แก้ไข</ion-segment-button>\n          <ion-segment-button (click)="setStatus(\'กำลังแก้ไข\')">กำลังแก้ไข</ion-segment-button>\n          <ion-segment-button (click)="setStatus(\'แก้ไขเรียบร้อยแล้ว\')">แก้ไขเรียบร้อยแล้ว</ion-segment-button>\n        </ion-segment>\n      </ion-toolbar> \n\n\n<ion-list>\n  <div *ngIf="peoples && peoples.length > 0">\n    <ion-item-sliding *ngFor="let person of peoples"> \n      \n      <ion-item text-wrap>\n          <ion-note>\n              ผู้รายงานปัญหา : {{person.email}}\n            <!-- ID : {{person1.$key}}-->\n          </ion-note>\n        \n        <h2>ประเภทของปัญหา  : {{person.category}}</h2>\n          <p>หัวข้อ :  {{person.topics}}\n          <p>รายละเอียดปัญหา :   {{person.comment}}</p>\n          <p>วันที่ :   {{person.MyData}}</p>\n          <h3>สถานะ :  {{person.status}}</h3>\n          <img [src]="person.image" style="width: 100%; height: auto;" />\n      \n      </ion-item>\n\n    </ion-item-sliding>\n  </div>\n  <ion-item-sliding *ngIf="!peoples || peoples.length < 1"> \n      <ion-item text-wrap>\n          ไม่มีรายงานในประเภท {{category}} ที่มีสถานะ {{status}}\n      </ion-item>\n    </ion-item-sliding>\n \n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\showre\showre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], ShowrePage);
    return ShowrePage;
}());

//# sourceMappingURL=showre.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarbagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GarbagePage = (function () {
    function GarbagePage(fire, navCtrl, db, loadingCtrl, Tost, popoverCtrl) {
        var _this = this;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.Tost = Tost;
        this.popoverCtrl = popoverCtrl;
        this.persons = db.list('/report');
        this.persons.subscribe(function (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (i === 0 || typeof _this.Garbage === "undefined") {
                    if (obj[i].category === "ขยะ") {
                        _this.Garbage = [{
                                category: obj[i].category,
                                comment: obj[i].comment,
                                lat: obj[i].lat,
                                lng: obj[i].lng,
                                status: obj[i].status,
                                topics: obj[i].topics,
                                email_fixing: obj[i].email_fixing,
                                image: obj[i].image,
                                myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                            }];
                    }
                }
                else {
                    if (obj[i].category === "ขยะ") {
                        _this.Garbage.push({
                            category: obj[i].category,
                            comment: obj[i].comment,
                            lat: obj[i].lat,
                            lng: obj[i].lng,
                            status: obj[i].status,
                            topics: obj[i].topics,
                            email_fixing: obj[i].email_fixing,
                            image: obj[i].image,
                            myDate: (obj[i].MyData === '' ? '' : obj[i].MyData)
                        });
                    }
                }
            }
        });
        /*"garbage()">ขยะ
      "light()">ไฟฟ้าและแสงสว่างภายนอกอาคาร
      ="road()">ถนน
      ="water()">ระบายน้ำและปะปา
    ="tree()">สวน
      ="other()">อื่นๆ*/
    }
    GarbagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-garbage',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\garbage\garbage.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>ขยะ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of Garbage"> \n          \n          <ion-item>\n              <ion-note>\n                  <!-- ผู้รายงานปัญหา : {{person1.email}} -->\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>            \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.myDate}}</p>\n               <h3>สถานะ :  {{person1.status}}</h3>\n               <h3>ผู้เปลี่ยนสถานะ : {{person1.email_fixing}}</h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />               \n          </ion-item>   \n        </ion-item-sliding>      \n      </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\garbage\garbage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_tost_service_tost_service__["a" /* TostServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], GarbagePage);
    return GarbagePage;
}());

//# sourceMappingURL=garbage.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeshowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__showre_showre__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_report_report__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_report__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomeshowPage = (function () {
    function HomeshowPage(fire, navCtrl, db, http, app, reportProvider, alertCtrl, loadingCtrl, popoverCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.db = db;
        this.http = http;
        this.app = app;
        this.reportProvider = reportProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.login = { user: sessionStorage.getItem("email") };
    }
    HomeshowPage_1 = HomeshowPage;
    HomeshowPage.prototype.ionViewDidLoad = function () {
        // =========ฟังก์ชันร้องขอข้อมูล Report จาก Provider=========
        //this.getMarkers();
        // =========ฟังก์ชันแสดง GoogleMap =========
        this.displayGoogleMap();
    };
    HomeshowPage.prototype.openLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomeshowPage.prototype.openReport = function () {
        this.loadingCtrl.create({
            content: "รอสักครู่ ...",
            duration: 10000
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__report_report__["a" /* ReportPage */]);
    };
    HomeshowPage.prototype.signout = function () {
        // Remove API token
        sessionStorage.removeItem("email");
        this.navCtrl.setRoot(HomeshowPage_1);
        var root = this.app.getRootNav();
        root.popToRoot();
        this.loadingCtrl.create({
            content: "รอสักครู่ ...",
            duration: 10000
        });
    };
    HomeshowPage.prototype.show = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__showre_showre__["a" /* ShowrePage */]);
    };
    HomeshowPage.prototype.displayGoogleMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(19.0265673, 99.895268);
        console.log(latLng);
        var mapOptions = {
            center: latLng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.mapElement.nativeElement.innerHTML = '';
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.reportProvider.getList({
            query: {
                orderByChild: 'category',
                equalTo: this.category
            }
        }).subscribe(function (list) {
            // console.log("list", list);
            _this.reports = list;
            console.log("this.reports", _this.reports);
            _this.addMarkersMap(_this.reports);
        });
    };
    // getMarkers() {
    // =========ร้องขอข้อมูล Report จาก reportProvider แล้วเก็บไว้ใน this.reports =========
    // }
    HomeshowPage.prototype.groupBy = function (array, lat, lng) {
        var groub = [];
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (item.lat == lat && item.lng == lng) {
                var conten = {
                    $Key: item.$Key,
                    email: item.email,
                    comment: item.comment,
                    topics: item.topics,
                    image: item.image,
                    MyData: item.MyData,
                    category: item.category,
                    status: item.status
                };
                groub.push(conten);
            }
        }
        return groub;
    };
    HomeshowPage.prototype.addMarkersMap = function (reports) {
        var infowindow = new google.maps.InfoWindow();
        var marker;
        for (var _i = 0, reports_1 = reports; _i < reports_1.length; _i++) {
            var report = reports_1[_i];
            // =========เพิ่ม Marker ลง Google Map =========
            var loc = { lat: report.lat, lng: report.lng };
            var icon = this.pinIcon(report.category);
            // console.log(loc);
            marker = new google.maps.Marker({
                position: loc,
                map: this.map,
                icon: icon
            });
            var customContent = '<div class="wd_info-contact">' +
                '<h3> ' + report.topics + ' </h3>' +
                '<img src=' + report.image + ' style="width: 200px; height: 150px;"/> ' +
                '<span style="color: #222;">' +
                '<br>ประเภทของรายงานปัญหา :' + report.category +
                '<br>รายละเอียดปัญหา :' + report.comment +
                '<br>วันที่รายงานปัญหา :' + report.MyData +
                '<br>ผู้รายงานปัญหา :' + report.email +
                '<br>สถานะ :' + report.status +
                '</span>' +
                '</div>';
            google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
                return function () {
                    infowindow.setContent(content);
                    infowindow.open(this.map, marker);
                };
            })(marker, customContent, infowindow));
        }
    };
    HomeshowPage.prototype.pinIcon = function (category) {
        switch (category) {
            case "ขยะ": {
                return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
            }
            case "ไฟฟ้าและแสงสว่างภายนอกอาคาร": {
                return 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
            }
            case "ถนน": {
                return 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';
            }
            case "ระบายน้ำและปะปา": {
                return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
            }
            case "สวน": {
                return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
            }
            case "อื่นๆ": {
                return 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png';
            }
        }
    };
    HomeshowPage.prototype.Showtype = function () {
        this.loadtype.open();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomeshowPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('loadtype'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Select */])
    ], HomeshowPage.prototype, "loadtype", void 0);
    HomeshowPage = HomeshowPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homeshow',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\homeshow\homeshow.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n        <ion-icon name="md-pin">\n    PINFIXUP\n  </ion-icon>\n  \n    </ion-title>\n    \n        \n   <ion-buttons end>\n      <ion-buttons right>            \n          <button ion-button icon-only color="royal" (click)="Showtype()">\n            <ion-icon name="ios-reorder-outline"></ion-icon>\n          </button>\n        </ion-buttons> \n\n  <button ion-button *ngIf="login.user==null" (click)="openLogin()">Sign in</button>\n   <button ion-button *ngIf="login.user!=null" (click)="signout()">sign out</button> \n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n<ion-select [(ngModel)]="category" (ngModelChange)="displayGoogleMap()" style="visibility: hidden; height: 1px;" #loadtype>\n    <ion-option ion-item value="ขยะ">ขยะ</ion-option>\n    <ion-option ion-item value="ไฟฟ้าและแสงสว่างภายนอกอาคาร">ไฟฟ้าและแสงสว่างภายนอกอาคาร</ion-option>\n    <ion-option ion-item value="ถนน">ถนน</ion-option>\n    <ion-option ion-item value="ระบายน้ำและปะปา">ระบายน้ำและปะปา</ion-option>\n    <ion-option ion-item value="สวน">สวน</ion-option>\n    <ion-option ion-item value="อื่นๆ">อื่นๆ</ion-option>\n  </ion-select>\n\n\n<ion-content padding>\n\n    <div #map id="map" style="height:100%"></div>\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\homeshow\homeshow.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__providers_report_report__["a" /* ReportProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], HomeshowPage);
    return HomeshowPage;
    var HomeshowPage_1;
}());

//# sourceMappingURL=homeshow.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditstaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statused_statused__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditstaPage = (function () {
    function EditstaPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.persons = db.list('/report');
    }
    EditstaPage.prototype.editStatus = function (id, email, topics, comment, category, MyData, status, image) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__statused_statused__["a" /* StatusedPage */], {
            key: id,
            email: email,
            MyData: MyData,
            category: category,
            topics: topics,
            comment: comment,
            status: status,
            image: image
        });
    };
    EditstaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editsta',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\editsta\editsta.html"*/'<ion-header>\n\n  <ion-navbar color= "dark">\n    <ion-title>แก้ไขสถานะ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of persons | async">   \n          <ion-item>\n              <ion-note>\n                  ผู้รายงานปัญหา : {{person1.email}}\n                <!-- ID : {{person1.$key}}-->\n               </ion-note>\n             \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.MyData}}</p>\n               <p>สถานะ :{{person1.status}} </p>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />\n            <!--   <p>lat :   {{person1.lat}}</p>\n               <p>lng :   {{person1.lng}}</p>-->     \n          </ion-item>\n         <ion-item-options side="right">\n              <button ion-button color="light" (click)="editStatus(person1.$key,person1.email,person1.topics,person1.comment,person1.category,person1.MyData,person1.status)">\n                 <ion-icon ios="ios-create" md="md-create"></ion-icon>\n                แก้ไขสถานะ\n              </button>\n            </ion-item-options>\n        </ion-item-sliding>\n \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\editsta\editsta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], EditstaPage);
    return EditstaPage;
}());

//# sourceMappingURL=editsta.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportProvider = (function () {
    function ReportProvider(http, database) {
        this.http = http;
        this.database = database;
        console.log('Hello ReportProvider Provider');
    }
    // =========ฟังก์ชันร้องขอข้อมูลจาก Firebase แบบ List =========
    ReportProvider.prototype.getList = function (query) {
        if (query === void 0) { query = {}; }
        if (query != null) {
            return this.database.list('/report', query);
        }
        else {
            return this.database.list('/report');
        }
    };
    // =========ฟังก์ชันร้องขอข้อมูลจาก Firebase แบบ List โดยมรเหงือนไข =========
    ReportProvider.prototype.search = function (id) {
        this.opts = {
            query: {
                orderByChild: 'id',
                equalTo: id
            }
        };
        return this.database.list('report', this.opts);
    };
    // =========ฟังก์ชันร้องขอข้อมูลจาก Firebase แบบ Object  =========
    ReportProvider.prototype.getObject = function (key) {
        return this.database.object('report/' + key);
    };
    // =========ฟังก์ชันเพิ่มข้อมูล Firebase แบบ Object  =========
    ReportProvider.prototype.pushObject = function (object) {
        return this.database.list('report/').push(object);
    };
    // =========ฟังก์ชันแก้ไขข้อมูล Firebase แบบ Object  =========
    ReportProvider.prototype.updateObject = function (key, object) {
        return this.database.object('report/' + key).update(object);
    };
    // =========ฟังก์ชันลบข้อมูล Firebase แบบ Object  =========
    ReportProvider.prototype.removeObject = function (key) {
        return this.database.list('report').remove(key);
    };
    ReportProvider.prototype.pushObjectStatus = function (object) {
        return this.database.list('reported/').push(object);
    };
    ReportProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], ReportProvider);
    return ReportProvider;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditshowrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__person_person__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editdatashow_editdatashow__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditshowrePage = (function () {
    function EditshowrePage(navCtrl, navParams, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.login = { email: sessionStorage.getItem("email") };
        this.persons = db.list('/report', {
            query: {
                orderByChild: 'email',
                equalTo: this.login.email
            }
        });
    }
    EditshowrePage_1 = EditshowrePage;
    EditshowrePage.prototype.findAllPersons = function () {
        return this.db.list('report')
            .map(__WEBPACK_IMPORTED_MODULE_3__person_person__["a" /* person */].fromJsonList);
    };
    EditshowrePage.prototype.deletePerson = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            message: 'ต้องการลบหรือไม่?',
            buttons: [
                {
                    text: 'ใช่',
                    handler: function () {
                        _this.persons.remove(id);
                        console.log('clicked');
                    }
                },
                {
                    text: 'ไม่',
                    handler: function () {
                        _this.navCtrl.push(EditshowrePage_1);
                        console.log('No clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    EditshowrePage.prototype.editPerson = function (id, category, topics, comment, email, MyData, image) {
        {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editdatashow_editdatashow__["a" /* EditdatashowPage */], {
                key: id,
                category: category,
                topics: topics,
                comment: comment,
                email: email,
                MyData: MyData,
                image: image
            });
        }
    };
    EditshowrePage = EditshowrePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editshowre',template:/*ion-inline-start:"C:\testpinfixup\mapP\src\pages\editshowre\editshowre.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>แก้ไขข้อมูล</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let person1 of persons | async"> \n          \n          <ion-item>\n              <ion-note>\n                  ผู้รายงานปัญหา : {{person1.email}}\n                 \n               </ion-note>\n             \n             <h2>ประเภทของปัญหา  : {{person1.category}}</h2>\n              <p>หัวข้อ :  {{person1.topics}}\n               <p>ความคิดเห็น :   {{person1.comment}}</p>\n               <p>วันที่ :   {{person1.MyData}}</p>\n               <h3>สถานะ : {{person1.status}} </h3>\n               <img [src]="person1.image" style="width: 100%; height: auto;" />   \n          </ion-item>\n      \n          <ion-item-options side="right">\n            <button ion-button color="primary"  (click)="editPerson(person1.$key,person1.category,person1.topics,person1.comment,person1.date,person1.status)">\n               <ion-icon ios="ios-create" md="md-create"></ion-icon>\n              แก้ไขข้อมูล\n            </button>\n            <button ion-button color="danger" (click)="deletePerson(person1.$key)">\n              <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n              ลบ\n            </button>\n          </ion-item-options>\n      \n        \n      \n        </ion-item-sliding>\n       \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\testpinfixup\mapP\src\pages\editshowre\editshowre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditshowrePage);
    return EditshowrePage;
    var EditshowrePage_1;
}());

//# sourceMappingURL=editshowre.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.js.map