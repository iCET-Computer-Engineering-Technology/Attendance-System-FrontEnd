import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../basic-services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserStorageService } from '../basic-services/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ){}


  ngOnInit(){
    this.loginForm = this.fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }
  submitForm(){
    this.authService.loginUser(this.loginForm.value).subscribe(res=>{
      UserStorageService.saveUser(res);

      if(UserStorageService.isAdminLoggedIn()){
        this.router.navigateByUrl('/admin/dashboard');
      }
        console.log(res);
    },error=>{
      this.message
      .error(
        `bad credentials`,
        {nzDuration:5000}
      )
    })
  }
}
