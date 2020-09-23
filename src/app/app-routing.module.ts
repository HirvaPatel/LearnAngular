import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReativeFormComponent } from './reative-form/reative-form.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero/hero.component';
import { EmployeeComponent } from './employee/employee.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { BirthdateComponent } from './birthdate/birthdate.component';
import { PasswordCheckerComponent } from './password-checker/password-checker.component';
import { ImageZoomingComponent } from './image-zooming/image-zooming.component';
import { PaintTextComponent } from './paint-text/paint-text.component';
import { LoginComponent } from './login/login.component';
import { GreetLangComponent } from './greet-lang/greet-lang.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { ChangeCurrencyComponent } from './change-currency/change-currency.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { AssignmentsComponent } from './assignments/assignments.component';

const routes: Routes = [
  { path:'home' , component: AppComponent},
  { path:'assignments' , component: AssignmentsComponent},
  { path: 'searchBook', component: SearchBookComponent },
  { path: 'birthdate' , component: BirthdateComponent},
  { path: 'passwordChecker' , component: PasswordCheckerComponent},
  { path: 'imageZooming' , component: ImageZoomingComponent},
  { path: 'paintText' , component: PaintTextComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'greetLanguage' , component: GreetLangComponent},
  { path: 'productRating' , component: ProductRatingComponent},
  { path: 'changeCurrency' , component: ChangeCurrencyComponent},
  { path: 'input' , component: InputComponent},
  { path:'output' , component: OutputComponent},
  { path: 'reactiveForm' , component: ReativeFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'books', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
