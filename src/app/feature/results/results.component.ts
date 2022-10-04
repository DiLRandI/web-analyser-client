import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input()
  public item: any;
  public headings: any;
  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit(): void {
    if (this.item && this.item.headings) {
      this.headings = Object.keys(this.item.headings)
    }
  }
}
