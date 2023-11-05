import { 
  AfterContentInit, 
  AfterViewInit, 
  Component, 
  OnInit, 
  QueryList, 
  ViewChildren 
} from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
  courses: Course[] = COURSES;
  today = new Date();
  
  @ViewChildren(CourseCardComponent)
  cards!: QueryList<CourseCardComponent>

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterViewInit(): void {
      console.log('AfterViewInit');
  }

  onCourseSelected(course: Course) {
    console.log(`course ${course.id} clicked`);
  }

  addFakeCourse(): void {
    const newId = this.courses.length + 1;

    this.courses.push({
      id: newId,
      category: 'BEGINNER',
      description: `Course ${newId}`,
      iconUrl: '',
      longDescription: `Long course description ${newId}`,
      lessonsCount: 15
    });
  }
}
