// 3rd Party Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NguiMapModule} from '@ngui/map';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Local Modules
import { AppRoutes } from './app.routing';
import { FooterModule } from './components/shared/footer/footer.module';
import { NavbarModule} from './components/shared/navbar/navbar.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { MaterialModule } from './material/material.module';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { TableComponent } from './components/table/table.component';

// Dialogs
import { ComplexTableDialogComponent } from './dialogs/complex-table/complex-table.dialog';
import { CreationDialogComponent } from './dialogs/creation-dialog/creation.dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    ComplexTableDialogComponent,
    CreationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [
    ComplexTableDialogComponent,
    CreationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
