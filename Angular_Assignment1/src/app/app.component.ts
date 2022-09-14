import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './services/api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular_Assignment1';

  pagesize = 50;
  currentPage = 0;
  totalRows = 0;
  filter = '';

  displayedColumns: string[] = [
    'id',
    'empname',
    'gender',
    'birthdate',
    'address',
    'mobile',
    'email',
    'company',
    'Action',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api: ApiService) {}
  openDialog() {
    this.dialog
      .open(DialogComponent, {
        width: '40%',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val == 'save') {
          this.getAllEmployee();
        }
      });
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pagesize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.api
      .getEmployeePagination(this.pagesize, this.currentPage, this.filter)
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res.response);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.totalRows = res.totalcount[0].count;

          setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = this.totalRows;
          });
        },
      });
  }

  editEmployee(row: any) {
    this.dialog
      .open(DialogComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val == 'Update') {
          this.getAllEmployee();
        }
      });
  }

  deleteEmployee(id: number) {
    this.api.deleteEmployee(id).subscribe({
      next: (res) => {
        alert('Employee deleted successfully ');
        this.getAllEmployee();
      },
      error: () => {
        alert('Error while deleteing the record');
      },
    });
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.getAllEmployee();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
