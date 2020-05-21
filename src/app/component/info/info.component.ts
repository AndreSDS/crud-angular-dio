import { CourseService } from './../course.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.course = this.courseService.getById(parseInt(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  save(): void {
    this.courseService.save(this.course);
    this.router.navigate(['/courses'])
  }

}
