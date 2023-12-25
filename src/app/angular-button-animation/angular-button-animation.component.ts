import { Component, Input } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-angular-button-animation',
  templateUrl: './angular-button-animation.component.html',
  styleUrls: ['./angular-button-animation.component.css'],
  animations: [
    trigger('openClose', [ 
      state('closed', style({
        height: '100px',
        opacity: 1,
        backgroundColor: 'green'
      })),   
      state('open', style({ 
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),

      // transition('open <=> closed', [
      //   animate("1s")
      // ]),
      transition('closed <=> open', [
        animate("1s 1000ms ease-out")
      ]),
      // transition('closed => open', [
      //   animate('0.5s')
      // ]),
      // transition('* => closed', [
      //   animate('1s')
      // ]),
      // transition('* => open', [
      //   animate('0.5s')
      // ]),
      // transition('open <=> closed', [
      //   animate('0.5s')
      // ]),
      // transition ('* => open', [
      //   animate ('1s',
      //     style ({ opacity: 0.2 }),
      //   ),
      // ]),
      // transition('* => *', [
      //   animate('1s')
      // ]),
    ]),
  ],
})
export class AngularButtonAnimationComponent {
  @Input() logging = false;

  toggleLogging() {
    this.logging = !this.logging;
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onAnimationEvent( event: AnimationEvent ) {
    if (!this.logging) {
      return;
    }
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 or 1 second
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
}
