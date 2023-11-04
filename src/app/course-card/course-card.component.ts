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
    this.courseSelected.emit(this.course);
  }

  setCardClasses() {
    return {
      beginner: this.course.category === 'BEGINNER',
    }
  }
}
