import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputModule } from './user-input/user-input.module';
import { InvestmentResultsModule } from './investment-results/investment-results.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, UserInputModule, InvestmentResultsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
