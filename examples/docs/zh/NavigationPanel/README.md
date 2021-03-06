---
title: NavigationPanel NavigationPanel
sidebarDepth: 2
---

[[toc]]

### NavigationPanel-DEMO

<div style="position: relative; width: 100%; height: 800px; display: flex;">
<ClientOnly> 
<fv-NavigationPanel flyoutDisplay="2000"></fv-NavigationPanel>
</ClientOnly> 
<fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>

```vue
<div style="position: relative; width: 100%; height: 800px; display: flex;">
    <fv-NavigationPanel></fv-NavigationPanel>
</div>
```

### NavigationPanel-Flyout

---

<div style="position: relative; width: 100%; height: 800px; display: flex;">
<ClientOnly>
<fv-NavigationPanel expandMode="flyout"></fv-NavigationPanel>
</ClientOnly>
<fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>

```vue
<div style="position: relative; width: 100%; height: 800px; display: flex;">
    <fv-NavigationPanel expandMode="flyout"></fv-NavigationPanel>
</div>
```

### NavigationPanel-Mobile Display

---

<div style="position: relative; width: 100%; height: 800px; display: flex;">
<ClientOnly>
<fv-NavigationPanel mobileDisplay="100000000"></fv-NavigationPanel>
</ClientOnly>
<fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>

```vue
<div style="position: relative; width: 100%; height: 800px; display: flex;">
    <fv-NavigationPanel mobileDisplay="100000000"></fv-NavigationPanel>
</div>
```

### NavigationPanel-Dark Theme

---

1. Standard

<div style="position: relative; width: 100%; height: 800px; background: black; display: flex;">
<ClientOnly>
<fv-NavigationPanel theme="dark"></fv-NavigationPanel>
</ClientOnly>
<fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>

2. Flyout

<div style="position: relative; width: 100%; height: 800px; background: black; display: flex;">
<ClientOnly>
<fv-NavigationPanel expandMode="flyout" theme="dark"></fv-NavigationPanel>
</ClientOnly>
<fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>

3. Mobile

<div style="position: relative; width: 100%; height: 800px; background: black; display: flex;">
<ClientOnly>
<fv-NavigationPanel mobileDisplay="100000000" theme="dark"></fv-NavigationPanel>
</ClientOnly>
<fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>

### Propoties

---

|   ??????(attr)    |             ??????(type)             | ??????(required) | ?????????(default) |                                ??????(statement)                                 |
|:---------------:|:----------------------------------:|:--------------:|:---------------:|:------------------------------------------------------------------------------:|
|      title      |              [string]              |       No       | NavigationPanel |                              NavigationPanel ??????                              |
|     expand      |             [boolean]              |       No       |      true       |                    ??????????????????, ????????? sync ?????????????????????                    |
|   expandMode    |       ['relative','flyout']        |       No       |    relative     |                           ????????????, ????????????????????????                           |
|   expandWidth   |              [number]              |       No       |       350       |                             ????????????, ???`px`?????????                             |
|  expandDisplay  |              [number]              |       No       |      1024       |                            ????????????????????????????????????                            |
|  flyoutDisplay  |              [number]              |       No       |        0        | ????????????????????????????????????????????????, ???`expandMode`??????`flyout`, ???????????????????????? |
| fullSizeDisplay |              [number]              |       No       |       800       |                          ??????????????????????????????????????????                          |
|  mobileDisplay  |              [number]              |       No       |        0        |                       ???????????????????????????????????????????????????                       |
|    showBack     |             [boolean]              |       No       |      true       |                                ????????????????????????                                |
|   showSearch    |             [boolean]              |       No       |      true       |                                 ?????????????????????                                 |
|  settingTitle   |              [string]              |       No       |    Settings     |                                 ?????????????????????                                 |
|   showSetting   |             [boolean]              |       No       |      true       |                                ????????????????????????                                |
|   background    |          [string(color)]           |       No       |       N/A       |                             NavigationPanel ?????????                             |
|      theme      | ['light','dark','custom','system'] |       No       |     system      |                                                                                |

### Events

---

| ?????????(Name)  | ????????????(args) |                    ??????(statement)                    |
|:-------------:|:--------------:|:-----------------------------------------------------:|
| setting-click |     Object     | ????????????????????????????????????, ??????`{ event: MouseEvent }` |
| update:expand |    boolean     |         ??????????????????????????????????????????`expand`          |
| expand-change |    boolean     |         ??????????????????????????????????????????????????????          |
|     back      |   MouseEvent   |               ????????????????????????????????????                |

### Slot

---

1. SearchBlock

??????????????????????????????, ?????????????????????????????????

```javascript
<template v-slot:searchBlock></template>
```

2. Panel

?????????`NavigationPanel`????????????

```javascript
<template v-slot:panel></template>
```

### Appendix

---

1. ??????`NavigationPanel`???`setting`???`dom`??????:

```vue
<fv-NavigationPanel v-model="items" ref="nav"></fv-NavigationPanel>
let setting = this.$refs.nav.setting;
```