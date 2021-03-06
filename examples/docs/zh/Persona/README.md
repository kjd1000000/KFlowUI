---
  title: Persona Persona
  sidebarDepth: 2
---
  
[[toc]]

### Persona-DEMO

<script>
export default {
    data () {
        return {
            src: "https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png",
            theme: false
        }
    }
}
</script>

<ClientOnly>

<div style="width: 100%; height: auto; padding: 25px; box-sizing: border-box;" :style="{background: theme ? 'black' : ''}">
    <fv-toggle-switch v-model="theme" on="Dark" off="Light"></fv-toggle-switch>

<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="24" status="online" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
</fv-Persona>

```vue
<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="24" :showInfo="true">
    <template v-slot:name>
        <p>Annie Lindqvist</p>
    </template>
</fv-Persona>
```

<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="32" status="online" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
</fv-Persona>

```vue
<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="32" :showInfo="true">
    <template v-slot:name>
        <p>Annie Lindqvist</p>
    </template>
</fv-Persona>
```

<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" status="away" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
</template>
</fv-Persona>

```vue
<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" status="away" :showInfo="true">
    <template v-slot:name>
        <p>Annie Lindqvist</p>
    </template>
    <template v-slot:secondary>
        <p>Software Engineer</p>
    </template>
</fv-Persona>
```

<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="48" status="busy" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
</template>
</fv-Persona>

```vue
<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="48" status="busy" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
</template>
</fv-Persona>
```

<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="56" status="offline" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
</template>
</fv-Persona>

```vue
<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="56" status="offline" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
</template>
</fv-Persona>
```

<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="72" status="ok" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
    <p>In a meeting</p>
</template>
</fv-Persona>

```vue
<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="72" status="ok" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
    <p>In a meeting</p>
</template>
</fv-Persona>
```

<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="100" status="dnd" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
    <p>In a meeting</p>
    <p>Available at 4:00pm</p>
</template>
</fv-Persona>

```vue
<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="100" status="dnd" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
    <p>In a meeting</p>
    <p>Available at 4:00pm</p>
</template>
</fv-Persona>
```

<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="120" status="blocked" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
    <p>In a meeting</p>
    <p>Available at 4:00pm</p>
</template>
</fv-Persona>

```vue
<fv-Persona :src="src" :theme="theme ? 'dark' : 'light'" size="120" status="blocked" :showInfo="true">
<template v-slot:name>
    <p>Annie Lindqvist</p>
</template>
<template v-slot:secondary>
    <p>Software Engineer</p>
    <p>In a meeting</p>
    <p>Available at 4:00pm</p>
</template>
</fv-Persona>
```

<fv-Persona :theme="theme ? 'dark' : 'light'" size="120" name="Annie Lindqvist" :showInfo="true">
<template v-slot:secondary>
    <p>Software Engineer</p>
    <p>In a meeting</p>
    <p>Available at 4:00pm</p>
</template>
</fv-Persona>

```vue
<fv-Persona :theme="theme ? 'dark' : 'light'" size="120" name="Annie Lindqvist" :showInfo="true">
<template v-slot:secondary>
    <p>Software Engineer</p>
    <p>In a meeting</p>
    <p>Available at 4:00pm</p>
</template>
</fv-Persona>
```

</div>
</ClientOnly>

### Propoties
---
| ??????(attr) |               ??????(type)               | ??????(required) | ?????????(default) |   ??????(statement)    |
|:----------:|:--------------------------------------:|:--------------:|:---------------:|:--------------------:|
|    src     |                [string]                |       No       |       N/A       | Persona??????????????????  |
|    name    |                [string]                |       No       |       N/A       |         ??????         |
|    size    |                [number]                |       No       |       40        |   Persona????????????    |
|   status   | [online,offline,away,busy,dnd,blocked] |       No       |       N/A       |     Persona??????      |
|    icon    |                [string]                |       No       |       N/A       |    ?????????????????????    |
| iconColor  |            [string(color)]             |       No       |       N/A       | ?????????????????????????????? |
|   theme    |   ['light','dark','custom','system']   |       No       |     system      |    Persona theme     |

### Slot
---

1. Name

?????????????????????????????????`name`, ??????????????????Persona???????????????????????????

```vue
<template v-slot:name>
    <p></p>
</template>
```

2. Secondary

```vue
<template v-slot:secondary>
    <p></p>
</template>
```
