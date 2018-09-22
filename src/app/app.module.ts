import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SectionBreakComponent } from "./components/section-break/section-break.component";
import { FlippableCardComponent } from "./components/common/card-tray/flippable-card/flippable-card.component";
import { CardTrayComponent } from "./components/common/card-tray/card-tray.component";
import { MediaTrayComponent } from "./components/footer/media-tray/media-tray.component";
import { MediaButtonComponent } from "./components/footer/media-tray/media-button/media-button.component";
import { AchievementPageComponent } from "./components/achievement-page/achievement-page.component";
import { ActionBarComponent } from "./components/game-scene/action-bar/action-bar.component";
import { SpellBookComponent } from "./components/spell-book/spell-book.component";
import { GameSceneComponent } from "./components/game-scene/game-scene.component";
import { ViewportComponent } from "./components/game-scene/viewport/viewport.component";
import { BaseFloorComponent } from "./components/game-scene/viewport/base-floor/base-floor.component";
import { MinimapComponent } from "./components/game-scene/action-bar/minimap/minimap.component";
import { AvatarComponent } from "./components/game-scene/action-bar/avatar/avatar.component";
import { SpellTrayComponent } from "./components/game-scene/action-bar/spell-tray/spell-tray.component";
import { SettingsTrayComponent } from "./components/game-scene/action-bar/settings-tray/settings-tray.component";
import { SpellSlotComponent } from "./components/game-scene/action-bar/spell-tray/spell-slot/spell-slot.component";
import { SettingSlotComponent } from "./components/game-scene/action-bar/settings-tray/setting-slot/setting-slot.component";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { ItemTrayComponent } from "./components/game-scene/action-bar/item-tray/item-tray.component";
import { ItemSlotComponent } from "./components/game-scene/action-bar/item-tray/item-slot/item-slot.component";
import { ItemTabComponent } from "./components/game-scene/action-bar/item-tray/item-tab-tray/item-tab/item-tab.component";
import { ItemTabTrayComponent } from "./components/game-scene/action-bar/item-tray/item-tab-tray/item-tab-tray.component";

// Routes for the application
const appRoutes: Routes = [
  { path: "", component: GameSceneComponent },
  { path: "inventory", component: InventoryComponent },
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
    FlippableCardComponent,
    CardTrayComponent,
    MediaTrayComponent,
    MediaButtonComponent,
    AchievementPageComponent,
    ActionBarComponent,
    SpellBookComponent,
    GameSceneComponent,
    ViewportComponent,
    MinimapComponent,
    AvatarComponent,
    SpellTrayComponent,
    SettingsTrayComponent,
    SpellSlotComponent,
    SettingSlotComponent,
    BaseFloorComponent,
    InventoryComponent,
    ItemTrayComponent,
    ItemSlotComponent,
    ItemTabComponent,
    ItemTabTrayComponent
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
