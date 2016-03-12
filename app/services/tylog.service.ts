import {POSTS} from 'app/mock-db';
import {COMMENTS} from 'app/mock-db';
import {USERS} from 'app/mock-db';

import {Injectable} from 'angular2/core';
import {Post} from "app/post";
import {Comment} from "app/comment";
import {User} from "app/user";

@Injectable()
export class TylogService {

	username: string;
	key: string;

	nextCommentId : number[] = [];
	nextPostId: number[] = [];

	constructor(){
		this.nextCommentId.push(COMMENTS.length);
		this.nextPostId.push(POSTS.length);

		console.log("next comment id:");
		for (var i = 0; i < this.nextCommentId.length; i++){
			console.log(this.nextCommentId[i]);
		}
	}
			getPosts() {
		return Promise.resolve(POSTS);
	}

	getPost(id : number) {
		return Promise.resolve(POSTS).then(
			posts => posts.filter(post => post._id == id)[0]
			);
	}

	getComments(post: number) {
		return Promise.resolve(COMMENTS).then(
			comments => comments.filter(comment => comment.post === post)
			);
	}

	validate(username: string, password: string){

		for (var i = 0; i < USERS.length; i++) {
			if(USERS[i]._id == username){
				if(USERS[i].password == password){
					this.username = username;
					return Promise.resolve(true);
				}
				return Promise.resolve(false);
			}
		}

		return Promise.resolve(false);
	}

	login(username: string, password: string){

		for (var i = 0; i < USERS.length; i++) {
			if(USERS[i]._id == username){
				if(USERS[i].password == password){
					this.username = username;
					var key = this.getRandomKey();
					this.key = key;

					return Promise.resolve(key);
				}
				return Promise.resolve(undefined);
			}
		}

		return Promise.resolve(undefined);
	}

	logout(){
		this.username = undefined;
		this.key = undefined;

		return Promise.resolve(true);
	}

	getRandomNumber(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	getRandomKey() {
		var len = this.getRandomNumber(5, 10);
		var a = [];

		for (var i = 0; i < len; i++){

			let n = Math.floor(this.getRandomNumber(65, 90));
			//console.log(n);
			a.push(String.fromCharCode(n));
		}

		return a.join("");
	}

	getUser(key: string){
		if(key === this.key){
			return Promise.resolve(this.username);
		}

		return Promise.resolve(undefined);
	}

	updateBody(id: number, newBody: string){
		for (var i = 0; i < POSTS.length; i++){
			if(POSTS[i]._id == id){
				POSTS[i].body = newBody;
				break;
			}
		}
	}
	
	signUp(username : string, pass: string, rpass:string){

		if(pass !== rpass){
			return Promise.resolve("passwords don't match");
		}

		for (var i = 0; i < USERS.length; i++) {
			if(USERS[i]._id == username){
			
					return Promise.resolve("user already exists");
			}
		}

		USERS.push({ _id: username, password: pass });

		return Promise.resolve("created " + username + " sucessfully");

	}

	addComment(comment: Comment){
		console.log("new comment")
		comment._id = this.nextCommentId.pop();

		//inserted at end,
		if(comment._id == COMMENTS.length){
			this.nextCommentId.push(COMMENTS.length + 1);
			//need to allocated new commmnent id
		}

		COMMENTS.push(comment);

		return Promise.resolve(comment);
	}

	deleteComment(id : number){
		var i = -1;

		for (var j = 0; j < COMMENTS.length; j++){
			if(COMMENTS[j]._id === id){
				i = j;
				break;
			}
		}

		if(i > -1){
			COMMENTS.splice(i, 1);
			console.log("removed comment with id " + id + " at index " + i);
			this.nextCommentId.push(id);
			return Promise.resolve(id);
		}else{
			console.log("could not find comment with id " + id);
			return Promise.resolve(undefined);
		}
	}

	deletePost(id : number){

		var i = -1;
		var c = []; //comments to delete

		for (var j = 0; j < POSTS.length; j++) {
			if (POSTS[j]._id === id) {
				i = j;
				break;
			}
		}
			
			if(i > -1){

				for (var j = 0; j < COMMENTS.length; j++){
					if(COMMENTS[j].post == id){
						this.deleteComment(COMMENTS[j]._id);
					}
				}

			POSTS.splice(i, 1);
			console.log("removed post with id " + id + " at index " + i);
			this.nextPostId.push(id);
			return Promise.resolve(id);
		}else{
			console.log("could not find post with id " + id);
			return Promise.resolve(undefined);
		}

	}

	newPost(post: Post) {
		console.log("new post")
		post._id = this.nextPostId.pop();

		//inserted at end,
		if(post._id == POSTS.length){
			this.nextPostId.push(POSTS.length + 1);
			//need to allocated new commmnent id
		}

		POSTS.push(post);

		console.log(post.title);

		return Promise.resolve(true);
	}

	getUsers(){
		return Promise.resolve(USERS);
	}
	

}