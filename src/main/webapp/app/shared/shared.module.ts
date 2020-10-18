import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ApiSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ApiSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApiSharedModule {
  static forRoot() {
    return {
      ngModule: ApiSharedModule
    };
  }
}
