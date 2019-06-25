export class GetAdminPostsDetails{    
    
    constructor(adminPostsRepository) {
        this.repository = adminPostsRepository;
    }

    execute(token, postId){
        return this.repository.getPostDetails(token, postId);
    }
}