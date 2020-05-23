import {Component, OnInit} from '@angular/core';
import {VotingGuide} from '../services/data.service';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../state/reducers';
import {getGeneralInfo, getSelectedLanguage, getVotingGuide} from '../state/selectors';
import {LoadDataAction, UpdateDataAction} from '../state/actions';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss']
})
export class AdminContentComponent implements OnInit {
  private selectedLanguage: string;

  public generalInfo: string;
  public votersGuide: VotingGuide;
  public editing = {};
  public editorConfig: AngularEditorConfig = {
    editable: true,
    toolbarHiddenButtons: [
      [
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'heading',
        'fontName'
      ],
      [
        'textColor',
        'backgroundColor',
        'customClasses',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
      ]
    ]
  };

  constructor(private store: Store<ApplicationState>) {
  }

  public ngOnInit() {
    this.store.pipe(select(getSelectedLanguage)).subscribe(value => {
      this.selectedLanguage = value;
    });

    this.store.pipe(select(getGeneralInfo)).subscribe(value => {
      this.generalInfo = value;
    });

    this.store.pipe(select(getVotingGuide)).subscribe(value => {
      this.votersGuide = value || {
        description: '',
        options: []
      };
    });
  }

  public save() {
    const data = {
      language: this.selectedLanguage,
      generalInfo: this.generalInfo,
      votersGuide: this.votersGuide,
    };

    this.store.dispatch(new UpdateDataAction(data, this.selectedLanguage));
  }

}
