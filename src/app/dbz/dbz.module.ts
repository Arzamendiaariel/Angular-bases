import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/addCharacter/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class DbzModule { }
