---
  title: Callout Callout
  sidebarDepth: 2
---
  
[[toc]]

<script>
  export default {
    data(){
      return {
        show:true,
        color:'rgba(36, 36, 36, 1)',
        beak:9,
        space:0,
        position:{key:'topLeft',text:'topLeft'},
        options:[
          {key:'topLeft',text:'topLeft'},
          {key:'topRight',text:'topRight'},
          {key:'topCenter',text:'topCenter'},
          {key:'bottomLeft',text:'bottomLeft'},
          {key:'bottomRight',text:'bottomRight'},
          {key:'bottomCenter',text:'bottomCenter'},
          {key:'leftTop',text:'leftTop'},
          {key:'leftCenter',text:'leftCenter'},
          {key:'leftBottom',text:'leftBottom'},
          {key:'rightTop',text:'rightTop'},
          {key:'rightBottom',text:'rightBottom'},
          {key:'rightCenter',text:'rightCenter'}
        ]
      }
    }
  }
</script>

### Callout Light

<ClientOnly>
<fv-callout effect="hover" position="bottomLeft">
  <fv-button :background="color" theme="dark" icon="ActionCenter" borderRadius="3" style="width: 120px; height: 45px;">Callout</fv-button>
  <main>
    <fv-color-picker v-model="color" style="width:500px"></fv-color-picker>
  </main>
</fv-callout>
</ClientOnly>

``` vue
<fv-callout effect="hover" position="bottomLeft" >
  <fv-button :background="color" theme="dark" icon="ActionCenter" borderRadius="3" style="width: 120px; height: 45px;">Callout</fv-button>
  <main>
    <fv-color-picker v-model="color" style="width:500px"></fv-color-picker>
  </main>
</fv-callout>
```

### Callout Dark

<ClientOnly>
<fv-callout effect="hover" position="rightCenter" theme="dark">
  <fv-button :background="color" theme="dark" icon="ActionCenter" borderRadius="3" style="width: 120px; height: 45px;">Callout</fv-button>
  <main>
    <fv-color-picker v-model="color" style="width:500px"></fv-color-picker>
  </main>
</fv-callout>
</ClientOnly>

``` vue
<fv-callout effect="hover" position="rightCenter" theme="dark" >
  <fv-button :background="color" theme="dark" icon="ActionCenter" borderRadius="3" style="width: 120px; height: 45px;">Callout</fv-button>
  <main>
    <fv-color-picker v-model="color" style="width:500px"></fv-color-picker>
  </main>
</fv-callout>
```

### Callout Custom 

beak:

<fv-slider v-model="beak" :color="color" :mininum="9" :maxinum="30"  :showLabel="true">
<template slot-scope="prop" >
  <span>{{prop.value}}px</span>
</template>
</fv-slider>

space: 

<fv-slider v-model="space" :color="color" :scale="10" :maxinum="30" :showLabel="true">
<template slot-scope="prop" >
  <span>{{prop.value}}px</span>
</template>
</fv-slider>

position: 
<ClientOnly>
<fv-combobox v-model="position" :options="options">
</fv-combobox>
</ClientOnly>

{{position.key}}

<ClientOnly>
<fv-callout :lockScroll="true" :position="position.key" :beak="beak" :space="space" :popperStyle="{backgroundColor:color}" theme="dark" >
  <fv-button :background="color" theme="dark" icon="ActionCenter" borderRadius="3" style="width: 120px; height: 45px;">Callout</fv-button>
  <header>
    Fluent UI
  </header>
  <main>
    Hello Vue! Nice to meet you!
  </main>
  <footer>
    @Copyright Creator SN
  </footer>
</fv-callout>
</ClientOnly>

``` vue
<fv-callout :lockScroll="true" :position="position.key" :beak="beak" :space="space" :popperStyle="{backgroundColor:color}" theme="dark" >
  <fv-button :background="color" theme="dark" icon="ActionCenter" borderRadius="3" style="width: 120px; height: 45px;">Callout</fv-button>
  <header>
    Fluent UI
  </header>
  <main>
    Hello Vue! Nice to meet you!
  </main>
  <footer>
    @Copyright Creator SN
  </footer>
</fv-callout>
```


### Propoties
---
|  ??????(attr)  |             ??????(type)             | ??????(required) | ?????????(default) |    ??????(statement)     |
|:------------:|:----------------------------------:|:--------------:|:---------------:|:----------------------:|
| visible.sync |             [boolean]              |       No       |      false      |        ????????????        |
|    theme     | ['system','light','dark','custom'] |       No       |    'system'     |         ?????????         |
|   disabled   |             [boolean]              |       No       |      false      |        ????????????        |
|    cover     |             [boolean]              |       No       |      false      |      ??????????????????      |
|    space     |              [number]              |       No       |        0        |        ??????(px)        |
|     beak     |              [number]              |       No       |       10        |      ????????????(px)      |
|   position   |    ['topLeft','topCenter',...]     |       No       | 'bottomCenter'  |          ??????          |
|  lockScroll  |             [boolean]              |       No       |      false      |      ??????????????????      |
|  focusTrap   |             [boolean]              |       No       |      false      |        ????????????        |
|  delayClose  |              [number]              |       No       |        0        | ???????????????????????????(ms) |
|    effect    |     [???click','hover','always']     |       No       |     'click'     |      ??????????????????      |
| popperStyle  |              [object]              |       No       |       {}        |      ??????????????????      |
| popperClass  |              [array]               |       No       |       []        |      ????????????css       |

### Appendix
---

1. position

`position`????????????: `topLeft`, `topRight`, `topCenter`, `bottomLeft`, `bottomRight`, `bottomCenter`, `leftTop`, `leftCenter`, `leftBottom`, `rightTop`, `rightBottom`, `rightCenter`