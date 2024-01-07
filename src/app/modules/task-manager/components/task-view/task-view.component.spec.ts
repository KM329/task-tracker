import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskViewComponent } from './task-view.component';
import { MatCardModule } from '@angular/material/card';
import { List } from '../../models';
import { By } from '@angular/platform-browser';

describe('TaskViewComponent', () => {
  let component: TaskViewComponent;
  let fixture: ComponentFixture<TaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskViewComponent ],
      imports: [
        MatCardModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list content correctly', () => {
    const listContent: List = {
      id: 1,
      title: 'Test Title',
      description: 'Test Description',
      status: 'Pending',
      dueDate: '2024-01-01',
    };
    component.listContent = listContent;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('.col-6 h2')).nativeElement;
    const descriptionElement = fixture.debugElement.query(By.css('.col-12 p')).nativeElement;
  
    expect(titleElement.textContent).toContain(listContent.title);
    expect(descriptionElement.textContent).toContain(listContent.description);

  });
});
