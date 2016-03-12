import {Component} from "angular2/core";

import {TylogService} from "app/services/tylog.service";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";

import {PostsComponent} from "app/components/posts.component";
import {LoginComponent} from "app/components/login.component";
import {NewPostComponent} from "app/components/new-post.component";
import {PostExpandComponent} from "app/components/post-expand.component";

@Component ({
	selector: 'my-app',

	template: `

		<h1>{{ title }} </h1>
				<nav>
		<!--<a [routerLink]="['Login']">Login</a>
		<a [routerLink]="['Posts']">Posts</a> -->
		</nav>

		<router-outlet></router-outlet>
	`,
	styles[`

	`],
	directives : [ROUTER_DIRECTIVES],

	providers: [ROUTER_PROVIDERS, TylogService]
})

@RouteConfig([

		{
			path: '/posts/:key',
			name: 'Posts',
			component: PostsComponent
		},
		{
			path:'expand/:id/:key',
			name: 'PostExpand',
			component: PostExpandComponent
		},
		{
			path: 'login',
			name: 'Login',
			component: LoginComponent,
			useAsDefault: true
		},
		{
			path: '/newPost/:key',
			name: 'NewPost',
			component: NewPostComponent
		}

	])

export class AppComponent {
	public title = "Tylog";
	public img = "app/views/images/ang2green.png";



}