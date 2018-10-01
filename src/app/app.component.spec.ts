import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ItensComponent } from './itens/itens.component';
import { ItemComponent } from './item/item.component';

describe('AppComponent', () => {
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
				{ provide: APP_BASE_HREF, useValue: '/' }
			]
		})
			.compileComponents();
	}));

	it('O app deve ser criado', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
	it(`O app deve conter o título 'texoit'`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('texoit');
	}));
});
