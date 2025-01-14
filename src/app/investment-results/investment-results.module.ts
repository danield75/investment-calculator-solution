import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { InvestmentResultsComponent } from "./investment-results.component";

import { registerLocaleData } from '@angular/common';
import localeNlBE from '@angular/common/locales/nl-BE';

registerLocaleData(localeNlBE);

@NgModule({
    declarations: [InvestmentResultsComponent],
    exports: [InvestmentResultsComponent],
    imports: [BrowserModule],
    providers: [{ provide: LOCALE_ID, useValue: 'nl-BE' }],
})
export class InvestmentResultsModule {

}