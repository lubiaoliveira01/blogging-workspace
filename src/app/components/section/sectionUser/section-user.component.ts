import { Component, OnInit } from '@angular/core';
import { ISectionUser } from '../sectionInterface';
import { SectionUserService } from './sectionUser.service';

@Component({
  selector: 'app-section-user',
  templateUrl: './section-user.component.html',
  styleUrls: ['./section-user.component.css']
})
export class SectionUserComponent implements OnInit {

  listSectionUser: ISectionUser[] = []

  constructor(private service: SectionUserService) { }

  ngOnInit(): void {
    this.service.getSectionUser().subscribe((listSectionUser) => {
      this.listSectionUser = listSectionUser
    })
  }

}
