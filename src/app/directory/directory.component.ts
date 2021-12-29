import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../services/directory.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  itemList: any[] = [];
  filteredItemList: any[] = [];
  searchText: string = '';
  constructor(private apiService: DirectoryService) {}

  ngOnInit(): void {
    this.getAllDirectories();
  }

  getAllDirectories() {
    this.apiService.getAllDirectories().subscribe((res) => {
      this.itemList = res;
      this.filteredItemList = res;
    });
  }
  searchItem(event: KeyboardEvent) {
    this.filterDirList();
  }
  filterDirList() {
    if (this.searchText == '') {
      this.filteredItemList = this.itemList;
    } else {
      this.filteredItemList = this.itemList.filter((x) =>
        x.name.toLowerCase().startsWith(this.searchText)
      );
    }
  }
}
