import { Injectable } from '@angular/core';

const USER = 'att_user';
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }
  static getUser(): any {
    return JSON.parse(localStorage.getItem(USER));
  }
  static getUserId(): string{
    const user = this.getUser();
    if(user == null){return '';}
    return user.id;
  }
    static getUserProjectId(): string{
    const user = this.getUser();
    if(user == null){return '';}
    return user.projectId;
    }
    static getUserRoll(): string{
    const user = this.getUser();
    if(user == null){return '';}
    return user.userRole;
    }

    static isAdminLoggedIn(): boolean{
      if(this.getUserRoll() == ''){
        return false;
      }
      const role:string = this.getUserRoll();
      return role === 'ADMIN';
    }
     static isEmployeeLoggedIn(): boolean{
      if(this.getUserRoll() == ''){
        return false;
      }
      const role:string = this.getUserRoll();
      return role === 'EMPLOYEE';
    }
     static isManagerLoggedIn(): boolean{
      if(this.getUserRoll() == ''){
        return false;
      }
      const role:string = this.getUserRoll();
      return role === 'MANAGER';
    }

    static signOut(): void {
      window.localStorage.removeItem(USER);
    }
}
