import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: Course[] = COURSES;
  today = new Date();

  onCourseSelected(course: Course) {
    console.log(`course ${course.id} clicked`);
  }
}
