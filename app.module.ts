import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SureshComponent } from './suresh/suresh.component';
import { KoushikComponent } from './koushik/koushik.component';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductcompenentsComponent } from './productcompenents/productcompenents.component';
import { AttributeDirsComponent } from './attribute-dirs/attribute-dirs.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { SearchByNamePipe } from './search-by-name.pipe';
import { SortPipe } from './sort.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorcompComponent } from './calculatorcomp/calculatorcomp.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { First12Component } from './first12/first12.component';
import { Second12Component } from './second12/second12.component';
import { SortsortPipe } from './sortsort.pipe';
import { FilterfilterPipe } from './filterfilter.pipe';
import { JavajavaComponent } from './javajava/javajava.component';
import { WebwebComponent } from './webweb/webweb.component';
import { ProsortPipe } from './prosort.pipe';
import { ProfilterPipe } from './profilter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SureshComponent,
    KoushikComponent,
    StructDirectivesComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CalculatorComponent,
    ProductcompenentsComponent,
    AttributeDirsComponent,
    MycolorDirective,
    SearchByNamePipe,
    SortPipe,
    CalculatorcompComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    JavaComponent,
    WebComponent,
    
    First12Component,
    Second12Component,
    SortsortPipe,
    FilterfilterPipe,
    JavajavaComponent,
    WebwebComponent,
    ProsortPipe,
    ProfilterPipe
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,TechRoutingModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
