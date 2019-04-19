import { trigger, transition, style, animate } from '@angular/animations';

export const addRemoveAnimations =
trigger('addRemove', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0,
    }),
    animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)',
    style({
      transform: 'translateY(0%)',
      opacity: 1,
    })),
  ]),
  transition(':leave', [
    animate('180ms cubic-bezier(0.0, 0.0, 0.2, 1)',
    style({
      transform: 'translateX(100%)',
      opacity: 0,
    }))
  ])
]);
