import {InjectionToken} from '@angular/core';
import {environment} from '../environments/environment';

export const ApiBaseUrl = new InjectionToken<String>('api-base-url');

export const ApiBaseUrlEnv = { provide: ApiBaseUrl, useValue: environment.apiBaseUrl };
