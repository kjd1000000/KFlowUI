---
  title: SearchBox SearchBox
  sidebarDepth: 2
---
  
[[toc]]

### SearchBox-DEMO

<script>
export default {
    data () {
        return {
            value: "",
            items: [
                { key: "fruitsHeader", name: "Fruits", type: "header" },
                { key: "apple", name: "Apple" },
                { key: "banana", name: "Banana" },
                { key: "orange", name: "Orange", disabled: true },
                { key: "grape", name: "Grape" },
                { key: "divider_1", name: "", type: "divider" },
                { key: "vegetablesHeader", name: "Vegetables", type: "header" },
                { key: "broccoli", name: "Broccoli" },
                { key: "carrot", name: "Carrot" },
                { key: "lettuce", name: "Lettuce" }
            ],
            custom_items: {
                people: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581679339348&di=af28ac8763636ecb3772310b6d7f5cec&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0627%2F804682EA86AC81C370595D119C39FB2003147A79_size174_w456_h296.png', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581679549572&di=d676a7c0149f108c252a29b5c764d151&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181127%2F6f9eed487e2b4aca98c48bbb5714f7da.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581679275905&di=00be6f00fdaecc2e1ba004767918a7e2&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F16%2F20160816110815_HrVtL.thumb.700_0.jpeg'],
                pos: ['Beijing', 'Shanghai', 'Shenzhen'],
                pro: ['IT', 'Doctor', 'Artist']
            },
            resultPlaceholder: []
        }
    },
    methods: {
        customFilterFunc (target) {
            let result = {};
            for(name in target) {
                if(name == 'people')
                    continue;
                let arr = [];
                for(let item of target[name]) {
                    if(item.toString().toLowerCase().indexOf(this.value.toLowerCase()) > -1)
                        arr.push(item);
                }
                result[name] = arr;
            }
            result["people"] = target["people"];
            return result;
        }
    }
}
</script>

Standard
<fv-SearchBox icon="Search" placeholder="Search" :options="items"></fv-SearchBox>

Disabled
<fv-SearchBox icon="Search" placeholder="Search" :options="items" disabled></fv-SearchBox>

```vue
Standard
<fv-SearchBox icon="Search" placeholder="Search" :options="items"></fv-SearchBox>

Disabled
<fv-SearchBox icon="Search" placeholder="Search" :options="items" disabled></fv-SearchBox>
```

### SearchBox-RevealBorder

<fv-SearchBox placeholder="Please enter the text here." icon="Search" :options="items" :revealBorder="true" borderColor="rgba(0, 0, 0, 0.01)" borderRadius="3" :isBoxShadow="true"></fv-SearchBox>

```vue
<fv-SearchBox placeholder="Please enter the text here." icon="Search" :options="items" :revealBorder="true" borderColor="rgba(0, 0, 0, 0.01)" borderRadius="3" :isBoxShadow="true"></fv-SearchBox>
```

### SearchBox-Custom Search Result
---
<div>
    <fv-SearchBox v-model="value" icon="Search" placeholder="Search" :options="custom_items" :focusShow="true" :customFilter="customFilterFunc" :resultPlaceholder.sync="resultPlaceholder">
        <template v-slot:resultPlaceholder="x">
            <fv-img v-for="(item, index) in resultPlaceholder" :key="index" :src="item" style="width: 25px; height: 25px; margin: 0px 3px; border-radius: 50%;"/>
        </template>
        <template v-slot:searchResult="x">
            <div style="position: relative; width: 100%; height: auto; display: flex; flex-direction: column;">
                <span class="list-item list-title">??????</span>
                <div style="position: relative; width: 100%; height: 60px; display: flex;">
                    <fv-img v-for="(item, index) in x.data.people" :key="index" :src="item" style="width: 50px; height: 50px; margin: 5px; border-radius: 50%;" @click.native="resultPlaceholder.push(item)"/>
                </div>
                <span class="list-item list-title">??????</span>
                <span>
                    <p v-for="(item, index) in x.data.pos" class="list-item" :key="index">{{item}}</p>
                </span>
                <span class="list-item list-title">??????</span>
                <span>
                    <p v-for="(item, index) in x.data.pro" class="list-item" :key="index">{{item}}</p>
                </span>
            </div>
        </template>
    </fv-SearchBox>
</div>

