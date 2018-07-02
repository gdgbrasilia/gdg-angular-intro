import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyTableComponent} from './my-table/my-table.component';
import {AppNavBarComponent} from './app-nav-bar/app-nav-bar.component';
import {LayoutModule} from '@angular/cdk/layout';
import {ChatFormComponent} from './chat-form/chat-form.component';
import {ChatroomComponent} from './chatroom/chatroom.component';
import {MessageComponent} from './message/message.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {UserItemComponent} from './user-item/user-item.component';
import {UserListComponent} from './user-list/user-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {appRouters} from './app.routers';
import {AuthService} from './services/auth.service';
import {ChatService} from './services/chat.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {NavbarComponent} from './navbar/navbar.component';
import {FeedComponent} from './feed/feed.component';
import {MaterialModule} from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    AppNavBarComponent,
    ChatFormComponent,
    ChatroomComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    UserItemComponent,
    UserListComponent,
    NavbarComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRouters),
    MaterialModule,
    FormsModule,
    AngularFireModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
