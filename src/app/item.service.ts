import { Injectable } from '@angular/core';
import { Item } from './item';
import { UnidadeMedida } from './itemEnum';

@Injectable({
	providedIn: 'root'
})

export class ItemService {
	itensList: Item[] = [];

	constructor() {
		this.getItensList();
	}

	setItensList() {
		localStorage.setItem('itensList', JSON.stringify(this.itensList));
	}

	async getItensList() {
		var storageList = await <Item[]>JSON.parse(localStorage.getItem('itensList'));

		if (storageList != null) {
			this.itensList = storageList;
		}

		return this.itensList;
	}

	salvar(item: Item) {
		// Salvar um novo item na lista existente no localStorage.
		// Valida se é um novo item ou não, e retorna uma flag informando isto.
		let isNew: boolean = true;
		this.getItensList();

		if (!item.id) {
			item.id = this.itensList.length + 1;
			this.itensList.push(item);
		} else {
			this.itensList.forEach((x, i) => {
				if (x.id == item.id) {
					this.itensList[i] = item;
					isNew = false;
				}
			});
		}

		this.setItensList();
		return isNew;
	}

	deletar(item: Item) {
		// Pega a lista armazenada no localStorage, localiza o item e remove.
		this.getItensList();
		this.itensList = this.itensList.filter(obj => {
			if (obj != null && obj.id != item.id) {
				return true;
			}
			return false;
		});
		this.setItensList();
	}

	getItemById(id: number): Item {
		// Localizar o item através do ID.
		// Pesquisa na lista armazenada na localstorage, caso não encontre, retorna undefined.
		let selectedItem: Item;
		this.itensList.forEach(item => {
			if (item.id == id) {
				selectedItem = item;
			}
		});
		return selectedItem;
	}
}
