import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-projects',
  imports: [SharedModule],
  templateUrl: './manage-projects.component.html',
  styleUrl: './manage-projects.component.scss'
})
export class ManageProjectsComponent {

  projectForm!:FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.projectForm = this.fb.group({
      name: [null,[Validators.required]],
      duration: [null,[Validators.required]],
      startDate: [null,[Validators.required]],

    });
}

}
