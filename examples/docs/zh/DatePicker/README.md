---
  title: DatePicker DatePicker
  sidebarDepth: 2
---
  
[[toc]]

<style>
  .custom_style{
    background-color: rgb(0, 204, 153);
    border:1px solid rgb(0, 204, 153);
    color:white;
  }
  .custom_style:hover{
    border:1px solid rgb(0, 204, 153);
    background-color: rgb(0, 204, 153,0.8);
  }
</style>

<script>
  export default {
    data(){
      return {
        theme:0,
        date:new Date()
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
      },
    }
  }
</script>

<div :style="divStyle">
THEME:<fv-toggle-switch v-model="theme" :on="$theme" :off="$theme" :theme="$theme"/>
</div>

### DatePicker-Default

<div :style="divStyle">
<ClientOnly>
<fv-DatePicker style="width:150px" v-model="date" :theme="$theme">
</fv-DatePicker>
</ClientOnly>
</div>

``` vue
<fv-DatePicker v-model="date" :theme="$theme">
</fv-DatePicker>
```

### DatePicker-Simple

<div :style="divStyle">
<ClientOnly>
<fv-DatePicker v-model="date" :theme="$theme" :hideYear="true">
</fv-DatePicker>
</ClientOnly>
</div>

``` vue
<fv-DatePicker v-model="date" :theme="$theme" :hideYear="true">
</fv-DatePicker>
```

### DatePicker-Full

<div :style="divStyle">
<ClientOnly>
<fv-DatePicker v-model="date" :theme="$theme" :showWeek="true">
</fv-DatePicker>
</ClientOnly>
</div>

``` vue
<fv-DatePicker v-model="date" :theme="$theme" :showWeek="true">
</fv-DatePicker>
```

### DatePicker-Custom

<div :style="divStyle">
<ClientOnly>
<fv-DatePicker 
v-model="date" 
:theme="$theme" 
:showWeek="true" 
class="custom_style" 
innerBorderColor="rgb(0, 204, 153)"
:optionsStyle="{backgroundColor:'rgba(0, 204, 153,0.6)',color:'white',borderColor:'rgba(0, 204, 153,0.6)'}"
:selectStyle="{backgroundColor:'rgb(0, 204, 153)'}"
>
</fv-DatePicker>
</ClientOnly>
</div>

``` vue
<fv-DatePicker 
  v-model="date" 
  :theme="$theme" 
  :showWeek="true" 
  class="custom_style" 
  innerBorderColor="rgb(0, 204, 153)"
  :optionsStyle="{backgroundColor:'rgba(0, 204, 153,0.6)',color:'white',borderColor:'rgba(0, 204, 153,0.6)'}"
  :selectStyle="{backgroundColor:'rgb(0, 204, 153)'}"
>
</fv-DatePicker>

<style>
  .custom_style{
    background-color: rgb(0, 204, 153);
    border:1px solid rgb(0, 204, 153);
    color:white;
  }
  .custom_style:hover{
    border:1px solid rgb(0, 204, 153);
    background-color: rgb(0, 204, 153,0.8);
  }
</style>
```


### Propoties
---
| ??????(attr)  |             ??????(type)             | ??????(required) | ?????????(default) |     ??????(statement)     |
|:-----------:|:----------------------------------:|:--------------:|:---------------:|:-----------------------:|
|  v-model           |     [Date]                               |            No | Date(1970,0,1)                 |       ???????????????                  |
| theme | ['system','dark','light','custom'] | No | 'system' | ????????? |
| months | [Array] | No | ["January","February",...] | ?????????????????? |
| weeks | [Array] | No | ["Sun.","Mon."...] | ?????????????????? |
| hideYear | [Boolean] | No | false | ?????????????????? |
| hideMonth | [Boolean] | No | false | ?????????????????? |
| hideDay | [Boolean] | No | false | ?????????????????? |
| showWeek | [Boolean] | No | false | ?????????????????? |
| optionsStyle | [object] | No | {} | ?????????????????? |
| selectStyle | [object] | No | {} | ???????????????????????????????????? |
| disabled | [boolean] | No | false | ????????????????????? |

### Events
---
| ?????????(Name) | ????????????(args) | ??????(statement) |
|:------------:|:--------------:|:---------------:|
| focus        |                |  ????????????????????? |
  
