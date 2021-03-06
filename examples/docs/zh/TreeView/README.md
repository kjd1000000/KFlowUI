---
title: TreeView TreeView
sidebarDepth: 2
---

<script>
  export default {
    data(){
      return {
        theme:0,
        backgroundColor:'rgba(5, 76, 94, 1)',
        foregroundColor:'#fff',
          files:[
          {
          label:"Folder",
          icon: "https://img.icons8.com/bubbles/2x/folder-invoices.png",
          children:[
            {
              label:"Folder",
              icon: "Folder",
              children:[
                {
                  label:"File",
                  icon: "FileCode"

                },
                
            {
              label:"File",
                  icon: "FileCode"
            }
              ]
            },
            {
              label:"File",
                  icon: "FileCode"
            },
          ]
        },
        {
          label:"File",
                  icon: "FileCode"

        }]
      }
    },
    computed:{
      $theme(){
        return !this.theme?'light':'dark';
      },
      divStyle(){
        if (this.$theme=='light'){
          return {
            height: '200px',
            backgroundColor:'#fff',
            padding:'20px',
            color:'#000',
            overflow: 'auto'
          }
        }else{
          return {
            height: '200px',
            backgroundColor:'#000',
            padding:'20px',
            color:'#fff',
            overflow: 'auto'
          }
        }
      },
    },
    methods:{
      alert(text){
        alert(text);
      },
      go(url){
        window.location.href=url
      },
      click(item){
        // console.log(item)
      },
      json(val){
        return JSON.stringify(val,null,4).replace(/\n/g,'<br/>').replace(/\s/g,'&nbsp;')
      }
    }
  }
</script>

[[toc]]


<div :style="divStyle">
THEME:<fv-toggle-switch v-model="theme" :on="$theme" :off="$theme" :theme="$theme"/>
</div>

<!-- <div :style="divStyle">
<div v-html="json(files)">
</div>
</div> -->

### TreeView

<!-- <ClientOnly> -->
<div :style="divStyle">
<fv-TreeView :theme="$theme" v-model="files" style="width:200px">
</fv-TreeView>
</div>
<!-- </ClientOnly> -->

``` vue
<fv-TreeView 
  :theme="$theme" 
  v-model="files">
</fv-TreeView>
```

### TreeView Expand Position

<!-- <ClientOnly> -->
<div :style="divStyle">
<fv-TreeView :theme="$theme" v-model="files" expandedIconPosition="right" style="width:200px">
</fv-TreeView>
</div>
<!-- </ClientOnly> -->

``` vue
<fv-TreeView 
  :theme="$theme" 
  v-model="files"
  expandedIconPosition="right">
</fv-TreeView>
```

### TreeView Chcekable

<!-- <ClientOnly> -->
<div :style="divStyle">
<fv-TreeView :theme="$theme" v-model="files" :checkable="true" expandedIconPosition="right" @click="click">
</fv-TreeView>
</div>
<!-- </ClientOnly> -->

``` vue
<fv-TreeView 
  :theme="$theme" 
  v-model="files" 
  :checkable="true"
  expandedIconPosition="right"
  @click="click">
</fv-TreeView>
```

### TreeView CustomStyle Draggable



backgroundColor:
<ClientOnly>
<fv-callout>
<div :style="{width:'20px',height:'20px',backgroundColor:backgroundColor}" style="border:1px solid #000" />
<main>
  <fv-colorPicker v-model="backgroundColor" style="width:500px"/>
</main>
</fv-callout>
</ClientOnly>
foregroundColor:
<ClientOnly>
<fv-callout>
<div :style="{width:'20px',height:'20px',backgroundColor:foregroundColor}" style="border:1px solid #000" />
<main>
  <fv-colorPicker v-model="foregroundColor" style="width:500px"/>
</main>
</fv-callout>
</ClientOnly>

<div :style="divStyle">
<fv-TreeView 
  :theme="$theme" 
  v-model="files" 
  :checkable="true" 
  @click="click" 
  :viewStyle=" {backgroundColor:backgroundColor,color:'#000'}" 
  :foreground="foregroundColor"
  :draggable="true" 
  :space="10">
</fv-TreeView>
</div>

``` vue 
<fv-TreeView 
   :theme="$theme" 
  v-model="files" 
  :checkable="true" 
  @click="click" 
  :viewStyle=" {backgroundColor:backgroundColor,color:'#000'}" 
  :foreground="foregroundColor"
  :draggable="true" 
  :space="10">
</fv-TreeView>
</div>
```

<br/>
<br/>
<br/>

### Propoties

---

|      ??????(attr)      |             ??????(type)             | ??????(required) | ?????????(default) |             ??????(statement)              |
|:--------------------:|:----------------------------------:|:--------------:|:---------------:|:----------------------------------------:|
|        theme         | ['system','dark','light','custom'] |       No       |    'system'     |                  ?????????                  |
|     data/v-model     |              [array]               |      Yes       |       N/A       |              ???????????????data              |
|       dragable       |             [boolean]              |       No       |      false      |                ???????????????                |
|      viewStyle       |              [object]              |       No       |       N/A       |   ??????????????????:style???????????????????????????   |
|     revealEffect     |             [boolean]              |       No       |      true       | fluentRevealEffect????????????(??????????????????) |
|      checkable       |             [boolean]              |       No       |      false      |                 ????????????                 |
|        space         |              [number]              |       No       |       20        |          ???????????????????????????(px)          |
|     borderWidth      |              [number]              |       No       |        2        |                 ????????????                 |
|      foreground      |              [string]              |       No       |       N/A       |                  ?????????                  |
|     expandedIcon     |              [string]              |       No       |       N/A       |               ??????????????????               |
| expandedIconPosition |          ['right','left']          |       No       |     'left'      |                ???????????????                |
|    unexpandedIcon    |              [string]              |       No       |       N/A       |               ??????????????????               |
### Events

---

| ?????????(Name) | ????????????(args) |            ??????(statement)             |
|:------------:|:--------------:|:--------------------------------------:|
|    change    |      data      | ???data??????????????????????????????????????????data |
|    click     |      item      |  ????????????????????????????????????????????????item  |

### Data

``` json
[
  {
    "label": "Folder",
    "icon": "https://img.icons8.com/bubbles/2x/folder-invoices.png",
    "expanded": true,
    "selected": false,
    "checkboxStatus": null,
    "children": [
      {
        "label": "Folder",
        "icon": "Folder",
        "children": [
          {
            "label": "File",
            "icon": "FileCode"
          },
          {
            "label": "File",
            "icon": "FileCode"
          }
        ]
      },
      {
        "label": "File",
        "icon": "FileCode"
      }
    ]
  },
  {
    "label": "File",
    "icon": "FileCode"
  }
]

```

