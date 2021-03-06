---
  title: Radio Radio
  sidebarDepth: 2
---

<script>
  export default {
    data(){
      return {
        value:"Option"
      }
    },
    methods:{
      active(){
        ++this.status;
      }
    }
  }
</script>
  
[[toc]]

### Radio

<div>
<fv-radio v-model="value" label="Option">
Option
</fv-radio> 
<fv-radio v-model="value" label="Option2">
Option2
</fv-radio>
<fv-radio label="Option3" disabled>
Disabled
</fv-radio>
</div>

```vue
<div>
<fv-radio v-model="value" label="Option">
Option
</fv-radio> 
<fv-radio v-model="value" label="Option2">
Option2
</fv-radio>
<fv-radio label="Option3" disabled>
Disabled
</fv-radio>
</div>
```

### Radio-Dark

<div style="background:#000;height:30px;padding:20px;">
<fv-radio v-model="value" label="Option" theme="dark">Option</fv-radio>
<fv-radio v-model="value" label="Option2" theme="dark" disabled>Disabled</fv-radio>
</div>

```vue
<div style="background:#000;height:30px;padding:20px;">
<fv-radio v-model="value" label="Option" theme="dark">Option</fv-radio>
<fv-radio v-model="value" label="Option2" theme="dark" disabled>Disabled</fv-radio>
</div>
```

### Radio With Icon

<div >
<fv-radio v-model="value" label="Sort" icon="GroupedList">Sort</fv-radio>
<fv-radio v-model="value" label="MSN" icon="MSNLogo" >MSN</fv-radio>
<fv-radio v-model="value" label="MSN" icon="MSNLogo" disabled >Disabled</fv-radio>

</div>

```vue
<div >
<fv-radio v-model="value" label="Sort" icon="GroupedList">Sort</fv-radio>
<fv-radio v-model="value" label="MSN" icon="MSNLogo" >MSN</fv-radio>
<fv-radio v-model="value" label="MSN" icon="MSNLogo" disabled >Disabled</fv-radio>

</div>
```

### Radio With Image

<div>
<fv-radio image="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-unselected.png" activeImage="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png" v-model="value" label="chart" >Chart</fv-radio>
</div>

```vue
<div>
<fv-radio image="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-unselected.png" activeImage="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/choicegroup-bar-selected.png" v-model="value" label="chart" >Chart</fv-radio>
</div>
```

### Radio-Dark With Icon

<div style="background:#000;padding:20px;">
<fv-radio v-model="value" label="Sort" icon="GroupedList" theme="dark">Sort</fv-radio>
<fv-radio v-model="value" label="Sort" icon="GroupedList" theme="dark" disabled>disabled</fv-radio>
<fv-radio v-model="value" label="MSN" icon="MSNLogo" theme="dark">MSN</fv-radio>
</div>

```vue
<div style="background:#000;padding:20px;">
<fv-radio v-model="value" label="Sort" icon="GroupedList" theme="dark">Sort</fv-radio>
<fv-radio v-model="value" label="Sort" icon="GroupedList" theme="dark" disabled>disabled</fv-radio>
<fv-radio v-model="value" label="MSN" icon="MSNLogo" theme="dark">MSN</fv-radio>
</div>
```

### Radio Custom Color
<fv-radio  icon="GroupedList" v-model="value" label="Sort" style="background:#00cc99;" theme="dark" >Sort</fv-radio>
<fv-radio icon="GroupedList" v-model="value" label="Sort" style="background:#00cc99;" theme="dark" disabled>Disabled</fv-radio>

```vue
<fv-radio  icon="GroupedList" v-model="value" label="Sort" style="background:#00cc99;" theme="dark" >Sort</fv-radio>
<fv-radio icon="GroupedList" v-model="value" label="Sort" style="background:#00cc99;" theme="dark" disabled>Disabled</fv-radio>
```


### Propoties
---
|      ??????(attr)       |             ??????(type)             | ??????(required) |     ?????????(default)      |    ??????(statement)     |
|:---------------------:|:----------------------------------:|:--------------:|:------------------------:|:----------------------:|
|     v-model/value     |              [object]              |      Yes       |        undefined         |         ?????????         |
|         label         |              [object]              |      Yes       |        undefined         |         ?????????         |
|         theme         | ['system','dark','light','custom'] |       No       |         'system'         |         ?????????         |
|         icon          |              [string]              |       No       |           null           |        MS-ICON         |
|         color         |          [string(color)]           |       No       |           null           |    ????????????????????????    |
|      foreground       |          [string(color)]           |       No       | rgba(0, 120, 212, 0.829) |      Radio?????????       |
| iconBlockBorderRadius |          [string(color)]           |       No       |            3             |   ???????????????????????????   |
| iconBlockBorderWidth  |          [string(color)]           |       No       |            2             |   ???????????????????????????   |
|         image         |              [string]              |       No       |           null           |     32*32 ????????????     |
|      activeImage      |              [string]              |       No       |           null           | 32*32 ???????????????????????? |
|       disabled        |             [boolean]              |       No       |          false           |        ????????????        |

### Events
---
| ?????????(Name) | ????????????(args) | ??????(statement) |
|:------------:|:--------------:|:---------------:|
|    click     |     event      |      ??????       |
|   actived    |     event      |   ???????????????    |

  
