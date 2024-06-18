import { Component, OnInit } from '@angular/core';
import { ColumnService } from '../../Services/column.service';
import { TaskService } from '../../Services/task.service';
import { Column } from '../../Models/column.model';
import { Task } from '../../Models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  columns: Column[] = [];
  tasks: Task[] = [];
  showModal: boolean = false;
  newColumnTitle: string = '';

  constructor(
    private columnService: ColumnService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.loadColumns();
    this.loadTasks();
  }

  loadColumns(): void {
    this.columnService.getAllColumns().subscribe((columns) => {
      this.columns = columns;
    });
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  getTasksForColumn(columnId: string): Task[] {
    return this.tasks.filter((task) => task.columnId === columnId);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  createColumn(): void {
    if (this.newColumnTitle.trim()) {
      const newColumn: Column = { id: '', title: this.newColumnTitle.trim() };
      this.columnService.createColumn(newColumn).subscribe((column) => {
        this.columns.push(column);
        this.newColumnTitle = '';
        this.showModal = false;
      });
    }
  }

  deleteColumn(columnId: string): void {
    this.columnService.deleteColumn(columnId).subscribe(() => {
      this.columns = this.columns.filter((column) => column.id !== columnId);
    });
  }
}
