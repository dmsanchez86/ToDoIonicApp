import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PendientsPage } from '../pages/pendients/pendients';
import { FinishersPage } from '../pages/finishers/finishers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// servicios
import { ToDoService } from '../services/todo.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientsPage,
    FinishersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientsPage,
    FinishersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ToDoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
