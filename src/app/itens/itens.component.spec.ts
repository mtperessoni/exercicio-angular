import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItensComponent } from './itens.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { APP_BASE_HREF } from '@angular/common';
import { ItemComponent } from '../item/item.component';

describe('ItensComponent', () => {
  let component: ItensComponent;
  let fixture: ComponentFixture<ItensComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
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
				{provide: APP_BASE_HREF, useValue : '/' }
			]
		})
			.compileComponents();
	}));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
