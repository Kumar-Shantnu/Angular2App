import{NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import {ManagersComponent} from './display-details.component';
import {CRUDComponent} from './crud-details.component'
import { HttpModule }    from '@angular/http';
import {DetailsService} from './details.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [DetailsService],
    bootstrap : [ManagersComponent]
    
})
export class AppModule { }