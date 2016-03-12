System.register(['app/mock-db', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_db_1, mock_db_2, mock_db_3, core_1;
    var TylogService;
    return {
        setters:[
            function (mock_db_1_1) {
                mock_db_1 = mock_db_1_1;
                mock_db_2 = mock_db_1_1;
                mock_db_3 = mock_db_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TylogService = (function () {
                function TylogService() {
                    this.nextCommentId = [];
                    this.nextPostId = [];
                    this.nextCommentId.push(mock_db_2.COMMENTS.length);
                    this.nextPostId.push(mock_db_1.POSTS.length);
                    console.log("next comment id:");
                    for (var i = 0; i < this.nextCommentId.length; i++) {
                        console.log(this.nextCommentId[i]);
                    }
                }
                TylogService.prototype.getPosts = function () {
                    return Promise.resolve(mock_db_1.POSTS);
                };
                TylogService.prototype.getPost = function (id) {
                    return Promise.resolve(mock_db_1.POSTS).then(function (posts) { return posts.filter(function (post) { return post._id == id; })[0]; });
                };
                TylogService.prototype.getComments = function (post) {
                    return Promise.resolve(mock_db_2.COMMENTS).then(function (comments) { return comments.filter(function (comment) { return comment.post === post; }); });
                };
                TylogService.prototype.validate = function (username, password) {
                    for (var i = 0; i < mock_db_3.USERS.length; i++) {
                        if (mock_db_3.USERS[i]._id == username) {
                            if (mock_db_3.USERS[i].password == password) {
                                this.username = username;
                                return Promise.resolve(true);
                            }
                            return Promise.resolve(false);
                        }
                    }
                    return Promise.resolve(false);
                };
                TylogService.prototype.login = function (username, password) {
                    for (var i = 0; i < mock_db_3.USERS.length; i++) {
                        if (mock_db_3.USERS[i]._id == username) {
                            if (mock_db_3.USERS[i].password == password) {
                                this.username = username;
                                var key = this.getRandomKey();
                                this.key = key;
                                return Promise.resolve(key);
                            }
                            return Promise.resolve(undefined);
                        }
                    }
                    return Promise.resolve(undefined);
                };
                TylogService.prototype.logout = function () {
                    this.username = undefined;
                    this.key = undefined;
                    return Promise.resolve(true);
                };
                TylogService.prototype.getRandomNumber = function (min, max) {
                    return Math.random() * (max - min) + min;
                };
                TylogService.prototype.getRandomKey = function () {
                    var len = this.getRandomNumber(5, 10);
                    var a = [];
                    for (var i = 0; i < len; i++) {
                        var n = Math.floor(this.getRandomNumber(65, 90));
                        //console.log(n);
                        a.push(String.fromCharCode(n));
                    }
                    return a.join("");
                };
                TylogService.prototype.getUser = function (key) {
                    if (key === this.key) {
                        return Promise.resolve(this.username);
                    }
                    return Promise.resolve(undefined);
                };
                TylogService.prototype.updateBody = function (id, newBody) {
                    for (var i = 0; i < mock_db_1.POSTS.length; i++) {
                        if (mock_db_1.POSTS[i]._id == id) {
                            mock_db_1.POSTS[i].body = newBody;
                            break;
                        }
                    }
                };
                TylogService.prototype.signUp = function (username, pass, rpass) {
                    if (pass !== rpass) {
                        return Promise.resolve("passwords don't match");
                    }
                    for (var i = 0; i < mock_db_3.USERS.length; i++) {
                        if (mock_db_3.USERS[i]._id == username) {
                            return Promise.resolve("user already exists");
                        }
                    }
                    mock_db_3.USERS.push({ _id: username, password: pass });
                    return Promise.resolve("created " + username + " sucessfully");
                };
                TylogService.prototype.addComment = function (comment) {
                    console.log("new comment");
                    comment._id = this.nextCommentId.pop();
                    //inserted at end,
                    if (comment._id == mock_db_2.COMMENTS.length) {
                        this.nextCommentId.push(mock_db_2.COMMENTS.length + 1);
                    }
                    mock_db_2.COMMENTS.push(comment);
                    return Promise.resolve(comment);
                };
                TylogService.prototype.deleteComment = function (id) {
                    var i = -1;
                    for (var j = 0; j < mock_db_2.COMMENTS.length; j++) {
                        if (mock_db_2.COMMENTS[j]._id === id) {
                            i = j;
                            break;
                        }
                    }
                    if (i > -1) {
                        mock_db_2.COMMENTS.splice(i, 1);
                        console.log("removed comment with id " + id + " at index " + i);
                        this.nextCommentId.push(id);
                        return Promise.resolve(id);
                    }
                    else {
                        console.log("could not find comment with id " + id);
                        return Promise.resolve(undefined);
                    }
                };
                TylogService.prototype.deletePost = function (id) {
                    var i = -1;
                    var c = []; //comments to delete
                    for (var j = 0; j < mock_db_1.POSTS.length; j++) {
                        if (mock_db_1.POSTS[j]._id === id) {
                            i = j;
                            break;
                        }
                    }
                    if (i > -1) {
                        for (var j = 0; j < mock_db_2.COMMENTS.length; j++) {
                            if (mock_db_2.COMMENTS[j].post == id) {
                                this.deleteComment(mock_db_2.COMMENTS[j]._id);
                            }
                        }
                        mock_db_1.POSTS.splice(i, 1);
                        console.log("removed post with id " + id + " at index " + i);
                        this.nextPostId.push(id);
                        return Promise.resolve(id);
                    }
                    else {
                        console.log("could not find post with id " + id);
                        return Promise.resolve(undefined);
                    }
                };
                TylogService.prototype.newPost = function (post) {
                    console.log("new post");
                    post._id = this.nextPostId.pop();
                    //inserted at end,
                    if (post._id == mock_db_1.POSTS.length) {
                        this.nextPostId.push(mock_db_1.POSTS.length + 1);
                    }
                    mock_db_1.POSTS.push(post);
                    console.log(post.title);
                    return Promise.resolve(true);
                };
                TylogService.prototype.getUsers = function () {
                    return Promise.resolve(mock_db_3.USERS);
                };
                TylogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TylogService);
                return TylogService;
            }());
            exports_1("TylogService", TylogService);
        }
    }
});
//# sourceMappingURL=tylog.service.js.map