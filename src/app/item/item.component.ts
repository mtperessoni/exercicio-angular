import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { UnidadeMedida } from '../itemEnum';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { unidadeValidator, dataFabricacaoValidator, dataValidadeValidator, characterValidator } from '../shared/item-directive';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';



@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css', '../app.component.css'],
	providers: [MessageService]
})
export class ItemComponent implements OnInit {
	item: Item = new Item();
	enumList = [];
	nomeCtrl: FormControl;
	quantidadeCtrl: FormControl;
	dataValidadeCtrl: FormControl;
	dataFabricacaoCtrl: FormControl;
	form: FormGroup;
	message: String;
	breadcrumbItens: MenuItem[];
	home: MenuItem;
	valid: Boolean = false;

	constructor(private route: ActivatedRoute, private itemService: ItemService, private router: Router, private messageService: MessageService) {
		this.enumSelector(UnidadeMedida);
		this.nomeCtrl = new FormControl(this.item.nome, [
			Validators.required,
			Validators.maxLength(50),
			characterValidator()
		]);
		this.quantidadeCtrl = new FormControl(this.item.quantidade, [
			unidadeValidator()
		]);
		this.dataValidadeCtrl = new FormControl(this.item.dataValidade, [
			dataValidadeValidator()
		]);
		this.dataFabricacaoCtrl = new FormControl(this.item.dataFabricacao, [
			Validators.required,
			dataFabricacaoValidator(),
		]);
		this.form = new FormGroup({
			nome: this.nomeCtrl,
			quantidade: this.quantidadeCtrl,
			preco: new FormControl(this.item.preco, [Validators.required]),
			unidadeMedida: new FormControl(this.item.unidadeMedida, []),
			perecivel: new FormControl(this.item.perecivel, []),
			dataValidade: this.dataValidadeCtrl,
			dataFabricacao: this.dataFabricacaoCtrl,
		});

	}

	enumSelector(definition) {
		Object.keys(definition)
			.map(key => (this.enumList.push({ value: definition[key], label: key })));
	}

	ngOnInit() {
		let id = this.route.snapshot.queryParamMap.get('id');
		this.home = { icon: 'pi pi-home' };

		if (id) {
			let itemStorage = this.itemService.getItemById(parseInt(id));
			itemStorage.dataFabricacao = new Date(itemStorage.dataFabricacao);
			
			if (itemStorage.dataValidade != undefined) {
				itemStorage.dataValidade = new Date(itemStorage.dataValidade);
			}

			this.item = itemStorage;
			this.form.setValue({
				'nome': this.item.nome,
				'quantidade': this.item.quantidade,
				'preco': this.item.preco,
				'unidadeMedida': this.item.unidadeMedida,
				'perecivel': this.item.perecivel,
				'dataValidade': this.item.dataValidade,
				'dataFabricacao': this.item.dataFabricacao,
			});
			this.breadcrumbItens = [
				{ label: "Listagem de itens", routerLink: "/itens" },
				{ label: "Cadastro de item", routerLink: "/item" }
			]
			return;
		}

		this.breadcrumbItens = [
			{ label: "Cadastro de item", routerLink: "['/item']" }
		]
	}

	validateForm() {
		let formControls = this.form.controls;

		// Necessário iterar sobre os FormControls para atualizar seus valores e valida-los.
		for (let key in formControls) {
			formControls[key].updateValueAndValidity();
		}
	}

	salvar() {
		// Valida os campos preenchidos no formulário e salva no localStorage através do service
		let id: number;

		this.validateForm();

		if (!this.form.valid) {
			this.messageService.add({ severity: 'error', summary: 'Cadastro de Item', detail: 'Formulário inválido. Verificar campos de cadastro.' });
			this.valid = true;
			return false;
		}

		if (this.item.id != undefined) {
			id = this.item.id
		}

		// Se não tiver inválido, preenche a instância do Item e manda para o service.
		this.item = this.form.value as Item;

		// Verificar se não está vazio. Pode ser vazio, se o produto NÃO for perecível.
		// FormGroup irá validar esta parte.
		if (this.dataValidadeCtrl.value != undefined) {
			this.item.dataValidade = new Date(this.dataValidadeCtrl.value);
		}

		this.item.dataFabricacao = new Date(this.dataFabricacaoCtrl.value)
		this.item.id = id;

		this.itemService.salvar(this.item);
		this.router.navigate(['/itens']);

		return true;
	}
}
