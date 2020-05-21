import { CourseService } from '../course.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor( private courseService: CourseService) { }

  courses: Course[] = [];
  _filterBy: string;
  filteredCourses: Course[] = [];

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void{
    this.courseService.getAll().subscribe({
      next: courses =>{
        this.courses = courses;
        this.filteredCourses = this.courses;
      },
      error: err => console.log('Error: ',err)
    });
  }

  deleteCourse(courseId: number): void{
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log("Course deleted with success");
        this.getAllCourses();
      },
      error: err => console.log("Error: ", err)
    });
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }
}
