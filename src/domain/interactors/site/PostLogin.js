export class PostLogin{    
   
    constructor(loginRepository){
        this.repository = loginRepository;
    }
    
    execute(username, password){
        return this.repository.postLogin(username, password);
    }
}