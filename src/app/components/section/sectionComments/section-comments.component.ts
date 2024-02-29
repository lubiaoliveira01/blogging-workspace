import { ButtonComponent } from 'blogging-lib';
import { SectionComments } from '../../../utils/rawPostTypes';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { SectionService } from 'src/app/services/section.service';
import { SectionUser } from 'src/app/utils/rawPostTypes';

@Component({
  selector: 'app-section-comments',
  templateUrl: './section-comments.component.html',
  styleUrls: ['./section-comments.component.css'],
})
export class SectionCommentsComponent implements OnInit {

  listSectionComments: SectionUser[] = []

  constructor(private service: SectionService) { }

  ngOnInit(): void {
    this.service.getSection().subscribe((listSectionComments) => {
      this.listSectionComments = listSectionComments
    })
  }

  trackComments(index: number, comment: any) {
    return comment ? comment.id : null
  }

  visible:boolean = false;
   showhideUtility(){
    this.visible = this.visible?false:true;
   }

}
