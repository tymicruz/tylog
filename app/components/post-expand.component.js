System.register(['angular2/core', 'angular2/router', "app/services/tylog.service"], function(exports_1, context_1) {
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
    var core_1, router_1, tylog_service_1;
    var PostExpandComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tylog_service_1_1) {
                tylog_service_1 = tylog_service_1_1;
            }],
        execute: function() {
            PostExpandComponent = (function () {
                function PostExpandComponent(_router, _tylogService, _routeParams) {
                    this._router = _router;
                    this._tylogService = _tylogService;
                    this._routeParams = _routeParams;
                    this.commentPlaceholder = "enter comment here";
                    this.image = "app/views/images/ang2green.png";
                    this.admin = false;
                    this.bodyPlaceholder = "body can't be blank";
                    this.titlePlaceholder = "title can't be blank";
                }
                PostExpandComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.editMode = false;
                    var id_string = this._routeParams.get('id');
                    //if(id_string == undefined){
                    //	this._
                    //}
                    var id = +id_string;
                    this._tylogService.getPost(id)
                        .then(function (post) { return _this.post = post; }).then(function (post) {
                        _this.newBody = post.body;
                        var key = _this._routeParams.get('key');
                        _this._tylogService.getUser(key).then(function (user) {
                            if (user === undefined) {
                                _this._router.navigate(['Login']);
                            }
                            if (user == post.user || user == "admin") {
                                _this.image = "app/views/images/ang2blue.png";
                                _this.admin = true;
                            }
                            _this.user = user;
                        });
                    });
                    this._tylogService.getComments(id)
                        .then(function (comments) { return _this.comments = comments; });
                    this.newcomment = { _id: 0, post: id, dislikes: 0, likes: 0, body: "" };
                    this.editButtonText = "edit";
                };
                PostExpandComponent.prototype.toggleEditMode = function () {
                    if (this.editButtonText == "edit") {
                        this.newBody = this.post.body;
                        this.newTitle = this.post.title;
                        this.editButtonText = "cancel";
                        this.editMode = true;
                    }
                    else {
                        this.editButtonText = "edit";
                        this.editMode = false;
                    }
                };
                PostExpandComponent.prototype.save = function () {
                    var allSpaces = false;
                    var badBody = false;
                    var badTitle = false;
                    if (this.newBody.length === undefined || !this.newBody.length) {
                        this.bodyPlaceholder = "can't post blank post";
                        badBody = true;
                    }
                    if (!badBody) {
                        badBody = true;
                        allSpaces = true;
                        for (var i = 0; i < this.newBody.length; i++) {
                            if (this.newBody[i] != " ") {
                                allSpaces = false;
                                badBody = false;
                                break;
                            }
                        }
                    }
                    if (allSpaces) {
                        badBody = true;
                        this.newBody = "";
                        this.bodyPlaceholder = "can't be all spaces, fool";
                    }
                    allSpaces = false;
                    if (this.newTitle.length === undefined || !this.newTitle.length) {
                        this.titlePlaceholder = "can't post blank post";
                        badTitle = true;
                    }
                    if (!badTitle) {
                        badTitle = true;
                        allSpaces = true;
                        for (var i = 0; i < this.newTitle.length; i++) {
                            if (this.newTitle[i] != " ") {
                                allSpaces = false;
                                badTitle = false;
                                break;
                            }
                        }
                    }
                    if (allSpaces) {
                        badTitle = true;
                        this.newTitle = "";
                        this.titlePlaceholder = "can't be all spaces, fool";
                    }
                    if (badBody || badTitle) {
                        return;
                    }
                    this.editMode = false;
                    this.editButtonText = "edit";
                    this.post.body = this.newBody;
                    this.post.title = this.newTitle;
                    //add update title
                    this._tylogService.updateBody(this.post._id, this.newBody);
                };
                PostExpandComponent.prototype.deleteComment = function (id) {
                    var _this = this;
                    this._tylogService.deleteComment(id).then(function (id) {
                        console.log("successfully removed comment " + id);
                        if (id != undefined) {
                            var id_1 = +_this._routeParams.get('id');
                            _this._tylogService.getComments(id_1)
                                .then(function (comments) { return _this.comments = comments; });
                        }
                        else {
                            console.log("failed to remove comment");
                        }
                    });
                };
                PostExpandComponent.prototype.deletePost = function (id) {
                    var _this = this;
                    this._tylogService.deletePost(id).then(function (id) {
                        console.log(id);
                        _this.gotoPosts();
                    });
                };
                PostExpandComponent.prototype.postComment = function () {
                    var _this = this;
                    var allSpaces = true;
                    if (this.newcomment.body.length === undefined || !this.newcomment.body.length) {
                        this.commentPlaceholder = "can't post blank comment";
                        return;
                    }
                    for (var i = 0; i < this.newcomment.body.length; i++) {
                        if (this.newcomment.body[i] != " ") {
                            allSpaces = false;
                            break;
                        }
                    }
                    if (allSpaces) {
                        this.newcomment.body = "";
                        this.commentPlaceholder = "can't be all spaces, fool";
                        return;
                    }
                    console.log(this.newcomment.body);
                    this._tylogService.addComment(this.newcomment).then(function () {
                        var id = +_this._routeParams.get('id');
                        _this._tylogService.getComments(id)
                            .then(function (comments) { return _this.comments = comments; });
                        _this.newcomment = { _id: 0, post: id, dislikes: 0, likes: 0, body: "" };
                        _this.commentPlaceholder = "enter comment here";
                    });
                };
                PostExpandComponent.prototype.goBack = function () {
                    window.history.back();
                };
                PostExpandComponent.prototype.gotoPosts = function () {
                    this._router.navigate(['Posts', { key: this._routeParams.get('key') }]);
                };
                PostExpandComponent.prototype.logout = function () {
                    var _this = this;
                    this._tylogService.logout().then(function () { _this._router.navigate(['Login']); });
                };
                PostExpandComponent = __decorate([
                    core_1.Component({
                        selector: 'my-post-expand',
                        templateUrl: "app/views/post-expand.component.html",
                        styleUrls: ["app/views/styles/style.css"],
                        inputs: ['post']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof tylog_service_1.TylogService !== 'undefined' && tylog_service_1.TylogService) === 'function' && _a) || Object, router_1.RouteParams])
                ], PostExpandComponent);
                return PostExpandComponent;
                var _a;
            }());
            exports_1("PostExpandComponent", PostExpandComponent);
        }
    }
});
//# sourceMappingURL=post-expand.component.js.map