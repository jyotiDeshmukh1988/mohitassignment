import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../services/directory.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  dirList: any[] = [];
  filteredDirList: any[] = [];
  searchText: string = '';
  constructor(private apiService: DirectoryService) {}

  ngOnInit(): void {
    this.getAllDirectories();
  }

  getAllDirectories() {
    this.apiService.getAllDirectories().subscribe((res) => {
      this.dirList = res;
      this.filteredDirList = res;
    });
  }
  searchItem(event: KeyboardEvent) {
    this.filterDirList();
  }
  filterDirList() {
    // this.filteredDirList = this.dirList.filter();

    this.filteredDirList = this.dirList.filter((x) =>
      x.name.toLowerCase().startsWith('p')
    );
  }
}
