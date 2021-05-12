import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HomeComponent } from './home/home.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { PasswordMatcherDirective } from './directives/password-matcher.directive';
import { SubmittedDataComponent } from './submitted-data/submitted-data.component';
import { EditFromComponent } from './edit-from/edit-from.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ReactiveFormComponent,
    HomeComponent,
    ModalFormComponent,
    PasswordPatternDirective,
    PasswordMatcherDirective,
    SubmittedDataComponent,
    EditFromComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'reactive-form/:id', component: ReactiveFormComponent },
      { path: 'modal-based-form/:id', component: ModalFormComponent },
      { path: 'submitted-data', component: SubmittedDataComponent},
      { path: 'edit-from', component: EditFromComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
