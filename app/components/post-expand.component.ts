import {Component, OnInit} from 'angular2/core';
import {Post} from "app/interfaces/post";
import {Comment} from "app/interfaces/comment";
import {User} from "app/interfaces/user";
import {RouteParams, Router} from 'angular2/router';

import {TylogService} from "app/services/tylog.service";

@Component({

	selector: 'my-post-expand',
	templateUrl: "app/views/post-expand.component.html",
	styleUrls: ["app/views/styles/style.css"],
	inputs: ['post']
})

export class PostExpandComponent implements OnInit {
	post: Post;
	public title;
	public newcomment: Comment;
	public user: string;
	public editMode: boolean;
	public editButtonText: string;
	public newBody: string;
	public newTitle: string;
	public commentPlaceholder: string = "enter comment here";
	public image = "app/views/images/ang2green.png";
	public admin: boolean = false;
	public bodyPlaceholder: string = "body can't be blank";
	public titlePlaceholder: string = "title can't be blank";

	constructor(
		private _router: Router,
		private _tylogService: TylogService,
		private _routeParams: RouteParams) {


	}

	ngOnInit() {
		this.editMode = false;
		let id_string = this._routeParams.get('id');

		//if(id_string == undefined){
		//	this._
		//}

		let id = +id_string;
		this._tylogService.getPost(id)
		.then(post => this.post = post).then(post => {
			this.newBody = post.body;

			let key = this._routeParams.get('key');

			this._tylogService.getUser(key).then(user => {

				if (user === undefined) {
					this._router.navigate(['Login']);
				}

				if (user == post.user || user == "admin") {
					this.image = "app/views/images/ang2blue.png";
					this.admin = true;
				}

				this.user = user
			});

		})

		this._tylogService.getComments(id)
		.then(comments => this.comments = comments)

		this.newcomment = { _id: 0, post: id, dislikes: 0, likes: 0, body: "" }



		this.editButtonText = "edit";
	}

	toggleEditMode() {
		if (this.editButtonText == "edit") {
			this.newBody = this.post.body;
			this.newTitle = this.post.title;
			this.editButtonText = "cancel";
			this.editMode = true;
		} else {

			this.editButtonText = "edit";
			this.editMode = false;
		}
	}

	save() {

		var allSpaces = false;
		var badBody = false;
		var badTitle = false;

		if (this.newBody.length === undefined || !this.newBody.length) {
			this.bodyPlaceholder = "can't post blank post";
			badBody = true;
			//return;
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
			//return;
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

		if(badBody || badTitle){
			return;
		}

		this.editMode = false;
		this.editButtonText = "edit";

		this.post.body = this.newBody;
		this.post.title = this.newTitle;

		//add update title
		this._tylogService.updateBody(this.post._id, this.newBody);
	}

	deleteComment(id: number) {
		this._tylogService.deleteComment(id).then(id => {
			console.log("successfully removed comment " + id);

			if (id != undefined) {

				let id = +this._routeParams.get('id');

				this._tylogService.getComments(id)
				.then(comments => this.comments = comments)
			}
			else {
				console.log("failed to remove comment");
			}

		});
	}

	deletePost(id : number){
		this._tylogService.deletePost(id).then(id => { console.log(id);
			this.gotoPosts();
		});
	}

	postComment() {

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




		this._tylogService.addComment(this.newcomment).then(() => {

			let id = +this._routeParams.get('id');
			this._tylogService.getComments(id)
			.then(comments => this.comments = comments)

			this.newcomment = { _id: 0, post: id, dislikes: 0, likes: 0, body: "" }
			this.commentPlaceholder = "enter comment here";
		}
		)
	}
	goBack() {
		window.history.back();
	}

	gotoPosts() {
		this._router.navigate(['Posts', { key: this._routeParams.get('key') }]);
	}

	logout() {
		this._tylogService.logout().then(() => { this._router.navigate(['Login']); })

	}
}