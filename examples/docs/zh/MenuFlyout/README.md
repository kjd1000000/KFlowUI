---
title: MenuFlyout MenuFlyout
sidebarDepth: 2
---

[[toc]]

<script>
  export default {
    data(){
      return {
        theme:0,
      }
    },
    computed:{
      $theme(){
        return !this.theme?'light':'dark';
      },
      divStyle(){
        if (this.$theme=='light'){
          return {
            backgroundColor:'#fff',
            padding:'20px',
            color:'#000',
          }
        }else{
          return {
            backgroundColor:'#000',
            padding:'20px',
            color:'#fff',
          }
        }
      }
    },
    methods:{
      alert(text){
        alert(text);
      },
      go(url){
        window.location.href=url
      }
    }
  }
</script>

<div :style="divStyle">
THEME:<fv-toggle-switch v-model="theme" :on="$theme" :off="$theme" :theme="$theme"/>
</div>

### MenuFlyout

<ClientOnly>
<div :style="divStyle">
<fv-menuFlyout :theme="$theme" borderRadius="2px">
<fv-menu-sub-flyout label="Actions"> 
<fv-menu-item-flyout  label="New">
</fv-menu-item-flyout>
<fv-menu-sub-flyout label="Remove">  
<fv-menu-item-flyout label="Item">
</fv-menu-item-flyout>
</fv-menu-sub-flyout>
</fv-menu-sub-flyout>
<hr/>
<fv-menu-item-flyout>
</fv-menu-item-flyout>
<fv-menu-item-flyout>
</fv-menu-item-flyout>
</fv-menuFlyout>
</div>
</ClientOnly>

```vue
<fv-menuFlyout :theme="$theme" borderRadius="2px">
  <fv-menu-sub-flyout label="Actions">
    <fv-menu-item-flyout label="New"> </fv-menu-item-flyout>
    <fv-menu-sub-flyout label="Remove">
      <fv-menu-item-flyout label="Item"> </fv-menu-item-flyout>
    </fv-menu-sub-flyout>
  </fv-menu-sub-flyout>
  <hr />
  <fv-menu-item-flyout> </fv-menu-item-flyout>
  <fv-menu-item-flyout> </fv-menu-item-flyout>
</fv-menuFlyout>
```

### MenuFlyout Custom Block

<ClientOnly>
<div :style="divStyle">
<fv-menu-flyout :theme="$theme">
  <fv-menu-block-flyout>
    <template v-slot:header>Actions</template>
    <fv-menu-item-flyout label="New" @click="alert('New');">
    </fv-menu-item-flyout>
    <fv-menu-item-flyout label="Remove" @click="alert('Remove');">
    </fv-menu-item-flyout>
  </fv-menu-block-flyout>
  <hr/>
  <fv-menu-block-flyout>
    <template v-slot:header>Share</template>
    <fv-menu-sub-flyout label="Microsoft" :spilt="true">
      <fv-menu-item-flyout label="outlook" icon="OutlookLogo16">
      </fv-menu-item-flyout>
      <fv-menu-item-flyout label="github" icon="GitGraph" @click="go('https://github.com')">
      </fv-menu-item-flyout>
    </fv-menu-sub-flyout>
  </fv-menu-block-flyout>
</fv-menu-flyout>
</div>
</ClientOnly>

```vue
<fv-menu-flyout>
  <fv-menu-block-flyout>
    <template v-slot:header>Actions</template>
    <fv-menu-item-flyout label="New" @click="alert('New');">
    </fv-menu-item-flyout>
    <fv-menu-item-flyout label="Remove" @click="alert('Remove');">
    </fv-menu-item-flyout>
  </fv-menu-block-flyout>
  <hr/>
  <fv-menu-block-flyout>
    <template v-slot:header>Share</template>
    <fv-menu-sub-flyout label="Microsoft" :spilt="true">
      <fv-menu-item-flyout label="outlook" icon="OutlookLogo16">
      </fv-menu-item-flyout>
      <fv-menu-item-flyout label="github" icon="GitGraph" @click="go('https://github.com')">
      </fv-menu-item-flyout>
    </fv-menu-sub-flyout>
  </fv-menu-block-flyout>
</fv-menu-flyout>
```

### MenuFlyout Checkable

<ClientOnly>
<div :style="divStyle">
<fv-menuFlyout :checkable="true" :theme="$theme" label="Files">
<fv-menu-sub-flyout label="Show">
  <fv-menu-item-flyout label="Name" /> 
  <fv-menu-item-flyout label="Time" />
  <fv-menu-item-flyout label="Author" />
</fv-menu-sub-flyout>
<fv-menu-item-flyout label="This is a long text for menuflyout item" />
<fv-menu-sub-flyout label="disabled" :disabled="true" />
<fv-menu-item-flyout label="disabledItem" :disabled="true" />
</fv-menuFlyout>
</div>
</ClientOnly>

``` vue
<fv-menuFlyout :checkable="true" :theme="$theme">
<fv-menu-sub-flyout label="Show">
  <fv-menu-item-flyout label="Name" /> 
  <fv-menu-item-flyout label="Time" />
  <fv-menu-item-flyout label="Author" />
</fv-menu-sub-flyout>
<fv-menu-item-flyout label="This is a long text for menuflyout item" />
</fv-menuFlyout>
```

### MenuFlyout Disabled

