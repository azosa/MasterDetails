import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-employee-list',
  styleUrls: ['./employee-list.component.scss'],
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeesService.getAll();
  private _selectedEmployeeIdSubject: Subject<number> = new Subject<number>();
  public selectedEmployeeId$: Observable<number> = this._selectedEmployeeIdSubject.asObservable();
  readonly details$: Observable<EmployeeModel> = this.selectedEmployeeId$.pipe(
    switchMap(data => this._employeesService.getOne(data)));

  constructor(private _employeesService: EmployeesService) {
  }

  select(id: number): void {
    this._selectedEmployeeIdSubject.next(id);
  }
}
