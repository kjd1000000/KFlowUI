---
  title: InfoBox InfoBox
  sidebarDepth: 2
---
  
[[toc]]

### InfoBox-DEMO

<script>
export default {
    data () {
        return {}
    },
    methods: {
        show1 () {
            this.$infoBox('This is a toast info.', {
                status: 'correct',
                title: 'Toast Info',
                confirm: () => { alert('Confirm'); },
                cancel: () => { alert('Cancel'); }
            });
        },
        show2 () {
            const h = this.$createElement;
            this.$infoBox(h('div', [
                h('span', { class: 'header' }, 'Message'),
                'This is a toast info.',
                h('a', 'Visit our website.')
            ]), {
                status: 'correct',
                confirm: () => { alert('Confirm'); },
                cancel: () => { alert('Cancel'); }
            });
        }
    }
}
</script>

Default

<fv-InfoBox>
</fv-InfoBox>

Error

<fv-InfoBox status="error">
</fv-InfoBox>

Blocked

<fv-InfoBox status="blocked">
</fv-InfoBox>

Correct

<fv-InfoBox status="correct">
</fv-InfoBox>

Warning

<fv-InfoBox status="warning">
</fv-InfoBox>

### InfoBox-Dark Theme
---
Default

<fv-InfoBox theme="dark">
</fv-InfoBox>

Error

<fv-InfoBox status="error" theme="dark">
</fv-InfoBox>

Blocked

<fv-InfoBox status="blocked" theme="dark">
</fv-InfoBox>

Correct

<fv-InfoBox status="correct" theme="dark">
</fv-InfoBox>

Warning

<fv-InfoBox status="warning" theme="dark">
</fv-InfoBox>

### InfoBox-Toast
---
1. Standard

<fv-button style="width: 200px;" @click="show1">Show InfoBox</fv-button>

```vue
<fv-button style="width: 200px;" @click="show1">Show InfoBox</fv-button>
```

```javascript
this.$infoBox('This is a toast info.', {
    status: 'correct',
    title: 'Toast Info',
    confirm: () => { alert('Confirm'); },
    cancel: () => { alert('Cancel'); }
});
```

2. Customize Message Template

<fv-button style="width: 200px;" @click="show2">Show InfoBox</fv-button>

```vue
<fv-button style="width: 200px;" @click="show2">Show InfoBox</fv-button>
```

```javascript
const h = this.$createElement;
this.$infoBox(h('div', [
    h('span', { class: 'header' }, 'Message'),
    'This is a toast info.',
    h('a', 'Visit our website.')
]), {
    status: 'correct',
    confirm: () => { alert('Confirm'); },
    cancel: () => { alert('Cancel'); }
});
```

### Propoties
---
|  ??????(attr)  |                    ??????(type)                     | ??????(required) | ?????????(default) |        ??????(statement)        |
|:------------:|:-------------------------------------------------:|:--------------:|:---------------:|:-----------------------------:|
|    title     |                     [string]                      |       No       |       Tip       |       `InfoBox`????????????       |
|    status    | ['default','warning','correct','blocked','error'] |       No       |     default     |      ????????????, ?????????5???      |
|     mode     |          ['relative','absolute','fixed']          |       No       |    relative     |         ??????????????????          |
|    toast     |                     [boolean]                     |       No       |      false      | ???????????????????????????`toast`?????? |
| confirmTitle |                     [string]                      |       No       |      ??????       |         ??????????????????          |
| cancelTitle  |                     [string]                      |       No       |      ??????       |         ??????????????????          |
|   acrylic    |                     [boolean]                     |       No       |      false      |      ???????????????????????????       |
|    theme     |        ['light','dark','custom','system']         |       No       |     system      |                               |

### Events
---
| ?????????(Name) | ????????????(args) |     ??????(statement)     |
|:------------:|:--------------:|:-----------------------:|
|   confirm    |                | ??????`InfoBox`??????????????? |
|    close     |                | ??????`InfoBox`??????????????? |

### Slot
---

1. Msg

- ?????????????????????
- `class="header"` ????????????
- `<a></a>` ??????

```vue
<template v-slot:msg>
    <span>Normal content <span class="header">Header content</span><a>Link</a></span>
</template>
```

### Toast
---

```javascript
this.$infoBox(msg, options = {
    title: 'Tip',
    status: 'default',
    mode: 'fixed',
    toast: true,
    confirmTitle: '??????',
    cancelTitle: '??????',
    acrylic: false,
    confirm: async () => {},
    cancel: async () => {},
    theme: 'system'
});
```
  
