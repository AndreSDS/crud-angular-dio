import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl: string = "http://localhost:3100/api/courses";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]>{
    return this.http.get<Course[]>(this.courseUrl).pipe(take(1));
  }

  getById(id: number): Observable<Course>{
    return this.http.get<Course>(`${this.courseUrl}/${id}`).pipe(take(1));
  }

  save(course: Course): Observable<Course>{
    if(course.id){
      return this.http.put<Course>(`${this.courseUrl}/${course.id}`, course).pipe(take(1));
    }else{
      return this.http.post<Course>(this.courseUrl, course).pipe(take(1));
    }
  }

  deleteById(id: number): Observable<any>{
    return this.http.delete<any>(`${this.courseUrl}/${id}`).pipe(take(1));
  }
}
