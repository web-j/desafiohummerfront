import { Guest } from './guest-event.model';

export class UserEvent {
    userId: number;
    eventId: number;

    guest: Guest = new Guest();
    guestDrink = false;
    participantDrink = false;
}
