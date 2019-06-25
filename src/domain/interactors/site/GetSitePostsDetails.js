export class GetSitePostsDetails{    
    
    constructor(sitePostRepository){
        this.repository = sitePostRepository;
    }
    execute(postId){
        return this.repository.getPostDetails(postId);
    }
}