---
  title: Breadcrumb Breadcrumb
  sidebarDepth: 2
---
  
[[toc]]

### Breadcrumb-DEMO 

Basic

<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb">
</fv-Breadcrumb>

```vue
<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb">
</fv-Breadcrumb>
```

### Breadcrumb-Editable
---

<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false">
</fv-Breadcrumb>

```vue
<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false">
</fv-Breadcrumb>
```

### Breadcrumb-Custom Icon
---

1. Char

<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false" separator=">">
</fv-Breadcrumb>

```vue
<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false" separator=">">
</fv-Breadcrumb>
```

2. Icon

<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false" separator="ChevronRightMed">
</fv-Breadcrumb>

```vue
<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false" separator="ChevronRightMed">
</fv-Breadcrumb>
```

### Breadcrumb-Hide Root
---

<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false" :showRoot="false">
</fv-Breadcrumb>

```vue
<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false" :showRoot="false">
</fv-Breadcrumb>
```

### Breadcrumb-Dark Theme
---

<div style="padding: 8px; background: black;">
<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" theme="dark" :readOnly="false">
</fv-Breadcrumb>
</div>

```vue
<div style="padding: 8px; background: black;">
    <fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" theme="dark" :readOnly="false">
    </fv-Breadcrumb>
</div>
```

### Breadcrumb-Dark Disabled
---
1. Light

<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false" disabled>
</fv-Breadcrumb>

```vue
<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" :readOnly="false" disabled>
</fv-Breadcrumb>
```

2. Dark

<div style="padding: 8px; background: black;">
<fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" theme="dark" :readOnly="false" disabled>
</fv-Breadcrumb>
</div>

```vue
<div style="padding: 8px; background: black;">
    <fv-Breadcrumb value="/creatorsn/kflowui/breadcrumb" theme="dark" :readOnly="false" disabled>
    </fv-Breadcrumb>
</div>
```

### Propoties
---
|  ??????(attr)   |             ??????(type)             | ??????(required) | ?????????(default)  |       ??????(statement)        |
|:-------------:|:----------------------------------:|:--------------:|:----------------:|:----------------------------:|
|     value     |              [string]              |       No       |       N/A        |          ???????????????          |
|   separator   |              [string]              |       No       |        /         | ???????????????, ???????????????????????? |
| separatorChar |              [string]              |       No       |        /         |      ???????????????????????????      |
|   showRoot    |             [boolean]              |       No       |       true       |          ???????????????          |
|   rootIcon    |              [string]              |       No       | FolderHorizontal |            ?????????            |
|   readOnly    |             [boolean]              |       No       |       true       |           ????????????           |
|  borderColor  |          [string(color)]           |       No       |       N/A        |                              |
|   disabled    |             [boolean]              |       No       |      false       |                              |
| borderRadius  |              [number]              |       No       |        2         |                              |
|     theme     | ['light','dark','custom','system'] |       No       |      system      |                              |


### Events
---
| ?????????(Name) | ????????????(args) | ??????(statement) |
|:------------:|:--------------:|:---------------:|
|  root-click  |     object     | ?????????????????????  |
|  item-click  |     object     | ?????????????????????  |
  
