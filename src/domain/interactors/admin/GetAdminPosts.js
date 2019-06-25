export class GetAdminPosts {
    constructor(adminPostsRepository) {
        this.repository = adminPostsRepository;
    }

    execute(token) {
        return this.repository.getPosts(token);
    }
}