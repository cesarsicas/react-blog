export class PostSiteComment{    
    
    constructor(sitePostRepository){
        this.repository = sitePostRepository;
    }
    execute(postId, commentAuthor, commentBody){
        return this.repository.postComment(postId, commentAuthor, commentBody);
    }
}