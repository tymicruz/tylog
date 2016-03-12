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
    var core_1, tylog_service_1, router_1, router_2;
    var NewPostComponent;
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
                router_2 = router_1_1;
            }],
        execute: function() {
            NewPostComponent = (function () {
                function NewPostComponent(_router, _routeParams, _tylogService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._tylogService = _tylogService;
                    this.title = "New Post";
                    //public posts: Post[];
                    this.bodyPlaceholder = "body can't be blank";
                    this.titlePlaceholder = "title can't be blank";
                    this.image = "app/views/images/ang2green.png";
                }
                NewPostComponent.prototype.post = function () {
                    var _this = this;
                    var allSpaces = false;
                    var badBody = false;
                    var badTitle = false;
                    if (this.newPost.body.length === undefined || !this.newPost.body.length) {
                        this.bodyPlaceholder = "can't post blank post";
                        badBody = true;
                    }
                    if (!badBody) {
                        badBody = true;
                        allSpaces = true;
                        for (var i = 0; i < this.newPost.body.length; i++) {
                            if (this.newPost.body[i] != " ") {
                                allSpaces = false;
                                badBody = false;
                                break;
                            }
                        }
                    }
                    if (allSpaces) {
                        badBody = true;
                        this.newPost.body = "";
                        this.bodyPlaceholder = "can't be all spaces, fool";
                    }
                    allSpaces = false;
                    if (this.newPost.title.length === undefined || !this.newPost.title.length) {
                        this.titlePlaceholder = "can't post blank post";
                        badTitle = true;
                    }
                    if (!badTitle) {
                        badTitle = true;
                        allSpaces = true;
                        for (var i = 0; i < this.newPost.title.length; i++) {
                            if (this.newPost.title[i] != " ") {
                                allSpaces = false;
                                badTitle = false;
                                break;
                            }
                        }
                    }
                    if (allSpaces) {
                        badTitle = true;
                        this.newPost.title = "";
                        this.titlePlaceholder = "can't be all spaces, fool";
                    }
                    if (badBody || badTitle) {
                        var bb = "blank body";
                        var bt = "blank title";
                        this.title = "New Post (";
                        if (badBody && badTitle)
                            this.title += bb + " and " + bt + ")";
                        else if (badTitle)
                            this.title += bt + ")";
                        else {
                            this.title += bb + ")";
                        }
                        return;
                    }
                    this._tylogService.newPost(this.newPost).then(function (answer) {
                        _this.title = "Post Submitted";
                        setTimeout(function () {
                            _this._router.navigate(['Posts', { key: _this._routeParams.get('key') }]);
                        }, 500);
                    });
                };
                //getHeroesSlowly() {
                //	this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
                //}
                NewPostComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.newPost = { _id: 0, title: "", user: "", body: "", likes: 0, dislikes: 0 };
                    var key = this._routeParams.get('key');
                    // 	//this.user = "";
                    this._tylogService.getUser(key).then(function (user) {
                        _this.user = user;
                        _this.newPost.user = user;
                        if (user == undefined) {
                            _this._router.navigate(['Login']);
                        }
                    });
                };
                NewPostComponent.prototype.gotoPosts = function () {
                    this._router.navigate(['Posts', { key: this._routeParams.get('key') }]);
                };
                NewPostComponent.prototype.logout = function () {
                    var _this = this;
                    this._tylogService.logout().then(function () { _this._router.navigate(['Login']); });
                };
                NewPostComponent.prototype.goBack = function () {
                    window.history.back();
                };
                NewPostComponent = __decorate([
                    core_1.Component({
                        selector: 'my-new-post',
                        templateUrl: 'app/views/new-post.component.html',
                        styleUrls: ['app/views/styles/style.css'],
                        //'app/views/styles/heroes.component.css'
                        directives: [],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_2.RouteParams !== 'undefined' && router_2.RouteParams) === 'function' && _b) || Object, (typeof (_c = typeof tylog_service_1.TylogService !== 'undefined' && tylog_service_1.TylogService) === 'function' && _c) || Object])
                ], NewPostComponent);
                return NewPostComponent;
                var _a, _b, _c;
            }());
            exports_1("NewPostComponent", NewPostComponent);
        }
    }
});
//# sourceMappingURL=new-post.component.js.map