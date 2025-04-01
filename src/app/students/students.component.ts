import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{

  students: Student[] = [];

  constructor(private service: StudentService){}

  ngOnInit(): void {
     this.service.getStudents().subscribe({
        next: json => this.students = json
     });
  }

}
