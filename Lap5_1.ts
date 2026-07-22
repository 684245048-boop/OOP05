export {}; 
class UserAccount {
    public userName: string;
    private password: string;
    constructor(username: string, password: string) {
        this.userName = username;
        this.password = password;
    }
    public changePassword(oldPassword: string, newPassword: string) {
        if (this.password === oldPassword) {
            this.password = newPassword;
            console.log("เปลี่ยนรหัสผ่านเรียบร้อยแล้ว");
        } else {
            console.error("คุณใส่รหัสผ่านไม่ถูกต้อง");
        }
    }
}

// เติม ; ปิดท้ายบรรทัดให้สมบูรณ์
const user1 = new UserAccount("Suvimol", "123456");
user1.changePassword("234567", "156465");
user1.changePassword("123456", "156465");