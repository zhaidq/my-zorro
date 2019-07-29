import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import {TestRoutingModule} from './test-routing.module';
import {
  NzButtonModule,
  NzCardModule,
  NzCollapseModule,
  NzFormModule,
  NzInputModule,
  NzLayoutModule,
  NzSelectModule,
  NzTableModule
} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [TestComponent],
  imports: [
    TestRoutingModule,

    CommonModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzLayoutModule,
    NzCardModule,
    NzCollapseModule
  ],
  exports: [TestComponent]
})
export class TestModule { }
