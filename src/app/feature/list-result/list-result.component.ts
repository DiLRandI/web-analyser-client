import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { interval, Subscription, switchMap } from 'rxjs';
import { AnalysisService } from 'src/app/services/analysis.service';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.scss'],
})
export class ListResultComponent implements OnInit, OnDestroy {

  public subscription: any;
  public resultList: Array<any> = [];
  constructor(private modalService: NgbModal, private svc: AnalysisService) { }


  ngOnInit(): void {
    this.subscription = interval(5000).pipe(
      switchMap(() => this.svc.GetReports())
    ).subscribe(r => {
      this.resultList = r;
      this.resultList.sort((a, b) => a.id - b.id)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


  onItemClick(item: any) {
    const ref = this.modalService.open(ResultsComponent)
    ref.componentInstance.item = item
  }
}
