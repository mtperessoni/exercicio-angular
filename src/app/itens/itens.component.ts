import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css', '../app.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ItensComponent implements OnInit {
  itens: Item[];
  breadcrumbItens: MenuItem[];
  home: MenuItem;

  constructor(private itemService: ItemService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {
    this.itemService.getItensList().then(itemList => {
      this.itens = itemList;
    });
    this.breadcrumbItens = [
      { label: "Listagem de Itens", routerLink: "/item'" }
    ]
    this.home = { icon: 'pi pi-home' };

  }

  editar(item: Item): void {
    if (item && item.id){
      // Chama o itemComponent passando o ID para que seja possível localizar o item e edita-lo.
      this.router.navigate(['/item'], { queryParams: { id: item.id } });
    } else {
      this.router.navigate(['/item']);
    }
  }

  deletar(item: Item) {
    //Se o usuário confirmar que quer deletar, então executa esta função.
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar este item?',
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () => {
        this.itemService.deletar(item);
        this.itemService.getItensList().then(itemList => {
          this.itens = itemList;
        });
        this.messageService.add({ severity: 'success', summary: 'Listagem de Itens', detail: 'O item foi deletado com sucesso.' });
      }
    });
  }

}
