## 小型问题

| 问题描述                                                     | 解决方案                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `yarn add react-router` 之后，IDE 中找不到 `'react-router' `包； | 因为本项目使用的是 TypeScript，如果您导入一般的包不包含 `.d.ts` 的话，工具链将无法运作；这里导入 `yarn add @types/react-router` 之后就可以正常运行了；引入其他包时可能也需要考虑它对 TypeScript 的支持。 |

