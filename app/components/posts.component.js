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
    var PostsComponent;
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
            PostsComponent = (function () {
                function PostsComponent(_router, _routeParams, _tylogService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._tylogService = _tylogService;
                    this.title = "Posts";
                    this.image = "app/views/images/ang2green.png";
                }
                PostsComponent.prototype.getPosts = function () {
                    var _this = this;
                    this._tylogService.getPosts().then(function (posts) { return _this.posts = posts; });
                };
                //getHeroesSlowly() {
                //	this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
                //}
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var key = this._routeParams.get('key');
                    //this.user = "";
                    this._tylogService.getUser(key).then(function (user) {
                        _this.user = user;
                        if (user == undefined) {
                            _this._router.navigate(['Login']);
                        }
                    });
                    this.getPosts();
                };
                PostsComponent.prototype.gotoPost = function (id) {
                    this._router.navigate(['PostExpand', { id: id, key: this._routeParams.get('key') }]);
                };
                PostsComponent.prototype.newPost = function () {
                    this._router.navigate(['NewPost', { key: this._routeParams.get('key') }]);
                };
                PostsComponent.prototype.logout = function () {
                    var _this = this;
                    this._tylogService.logout().then(function () { _this._router.navigate(['Login']); });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-posts',
                        templateUrl: 'app/views/posts.component.html',
                        styleUrls: ['app/views/styles/style.css'],
                        //'app/views/styles/heroes.component.css'
                        directives: [],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_2.RouteParams !== 'undefined' && router_2.RouteParams) === 'function' && _b) || Object, (typeof (_c = typeof tylog_service_1.TylogService !== 'undefined' && tylog_service_1.TylogService) === 'function' && _c) || Object])
                ], PostsComponent);
                return PostsComponent;
                var _a, _b, _c;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map