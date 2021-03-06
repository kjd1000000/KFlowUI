---
  title: Shimmer Shimmer
  sidebarDepth: 2
---
  
[[toc]]

### Shimmer-DEMO 

Avatar with item

<div>
    <fv-Shimmer style="height: auto;">
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
            <div v-for="(item, index) in 5" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
                <div class="sample" style="width: 35px; height: 35px; border-radius: 50%;"></div>
                <div class="sample" style="width: 80%; margin-left: 15px;"></div>
            </div>
        </div>
    </fv-Shimmer>
</div>

```vue
<fv-Shimmer style="height: auto;">
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
        <div v-for="(item, index) in 5" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
            <div class="sample" style="width: 35px; height: 35px; border-radius: 50%;"></div>
            <div class="sample" style="width: 80%; margin-left: 15px;"></div>
        </div>
    </div>
</fv-Shimmer>
```

List items

<div>
    <fv-Shimmer style="height: auto;">
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
            <div v-for="(item, index) in 3" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
                <div class="sample" style="width: 80%; height: 15px;" :style="{width: `${100 - index * 10}%`}"></div>
            </div>
        </div>
    </fv-Shimmer>
</div>

```vue
<fv-Shimmer style="height: auto;">
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
        <div v-for="(item, index) in 3" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
            <div class="sample" style="width: 80%; height: 15px;" :style="{width: `${100 - index * 10}%`}"></div>
        </div>
    </div>
</fv-Shimmer>
```

List items with two column

<div>
    <fv-Shimmer style="height: auto;">
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
            <div v-for="(item, index) in 3" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
                <div class="sample" style="width: 80%; height: 15px;" :style="{width: `${50 - index * 10}%`}"></div>
                <div class="sample" style="width: 80%; height: 15px; margin-left: 15px;" :style="{width: `${50 - index * 10}%`}"></div>
            </div>
        </div>
    </fv-Shimmer>
</div>

```vue
<fv-Shimmer style="height: auto;">
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
        <div v-for="(item, index) in 3" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
            <div class="sample" style="width: 80%; height: 15px;" :style="{width: `${50 - index * 10}%`}"></div>
            <div class="sample" style="width: 80%; height: 15px; margin-left: 15px;" :style="{width: `${50 - index * 10}%`}"></div>
        </div>
    </div>
</fv-Shimmer>
```

### Shimmer-Dark Theme
--- 

Avatar with item

<div style="background: black;">
    <fv-Shimmer theme="dark" style="height: auto;">
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
            <div v-for="(item, index) in 5" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
                <div class="sample" style="width: 35px; height: 35px; border-radius: 50%;"></div>
                <div class="sample" style="width: 80%; margin-left: 15px;"></div>
            </div>
        </div>
    </fv-Shimmer>
</div>

```vue
<fv-Shimmer theme="dark" style="height: auto;">
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
        <div v-for="(item, index) in 5" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
            <div class="sample" style="width: 35px; height: 35px; border-radius: 50%;"></div>
            <div class="sample" style="width: 80%; margin-left: 15px;"></div>
        </div>
    </div>
</fv-Shimmer>
```

List items

<div style="background: black;">
    <fv-Shimmer theme="dark" style="height: auto;">
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
            <div v-for="(item, index) in 3" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
                <div class="sample" style="width: 80%; height: 15px;" :style="{width: `${100 - index * 10}%`}"></div>
            </div>
        </div>
    </fv-Shimmer>
</div>

```vue
<fv-Shimmer theme="dark" style="height: auto;">
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
        <div v-for="(item, index) in 3" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
            <div class="sample" style="width: 80%; height: 15px;" :style="{width: `${100 - index * 10}%`}"></div>
        </div>
    </div>
</fv-Shimmer>
```

List items with two column

<div style="background: black;">
    <fv-Shimmer theme="dark" style="height: auto;">
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
            <div v-for="(item, index) in 3" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
                <div class="sample" style="width: 80%; height: 15px;" :style="{width: `${50 - index * 10}%`}"></div>
                <div class="sample" style="width: 80%; height: 15px; margin-left: 15px;" :style="{width: `${50 - index * 10}%`}"></div>
            </div>
        </div>
    </fv-Shimmer>
</div>

```vue
<fv-Shimmer theme="dark" style="height: auto;">
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
        <div v-for="(item, index) in 3" :key="index" style="margin-top: 5px; display: flex; align-items: center;">
            <div class="sample" style="width: 80%; height: 15px;" :style="{width: `${50 - index * 10}%`}"></div>
            <div class="sample" style="width: 80%; height: 15px; margin-left: 15px;" :style="{width: `${50 - index * 10}%`}"></div>
        </div>
    </div>
</fv-Shimmer>
```

### Propoties
---
| ??????(attr) |             ??????(type)             | ??????(required) | ?????????(default) | ??????(statement) |
|:----------:|:----------------------------------:|:--------------:|:---------------:|:---------------:|
|   theme    | ['light','dark','custom','system'] |       No       |     system      | Dropdown theme  |

### Slot
---
1. Default

???????????????:

```vue
<div class="sample"></div>
```

?????????`Shimmer`?????????, ????????????Skeleton?????????????????????`sample`???.

```javascript
<fv-shimmer>
    <div class="sample"></div>
</fv-shimmer>
```