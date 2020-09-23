import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent,
    CourseFormComponent,
    ReativeFormComponent,
    BookComponent,
    HeroComponent,
    EmployeeComponent,
    SearchBookComponent,
    BirthdateComponent,
    PasswordCheckerComponent,
    ImageZoomingComponent,
    PaintTextComponent,
    LoginComponent,
    GreetLangComponent,
    ProductRatingComponent,
    ChangeCurrencyComponent,
    InputComponent,
    OutputComponent,
    DashboardComponent,
    AssignmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class AppModule { }
