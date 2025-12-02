import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Extend Window interface to include webkitSpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

@Component({
  selector: 'app-voice-to-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'voice-to-text.component.html',
  styleUrl:'voice-to-text.component.css'
 // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class VoiceToTextComponent implements OnDestroy {

  @Output() voiceToTextMsgEvent = new EventEmitter();
  @Output() listeningEvent = new EventEmitter();

  recognition: any;
  isRecording = false;
  isSupported = false;
  transcript = '';
  interimTranscript = '';

  constructor() {
    this.initializeSpeechRecognition();
  }

  initializeSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      this.isSupported = true;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event: any) => {
        let interim = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          
          if (event.results[i].isFinal) {
            this.transcript += transcript + ' ';
            this.interimTranscript = '';
          } else {
            interim += transcript;
          }
        }
        
        this.interimTranscript = interim;
      };

      this.recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'no-speech') {
          console.log('No speech detected. Please try again.');
        }
        this.isRecording = false;
      };

      this.recognition.onend = () => {
        if (this.isRecording) {
          // Restart if it stops unexpectedly while recording
          this.recognition.start();
        }
      };
    }
  }

  toggleRecording() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  startRecording() {
    this.transcript = '';
    if (this.recognition) {
      this.listeningEvent.emit('Listening...');
      
      
      this.isRecording = true;
      this.recognition.start();
    }
  }

  stopRecording() {
    if (this.recognition) {

      console.log('message', this.transcript, 'message2', this.interimTranscript);
    
     this.voiceToTextMsgEvent.emit(this.interimTranscript);
     // this.voiceToTextMsgEvent.emit(this.interimTranscript);

      this.isRecording = false;
      this.recognition.stop();
    }
  }

  clearTranscript() {
    this.transcript = '';
    this.interimTranscript = '';
  }

  ngOnDestroy() {
    if (this.recognition) {
      this.recognition.stop();
    }
  }
}



// Key Features:

// Speech Recognition - Uses the Web Speech API (SpeechRecognition/webkitSpeechRecognition)
// Real-time Transcription - Shows both final and interim (in-progress) transcription
// Start/Stop Recording - Toggle button with visual feedback
// Browser Support Detection - Warns if the browser doesn't support speech recognition
// Standalone Component - Uses Angular 18's standalone component pattern
// Clean UI - Modern, responsive design with animations

// How to Use:

// Add the component to your Angular app
// Import it in your module or use it directly (it's standalone)
// Add to your template: <app-voice-to-text></app-voice-to-text>

// Browser Support:
// Works in:

// ✅ Chrome/Edge (best support)
// ✅ Safari
// ❌ Firefox (limited support)

// Configuration Options:
// You can modify:

// Language: Change this.recognition.lang = 'en-US' to other languages (e.g., 'es-ES', 'fr-FR')
// Continuous mode: Already enabled for ongoing transcription
// Interim results: Shows text as you speak before finalizing

// The component handles errors gracefully and automatically restarts recognition if it stops unexpectedly during recording.