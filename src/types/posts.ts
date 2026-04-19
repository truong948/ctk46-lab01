export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export type Posts = Post;

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}