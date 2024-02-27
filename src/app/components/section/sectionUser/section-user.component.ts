import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { SectionUser } from 'src/app/utils/types';

@Component({
  selector: 'app-section-user',
  templateUrl: './section-user.component.html',
  styleUrls: ['./section-user.component.css']
})
export class SectionUserComponent implements OnInit {

  listSectionUser: SectionUser[] = []

  constructor(private service: SectionService) { }

  ngOnInit(): void {
    this.service.getSection().subscribe((listSectionUser) => {
      this.listSectionUser = listSectionUser
    })
  }

}
