import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RoutesWithLegacyLinks} from '../../lib/routing';

import {ClientSearch} from './client_search';

/**
 * Routes used by the client search page.
 */
export const CLIENT_SEARCH_ROUTES: Routes&RoutesWithLegacyLinks = [
  {
    // @ts-ignore Fix code and remove this comment. Error:
    // TS2322: Type '{ path: string; component: typeof ClientSearch; data: {
    // legacyLink: string; }; }[]' is not assignable to type 'Routes &
    // RoutesWithLegacyLinks'.
    path: 'clients',
    component: ClientSearch,
    data: {legacyLink: '#/search?q=:q'}
  },
];

/**
 * Routing module for the client search page.
 */
@NgModule({
  imports: [
    RouterModule.forChild(CLIENT_SEARCH_ROUTES),
  ],
  exports: [RouterModule],
})
export class ClientSearchRoutingModule {
}
