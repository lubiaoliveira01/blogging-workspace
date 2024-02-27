import { Component, OnInit } from '@angular/core';
import { SectionCommentsService } from './sectionComments.service';
import { ISectionComments, ISectionUser } from '../sectionInterface';

@Component({
  selector: 'app-section-comments',
  templateUrl: './section-comments.component.html',
  styleUrls: ['./section-comments.component.css']
})
export class SectionCommentsComponent implements OnInit {

  listSectionComments: ISectionUser[] = []

  constructor(private service: SectionCommentsService) { }

  ngOnInit(): void {
    this.service.getSectionComments().subscribe((listSectionComments) => {
      this.listSectionComments = listSectionComments
    })
  }

  trackComments(index: number, comment: any) {
    return comment ? comment.id : null
  }

}
