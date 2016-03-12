import {Component} from 'angular2/core';
import {Post} from 'app/interfaces/post';
import {TylogService} from 'app/services/tylog.service';

import {OnInit} from 'angular2/core';
import {Router } from 'angular2/router';
import {RouteParams} from 'angular2/router';

@Component({
	selector: 'my-new-post',

	templateUrl: 'app/views/new-post.component.html',

	styleUrls: ['app/views/styles/style.css'],
	//'app/views/styles/heroes.component.css'
	directives: [],
	providers: []

})

export class NewPostComponent implements OnInit {

	public title = "New Post";
	public newPost: Post;
	public user: string;
	//public posts: Post[];
	public bodyPlaceholder: string = "body can't be blank";
	public titlePlaceholder: string = "title can't be blank";
	public image = "app/views/images/ang2green.png";

	constructor(
		private _router: Router,
		private _routeParams: RouteParams,
		private _tylogService: TylogService) {

	}

	post() {

		var allSpaces = false;
		var badBody = false;
		var badTitle = false;

		if (this.newPost.body.length === undefined || !this.newPost.body.length) {
			this.bodyPlaceholder = "can't post blank post";
			badBody = true;
			//return;
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
			//return;
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

		if(badBody || badTitle){
			var bb = "blank body";
			var bt = "blank title";

			this.title = "New Post (";

			if (badBody && badTitle)
				this.title += bb + " and " +bt + ")";
			else if(badTitle)
				this.title += bt + ")";
			else{
				this.title += bb + ")";
			}

			return;
		}




		this._tylogService.newPost(this.newPost).then(answer => 
		{
			this.title = "Post Submitted";

			setTimeout(() => {
				this._router.navigate(['Posts', {key: this._routeParams.get('key')}])
			}, 500);

		});
	}

	//getHeroesSlowly() {
	//	this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	//}

	ngOnInit() {

		this.newPost = { _id: 0, title: "", user: "", body: "", likes: 0, dislikes: 0}
		let key = this._routeParams.get('key');
		// 	//this.user = "";

		this._tylogService.getUser(key).then(user => { 

			this.user = user;
			this.newPost.user = user;

			if(user == undefined){
				this._router.navigate(['Login']);
			}
		});
	}

	gotoPosts() {
		this._router.navigate(['Posts', { key: this._routeParams.get('key') }]);
	}

	logout(){
		this._tylogService.logout().then(() => { this._router.navigate(['Login']);})

	}

goBack() {
		window.history.back();
	}

}