import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SectionBreakComponent } from "./components/section-break/section-break.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { FlippableCardComponent } from "./components/flippable-card/flippable-card.component";
import { CardTrayComponent } from "./components/card-tray/card-tray.component";
import { MediaTrayComponent } from "./components/footer/media-tray/media-tray.component";
import { MediaButtonComponent } from "./components/footer/media-tray/media-button/media-button.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { InventoryPageComponent } from "./components/inventory-page/inventory-page.component";

// Routes for the application
const appRoutes: Routes = [
  { path: "*", component: HomePageComponent },
  { path: "inventory", component: InventoryPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionBreakComponent,
    CarouselComponent,
    FlippableCardComponent,
    CardTrayComponent,
    MediaTrayComponent,
    MediaButtonComponent,
    HomePageComponent,
    InventoryPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
