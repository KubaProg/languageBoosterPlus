import { Routes } from '@angular/router';
import {UserProfile} from './user-profile/user-profile';
import {ShowcaseComponent} from './showcase.component';

export const routes: Routes = [
  {
    path: 'profile',
    component: UserProfile
  },
  {
    path: 'showcase',
    component: ShowcaseComponent
  },

];

