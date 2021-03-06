import { Component, ViewChild } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

import { PoBreadcrumb, PoDynamicViewField, PoModalComponent } from '@po-ui/ng-components';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableCustomAction,
  PoPageDynamicTableCustomTableAction,
  PoPageDynamicTableOptions
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('envDetailModal') envDetailModal!: PoModalComponent;

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: "" },
    // { label: 'Envs', link: 'envs' }
  ];

  readonly serviceApi = 'http://127.0.0.1:3333/envs';
  detailedEnvs: any;
  quickSearchWidth: number = 3;

  // readonly actions: PoPageDynamicTableActions = {
  //   new: '/envs/po-page-dynamic-edit',
  //   remove: true,
  //   removeAll: true
  // };

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }]
  };


  readonly fields: Array<any> = [
    { property: 'id', key: true, visible: false, filter: true },
    { property: 'user', label: 'Usuário', filter: true, gridColumns: 6 },
    { property: 'version', label: 'Versão Protheus', filter: true, gridColumns: 6 },
    { property: 'db_type', label: 'Banco de dados', filter: true, gridColumns: 6 },
    { property: 'service_code', label: 'Código serviço', filter: true, gridColumns: 6 }
  ];

  readonly detailFields: Array<PoDynamicViewField> = [
    { property: 'user', label: "Usuário", gridLgColumns: 4 },
    { property: 'version', label: "Versão Protheus", tag: true, gridLgColumns: 4 },
    { property: 'db_type', label: "Banco", tag: true, gridLgColumns: 4 },
    { property: 'service_code', label: "Código do serviço", gridLgColumns: 4 },
  ];

  pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
    { label: 'Print', action: this.printPage.bind(this) },
  ];

  tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
    { label: 'Detalhes', action: this.onClickEnvDetail.bind(this) }
  ];

  onLoad(): PoPageDynamicTableOptions {
    return {
      fields: [
        { property: 'id', key: true, visible: true, filter: true }
      ]
    };
  }

  printPage() {
    window.print();
  }

  private onClickEnvDetail(user: any) {
    this.detailedEnvs = user;

    this.envDetailModal.open();
  }

}
