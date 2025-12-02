import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentParserService, ContentElement } from '../../../services/content-parser.service';

@Component({
  selector: 'app-content-display',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './content-display.component.html',
  styleUrl: './content-display.component.css'
})

export class ContentDisplayComponent implements OnInit, OnChanges {
  @Input() content: string = '';
  parsedElements: ContentElement[] = [];

  constructor(private parserService: ContentParserService) {}

  ngOnInit(): void {
    this.parseContent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content']) {
      this.parseContent();
    }
  }

  private parseContent(): void {
    if (this.content) {
      this.parsedElements = this.parserService.parseContent(this.content);
    }
  }

  trackByFn(index: number, item: ContentElement): string {
    return item.id;
  }

}


// 📝 Supported Formatting:

// **Text** → Headers
// * Item → Bullet points
// **Label:** Text → Labeled list items
// Plain text → Paragraphs
