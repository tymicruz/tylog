System.register(['angular2/core', 'app/services/tylog.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tylog_service_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tylog_service_1_1) {
                tylog_service_1 = tylog_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, _tylogService) {
                    this._router = _router;
                    this._tylogService = _tylogService;
                    this.title = "Posts";
                    this.errorFlash = false;
                    this.image = "app/views/images/ang2green.png";
                    this.newUser = false;
                    this.showUsersText = "show users::passwords";
                    this.secret = false;
                }
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this._tylogService.login(this.username, this.password)
                        .then(function (answer) { return _this.tryLogin(answer); });
                };
                LoginComponent.prototype.tryLogin = function (answer) {
                    if (answer) {
                        this._router.navigate(['Posts', { key: answer }]);
                    }
                    else {
                        this.error = "wrong username or password";
                        this.image = "app/views/images/ang2red.png";
                        this.errorFlash = true;
                        this.animateButton(5);
                    }
                };
                LoginComponent.prototype.animateButton = function (i) {
                    var _this = this;
                    if (i == 0)
                        return;
                    setTimeout(function () {
                        if (i % 2 == 0) {
                            _this.image = "app/views/images/ang2green.png";
                            _this.errorFlash = false;
                        }
                        else {
                            _this.image = "app/views/images/ang2red.png";
                            _this.errorFlash = true;
                        }
                        _this.animateButton(i - 1);
                    }, 500);
                };
                LoginComponent.prototype.loginToggle = function () {
                    if (this.newUser) {
                        //regular login
                        this.newUser = false;
                    }
                    else {
                        //toggle to new user mode
                        this.newUser = true;
                        this.secret = false;
                        this.showUsersText = "show users::passwords";
                    }
                    this.error = undefined;
                    this.image = "app/views/images/ang2green.png";
                };
                LoginComponent.prototype.signUp = function () {
                    var _this = this;
                    if (!this.username) {
                        this.error = "enter a username";
                        this.animateButton(10);
                        return;
                    }
                    if (!this.password || !this.repeatedPassword) {
                        this.error = "fill in password";
                        this.animateButton(10);
                        return;
                    }
                    if (!this.username.length) {
                        this.error = "enter a username";
                        this.animateButton(10);
                        return;
                    }
                    if (this.password != this.repeatedPassword) {
                        this.error = "passwords don't match";
                        this.animateButton(5);
                        return;
                    }
                    this.error = undefined;
                    this.image = "app/views/images/ang2green.png";
                    this._tylogService.signUp(this.username, this.password, this.repeatedPassword)
                        .then(function (answer) { _this.error = answer; _this.errorFlash = false; _this._tylogService.getUsers().then(function (users) { return _this.users = users; }); });
                };
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //auto login
                    //this._tylogService.login("tyler", "two")
                    //.then(answer => this.tryLogin(answer));
                    this._tylogService.getUsers().then(function (users) { return _this.users = users; });
                };
                LoginComponent.prototype.showUsers = function () {
                    if (this.secret) {
                        this.showUsersText = "show users::passwords";
                        console.log(this.users[0]._id);
                        this.secret = false;
                    }
                    else {
                        this.showUsersText = "hide users::passwords";
                        this.secret = true;
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-login',
                        templateUrl: 'app/views/login.component.html',
                        styleUrls: ['app/views/styles/style.css'],
                        //'app/views/styles/heroes.component.css'
                        directives: [],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof tylog_service_1.TylogService !== 'undefined' && tylog_service_1.TylogService) === 'function' && _b) || Object])
                ], LoginComponent);
                return LoginComponent;
                var _a, _b;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map