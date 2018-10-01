import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { NgxMaskModule } from 'ngx-mask'
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { AppComponent } from './app.component';
import { ItensComponent } from './itens/itens.component';
import { ItemComponent } from './item/item.component';

import { ItemService } from './item.service';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    ItensComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    TableModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    BreadcrumbModule
  ],
  providers: [
    ItemService,
    {
      provide: LOCALE_ID,
      useValue: "pt"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
