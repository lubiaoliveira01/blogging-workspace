import { Component, OnInit } from '@angular/core';
import { SectionUserService } from './sectionUser.service';
import { ISectionUser } from './sectionUser';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],

})
export class SectionComponent implements OnInit {

  listSectionUser: ISectionUser[] = []

  constructor(private service: SectionUserService) { }

  ngOnInit(): void {
    this.service.getSectionUser().subscribe((listSectionUser) => {
      this.listSectionUser = listSectionUser
    })
  }

}
