import {Component} from 'angular2/core';
import {Post} from 'app/interfaces/post';
import {Comment} from 'app/interfaces/post';
import {User} from 'app/interfaces/post';
import {TylogService} from 'app/services/tylog.service';

import {OnInit} from 'angular2/core';
import {Router } from 'angular2/router';


@Component({
	selector: 'my-login',

	templateUrl: 'app/views/login.component.html',

	styleUrls: ['app/views/styles/style.css'],
	//'app/views/styles/heroes.component.css'
	directives: [],
	providers: []

})

export class LoginComponent implements OnInit { 

	public title = "Posts";
	public selectedPost: Post;
	username: string;
	password: string;
	repeatedPassword: string;
	answer: boolean;
	error: string;
	public errorFlash = false;
	public image = "app/views/images/ang2green.png";
	public newUser = false;
	public users: User[];

	public posts: Post[];
	public showUsersText = "show users::passwords";
	public secret = false;

	constructor(
		private _router: Router,
		private _tylogService: TylogService){

	}

	login() {

		this._tylogService.login(this.username, this.password)
		.then(answer => this.tryLogin(answer));

	}

	tryLogin(answer: string){
		
		if(answer){
			this._router.navigate(['Posts', {key: answer}]);

		}else{
			this.error = "wrong username or password";
			this.image = "app/views/images/ang2red.png";
			this.errorFlash = true;
			this.animateButton(5);
		}
	}

	animateButton(i: number){

		if (i == 0) return;

		setTimeout(() => {

			if(i % 2 == 0){
				this.image = "app/views/images/ang2green.png";
				this.errorFlash = false;

			}else{
				this.image = "app/views/images/ang2red.png";
				this.errorFlash = true;
			}

			this.animateButton(i - 1);
		}, 500);
	}

	loginToggle(){
		if (this.newUser) {
			//regular login
			this.newUser = false;
		}
		else { 
			//toggle to new user mode
			this.newUser = true;
			this.secret = false;
			this.showUsersText = "show users::passwords"; 
		}

		this.error = undefined;
		this.image = "app/views/images/ang2green.png";
	}

	signUp() {
		if (!this.username){
			this.error = "enter a username"
			this.animateButton(10);
			return;
		}

		if (!this.password || !this.repeatedPassword){
			this.error = "fill in password";
			this.animateButton(10);
			return;
		}

		if (!this. username.length){
			this.error = "enter a username";
			this.animateButton(10);
			return;
		}


		if (this.password != this.repeatedPassword){
			this.error = "passwords don't match"
			this.animateButton(5);
			return;
		}

		this.error = undefined;
		this.image = "app/views/images/ang2green.png";


		this._tylogService.signUp(this.username, this.password, this.repeatedPassword)
			.then(answer => { this.error = answer; this.errorFlash = false; this._tylogService.getUsers().then(users => this.users = users);});
	}
	ngOnInit() {
		//auto login
		//this._tylogService.login("tyler", "two")
		//.then(answer => this.tryLogin(answer));
		this._tylogService.getUsers().then(users => this.users = users);
	}

	showUsers(){

		if(this.secret){
			this.showUsersText = "show users::passwords";
			console.log(this.users[0]._id);
			this.secret = false;
		}else{
			this.showUsersText = "hide users::passwords";
			this.secret = true;
		}

	}

	

}



