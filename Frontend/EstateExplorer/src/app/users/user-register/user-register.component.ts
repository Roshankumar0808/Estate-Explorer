import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,AbstractControl,ValidationErrors,FormBuilder} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/model/user';
import { AltertifyService } from 'src/app/services/Altertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  
  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private Fb: FormBuilder,private userService: UserServiceService,private alertify:AltertifyService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName:new FormControl(null,Validators.required),
    //   email:new FormControl(null,[Validators.required,Validators.email]),
    //   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword:new FormControl(null,[Validators.required]),
    //   mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // },this.passwordMatchingValidator)
    this.createRegistrationForm();
  }
   createRegistrationForm(){
    this.registrationForm=this.Fb.group({
      userName: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword: [null,Validators.required],
      mobile: [null,[Validators.required,Validators.maxLength(10)]]
    },{validators: this.passwordMatchingValidator});
   }
  passwordMatchingValidator(fc:AbstractControl): ValidationErrors|null{
    return fc.get('password')?.value === fc.get('confirmPassword')?.value? null:{notmatched:true};
  }
 //Getter method for all form controls
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registrationForm);
    this.userSubmitted=true;
    if(this.registrationForm.valid){
    // this.user=Object.assign(this.user,this.registrationForm.value);
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    this.userSubmitted=false;
    this.alertify.success('Congrats,you are successfully registered');
    }
    else{
      this.alertify.error('Kindly provide the required fields');
      
    }
  }

   userData():User{
    return this.user={
  userName: this.userName.value,
  email: this.email.value,
  password: this.password.value,
  mobile: this.mobile.value
  }
  }


}
