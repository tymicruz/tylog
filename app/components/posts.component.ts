import {Component} from 'angular2/core';
import {Post} from 'app/interfaces/post';
import {TylogService} from 'app/services/tylog.service';
//import {NewPostComponent} from 'app/components/new-post.component';

import {OnInit} from 'angular2/core';
import {Router } from 'angular2/router';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'my-posts',

    templateUrl: 'app/views/posts.component.html',

    styleUrls: ['app/views/styles/style.css'],
	//'app/views/styles/heroes.component.css'
	directives: [],
	providers: []

})

export class PostsComponent implements OnInit { 

	public title = "Posts";
	public selectedPost: Post;
	public user: string;
  	public posts: Post[];
public image = "app/views/images/ang2green.png";

		constructor(
			private _router: Router,
	private _routeParams: RouteParams,
    private _tylogService: TylogService){

	}

	getPosts() {
		this._tylogService.getPosts().then(posts => this.posts = posts);
	}

	//getHeroesSlowly() {
	//	this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	//}

	ngOnInit() {
		let key = this._routeParams.get('key');
		//this.user = "";

		this._tylogService.getUser(key).then(user => { 

			this.user = user;

			if(user == undefined){
				this._router.navigate(['Login']);
			}
			 });
		this.getPosts();
	}

  gotoPost(id: number){
		this._router.navigate(['PostExpand', { id: id, key: this._routeParams.get('key') }]);
	}

	newPost(){
	  this._router.navigate(['NewPost',{ key: this._routeParams.get('key') }]])
  }

logout(){
	this._tylogService.logout().then(() => { this._router.navigate(['Login']);})
}





