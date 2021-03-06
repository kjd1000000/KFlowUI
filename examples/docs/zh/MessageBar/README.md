---
  title: MessageBar MessageBar
  sidebarDepth: 2
---
  
[[toc]]

### MessageBar-DEMO

<script>
export default {
    data () {
        return {}
    },
    methods: {
        show1 () {
            this.$barWarning('This is a toast message.', {
                status: 'correct'
            });
        },
        show2 () {
            const h = this.$createElement;
            this.$barWarning(h('div', [
                h('span', { class: 'header' }, 'Message'),
                'This is a toast message.',
                h('a', 'Visit our website.')
            ]), {
                status: 'correct'
            });
        },
        show3 () {
            const h = this.$createElement;
            this.$barWarning(h('div', [
                h('span', { class: 'header' }, 'Message'),
                'This is a toast message.',
                h('a', 'Visit our website.')
            ]), {
                status: 'correct',
                showControl: true,
                autoClose: -1,
                control: [
                    h('fv-button', { 
                        on: {
                            click: () => {
                                alert('Yes');
                            }
                        }
                    }, 'Yes'),
                    h('fv-button', {
                        on: {
                            click: () => {
                                alert('No');
                            }
                        },
                        style: 'margin-left: 5px;' }, 'No')
                ]
            });
        }
    }
}
</script>

Default

<fv-MessageBar>
</fv-MessageBar>

Error

<fv-MessageBar status="error">
</fv-MessageBar>

Blocked

<fv-MessageBar status="blocked">
</fv-MessageBar>

Correct

<fv-MessageBar status="correct">
</fv-MessageBar>

Warning

<fv-MessageBar status="warning">
</fv-MessageBar>

```vue
Default

<fv-MessageBar>
</fv-MessageBar>

Error

<fv-MessageBar status="error">
</fv-MessageBar>

Blocked

<fv-MessageBar status="blocked">
</fv-MessageBar>

Correct

<fv-MessageBar status="correct">
</fv-MessageBar>

Warning

<fv-MessageBar status="warning">
</fv-MessageBar>
```

### MessageBar-Toast
---
1. Standard

<fv-button style="width: 200px;" @click="show1">Show MessageBar</fv-button>

```vue
<fv-button style="width: 200px;" @click="show1">Show MessageBar</fv-button>
```

```javascript
this.$barWarning('This is a toast message.', {
    status: 'correct'
});
```

2. Customize Message Template

<fv-button style="width: 200px;" @click="show2">Show MessageBar</fv-button>

```vue
<fv-button style="width: 200px;" @click="show2">Show MessageBar</fv-button>
```

```javascript
const h = this.$createElement;
this.$barWarning(h('div', [
    h('span', { class: 'header' }, 'Message'),
    'This is a toast message.',
    h('a', 'Visit our website.')
]), {
    status: 'correct'
});
```

3. Customize Control Template

<fv-button style="width: 200px;" @click="show3">Show MessageBar</fv-button>

```vue
<fv-button style="width: 200px;" @click="show3">Show MessageBar</fv-button>
```

```javascript
const h = this.$createElement;
this.$barWarning(h('div', [
    h('span', { class: 'header' }, 'Message'),
    'This is a toast message.',
    h('a', 'Visit our website.')
]), {
    status: 'correct',
    showControl: true,
    autoClose: -1,
    control: [
        h('fv-button', { 
            on: {
                click: () => {
                    alert('Yes');
                }
            }
        }, 'Yes'),
        h('fv-button', {
            on: {
                click: () => {
                    alert('No');
                }
            },
            style: 'margin-left: 5px;' }, 'No')
    ]
});
```

### Propoties
---
| ??????(attr)  |                    ??????(type)                     | ??????(required) | ?????????(default) |                       ??????(statement)                        |
|:-----------:|:-------------------------------------------------:|:--------------:|:---------------:|:------------------------------------------------------------:|
|   status    | ['default','warning','correct','blocked','error'] |       No       |     default     |                     ????????????, ?????????5???                      |
| showControl |                     [boolean]                     |       No       |      false      |                       ????????????????????????                       |
|  showClose  |                     [boolean]                     |       No       |      true       |                       ????????????????????????                       |
|    mode     |               ['relative','fixed']                |       No       |    relative     |   ????????????`relative`??????????????????, `fixed`????????????????????????    |
|  autoClose  |                     [number]                      |       No       |      3000       | MessageBar??????????????????, ?????????`ms`, ??????`-1`???????????????????????? |

### Events
---
| ?????????(Name) | ????????????(args) |      ??????(statement)       |
|:------------:|:--------------:|:--------------------------:|
|    close     |                | ??????`MessageBar`??????????????? |

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

2. Control

```vue
<template v-slot:control>
    <fv-button>Yes</fv-button>
</template>
```

### Toast
---

```javascript
this.$barWarning(msg, options = {
    status: 'default',
    showControl: false,
    showClose: true,
    control: '',
    mode: 'fixed',
    autoClose: 3000
});
```

```javascript
this.$swiftWarning(element, options = {
    color: "rgba(173, 38, 45, 1)",
    replaceTitle: "Swift Warning"
});
```
  
