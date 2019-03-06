import {Routes} from '@angular/router'
import { QuizMultipleComponent } from './quiz-multiple/quiz-multiple.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';

export const appRoutes : Routes = [
    {path: 'signIn', component:SignInComponentComponent},
    {path: 'quiz', component:QuizMultipleComponent},
    {path: '', redirectTo:'/signIn',pathMatch:'full'}
];