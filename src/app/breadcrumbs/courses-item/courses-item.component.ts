import { EventEmitter, Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { CoursesItem } from '../courses-item.model';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesItemComponent implements OnInit {
  @Input() public coursesItem: CoursesItem;
  @Output() deleteItem = new EventEmitter<number>();

  id: number;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    
  }

  delete(id:number): void {
    this.deleteItem.emit(id);
  }
}
