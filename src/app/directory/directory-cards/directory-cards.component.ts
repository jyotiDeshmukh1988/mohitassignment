import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory-cards',
  templateUrl: './directory-cards.component.html',
  styleUrls: ['./directory-cards.component.scss'],
})
export class DirectoryCardsComponent implements OnInit {
  constructor() {}
  @Input() cardInfo: any;
  ngOnInit(): void {}
}
