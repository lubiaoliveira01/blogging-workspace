import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { SectionUser } from 'src/app/utils/rawPostTypes';
import { User } from 'src/app/utils/userTypes';

@Component({
  selector: 'app-section-user',
  templateUrl: './section-user.component.html',
  styleUrls: ['./section-user.component.css'],
})
export class SectionUserComponent implements OnInit {
  listSectionUser: SectionUser[] = [];

  listUser: User = {
    id: 0,
    username: '',
    memberSince: '',
    friendIds: [0],
    posts: [
      {
        id: 0,
        title: '',
        subtitle: '',
        content: '',
      },
    ],
  };

  constructor(private service: SectionService) {}

  ngOnInit(): void {
    this.service.getSection().subscribe((listSectionUser) => {
      this.listSectionUser = listSectionUser;
    });

    this.service.getUser(1).subscribe((listUser) => {
      this.listUser = listUser;
    });
  }

  viewModal: boolean = false;

  toggle() {
    this.viewModal = !this.viewModal;
  }
}
