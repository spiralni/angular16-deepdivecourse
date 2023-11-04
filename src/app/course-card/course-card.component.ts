import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'sp-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input({required: true})
  course!: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onClick(): void {
    console.log('"View Course" button clicked');
    this.courseSelected.emit(this.course);
  }
}
