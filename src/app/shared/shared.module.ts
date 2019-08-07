import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainSettingComponent } from './main-setting/main-setting.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DefaultLayoutComponent, HeaderComponent, HomeComponent, MainSettingComponent, SidebarComponent, PageNotFoundComponent]
})
export class SharedModule { }
