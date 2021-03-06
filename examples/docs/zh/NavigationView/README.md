---
title: NavigationView NavigationView
sidebarDepth: 2
---

[[toc]]

### NavigationView-DEMO

<script>
export default {
    data () {
        return {
            value: {},
            options: [
                { name: "Fruits", type: "header"},
                { name: "Apple", icon: "WindowsLogo"},
                { name: "Banana", icon: "DelveAnalyticsLogo"},
                { name: "Orange", icon: "Guitar"},
                { name: "Grape", icon: "HailDay"},
                { name: "", type: "divider" },
                { name: "Vegetables", type: "header"},
                { name: "Broccoli", icon: "QuadColumn"},
                { name: "Carrot", icon: "Quantity"},
                { name: "Lettuce", icon: "TestBeaker"}
            ]
        }
    }
}
</script>

<ClientOnly>
<div style="position: relative; width: 100%; height: 800px; display: flex;">
    <fv-NavigationView :options="options"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
</ClientOnly>

```vue
<div style="position: relative; width: 100%; height: 800px; display: flex;">
    <fv-NavigationView :options="options"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
```

### NavigationView-Flyout

---

<ClientOnly>
<div style="position: relative; width: 100%; height: 800px; display: flex;">
    <fv-NavigationView :options="options" expandMode="flyout"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
</ClientOnly>

```vue
<div style="position: relative; width: 100%; height: 800px; display: flex;">
    <fv-NavigationView :options="options" expandMode="flyout"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
```

### NavigationView-Mobile Display

---

<ClientOnly>
<div style="position: relative; width: 100%; height: 800px; display: flex;">
    <fv-NavigationView :options="options" mobileDisplay="100000000"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
</ClientOnly>

```vue
<div style="position: relative; width: 100%; height: 800px; display: flex;">
    <fv-NavigationView :options="options" mobileDisplay="100000000"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
```

### NavigationView-Flyout

---

1. Standard

<ClientOnly>
<div style="position: relative; width: 100%; height: 800px; background: black; display: flex;">
    <fv-NavigationView :options="options" theme="dark"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
</ClientOnly>

```vue
<div style="position: relative; width: 100%; height: 800px; background: black; display: flex;">
    <fv-NavigationView :options="options" theme="dark"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
```

2. Flyout

<ClientOnly>
<div style="position: relative; width: 100%; height: 800px; background: black; display: flex;">
    <fv-NavigationView :options="options" expandMode="flyout" theme="dark"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
</ClientOnly>

```vue
<div style="position: relative; width: 100%; height: 800px; background: black; display: flex;">
    <fv-NavigationView :options="options" expandMode="flyout" theme="dark"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
```

3. Mobile

<ClientOnly>
<div style="position: relative; width: 100%; height: 800px; background: black; display: flex;">
    <fv-NavigationView :options="options" mobileDisplay="100000000" theme="dark"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
</ClientOnly>

```vue
<div style="position: relative; width: 100%; height: 800px; background: black; display: flex;">
    <fv-NavigationView :options="options" mobileDisplay="100000000" theme="dark"></fv-NavigationView>
    <fv-img src="https://www.mam-e.it/wp-content/uploads/2017/07/mame-musica-coldplay-le-info-utili-e-le-norme-di-sicurezza.jpg" style="width: 350px; height: 100%; flex: 1;"></fv-img>
</div>
```

### Propoties

---

|   ??????(attr)    |             ??????(type)             | ??????(required) | ?????????(default) |                                ??????(statement)                                 |
|:---------------:|:----------------------------------:|:--------------:|:---------------:|:------------------------------------------------------------------------------:|
|      value      |              [array]               |       No       |       N/A       |                          ???????????????, ???`v-model`??????                           |
|     options     |              [array]               |      Yes       |       N/A       |                  ????????????, ??????`ListView`??????`items`????????????                   |
|      title      |              [string]              |       No       | NavigationView  |                              NavigationView ??????                               |
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
|   foreground    |          [string(color)]           |       No       |       N/A       |                             NavigationView ?????????                              |
|   background    |          [string(color)]           |       No       |       N/A       |                             NavigationView ?????????                              |
|      theme      | ['light','dark','custom','system'] |       No       |     system      |                                                                                |

### Events

---

| ?????????(Name)  | ????????????(args) |                    ??????(statement)                    |
|:-------------:|:--------------:|:-----------------------------------------------------:|
|  item-click   |     object     |                    ?????????????????????                     |
| setting-click |     Object     | ????????????????????????????????????, ??????`{ event: MouseEvent }` |
| update:expand |    boolean     |         ??????????????????????????????????????????`expand`          |
| expand-change |    boolean     |         ??????????????????????????????????????????????????????          |
|     back      |   MouseEvent   |               ????????????????????????????????????                |

### Data

---

1. options

- ??????????????????`ListView`???`items`?????????, ??????`key`?????????????????????????????????????????????????????????????????????????????????
- ??????????????????`icon`???????????????`Fabric Icon`

```javascript
options = [{ key: "", name: "", type: "", icon: "", disabled: "" }];

//e.g.//

options: [
  { name: "Fruits", type: "header" },
  { name: "Apple", icon: "WindowsLogo" },
  { name: "Banana", icon: "DelveAnalyticsLogo" },
  { name: "Orange", icon: "Guitar" },
  { name: "Grape", icon: "HailDay" },
  { name: "", type: "divider" },
  { name: "Vegetables", type: "header" },
  { name: "Broccoli", icon: "QuadColumn" },
  { name: "Carrot", icon: "Quantity" },
  { name: "Lettuce", icon: "TestBeaker" }
];
```

### Appendix

---

1. `NavigationView`??????`setting`?????????????????????`options`???, ????????????`options`?????????`setting`???. ???????????????`setting`??????, `value`???????????????`{ name: ">setting", type: "setting" }`, ??????????????????????????????????????????????????????????????????`setting`???.