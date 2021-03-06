---
  title: Panel Panel
  sidebarDepth: 2
---
  
[[toc]]

### Panel-DEMO

<script>
export default {
    data () {
        return {
            basic: false,
            nearSide: false,
            lightDismiss: false,
            acrylic: false,
            footer: false,
            dark: false,
            acrylicDark: false
        }
    }
}
</script>

<ClientOnly>
<fv-button style="width: 200px;" @click="basic = true">Open Panel</fv-button>
<fv-Panel v-model="basic">
</fv-Panel>
</ClientOnly>

```vue
<fv-Panel v-model="basic">
</fv-Panel>
```

### Panel Near Side
---

<ClientOnly>
<fv-button style="width: 200px;" @click="nearSide = true">Open Panel</fv-button>
<fv-Panel v-model="nearSide" :isNearSide="true">
</fv-Panel>
</ClientOnly>

```vue
<fv-Panel v-model="nearSide" :isNearSide="true">
</fv-Panel>
```

### Panel Light Dismiss
---

<ClientOnly>
<fv-button style="width: 200px;" @click="lightDismiss = true">Open Panel</fv-button>
<fv-Panel v-model="lightDismiss" :isLightDismiss="true">
</fv-Panel>
</ClientOnly>

```vue
<fv-Panel v-model="lightDismiss" :isLightDismiss="true">
</fv-Panel>
```

### Panel Acrylic
---

<ClientOnly>
<fv-button style="width: 200px;" @click="acrylic = true">Open Panel</fv-button>
<fv-Panel v-model="acrylic" :isLightDismiss="true" :isAcrylic="true">
</fv-Panel>
</ClientOnly>

```vue
<fv-Panel v-model="acrylic" :isLightDismiss="true" :isAcrylic="true">
</fv-Panel>
```

### Panel Footer
---

<ClientOnly>
<fv-button style="width: 200px;" @click="footer = true">Open Panel</fv-button>
<fv-Panel v-model="footer" :isFooter="true" :isAcrylic="true">
<template v-slot:footer>
    <fv-button theme="dark" background="rgba(0, 90, 158, 1)">OK</fv-button>
    <fv-button @click="footer = false">Cancel</fv-button>
</template>
</fv-Panel>
</ClientOnly>

```vue
<fv-Panel v-model="footer" :isFooter="true" :isAcrylic="true">
    <template v-slot:footer>
        <fv-button theme="dark" background="rgba(0, 90, 158, 1)">OK</fv-button>
        <fv-button>Cancel</fv-button>
    </template>
</fv-Panel>
```

### Panel Dark Theme
---

Standard

<ClientOnly>
<fv-button style="width: 200px;" @click="dark = true">Open Panel</fv-button>
<fv-Panel v-model="dark" :isLightDismiss="true" theme="dark">
</fv-Panel>
</ClientOnly>

```vue
<fv-Panel v-model="dark" :isLightDismiss="true" theme="dark">
</fv-Panel>
```

Acrylic

<ClientOnly>
<fv-button style="width: 200px;" @click="acrylicDark = true">Open Panel</fv-button>
<fv-Panel v-model="acrylicDark" :isLightDismiss="true" :isAcrylic="true" theme="dark">
</fv-Panel>
</ClientOnly>

```vue
<fv-Panel v-model="acrylicDark" :isLightDismiss="true" :isAcrylic="true" theme="dark">
</fv-Panel>
```

### Propoties
---
|   ??????(attr)   |             ??????(type)             | ??????(required) | ?????????(default) |    ??????(statement)    |
|:--------------:|:----------------------------------:|:--------------:|:---------------:|:---------------------:|
|     value      |             [boolean]              |       No       |      false      |   ??????/??????`Panel`    |
|     title      |              [string]              |       No       |  Sample Panel   |         ??????          |
|     width      |              [number]              |       No       |       340       |         ??????          |
|   background   |          [string(color)]           |       No       |       N/A       |     `Panel`?????????     |
|   isNearSide   |             [boolean]              |       No       |      false      |    ?????????????????????     |
| isLightDismiss |             [boolean]              |       No       |      false      |  ???????????????????????????   |
|    isFooter    |             [boolean]              |       No       |      false      |   ????????????????????????    |
|   isAcrylic    |             [boolean]              |       No       |      false      | ????????????`Acrylic`?????? |
|     theme      | ['light','dark','custom','system'] |       No       |     system      |         ??????          |

### Slot
---
1. Container

?????????????????????

```javascript
<template v-slot:container>
</template>
```

2. Footer

?????????`Footer`??????

```javascript
<template v-slot:footer>
</template>
```