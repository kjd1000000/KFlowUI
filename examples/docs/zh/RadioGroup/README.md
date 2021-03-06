---
  title: RadioGroup RadioGroup
  sidebarDepth: 2
---
  
[[toc]]

<script>
  export default {
    data(){
      return {
        value:"option",
        label:""
      }
    },
    methods:{
      change(value){  
        this.label=value;
      }
    }
  }
</script>

### RadioGroup-DEMO 

<fv-radioGroup v-model="value" label="options:">
<div>
  <fv-radio label="option1">option1</fv-radio>
  <fv-radio label="option2">option2</fv-radio>
</div>
<div>
  <fv-radio label="option3">option3</fv-radio>
</div>
</fv-radioGroup>

```vue
<fv-radioGroup v-model="value" label="options:">
<div>
  <fv-radio label="option1">option1</fv-radio>
  <fv-radio label="option2">option2</fv-radio>
</div>
<div>
  <fv-radio label="option3">option3</fv-radio>
</div>
</fv-radioGroup>
```

### RadioGroup inline 

<fv-radioGroup v-model="value" label="options:" inline theme="dark">
  <fv-radio label="option1">option1</fv-radio>
  <fv-radio label="option2">option2</fv-radio>
</fv-radioGroup>

```vue
<fv-radioGroup v-model="value" label="options:" inline theme="dark">
  <fv-radio label="option1">option1</fv-radio>
  <fv-radio label="option2">option2</fv-radio>
</fv-radioGroup>
```


### Radio Icon
<fv-radio-group v-model="value"  label="options:">
<div>
  <fv-radio label="option1" icon="MSNLogo">option1</fv-radio>
  <fv-radio label="option2" icon="MSNLogo">option2</fv-radio>
  <fv-radio label="option3" icon="MSNLogo">option3</fv-radio>
</div>
</fv-radio-group>

```vue
<fv-radio-group v-model="value"  label="options:">
<div>
  <fv-radio label="option1" icon="MSNLogo">option1</fv-radio>
  <fv-radio label="option2" icon="MSNLogo">option2</fv-radio>
  <fv-radio label="option3" icon="MSNLogo">option3</fv-radio>
</div>
</fv-radio-group>
```


### Radio Icon Dark inline
<fv-radio-group v-model="value"  label="options:" theme="dark" inline @change="change">
  <fv-radio label="option1" icon="MSNLogo">option1</fv-radio>
  <fv-radio label="option2" icon="MSNLogo">option2</fv-radio>
  <fv-radio label="option3" icon="MSNLogo">option3</fv-radio>
</fv-radio-group>

```vue
<fv-radio-group v-model="value"  label="options:" theme="dark" inline @change="change">
  <fv-radio label="option1" icon="MSNLogo">option1</fv-radio>
  <fv-radio label="option2" icon="MSNLogo">option2</fv-radio>
  <fv-radio label="option3" icon="MSNLogo">option3</fv-radio>
</fv-radio-group>
```

{{label}}

### Radio Icon Dark Disabled
<fv-radio-group v-model="value"  label="options:"  disabled>
<div style="margin:5px 0">
  <fv-radio label="option1" icon="MSNLogo">option1</fv-radio>
  <fv-radio label="option2" icon="MSNLogo">option2</fv-radio>
  <fv-radio label="option3" icon="MSNLogo">option3</fv-radio>
</div>
<div>
  <fv-radio label="option4" icon="MSNLogo">option4</fv-radio>
  <fv-radio label="option5" icon="MSNLogo">option5</fv-radio>
  <fv-radio label="option6" icon="MSNLogo">option6</fv-radio>
</div>
</fv-radio-group>

```vue
<fv-radio-group v-model="value"  label="options:"  disabled>
<div style="margin:5px 0">
  <fv-radio label="option1" icon="MSNLogo">option1</fv-radio>
  <fv-radio label="option2" icon="MSNLogo">option2</fv-radio>
  <fv-radio label="option3" icon="MSNLogo">option3</fv-radio>
</div>
<div>
  <fv-radio label="option4" icon="MSNLogo">option4</fv-radio>
  <fv-radio label="option5" icon="MSNLogo">option5</fv-radio>
  <fv-radio label="option6" icon="MSNLogo">option6</fv-radio>
</div>
</fv-radio-group>
```

### Propoties
---
|    ??????(attr)    |             ??????(type)             | ??????(required) | ?????????(default) |                 ??????(statement)                 |
|:----------------:|:----------------------------------:|:--------------:|:---------------:|:-----------------------------------------------:|
| v-model | [object] | No | undefined | ????????? |
| theme | ['system','dark','light','custom'] | No | 'system' | ????????? |
| label | [string] | No | undefined | ?????? |
| disabled | [boolean] | No | false | ???????????? |
| inline | [boolean] | No | false | |

### Events
---
| ?????????(Name) | ????????????(args) | ??????(statement)  |
|:------------:|:--------------:|:----------------:|
| change | event(value,...) | ???????????????????????? |

  
