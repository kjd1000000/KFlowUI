<p align="center">
    <img src="./examples/assert/logo/KFlowUI.png"/>
</div>

<p align="center">
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
    </a>
</p>

## KFlowUI - Flow UI Design based on Vue Cli

### Project Structure

```bash
- build # 脚手架(The scaffold)
  config.js # 组件库配置文件(Component library configuration file)
- examples
  - docs # 在线演示文档(VuePress)
  index.js # Vue Cli Lib 打包入口(Packaging entrance)
- lib # 打包ump文件(Package the UMP file)
- packages
  - common-theme # 通用主题(Common theme)
  - {themeName}-theme
    index.scss # 全局scss 由脚本生成(Global SCSS generated by the script)
    {ComponentScss}.scss
  - {ComponentName}
    - src # 组件Source(Component source)
      index.vue # 组件(Component)
    index.js # 组件入口(Component entry)
  index.js # 所有组件入口 由脚本生成(All component entries, generated by scripts)
components.json # 组件目录(Component directory)
vue.config.js # Vue cli 配置(Vue cli config)
```

### 脚本命令(2019-12-16 更新)

```bash
npm run pub # 打包推送到npm(Pack and push to NPM)
npm run docs:dev # 开发文档模式(Run as development document mode)
npm run bin:new componentName chineseName #新建组件(Create new component)
npm run bin:rm componentName #移除组件并重新定制入口(Remove the component and re-customize the entry)
npm run bin:entry # 定制入口(Custom entry)
```

### Flow UI Design (Vue 2.0+)

#### DOCS

[中文文档 (Chinese Doc)](https://kjd1000000.github.io/KFlowUI)

#### How to use

1. install via npm

```bash
yarn add KFlowUIdesign # recommend
```

```bash
npm i KFlowUIdesign
```

2. import (vue entry main.js)

```js
import Vue from "vue";
import KFlowUI from "KFlowUIdesign";
import "KFlowUIdesign/lib/index.css";

Vue.use(KFlowUI);
```

3. sample example

```html
<fv-button>Hello Vue Flow UI!</fv-button>
```

4. about Fabric UI

Our project have many using cases contains Microsoft's Fabric UI, such as icons and shadows, for more details you can click <a href="https://developer.microsoft.com/en-us/fabric#/styles">here</a> to get more information.

Here is the icon using sample.

```vue
<i class="ms-Icon ms-Icon--AADLogo"></i>
```

In particular, if you're using a component of Flow UI Vue Design and it contains a prop that support icon, you only need to type the icon's name in prop.
