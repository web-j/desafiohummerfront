import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';

import { ParticipantService } from 'src/app/view/participant/participant-service/participant.service';
import { Participant } from 'src/app/view/participant/participant-model/participant.model';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {

  public participants: Participant[] = [];

  public displayedColumns: string[] = ['name', 'email', 'accessRole'];
  public dataSource: Participant[] = [];

  constructor(
    private participantService: ParticipantService
  ) { }

  ngOnInit(): void {
    this.participantService.getAll().subscribe(res => {
      this.dataSource = res;
    });
  }

}

@Pipe({ name: 'accessRoleConverter' })
export class ConverteraccessRolePipe implements PipeTransform {
  transform(accessRole: string): string {
    if (accessRole === 'ADMIN') {
      return 'Administrador';
    } else if (accessRole === 'PARTICIPANT') {
      return 'Participante';
    }
  }
}
