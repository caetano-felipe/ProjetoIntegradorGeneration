import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() message: string
  @Input() type = 'success'

  constructor(public modal: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose() {
    this.modal.hide()
  }

}
