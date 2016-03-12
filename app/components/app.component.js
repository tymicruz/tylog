System.register(["angular2/core", "app/services/tylog.service", "angular2/router", "app/components/posts.component", "app/components/login.component", "app/components/new-post.component", "app/components/post-expand.component"], function(exports_1, context_1) {
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
    var core_1, tylog_service_1, router_1, posts_component_1, login_component_1, new_post_component_1, post_expand_component_1;
    var AppComponent;
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
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (new_post_component_1_1) {
                new_post_component_1 = new_post_component_1_1;
            },
            function (post_expand_component_1_1) {
                post_expand_component_1 = post_expand_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Tylog";
                    this.img = "app/views/images/ang2green.png";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n\t\t<h1>{{ title }} </h1>\n\t\t\t\t<nav>\n\t\t<!--<a [routerLink]=\"['Login']\">Login</a>\n\t\t<a [routerLink]=\"['Posts']\">Posts</a> -->\n\t\t</nav>\n\n\t\t<router-outlet></router-outlet>\n\t",
                        styles: ["\n\n\t"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, tylog_service_1.TylogService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/posts/:key',
                            name: 'Posts',
                            component: posts_component_1.PostsComponent
                        },
                        {
                            path: 'expand/:id/:key',
                            name: 'PostExpand',
                            component: post_expand_component_1.PostExpandComponent
                        },
                        {
                            path: 'login',
                            name: 'Login',
                            component: login_component_1.LoginComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/newPost/:key',
                            name: 'NewPost',
                            component: new_post_component_1.NewPostComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map