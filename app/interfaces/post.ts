export interface Post {
	_id: string;
	body: string;
	user: string;
	likes: number;
	dislikes: number;
	title: string;
}