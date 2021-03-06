---
  title: ListView ListView
  sidebarDepth: 2
---
  
[[toc]]

### ListView-DEMO

<script>
export default {
    data () {
        return {
            items: [
                { key: "fruitsHeader", name: "Fruits", type: "header" },
                { key: "apple", name: "Apple" },
                { key: "banana", name: "Banana" },
                { key: "orange", name: "Orange", disabled: true },
                { key: "grape", name: "Grape" },
                { key: "divider_1", name: "", type: "divider" },
                { key: "vegetablesHeader", name: "Vegetables", type: "header" },
                { key: "broccoli", name: "Broccoli" },
                { key: "carrot", name: "Carrot" },
                { key: "lettuce", name: "Lettuce" }
            ]
        }
    }
}
</script>

<div style="width: 100%; height: 500px; padding: 15px;">
    <fv-ListView v-model="items">
    </fv-ListView>
</div>

```vue
<div style="width: 100%; height: 500px; padding: 15px;">
    <fv-ListView v-model="items">
    </fv-ListView>
</div>
```

### ListView-Multiple
---
<div style="width: 100%; height: 500px; padding: 15px;">
    <fv-ListView v-model="items" :multiple="true">
    </fv-ListView>
</div>

```vue
<div style="width: 100%; height: 500px; padding: 15px;">
    <fv-ListView v-model="items" :multiple="true">
    </fv-ListView>
</div>
```

### ListView-Dark Theme
---
<div style="width: 100%; height: 500px; padding: 15px; background: black;">
    <fv-ListView v-model="items" theme="dark">
    </fv-ListView>
</div>

```vue
<div style="width: 100%; height: 500px; padding: 15px; background: black;">
    <fv-ListView v-model="items" theme="dark">
    </fv-ListView>
</div>
```

### ListView-Custom Choosen Background
---
<div style="width: 100%; height: 500px; padding: 15px; background: black;">
    <fv-ListView v-model="items" theme="dark" choosenBackground="rgba(0, 204, 153, 0.6)">
    </fv-ListView>
</div>

```vue
<div style="width: 100%; height: 500px; padding: 15px; background: black;">
    <fv-ListView v-model="items" theme="dark" choosenBackground="rgba(0, 204, 153, 0.6)">
    </fv-ListView>
</div>
```

### Propoties
---
|    ??????(attr)     |             ??????(type)             | ??????(required) | ?????????(default) | ??????(statement)  |
|:-----------------:|:----------------------------------:|:--------------:|:---------------:|:----------------:|
|       value       |              [array]               |      Yes       |       N/A       | ListView???????????? |
|     multiple      |             [boolean]              |       No       |      false      |   ??????????????????   |
|     rowHeight     |              [number]              |       No       |       N/A       |    ???????????????    |
| headerForeground  |          [string(color)]           |       No       |       N/A       |    ???????????????    |
| choosenBackground |          [string(color)]           |       No       |       N/A       |   ??????????????????   |
|       theme       | ['light','dark','custom','system'] |       No       |     system      |                  |

### Events
---
| ?????????(Name)  | ????????????(args) |       ??????(statement)        |
|:-------------:|:--------------:|:----------------------------:|
|  chooseItem   |     object     |     ??????????????????????????????     |
| choosen-items |     array      | ?????????????????????????????????????????? |

### Slot
---
1. ListItem

?????????value?????????????????????name??????????????????, ????????????????????????
- item: ?????????
- index: ???????????????

```vue
<template v-slot:listItem="x">
    <p></p>
</template>
```

### Data
---
1. items

??????`key`?????????????????????????????????????????????????????????????????????????????????

```javascript
items = [{key: '', name: '', type: '', disabled: ''}]

//e.g.//

items: [
    { key: "fruitsHeader", name: "Fruits", type: "header" },
    { key: "apple", name: "Apple" },
    { key: "banana", name: "Banana" },
    { key: "orange", name: "Orange", disabled: true },
    { key: "grape", name: "Grape" },
    { key: "divider_1", name: "", type: "divider" },
    { key: "vegetablesHeader", name: "Vegetables", type: "header" },
    { key: "broccoli", name: "Broccoli" },
    { key: "carrot", name: "Carrot" },
    { key: "lettuce", name: "Lettuce" }
]
```

### Appendix

---

1. ??????`ListView`??????`index`???`item`???`dom`??????(??????`<index>`??????`items`??????):

```vue
<fv-ListView v-model="items" ref="list"></fv-ListView>
let item = this.$refs.list.$refs['list_item_<index>]'];
```