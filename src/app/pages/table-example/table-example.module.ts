import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExampleComponent } from './table-example.component';
import {TableExampleRoutingModule} from './table-example-routing.module';
import {NzTableModule} from 'ng-zorro-antd';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [TableExampleComponent],
  imports: [
    TableExampleRoutingModule,

    NzTableModule,
    DragDropModule,
    CommonModule
  ],
  exports: [TableExampleComponent]
})
export class TableExampleModule { }
