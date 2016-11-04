import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';

import { AppComponent } from './app.component';
import { TodoHeaderComponent, TodoListComponent, TodoFooterComponent } from '../components';
import { TodoService } from '../services';
import { TodoActions } from '../actions';
import { IAppState, rootReducer, middleware, enhancers, reimmutify } from '../store';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoFooterComponent
  ],
  providers: [
    TodoService,
    TodoActions,
    DevToolsExtension
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension) {

    const tools = devTool.enhancer({
      deserializeState: reimmutify
    });
    ngRedux.configureStore(
      rootReducer,
      <IAppState>{},
      middleware,
      tools ? [...enhancers, tools ] : enhancers);
  }

  hmrOnInit(store) {
    console.log('HMR store', store);
  }

  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
