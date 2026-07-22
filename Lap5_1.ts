class UserAccount{
    public userName: string ;
    private passWord: string ;

    constructor(username: string,password: string){
        this.userName = username;
        this.passWord = password;
    }
    public changePassword(oldPassword:string,newPasseord:string){
        if(this.passWord === oldPassword){
            this.passWord = newPasseord;
            console.log("เปลี่ยนรหัสผ่านเรียบร้อยแล้ว");
        }else{
            console.error("คุณใส่รหัสผ่านไม่ถูกต้อง");
        }
    }
}

const user1 = new UserAccount("Suvimol","123456")
user1.changePassword("234567","156465");
user1.changePassword("123456","156465");
