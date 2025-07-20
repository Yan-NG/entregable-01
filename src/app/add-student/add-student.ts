import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../shared/entities';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.scss'
})
export class AddStudent  implements OnInit {
  studentForm!: FormGroup;
  @Output() studentAdded = new EventEmitter<Student>();
  constructor(private fb: FormBuilder) {}


  ngOnInit() {
     this.studentForm = this.fb.group({
      dni: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      average: [
        '',
        [Validators.required, Validators.min(0), Validators.max(10)],
      ],
    });
  }

  onSubmit(){
    console.log('Form submitted');
    this.studentAdded.emit(this.studentForm.value);

  }

  onReset(){
    // Reset the form to its initial state
    this.studentForm.reset();
  }
}
