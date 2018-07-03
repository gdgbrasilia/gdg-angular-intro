import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {Observable, from, Subject, of, merge} from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {flatMap, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = new Subject<firebase.User | UserModel>();
  private authState: firebase.auth.UserCredential;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
  }

  login(user: UserModel) {
    return from(this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password))
      .pipe(tap((userFromResponse: firebase.auth.UserCredential) => this.authState = userFromResponse))
      .pipe(tap(() => this.setUser(user, 'online')));
  }

  signup(user: UserModel): Observable<any> {
    return from(this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password))
      .pipe(tap(userFromResponse => this.authState = userFromResponse))
      .pipe(tap(() => this.setUser(user, 'online')));

  }

  private setUser(user: UserModel, status: string): void {
    const path = `users/${this.currentUserId}`;
    user.status = status;
    console.log('Path', path, user);
    this._user.next(user);
    this.db.object(path).update(user);


  }

  get user(): Observable<UserModel> {
    return of([]).pipe(flatMap(() => this._user));
  }

  get currentUserId(): string {
    console.log(this.authState);
    return this.authState !== null && this.authState !== undefined ? this.authState.user.uid : '';
  }

  logout(): void {
    this.setUser({}, 'offline');
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['login']);
  }
}
