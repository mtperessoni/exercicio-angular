import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemComponent } from './item.component';
import { UnidadeMedida } from '../itemEnum';
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
import { ItensComponent } from '../itens/itens.component';
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

describe('ItemComponent', () => {
	let component: ItemComponent;

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
		component = TestBed.createComponent(ItemComponent).componentInstance;
	});


	it('O item deve ser salvo com sucesso(formulário correto)', () => {
		component.form.controls['nome'].setValue("Parafuso");
		component.form.controls['quantidade'].setValue("0,11");
		component.form.controls['preco'].setValue("32");
		component.form.controls['unidadeMedida'].setValue(UnidadeMedida.Litro);
		component.form.controls['perecivel'].setValue(false);
		component.form.controls['dataValidade'].setValue(new Date());
		component.form.controls['dataFabricacao'].setValue(new Date());
		expect(component.salvar()).toBe(true);
	});
	
	it('Não deve permitir salvar o item(formulário incorreto)', () => {
		component.form.controls['nome'].setValue("");
		expect(component.salvar()).toBe(false);
	});
});
