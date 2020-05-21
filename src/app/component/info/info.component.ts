import { CourseService } from './../course.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private router: Router) { }

  ngOnInit(): void {
    this.upDateCourse();
  }

  upDateCourse(): void{
    this.courseService.getById(parseInt(this.activatedRoute.snapshot.paramMap.get('id')))
    .pipe(
      take(1)
    )
    .subscribe({
      next: course => this.course = course,
      error: err => console.log("Error: ", err)
    }); 
  };

  save(): void {
    this.courseService.save(this.course).pipe(take(1)).subscribe({
      next: course => this.course = course,
      error: err => console.log("Error: ", err)
    });
    this.router.navigate(['/courses'])
  }

}
