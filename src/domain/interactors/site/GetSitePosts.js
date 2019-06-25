export class GetSitePosts{    
    constructor(sitePostRepository){
        this.repository = sitePostRepository;
    }
    
    execute(){
        return this.repository.getPosts();
    }
}