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
import { AchievementPageComponent } from "./components/achievement-page/achievement-page.component";
import { ActionBarComponent } from "./components/game-scene/action-bar/action-bar.component";
import { SpellBookComponent } from "./components/spell-book/spell-book.component";
import { InventoryComponent } from "./components/game-scene/inventory/inventory.component";
import { GameSceneComponent } from "./components/game-scene/game-scene.component";
import { ViewportComponent } from './components/game-scene/viewport/viewport.component';
import { MinimapComponent } from './components/game-scene/action-bar/minimap/minimap.component';
import { AvatarComponent } from './components/game-scene/action-bar/avatar/avatar.component';
import { SpellTrayComponent } from './components/game-scene/action-bar/spell-tray/spell-tray.component';
import { SettingsTrayComponent } from './components/game-scene/action-bar/settings-tray/settings-tray.component';
import { InventoryTrayComponent } from './components/game-scene/action-bar/inventory-tray/inventory-tray.component';

// Routes for the application
const appRoutes: Routes = [
  { path: "", component: GameSceneComponent },
  { path: "spells", component: SpellBookComponent },
  { path: "achievements", component: AchievementPageComponent },
  { path: "**", component: GameSceneComponent }, // TODO: Page Not found
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
    AchievementPageComponent,
    ActionBarComponent,
    SpellBookComponent,
    InventoryComponent,
    GameSceneComponent,
    ViewportComponent,
    MinimapComponent,
    AvatarComponent,
    SpellTrayComponent,
    SettingsTrayComponent,
    InventoryTrayComponent
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