<ClientOnly>
<div :style="divStyle">
<fv-menuFlyout :checkable="true" :theme="$theme" label="Files" :disabled="true">
<fv-menu-sub-flyout label="Show">
  <fv-menu-item-flyout label="Name" /> 
  <fv-menu-item-flyout label="Time" />
  <fv-menu-item-flyout label="Author" />
</fv-menu-sub-flyout>
<fv-menu-item-flyout label="This is a long text for menuflyout item" />
</fv-menuFlyout>
</div>
</ClientOnly>

``` vue
<fv-menuFlyout :checkable="true" :theme="$theme" label="Files" :disabled="true">
<fv-menu-sub-flyout label="Show">
  <fv-menu-item-flyout label="Name" /> 
  <fv-menu-item-flyout label="Time" />
  <fv-menu-item-flyout label="Author" />
</fv-menu-sub-flyout>
<fv-menu-item-flyout label="This is a long text for menuflyout item" />
</fv-menuFlyout>
```

### MenuFlyout Custom Style

<ClientOnly>
  <div :style="divStyle">
  <fv-menuFlyout :checkable="true" label="Files" theme="dark" :beak="15" backgroundColor="#00cc99" color="#fff" borderColor="#00cc99">
  <fv-menu-sub-flyout label="Show">
    <fv-menu-item-flyout label="Name" /> 
    <fv-menu-item-flyout label="Time" />
    <fv-menu-item-flyout label="Author" />
  </fv-menu-sub-flyout>
  <fv-menu-item-flyout label="This is a long text for menuflyout item" />
  <fv-menu-block-flyout>
  <template v-slot:header>
  Share
  </template>
  <fv-menu-item-flyout label="github">
  </fv-menu-item-flyout>
   <fv-menu-item-flyout label="codeforces" :disabled="true">
  </fv-menu-item-flyout>
  </fv-menu-block-flyout>
  </fv-menuFlyout>
  </div>
</ClientOnly>

``` vue
 <fv-menuFlyout :checkable="true" label="Files" theme="dark" :beak="15" backgroundColor="#00cc99" color="#fff" borderColor="#00cc99">
  <fv-menu-sub-flyout label="Show">
    <fv-menu-item-flyout label="Name" /> 
    <fv-menu-item-flyout label="Time" />
    <fv-menu-item-flyout label="Author" />
  </fv-menu-sub-flyout>
  <fv-menu-item-flyout label="This is a long text for menuflyout item" />
  <fv-menu-block-flyout>
  <template v-slot:header>
  Share
  </template>
  <fv-menu-item-flyout label="github">
  </fv-menu-item-flyout>
  </fv-menu-block-flyout>
  </fv-menuFlyout>
```

### Propoties

---

#### Menu

| ??????(attr) | ??????(type) | ??????(required) | ?????????(default) | ??????(statement) |
| :--------: | :--------: | :------------: | :-------------: | :-------------: |
| label | [string] | No | 'Click the Menu' | ????????? |
| theme | ['system','dark','light','custom'] | No | 'system' | ????????? |
| disabled | [boolean] | No | false | ???????????? |
| checkable | [boolean] | No | false | ???????????? |
| position | [string] | No | 'bottomLeft' | callout???????????? |
| beak | [number] | No | 0 | ???????????????????????????10????????? |
| backgroundColor | [string] | No | undefined | ????????? |
| borderColor | [string] | No | undefined | ?????????????????? |
| borderRaidus | [string] | No | undefined | ???????????? |
| color | [string] | No | undefined | ?????? |

#### SubMenu 

| ??????(attr) | ??????(type) | ??????(required) | ?????????(default) | ??????(statement) |
| :--------: | :--------: | :------------: | :-------------: | :-------------: |
| label | [string] | No | 'Click the Menu' | ????????? |
| theme | ['system','dark','light','custom'] | No | 'system' | ????????? |
| disabled | [boolean] | No | false | ???????????? |
| checkable | [boolean] | No | false | ???????????? |
| position | [string] | No | 'rightTop' | callout???????????? |
| checked.sync | [boolean] | No | false | ???????????? |
| backgroundColor | [string] | No | undefined | ????????? |
| color | [string] | No | undefined | ?????? |
| split | [boolean] | No | false | ?????????????????????????????? |
| icon | [string] | No | undefined | Fabric?????? |

#### Item 

| ??????(attr) | ??????(type) | ??????(required) | ?????????(default) | ??????(statement) |
| :--------: | :--------: | :------------: | :-------------: | :-------------: |
| label | [string] | No | 'Click the Menu' | ????????? |
| theme | ['system','dark','light','custom'] | No | 'system' | ????????? |
| disabled | [boolean] | No | false | ???????????? |
| checkable | [boolean] | No | false | ???????????? |
| checked.sync | [boolean] | No | false | ???????????? |
| backgroundColor | [string] | No | undefined | ????????? |
| color | [string] | No | undefined | ?????? |
| icon | [string] | No | undefined | Fabric?????? |


### Events

---

#### SubMenu

| ?????????(Name) | ????????????(args) | ??????(statement) |
| :----------: | :------------: | :-------------: |
| click | null | ?????????????????? |

#### Item

| ?????????(Name) | ????????????(args) | ??????(statement) |
| :----------: | :------------: | :-------------: |
| click | null | ???????????? |


### Slot

#### Block

``` vue
<template v-slot:header>
  Header
</template>
```