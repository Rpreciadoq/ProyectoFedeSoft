import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import * as firebase from 'firebase/app';

import {firebaseConfig} from '../environments/firebase-config';

import { Config } from 'ionic-angular/umd';

firebase.initializeApp(firebaseConfig)

platformBrowserDynamic().bootstrapModule(AppModule);
