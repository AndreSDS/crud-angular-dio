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
    this.courses = this.courseService.getAll();
    this.filteredCourses = this.courses;
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredCourses = this.courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }

}
