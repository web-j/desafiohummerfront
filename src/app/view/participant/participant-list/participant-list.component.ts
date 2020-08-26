import { Component, OnInit } from '@angular/core';

import { ParticipantService } from 'src/app/view/participant/participant-service/participant.service';
import { Participant } from 'src/app/view/participant/participant-model/participant.model';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {

  public participants: Participant[] = [];

  constructor(
    private participantService: ParticipantService
  ) { }

  ngOnInit(): void {
    this.participantService.getAll().subscribe(res => {
      this.participants = res;
      console.log(this.participants);
    });
  }

}