```vue
<div>
    <fv-SearchBox v-model="value" icon="Search" placeholder="Search" :options="custom_items" :focusShow="true" :customFilter="customFilterFunc" :resultPlaceholder.sync="resultPlaceholder">
        <template v-slot:resultPlaceholder="x">
            <fv-img v-for="(item, index) in resultPlaceholder" :key="index" :src="item" style="width: 25px; height: 25px; margin: 0px 3px; border-radius: 50%;"/>
        </template>
        <template v-slot:searchResult="x">
            <div style="position: relative; width: 100%; height: auto; display: flex; flex-direction: column;">
                <span class="list-item list-title">??????</span>
                <div style="position: relative; width: 100%; height: 60px; display: flex;">
                    <fv-img v-for="(item, index) in x.data.people" :key="index" :src="item" style="width: 50px; height: 50px; margin: 5px; border-radius: 50%;" @click.native="resultPlaceholder.push(item)"/>
                </div>
                <span class="list-item list-title">??????</span>
                <span>
                    <p v-for="(item, index) in x.data.pos" class="list-item" :key="index">{{item}}</p>
                </span>
                <span class="list-item list-title">??????</span>
                <span>
                    <p v-for="(item, index) in x.data.pro" class="list-item" :key="index">{{item}}</p>
                </span>
            </div>
        </template>
    </fv-SearchBox>
</div>
```

### TextBox-With Underline And Borderless
---
1. Light

<fv-SearchBox icon="Search" placeholder="Search" :options="items" underline></fv-SearchBox>

2. Dark

<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox icon="Search" placeholder="Search" theme="dark" :options="items" underline></fv-SearchBox>
</div>

```vue
1. Light

<fv-SearchBox icon="Search" placeholder="Search" :options="items" underline></fv-SearchBox>

2. Dark

<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox icon="Search" placeholder="Search" theme="dark" :options="items" underline></fv-SearchBox>
</div>
```

### SearchBox-Dark Theme
---

1. Original Template

<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox icon="Search" placeholder="Search" theme="dark" :options="items"></fv-SearchBox>
</div>


2. Custom Template

<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox v-model="value" icon="Search" placeholder="Search" theme="dark" :options="custom_items" :focusShow="true" :customFilter="customFilterFunc" :resultPlaceholder.sync="resultPlaceholder">
        <template v-slot:resultPlaceholder="x">
            <fv-img v-for="(item, index) in resultPlaceholder" :key="index" :src="item" style="width: 25px; height: 25px; margin: 0px 3px; border-radius: 50%;"/>
        </template>
        <template v-slot:searchResult="x">
            <div style="position: relative; width: 100%; height: auto; display: flex; flex-direction: column;">
                <span class="list-item list-title">??????</span>
                <div style="position: relative; width: 100%; height: 60px; display: flex;">
                    <fv-img v-for="(item, index) in x.data.people" :key="index" :src="item" style="width: 50px; height: 50px; margin: 5px; border-radius: 50%;" @click.native="resultPlaceholder.push(item)"/>
                </div>
                <span class="list-item list-title">??????</span>
                <span>
                    <p v-for="(item, index) in x.data.pos" class="list-item" :key="index">{{item}}</p>
                </span>
                <span class="list-item list-title">??????</span>
                <span>
                    <p v-for="(item, index) in x.data.pro" class="list-item" :key="index">{{item}}</p>
                </span>
            </div>
        </template>
    </fv-SearchBox>
</div>

```vue
1. Original Template

<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox icon="Search" placeholder="Search" theme="dark" :options="items"></fv-SearchBox>
</div>


2. Custom Template

<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox v-model="value" icon="Search" placeholder="Search" theme="dark" :options="custom_items" :focusShow="true" :customFilter="customFilterFunc" :resultPlaceholder.sync="resultPlaceholder">
        <template v-slot:resultPlaceholder="x">
            <fv-img v-for="(item, index) in resultPlaceholder" :key="index" :src="item" style="width: 25px; height: 25px; margin: 0px 3px; border-radius: 50%;"/>
        </template>
        <template v-slot:searchResult="x">
            <div style="position: relative; width: 100%; height: auto; display: flex; flex-direction: column;">
                <span class="list-item list-title">??????</span>
                <div style="position: relative; width: 100%; height: 60px; display: flex;">
                    <fv-img v-for="(item, index) in x.data.people" :key="index" :src="item" style="width: 50px; height: 50px; margin: 5px; border-radius: 50%;" @click.native="resultPlaceholder.push(item)"/>
                </div>
                <span class="list-item list-title">??????</span>
                <span>
                    <p v-for="(item, index) in x.data.pos" class="list-item" :key="index">{{item}}</p>
                </span>
                <span class="list-item list-title">??????</span>
                <span>
                    <p v-for="(item, index) in x.data.pro" class="list-item" :key="index">{{item}}</p>
                </span>
            </div>
        </template>
    </fv-SearchBox>
</div>
```

### TextBox-Customize
---
Customize border color
<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox icon="Search" placeholder="Search" theme="dark" :options="items" borderColor="rgba(0,153,204,1)" focusBorderColor="rgba(0,204,153,1)"></fv-SearchBox>
</div>

Customize background
<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox icon="Search" placeholder="Search" theme="dark" :options="items" background="rgba(0,153,204,1)" borderColor="rgba(0,153,204,1)"></fv-SearchBox>
</div>

