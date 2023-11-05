import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
  
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

  courses: Course[] = COURSES;
  today = new Date();

  onCourseSelected(course: Course) {
    console.log(`course ${course.id} clicked`);
  }
}
