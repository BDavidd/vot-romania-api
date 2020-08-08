import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../state/reducers';
import { getCurrentImportJobDetails } from '../state/selectors';
import { ImportJobDetails } from '../services/data.service';
import { LoadImportJobDetailsAction } from '../state/actions';

@Component({
  selector: 'app-import-polling-stations',
  templateUrl: './import-polling-stations.component.html',
  styleUrls: ['./import-polling-stations.component.scss']
})
export class ImportPollingStationsComponent implements OnInit, AfterViewInit {
  currentJob: ImportJobDetails;
  constructor(public store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.pipe(select(getCurrentImportJobDetails)).subscribe(job => this.initializeData(job));
  }

  public ngAfterViewInit(): void {
    this.store.dispatch(new LoadImportJobDetailsAction());
  }


  initializeData(jobDetails: ImportJobDetails): void {
    if (jobDetails) {
      this.currentJob = jobDetails;
    }
  }
}