```vue
Customize border color
<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox icon="Search" placeholder="Search" theme="dark" :options="items" borderColor="rgba(0,153,204,1)" focusBorderColor="rgba(0,204,153,1)"></fv-SearchBox>
</div>

Customize background
<div style="width: 100%; padding: 25px; background: black;">
    <fv-SearchBox icon="Search" placeholder="Search" theme="dark" :options="items" background="rgba(0,153,204,1)" borderColor="rgba(0,153,204,1)"></fv-SearchBox>
</div>
```

### Propoties
---
|        ??????(attr)        |             ??????(type)             | ??????(required) | ?????????(default) |              ??????(statement)              |
|:------------------------:|:----------------------------------:|:--------------:|:---------------:|:-----------------------------------------:|
|          value           |              [string]              |       No       |                 |     Using v-model binding input value     |
|         options          |         [array or object]          |      Yes       |       N/A       |           SearchBox??????????????????           |
|       placeholder        |              [string]              |       No       |       N/A       |              ??????HTML[input]              |
|           type           |              [string]              |       No       |      text       |              ??????HTML[input]              |
|         readonly         |             [boolean]              |       No       |      false      |              ??????HTML[input]              |
|        maxlength         |              [number]              |       No       |       N/A       |              ??????HTML[input]              |
|       customFilter       |         [object(function)]         |       No       |       N/A       |            ???????????????????????????             |
|    resultPlaceholder     |              [array]               |       No       |       N/A       |     ??????????????????, ?????????SearchBox??????     |
|        focusShow         |             [boolean]              |       No       |      false      |       ??????????????????????????????????????????        |
|         leftIcon         |              [string]              |       No       |       N/A       |                  ?????????                   |
|           icon           |              [string]              |       No       |       N/A       |                  ?????????                   |
|        underline         |             [boolean]              |       No       |      false      |     ????????????Underline?????????SearchBox      |
|        background        |          [string(color)]           |       No       |       N/A       |                  ?????????                   |
|       borderWidth        |             [boolean]              |       No       |        1        |                                           |
|       borderColor        |          [string(color)]           |       No       |       N/A       |                                           |
|     focusBorderColor     |          [string(color)]           |       No       |       N/A       |                                           |
|       borderRadius       |              [number]              |       No       |       N/A       | Textbox????????????, ??????revealBorder???????????? |
|       revealBorder       |             [boolean]              |       No       |      false      |                                           |
| disabledBorderWhenReveal |             [boolean]              |       No       |      true       |      ??????`Reveal`???????????????????????????       |
|          status          |         ['warn','correct']         |       No       |       N/A       |    ??????????????????, ??????????????????????????????     |
|         disabled         |             [boolean]              |       No       |      false      |                                           |
|          theme           | ['light','dark','custom','system'] |       No       |     system      |                                           |

### Events
---
|       ?????????(Name)       | ????????????(args) |                                              ??????(statement)                                               |
|:------------------------:|:--------------:|:----------------------------------------------------------------------------------------------------------:|
|         keydown          |     event      |                                                                                                            |
|          keyup           |     event      |                                                                                                            |
|     left-icon-click      |     event      |                                                                                                            |
|        icon-click        |     event      |                                                                                                            |
|         lazyload         |     array      |                      ?????????????????????????????????, ???????????????????????????, ??????????????????????????????                      |
| update:resultPlaceholder |     array      | ????????????????????????, ???????????????????????????????????????????????????, ????????????????????????????????????, ??????????????????????????????????????? |
|       clear-click        |     array      |                                            ??????????????????????????????                                            |
|      choose-result       |     object     |                                       ?????????????????????????????????????????????                                       |

### Slot
---
1. SearchResult

?????????????????????????????????`options`?????????`name`?????????????????????, ????????????????????????, ?????????
????????????????????????, ????????????????????????
- data: ?????????`filterOptions`

```vue
 <template v-slot:searchResult="x">
    <div></div>
</template>
```

2. ResultPlaceholder

?????????????????????????????????????????????????????????????????????`SearchBox`????????????????????????, ??????????????????`ResultPlaceholder`

```vue
<template v-slot:resultPlaceholder="x">
    <div></div>
</template>
```

### Data
---

1. options

??????????????????`ListView`???`items`?????????, ??????`key`?????????????????????????????????????????????????????????????????????????????????

```javascript
options = [{key: '', name: '', type: '', disabled: ''}]

//e.g.//

options: [
    { key: "fruitsHeader", name: "Fruits", type: "header" },
    { key: "apple", name: "Apple" },
    { key: "banana", name: "Banana" },
    { key: "orange", name: "Orange", disabled: true },
    { key: "grape", name: "Grape" },
    { key: "divider_1", name: "", type: "divider" },
    { key: "vegetablesHeader", name: "Vegetables", type: "header" },
    { key: "broccoli", name: "Broccoli" },
    { key: "carrot", name: "Carrot" },
    { key: "lettuce", name: "Lettuce" }
]
```