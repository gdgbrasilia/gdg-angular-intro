import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule, MatInputModule, MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

const modules = [MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [],
  providers: [],
})
export class MaterialModule {
}


