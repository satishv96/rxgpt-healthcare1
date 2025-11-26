import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RxGPTService } from '../../services/rxgpt.service';
// import { ApiService } from '../../services/api.Service';
// import { LoaderButtonComponent } from '../../common/loader-button/loader-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VoiceToTextComponent } from "../voice-to-text/voice-to-text.component";
import { ContentDisplayComponent } from '../content-display/content-display.component';


@Component({
  selector: 'app-query-response',
  standalone: true,
  imports: [FormsModule, CommonModule, MatProgressSpinnerModule, VoiceToTextComponent, ContentDisplayComponent],
  templateUrl: './query-response.component.html',
  styleUrl: './query-response.component.css',
  queries: {
    'contentRef': new ViewChild('contentRef')
  },  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QueryResponseComponent {
  
  contentRef!: ElementRef;
  contentHeight: any;

  healthcareQuery!: string;
  posts: any[] | undefined;
  healthcareQueryRes: string = '';
  loading : boolean = false;
  listning : boolean = false;

  healthcareQueryResList = [
    { question: '', answer: '', seq: 1  }
  ];

  constructor(private rxgptService: RxGPTService) { }

  ngOnInit(): void {
    this.healthcareQuery = this.rxgptService.rxGptQuery;
    if (this.healthcareQuery) {
      this.rxGPTapiCall(this.healthcareQuery);
    }
  }


  onQueryKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSubmitQuery();
    }
  }

  onSubmitQuery() {
    if (this.healthcareQuery) {
      this.rxGPTapiCall(this.healthcareQuery);
    } else {
      alert('Please enter RxGPT query!');
    }
  }

  ngAfterViewChecked(){
    var test = this.contentHeight != this.contentRef.nativeElement.scrollHeight 
      //&& this.contentRef.nativeElement.scrollHeight != (this.contentRef.nativeElement.scrollTop + this.contentRef.nativeElement.offsetHeight);
    console.log(test);

    if (this.contentHeight != this.contentRef.nativeElement.scrollHeight && this.contentRef.nativeElement.scrollHeight != (this.contentRef.nativeElement.scrollTop + this.contentRef.nativeElement.offsetHeight)){
      this.contentRef.nativeElement.scrollTo(0, this.contentRef.nativeElement.scrollHeight);
    }
  }
  

  rxGPTapiCall(healthcareQuery: string) {

    // setTimeout(() => this.loading = false, 5000);
    //  this.rxgptService.getDataWithCustomHeader(healthcareQuery).pipe(delay(3000)).subscribe({
// const  messageBody = document.querySelector('#messageBody');
    
// messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

    this.loading = true;
    console.log('loading start', this.loading);
    setTimeout(() => {
    this.rxgptService.getDataWithCustomHeader(healthcareQuery).subscribe({
      next: (data: any) => {
        
        this.posts = data;
        this.healthcareQueryRes = data['response'];

        this.healthcareQueryResList.push({'question':healthcareQuery, 'answer': data['response'], 'seq': 1});

        console.log('Fetched posts:', this.healthcareQueryResList);
        this.loading = false;
        this.healthcareQuery = '';
        this.contentHeight = this.contentRef.nativeElement.scrollHeight;

        console.log('loading ends', this.loading);
      }, error: (err) => {
        console.error('Error fetching posts:', err);
        this.loading = false;
      }
      
    })
  }, 500);
    
    //this.loading = false;
  }

   voiceReceivedMessageHandler(p: any) {
    this.healthcareQuery = p;
    this.listning = false;
    console.log('voice message', p);
  }

   listeningMessageHandler(p: any) {
    this.listning = true;
    this.healthcareQuery = p;
    console.log('listeningMessageHandler', p);
  }
  
}
