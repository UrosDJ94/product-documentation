import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedirectLinkButtonComponent } from './redirect-link-button/redirect-link-button.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
    declarations: [RedirectLinkButtonComponent, SearchBoxComponent],
    imports: [FormsModule],
    exports: [RedirectLinkButtonComponent, SearchBoxComponent, FormsModule],
    providers: [],
})
export class UiKitModule {}
