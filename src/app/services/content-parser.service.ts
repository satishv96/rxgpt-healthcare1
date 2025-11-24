import { Injectable } from '@angular/core';

export interface ContentElement {
  type: 'header' | 'list-item-header' | 'list-item' | 'paragraph';
  content: string;
  header?: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContentParserService {
  
  parseContent(text: string): ContentElement[] {
    const elements: ContentElement[] = [];
    let elementIndex = 0;
    
    const headerRegex = /\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match;
    
    while ((match = headerRegex.exec(text)) !== null) {
      // Add content before this header
      const beforeText = text.substring(lastIndex, match.index).trim();
      if (beforeText) {
        this.processTextBlock(beforeText, elements, elementIndex);
        elementIndex = elements.length;
      }
      
      // Check if this is a standalone header or part of a labeled item
      const headerText = match[1];
      const afterHeader = text.substring(match.index + match[0].length, match.index + match[0].length + 50);
      
      if (!afterHeader.startsWith(':')) {
        // This is a standalone header
        elements.push({
          type: 'header',
          content: headerText,
          id: `header-${elementIndex++}`
        });
      }
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining content after last header
    const remainingText = text.substring(lastIndex).trim();
    if (remainingText) {
      this.processTextBlock(remainingText, elements, elements.length);
    }
    
    return elements;
  }
  
  private processTextBlock(text: string, elements: ContentElement[], startIndex: number): void {
    let elementIndex = startIndex;
    
    if (text.includes('* ')) {
      const bulletParts = text.split(/\s*\*\s+/).filter(p => p.trim());
      bulletParts.forEach((part, idx) => {
        if (part.trim()) {
          const labelMatch = part.match(/^\*\*([^*]+)\*\*:\s*(.*)/);
          if (labelMatch) {
            elements.push({
              type: 'list-item-header',
              header: labelMatch[1],
              content: labelMatch[2],
              id: `list-header-${elementIndex++}`
            });
          } else if (idx === 0) {
            elements.push({
              type: 'paragraph',
              content: part,
              id: `para-${elementIndex++}`
            });
          } else {
            elements.push({
              type: 'list-item',
              content: part,
              id: `list-${elementIndex++}`
            });
          }
        }
      });
    } else {
      elements.push({
        type: 'paragraph',
        content: text,
        id: `para-${elementIndex++}`
      });
    }
  }


}