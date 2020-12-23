import { Component, ViewChild } from '@angular/core';

import { PoBreadcrumb, PoDynamicViewField, PoModalComponent } from '@po-ui/ng-components';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableCustomAction,
  PoPageDynamicTableCustomTableAction,
  PoPageDynamicTableOptions
} from '@po-ui/ng-templates';
// import { SamplePoPageDynamicTableUsersService } from './envs.component.service';

@Component({
  selector: 'app-envs',
  templateUrl: './envs.component.html',
  styleUrls: ['./envs.component.css']
})

export class EnvsComponent {
  @ViewChild('envDetailModal') envDetailModal!: PoModalComponent;

  readonly serviceApi = 'http://127.0.0.1:3333/envs';
  detailedEnvs: any;
  quickSearchWidth: number = 3;

  // readonly actions: PoPageDynamicTableActions = {
  //   new: '/envs/po-page-dynamic-edit',
  //   remove: true,
  //   removeAll: true
  // };

  readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Envs' }]
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
