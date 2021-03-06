---
title: CommandBar CommandBar
sidebarDepth: 2
---

[[toc]]

### CommandBar-DEMO

<script>
export default {
    data () {
        return {
            value: {},
            options: [
                { name: "Add", icon: "Add", iconColor: "rgba(0, 90, 158, 1)", func: this.customFunc, secondary: [
                    { name: "Email Message", func: this.customFunc, icon: "Mail", iconColor: "rgba(0, 153, 204, 1)", disabled: true },
                    { type: "divider" },
                    { name: "Calendar event", func: this.customFunc, icon: "WebAppBuilderModule" }
                ]},
                { name: "Edit", func: this.customFunc, icon: "SingleColumnEdit", disabled: true },
                { type: "divider" },
                { name: "Share", func: this.customFunc, icon: "Share" },
                { type: "more", secondary: [
                    { name: "Move to", func: this.customFunc, icon: "MoveToFolder"},
                    { name: "Copy to", func: this.customFunc, icon: "Copy"},
                    { name: "Rename", func: this.customFunc, icon: "Rename"}
                ]}
            ]
        }
    },
    methods: {
        customFunc () {
            console.log(1);
        }
    }
}
</script>

<ClientOnly>
<div style="width: 100%;">
    <fv-CommandBar v-model="value" :options="options" style="z-index: 2;"></fv-CommandBar>
</div>

```vue
<div style="width: 100%;">
    <fv-CommandBar v-model="value" :options="options"></fv-CommandBar>
</div>
```

### CommandBar-Toward Up

---

<div style="width: 100%;">
    <fv-CommandBar :options="options" toward="up" style="z-index: 2;"></fv-CommandBar>
</div>

```vue
<div style="width: 100%;">
    <fv-CommandBar :options="options" toward="up"></fv-CommandBar>
</div>
```

### CommandBar-Right Space

---

<div style="width: 100%;">
    <fv-CommandBar v-model="value" :options="options" style="z-index: 2;">
        <template v-slot:right-space>
            <span style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center;">
                <i class="ms-Icon ms-Icon--Error icon"></i>
            </span>
        </template>
    </fv-CommandBar>
</div>

```vue
<div style="width: 100%;">
    <fv-CommandBar v-model="value" :options="options">
        <template v-slot:right-space>
            <span style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center;">
                <i class="ms-Icon ms-Icon--Error icon"></i>
            </span>
        </template>
    </fv-CommandBar>
</div>
```

### CommandBar-Dark Theme

---

<div style="width: 100%;">
    <fv-CommandBar :options="options" theme="dark" style="z-index: 2;"></fv-CommandBar>
</div>

```vue
<div style="width: 100%;">
    <fv-CommandBar :options="options" theme="dark"></fv-CommandBar>
</div>
```

### CommandBar-Custom Background

---

<div style="width: 100%;">
    <fv-CommandBar :options="options" theme="dark" background="rgba(0, 153, 204, 1)" style="z-index: 2;"></fv-CommandBar>
</div>

```vue
<div style="width: 100%;">
    <fv-CommandBar :options="options" theme="dark" background="rgba(0, 153, 204, 1)"></fv-CommandBar>
</div>
```

</ClientOnly>

### Propoties

---

| ??????(attr) |             ??????(type)             | ??????(required) | ?????????(default) |    ??????(statement)     |
| :--------: | :--------------------------------: | :------------: | :-------------: | :--------------------: |
|   value    |              [object]              |       No       |       N/A       |   ???????????????????????????   |
|  options   |              [array]               |      Yes       |       N/A       |   CommandBar ?????????    |
|   toward   |           ['down','up']            |       No       |      down       |     ?????????????????????     |
| background |          [string(color)]           |       No       |       N/A       |    CommandBar ??????     |
|   theme    | ['light','dark','custom','system'] |       No       |     system      | ????????????, ?????????????????? |

### Events

---

| ?????????(Name) | ????????????(args) |     ??????(statement)      |
| :----------: | :------------: | :----------------------: |
|  item-click  |     object     | ???????????????????????????????????? |

### Slot

---

1. Right Space

?????????????????? CommandBar ????????????

```vue
<template v-slot:right-space>
  <i></i>
</template>
```

### Data

---

1. options

`options`????????????`ListView`??????`items`???????????????????????????, ???????????????????????????:

- ??????`icon`
- ????????????`iconColor`
- ????????????`func`
- ????????????????????????`secondary`, `secondary`?????????????????????`options`?????????

```javascript
options = [
  { name: "", icon: "", iconColor: "", type: "", func: {}, secondary: [], disabled: false }
];

//e.g.//

options: [
  {
    name: "Add",
    icon: "Add",
    iconColor: "rgba(0, 90, 158, 1)",
    func: this.customFunc,
    secondary: [
      {
        name: "Email Message",
        func: this.customFunc,
        icon: "Mail",
        iconColor: "rgba(0, 153, 204, 1)",
        disabled: true
      },
      { type: "divider" },
      {
        name: "Calendar event",
        func: this.customFunc,
        icon: "WebAppBuilderModule"
      }
    ]
  },
  { name: "Edit", func: this.customFunc, icon: "SingleColumnEdit", disabled: true },
  { type: "divider" },
  { name: "Share", func: this.customFunc, icon: "Share" },
  {
    type: "more",
    secondary: [
      { name: "Move to", func: this.customFunc, icon: "MoveToFolder" },
      { name: "Copy to", func: this.customFunc, icon: "Copy" },
      { name: "Rename", func: this.customFunc, icon: "Rename" }
    ]
  }
];
```

**?????????** 0.0.61????????????????????????????????????, ???????????????????????????`name`, `disabled`, `icon`, `iconColor`, `type`
