import { menuList } from './menu'
import { styleList } from './style'
export { menuList, styleList }
// import { MenuGroup, StyleGroup } from '../interface'

// // export const menuList: MenuGroup = [
// //   {
// //     id: "基础组件",
// //     name: "基础组件",
// //     children: [
// //       {
// //         id: "Base",
// //         name: "Base 基础组件",
// //       },
// //       {
// //         id: "Button",
// //         name: "Button 按钮",
// //       },
// //       {
// //         id: "Cell",
// //         name: "Cell 单元格",
// //       },
// //       {
// //         id: "Image",
// //         name: "Image 图片",
// //       },
// //       {
// //         id: "Popup",
// //         name: "Popup 弹出层",
// //       },
// //       {
// //         id: "Toast",
// //         name: "Toast 轻提示",
// //       },
// //     ],
// //   },
// //   {
// //     id: "表单组件",
// //     name: "表单组件",
// //     children: [
// //       {
// //         id: "Calendar",
// //         name: "Calendar 日历",
// //       },
// //       {
// //         id: "Cascader",
// //         name: "Cascader 级联选择",
// //       },
// //       {
// //         id: "Checkbox",
// //         name: "Checkbox 复选框",
// //       },
// //       {
// //         id: "DatetimePicker",
// //         name: "DatetimePicker 时间选择",
// //       },
// //       {
// //         id: "Field",
// //         name: "Field 输入框",
// //       },
// //       {
// //         id: "Form",
// //         name: "Form 表单",
// //       },
// //       {
// //         id: "NumberKeyboard",
// //         name: "NumberKeyboard 数字键盘",
// //       },
// //       {
// //         id: "PasswordInput",
// //         name: "PasswordInput 密码输入框",
// //       },
// //       {
// //         id: "Picker",
// //         name: "Picker 选择器",
// //       },
// //       {
// //         id: "Radio",
// //         name: "Radio 单选框",
// //       },
// //       {
// //         id: "Rate",
// //         name: "Rate 评分",
// //       },
// //       {
// //         id: "Search",
// //         name: "Search 搜索",
// //       },
// //       {
// //         id: "Slider",
// //         name: "Slider 滑块",
// //       },
// //       {
// //         id: "Stepper",
// //         name: "Stepper 步进器",
// //       },
// //       {
// //         id: "Switch",
// //         name: "Switch 开关",
// //       },
// //       {
// //         id: "Uploader",
// //         name: "Uploader 文件上传",
// //       },
// //     ],
// //   },
// //   {
// //     id: "反馈组件",
// //     name: "反馈组件",
// //     children: [
// //       {
// //         id: "ActionSheet",
// //         name: "ActionSheet 动作面板",
// //       },
// //       {
// //         id: "Dialog",
// //         name: "Dialog 弹出框",
// //       },
// //       {
// //         id: "DropdownMenu",
// //         name: "DropdownMenu 下拉菜单",
// //       },
// //       {
// //         id: "Loading",
// //         name: "Loading 加载",
// //       },
// //       {
// //         id: "Notify",
// //         name: "Notify 消息通知",
// //       },
// //       {
// //         id: "Overlay",
// //         name: "Overlay 遮罩层",
// //       },
// //       {
// //         id: "PullRefresh",
// //         name: "PullRefresh 下拉刷新",
// //       },
// //       {
// //         id: "ShareSheet",
// //         name: "ShareSheet 分享面板",
// //       },
// //       {
// //         id: "SwipeCell",
// //         name: "SwipeCell 滑动单元格",
// //       },
// //     ],
// //   },
// //   {
// //     id: "展示组件",
// //     name: "展示组件",
// //     children: [
// //       {
// //         id: "Badge",
// //         name: "Badge 徽标",
// //       },
// //       {
// //         id: "Circle",
// //         name: "Circle 环形进度条",
// //       },
// //       {
// //         id: "Collapse",
// //         name: "Collapse 折叠面板",
// //       },
// //       {
// //         id: "CountDown",
// //         name: "CountDown 倒计时",
// //       },
// //       {
// //         id: "Divider",
// //         name: "Divider 分割线",
// //       },
// //       {
// //         id: "Empty",
// //         name: "Empty 空状态",
// //       },
// //       {
// //         id: "ImagePreview",
// //         name: "ImagePreview 图片预览",
// //       },
// //       {
// //         id: "Lazyload",
// //         name: "Lazyload 懒加载",
// //       },
// //       {
// //         id: "List",
// //         name: "List 列表",
// //       },
// //       {
// //         id: "NoticeBar",
// //         name: "NoticeBar 通知栏",
// //       },
// //       {
// //         id: "Popover",
// //         name: "Popover 气泡弹出框",
// //       },
// //       {
// //         id: "Progress",
// //         name: "Progress 进度条",
// //       },
// //       {
// //         id: "Skeleton",
// //         name: "Skeleton 骨架屏",
// //       },
// //       {
// //         id: "Steps",
// //         name: "Steps 步骤条",
// //       },
// //       {
// //         id: "Sticky",
// //         name: "Sticky 粘性布局",
// //       },
// //       {
// //         id: "Swipe",
// //         name: "Swipe 轮播",
// //       },
// //       {
// //         id: "Tag",
// //         name: "Tag 标签",
// //       },
// //     ],
// //   },
// //   {
// //     id: "导航组件",
// //     name: "导航组件",
// //     children: [
// //       {
// //         id: "ActionBar",
// //         name: "ActionBar 动作栏",
// //       },
// //       {
// //         id: "Grid",
// //         name: "Grid 宫格",
// //       },
// //       {
// //         id: "IndexBar",
// //         name: "IndexBar 索引栏",
// //       },
// //       {
// //         id: "NavBar",
// //         name: "NavBar 导航栏",
// //       },
// //       {
// //         id: "Pagination",
// //         name: "Pagination 分页",
// //       },
// //       {
// //         id: "Sidebar",
// //         name: "Sidebar 侧边导航",
// //       },
// //       {
// //         id: "Tab",
// //         name: "Tab 标签页",
// //       },
// //       {
// //         id: "Tabbar",
// //         name: "Tabbar 标签栏",
// //       },
// //       {
// //         id: "TreeSelect",
// //         name: "TreeSelect 分类选择",
// //       },
// //     ],
// //   },
// //   {
// //     id: "业务组件",
// //     name: "业务组件",
// //     children: [
// //       {
// //         id: "AddressEdit",
// //         name: "AddressEdit 地址编辑",
// //       },
// //       {
// //         id: "AddressList",
// //         name: "AddressList 地址列表",
// //       },
// //       {
// //         id: "Area",
// //         name: "Area 省市区选择",
// //       },
// //       {
// //         id: "Card",
// //         name: "Card 商品卡片",
// //       },
// //       {
// //         id: "ContactCard",
// //         name: "ContactCard 联系人卡片",
// //       },
// //       {
// //         id: "ContactEdit",
// //         name: "ContactEdit 联系人编辑",
// //       },
// //       {
// //         id: "ContactList",
// //         name: "ContactList 联系人列表",
// //       },
// //       {
// //         id: "Coupon",
// //         name: "Coupon 优惠券",
// //       },
// //       {
// //         id: "SubmitBar",
// //         name: "SubmitBar 提交订单栏",
// //       },
// //     ],
// //   },
// // ];

// export const menuList: MenuGroup = [
//   {
//     id: '基础组件',
//     name: '基础组件',
//     children: [
//       {
//         id: 'Button',
//         name: 'Button 按钮'
//       },
//       {
//         id: 'Cell',
//         name: 'Cell 单元格'
//       },
//       {
//         id: 'Image',
//         name: 'Image 图片'
//       },
//       {
//         id: 'Popup',
//         name: 'Popup 弹出层'
//       },
//       {
//         id: 'Toast',
//         name: 'Toast 轻提示'
//       }
//     ]
//   },
//   {
//     id: '表单组件',
//     name: '表单组件',
//     children: [
//       {
//         id: 'Calendar',
//         name: 'Calendar 日历'
//       },
//       {
//         id: 'Cascader',
//         name: 'Cascader 级联选择'
//       },
//       {
//         id: 'Checkbox',
//         name: 'Checkbox 复选框'
//       },
//       {
//         id: 'Field',
//         name: 'Field 输入框'
//       },
//       {
//         id: 'NumberKeyboard',
//         name: 'NumberKeyboard 数字键盘'
//       },
//       {
//         id: 'PasswordInput',
//         name: 'PasswordInput 密码输入框'
//       },
//       {
//         id: 'Picker',
//         name: 'Picker 选择器'
//       },
//       {
//         id: 'Radio',
//         name: 'Radio 单选框'
//       },
//       {
//         id: 'Rate',
//         name: 'Rate 评分'
//       },
//       {
//         id: 'Search',
//         name: 'Search 搜索'
//       },
//       {
//         id: 'Slider',
//         name: 'Slider 滑块'
//       },
//       {
//         id: 'Stepper',
//         name: 'Stepper 步进器'
//       },
//       {
//         id: 'Switch',
//         name: 'Switch 开关'
//       },
//       {
//         id: 'Uploader',
//         name: 'Uploader 文件上传'
//       }
//     ]
//   },
//   {
//     id: '反馈组件',
//     name: '反馈组件',
//     children: [
//       {
//         id: 'ActionSheet',
//         name: 'ActionSheet 动作面板'
//       },
//       {
//         id: 'Dialog',
//         name: 'Dialog 弹出框'
//       },
//       {
//         id: 'DropdownMenu',
//         name: 'DropdownMenu 下拉菜单'
//       },
//       {
//         id: 'Loading',
//         name: 'Loading 加载'
//       },
//       {
//         id: 'Notify',
//         name: 'Notify 消息通知'
//       },
//       {
//         id: 'Overlay',
//         name: 'Overlay 遮罩层'
//       },
//       {
//         id: 'PullRefresh',
//         name: 'PullRefresh 下拉刷新'
//       },
//       {
//         id: 'ShareSheet',
//         name: 'ShareSheet 分享面板'
//       },
//       {
//         id: 'SwipeCell',
//         name: 'SwipeCell 滑动单元格'
//       }
//     ]
//   },
//   {
//     id: '展示组件',
//     name: '展示组件',
//     children: [
//       {
//         id: 'Badge',
//         name: 'Badge 徽标'
//       },
//       {
//         id: 'Circle',
//         name: 'Circle 环形进度条'
//       },
//       {
//         id: 'Collapse',
//         name: 'Collapse 折叠面板'
//       },
//       {
//         id: 'CountDown',
//         name: 'CountDown 倒计时'
//       },
//       {
//         id: 'Divider',
//         name: 'Divider 分割线'
//       },
//       {
//         id: 'Empty',
//         name: 'Empty 空状态'
//       },
//       {
//         id: 'ImagePreview',
//         name: 'ImagePreview 图片预览'
//       },
//       {
//         id: 'List',
//         name: 'List 列表'
//       },
//       {
//         id: 'NoticeBar',
//         name: 'NoticeBar 通知栏'
//       },
//       {
//         id: 'Popover',
//         name: 'Popover 气泡弹出框'
//       },
//       {
//         id: 'Progress',
//         name: 'Progress 进度条'
//       },
//       {
//         id: 'Skeleton',
//         name: 'Skeleton 骨架屏'
//       },
//       {
//         id: 'Steps',
//         name: 'Steps 步骤条'
//       },
//       {
//         id: 'Sticky',
//         name: 'Sticky 粘性布局'
//       },
//       {
//         id: 'Swipe',
//         name: 'Swipe 轮播'
//       },
//       {
//         id: 'Tag',
//         name: 'Tag 标签'
//       }
//     ]
//   },
//   {
//     id: '导航组件',
//     name: '导航组件',
//     children: [
//       {
//         id: 'ActionBar',
//         name: 'ActionBar 动作栏'
//       },
//       {
//         id: 'Grid',
//         name: 'Grid 宫格'
//       },
//       {
//         id: 'IndexBar',
//         name: 'IndexBar 索引栏'
//       },
//       {
//         id: 'NavBar',
//         name: 'NavBar 导航栏'
//       },
//       {
//         id: 'Pagination',
//         name: 'Pagination 分页'
//       },
//       {
//         id: 'Sidebar',
//         name: 'Sidebar 侧边导航'
//       },
//       {
//         id: 'Tab',
//         name: 'Tab 标签页'
//       },
//       {
//         id: 'Tabbar',
//         name: 'Tabbar 标签栏'
//       },
//       {
//         id: 'TreeSelect',
//         name: 'TreeSelect 分类选择'
//       }
//     ]
//   },
//   {
//     id: '业务组件',
//     name: '业务组件',
//     children: [
//       {
//         id: 'AddressEdit',
//         name: 'AddressEdit 地址编辑'
//       },
//       {
//         id: 'AddressList',
//         name: 'AddressList 地址列表'
//       },
//       {
//         id: 'Card',
//         name: 'Card 商品卡片'
//       },
//       {
//         id: 'ContactCard',
//         name: 'ContactCard 联系人卡片'
//       },
//       {
//         id: 'ContactEdit',
//         name: 'ContactEdit 联系人编辑'
//       },
//       {
//         id: 'ContactList',
//         name: 'ContactList 联系人列表'
//       },
//       {
//         id: 'Coupon',
//         name: 'Coupon 优惠券'
//       },
//       {
//         id: 'SubmitBar',
//         name: 'SubmitBar 提交订单栏'
//       }
//     ]
//   }
// ]

// export const styleList: StyleGroup = [
//   {
//     id: 'Button',
//     styles: [
//       '--van-button-mini-height',
//       '--van-button-mini-padding',
//       '--van-button-mini-font-size',
//       '--van-button-small-height',
//       '--van-button-small-padding',
//       '--van-button-small-font-size',
//       '--van-button-normal-font-size',
//       '--van-button-normal-padding',
//       '--van-button-large-height',
//       '--van-button-default-height',
//       '--van-button-default-line-height',
//       '--van-button-default-font-size',
//       '--van-button-default-color',
//       '--van-button-default-background-color',
//       '--van-button-default-border-color',
//       '--van-button-primary-color',
//       '--van-button-primary-background-color',
//       '--van-button-primary-border-color',
//       '--van-button-success-color',
//       '--van-button-success-background-color',
//       '--van-button-success-border-color',
//       '--van-button-danger-color',
//       '--van-button-danger-background-color',
//       '--van-button-danger-border-color',
//       '--van-button-warning-color',
//       '--van-button-warning-background-color',
//       '--van-button-warning-border-color',
//       '--van-button-border-width',
//       '--van-button-border-radius',
//       '--van-button-round-border-radius',
//       '--van-button-plain-background-color',
//       '--van-button-disabled-opacity',
//       '--van-button-icon-size',
//       '--van-button-loading-icon-size'
//     ]
//   },
//   {
//     id: 'Cell',
//     styles: [
//       '--van-cell-font-size',
//       '--van-cell-line-height',
//       '--van-cell-vertical-padding',
//       '--van-cell-horizontal-padding',
//       '--van-cell-text-color',
//       '--van-cell-background-color',
//       '--van-cell-border-color',
//       '--van-cell-active-color',
//       '--van-cell-required-color',
//       '--van-cell-label-color',
//       '--van-cell-label-font-size',
//       '--van-cell-label-line-height',
//       '--van-cell-label-margin-top',
//       '--van-cell-value-color',
//       '--van-cell-icon-size',
//       '--van-cell-right-icon-color',
//       '--van-cell-large-vertical-padding',
//       '--van-cell-large-title-font-size',
//       '--van-cell-large-label-font-size',
//       '--van-cell-group-background-color',
//       '--van-cell-group-title-color',
//       '--van-cell-group-title-padding',
//       '--van-cell-group-title-font-size',
//       '--van-cell-group-title-line-height',
//       '--van-cell-group-inset-padding',
//       '--van-cell-group-inset-border-radius',
//       '--van-cell-group-inset-title-padding'
//     ]
//   },
//   {
//     id: 'Image',
//     styles: [
//       '--van-image-placeholder-text-color',
//       '--van-image-placeholder-font-size',
//       '--van-image-placeholder-background-color',
//       '--van-image-loading-icon-size',
//       '--van-image-loading-icon-color',
//       '--van-image-error-icon-size',
//       '--van-image-error-icon-color'
//     ]
//   },
//   {
//     id: 'Popup',
//     styles: [
//       '--van-popup-background-color',
//       '--van-popup-transition',
//       '--van-popup-round-border-radius',
//       '--van-popup-close-icon-size',
//       '--van-popup-close-icon-color',
//       '--van-popup-close-icon-active-color',
//       '--van-popup-close-icon-margin',
//       '--van-popup-close-icon-z-index'
//     ]
//   },
//   {
//     id: 'Toast',
//     styles: [
//       '--van-toast-max-width',
//       '--van-toast-font-size',
//       '--van-toast-text-color',
//       '--van-toast-loading-icon-color',
//       '--van-toast-line-height',
//       '--van-toast-border-radius',
//       '--van-toast-background-color',
//       '--van-toast-icon-size',
//       '--van-toast-text-min-width',
//       '--van-toast-text-padding',
//       '--van-toast-default-padding',
//       '--van-toast-default-width',
//       '--van-toast-default-min-height',
//       '--van-toast-position-top-distance',
//       '--van-toast-position-bottom-distance'
//     ]
//   },
//   {
//     id: 'Calendar',
//     styles: [
//       '--van-calendar-background-color',
//       '--van-calendar-popup-height',
//       '--van-calendar-header-box-shadow',
//       '--van-calendar-header-title-height',
//       '--van-calendar-header-title-font-size',
//       '--van-calendar-header-subtitle-font-size',
//       '--van-calendar-weekdays-height',
//       '--van-calendar-weekdays-font-size',
//       '--van-calendar-month-title-font-size',
//       '--van-calendar-month-mark-color',
//       '--van-calendar-month-mark-font-size',
//       '--van-calendar-day-height',
//       '--van-calendar-day-font-size',
//       '--van-calendar-range-edge-color',
//       '--van-calendar-range-edge-background-color',
//       '--van-calendar-range-middle-color',
//       '--van-calendar-range-middle-background-opacity',
//       '--van-calendar-selected-day-size',
//       '--van-calendar-selected-day-color',
//       '--van-calendar-info-font-size',
//       '--van-calendar-info-line-height',
//       '--van-calendar-selected-day-background-color',
//       '--van-calendar-day-disabled-color',
//       '--van-calendar-confirm-button-height',
//       '--van-calendar-confirm-button-margin'
//     ]
//   },
//   {
//     id: 'Cascader',
//     styles: [
//       '--van-cascader-header-height',
//       '--van-cascader-header-padding',
//       '--van-cascader-title-font-size',
//       '--van-cascader-title-line-height',
//       '--van-cascader-close-icon-size',
//       '--van-cascader-close-icon-color',
//       '--van-cascader-close-icon-active-color',
//       '--van-cascader-selected-icon-size',
//       '--van-cascader-tabs-height',
//       '--van-cascader-active-color',
//       '--van-cascader-options-height',
//       '--van-cascader-option-disabled-color',
//       '--van-cascader-tab-color',
//       '--van-cascader-unselected-tab-color'
//     ]
//   },
//   {
//     id: 'Checkbox',
//     styles: [
//       '--van-checkbox-size',
//       '--van-checkbox-border-color',
//       '--van-checkbox-transition-duration',
//       '--van-checkbox-label-margin',
//       '--van-checkbox-label-color',
//       '--van-checkbox-checked-icon-color',
//       '--van-checkbox-disabled-icon-color',
//       '--van-checkbox-disabled-label-color',
//       '--van-checkbox-disabled-background-color'
//     ]
//   },
//   {
//     id: 'Field',
//     styles: [
//       '--van-field-label-width',
//       '--van-field-label-color',
//       '--van-field-label-margin-right',
//       '--van-field-input-text-color',
//       '--van-field-input-error-text-color',
//       '--van-field-input-disabled-text-color',
//       '--van-field-placeholder-text-color',
//       '--van-field-icon-size',
//       '--van-field-clear-icon-size',
//       '--van-field-clear-icon-color',
//       '--van-field-right-icon-color',
//       '--van-field-error-message-color',
//       '--van-field-error-message-text-color',
//       '--van-field-text-area-min-height',
//       '--van-field-word-limit-color',
//       '--van-field-word-limit-font-size',
//       '--van-field-word-limit-line-height',
//       '--van-field-disabled-text-color',
//       '--van-field-required-mark-color'
//     ]
//   },
//   {
//     id: 'NumberKeyboard',
//     styles: [
//       '--van-number-keyboard-background-color',
//       '--van-number-keyboard-key-height',
//       '--van-number-keyboard-key-font-size',
//       '--van-number-keyboard-key-active-color',
//       '--van-number-keyboard-delete-font-size',
//       '--van-number-keyboard-title-color',
//       '--van-number-keyboard-title-height',
//       '--van-number-keyboard-title-font-size',
//       '--van-number-keyboard-close-padding',
//       '--van-number-keyboard-close-color',
//       '--van-number-keyboard-close-font-size',
//       '--van-number-keyboard-button-text-color',
//       '--van-number-keyboard-button-background-color',
//       '--van-number-keyboard-z-index'
//     ]
//   },
//   {
//     id: 'PasswordInput',
//     styles: [
//       '--van-password-input-height',
//       '--van-password-input-margin',
//       '--van-password-input-font-size',
//       '--van-password-input-border-radius',
//       '--van-password-input-background-color',
//       '--van-password-input-info-color',
//       '--van-password-input-info-font-size',
//       '--van-password-input-error-info-color',
//       '--van-password-input-dot-size',
//       '--van-password-input-dot-color',
//       '--van-password-input-cursor-color',
//       '--van-password-input-cursor-width',
//       '--van-password-input-cursor-height',
//       '--van-password-input-cursor-animation-duration'
//     ]
//   },
//   {
//     id: 'Picker',
//     styles: [
//       '--van-picker-background-color',
//       '--van-picker-toolbar-height',
//       '--van-picker-title-font-size',
//       '--van-picker-title-line-height',
//       '--van-picker-action-padding',
//       '--van-picker-action-font-size',
//       '--van-picker-confirm-action-color',
//       '--van-picker-cancel-action-color',
//       '--van-picker-option-padding',
//       '--van-picker-option-font-size',
//       '--van-picker-option-text-color',
//       '--van-picker-option-disabled-opacity',
//       '--van-picker-loading-icon-color',
//       '--van-picker-loading-mask-color'
//     ]
//   },
//   {
//     id: 'Radio',
//     styles: [
//       '--van-radio-size',
//       '--van-radio-border-color',
//       '--van-radio-transition-duration',
//       '--van-radio-label-margin',
//       '--van-radio-label-color',
//       '--van-radio-checked-icon-color',
//       '--van-radio-disabled-icon-color',
//       '--van-radio-disabled-label-color',
//       '--van-radio-disabled-background-color'
//     ]
//   },
//   {
//     id: 'Rate',
//     styles: [
//       '--van-rate-icon-size',
//       '--van-rate-icon-gutter',
//       '--van-rate-icon-void-color',
//       '--van-rate-icon-full-color',
//       '--van-rate-icon-disabled-color'
//     ]
//   },
//   {
//     id: 'Search',
//     styles: [
//       '--van-search-padding',
//       '--van-search-background-color',
//       '--van-search-content-background-color',
//       '--van-search-input-height',
//       '--van-search-label-padding',
//       '--van-search-label-color',
//       '--van-search-label-font-size',
//       '--van-search-left-icon-color',
//       '--van-search-action-padding',
//       '--van-search-action-text-color',
//       '--van-search-action-font-size'
//     ]
//   },
//   {
//     id: 'Slider',
//     styles: [
//       '--van-slider-active-background-color',
//       '--van-slider-inactive-background-color',
//       '--van-slider-disabled-opacity',
//       '--van-slider-bar-height',
//       '--van-slider-button-width',
//       '--van-slider-button-height',
//       '--van-slider-button-border-radius',
//       '--van-slider-button-background-color',
//       '--van-slider-button-box-shadow'
//     ]
//   },
//   {
//     id: 'Stepper',
//     styles: [
//       '--van-stepper-active-color',
//       '--van-stepper-background-color',
//       '--van-stepper-button-icon-color',
//       '--van-stepper-button-disabled-color',
//       '--van-stepper-button-disabled-icon-color',
//       '--van-stepper-button-round-theme-color',
//       '--van-stepper-input-width',
//       '--van-stepper-input-height',
//       '--van-stepper-input-font-size',
//       '--van-stepper-input-line-height',
//       '--van-stepper-input-text-color',
//       '--van-stepper-input-disabled-text-color',
//       '--van-stepper-input-disabled-background-color',
//       '--van-stepper-border-radius'
//     ]
//   },
//   {
//     id: 'Switch',
//     styles: [
//       '--van-switch-size',
//       '--van-switch-width',
//       '--van-switch-height',
//       '--van-switch-node-size',
//       '--van-switch-node-background-color',
//       '--van-switch-node-box-shadow',
//       '--van-switch-background-color',
//       '--van-switch-on-background-color',
//       '--van-switch-transition-duration',
//       '--van-switch-disabled-opacity',
//       '--van-switch-border'
//     ]
//   },
//   {
//     id: 'Uploader',
//     styles: [
//       '--van-uploader-size',
//       '--van-uploader-icon-size',
//       '--van-uploader-icon-color',
//       '--van-uploader-text-color',
//       '--van-uploader-text-font-size',
//       '--van-uploader-upload-background-color',
//       '--van-uploader-upload-active-color',
//       '--van-uploader-delete-color',
//       '--van-uploader-delete-icon-size',
//       '--van-uploader-delete-background-color',
//       '--van-uploader-file-background-color',
//       '--van-uploader-file-icon-size',
//       '--van-uploader-file-icon-color',
//       '--van-uploader-file-name-padding',
//       '--van-uploader-file-name-margin-top',
//       '--van-uploader-file-name-font-size',
//       '--van-uploader-file-name-text-color',
//       '--van-uploader-mask-text-color',
//       '--van-uploader-mask-background-color',
//       '--van-uploader-mask-icon-size',
//       '--van-uploader-mask-message-font-size',
//       '--van-uploader-mask-message-line-height',
//       '--van-uploader-loading-icon-size',
//       '--van-uploader-loading-icon-color',
//       '--van-uploader-disabled-opacity'
//     ]
//   },
//   {
//     id: 'ActionSheet',
//     styles: [
//       '--van-action-sheet-max-height',
//       '--van-action-sheet-header-height',
//       '--van-action-sheet-header-font-size',
//       '--van-action-sheet-description-color',
//       '--van-action-sheet-description-font-size',
//       '--van-action-sheet-description-line-height',
//       '--van-action-sheet-item-background',
//       '--van-action-sheet-item-font-size',
//       '--van-action-sheet-item-line-height',
//       '--van-action-sheet-item-text-color',
//       '--van-action-sheet-item-disabled-text-color',
//       '--van-action-sheet-subname-color',
//       '--van-action-sheet-subname-font-size',
//       '--van-action-sheet-subname-line-height',
//       '--van-action-sheet-close-icon-size',
//       '--van-action-sheet-close-icon-color',
//       '--van-action-sheet-close-icon-active-color',
//       '--van-action-sheet-close-icon-padding',
//       '--van-action-sheet-cancel-text-color',
//       '--van-action-sheet-cancel-padding-top',
//       '--van-action-sheet-cancel-padding-color',
//       '--van-action-sheet-loading-icon-size'
//     ]
//   },
//   {
//     id: 'Dialog',
//     styles: [
//       '--van-dialog-width',
//       '--van-dialog-small-screen-width',
//       '--van-dialog-font-size',
//       '--van-dialog-transition',
//       '--van-dialog-border-radius',
//       '--van-dialog-background-color',
//       '--van-dialog-header-font-weight',
//       '--van-dialog-header-line-height',
//       '--van-dialog-header-padding-top',
//       '--van-dialog-header-isolated-padding',
//       '--van-dialog-message-padding',
//       '--van-dialog-message-font-size',
//       '--van-dialog-message-line-height',
//       '--van-dialog-message-max-height',
//       '--van-dialog-has-title-message-text-color',
//       '--van-dialog-has-title-message-padding-top',
//       '--van-dialog-button-height',
//       '--van-dialog-round-button-height',
//       '--van-dialog-confirm-button-text-color'
//     ]
//   },
//   {
//     id: 'DropdownMenu',
//     styles: [
//       '--van-dropdown-menu-height',
//       '--van-dropdown-menu-background-color',
//       '--van-dropdown-menu-box-shadow',
//       '--van-dropdown-menu-title-font-size',
//       '--van-dropdown-menu-title-text-color',
//       '--van-dropdown-menu-title-active-text-color',
//       '--van-dropdown-menu-title-disabled-text-color',
//       '--van-dropdown-menu-title-padding',
//       '--van-dropdown-menu-title-line-height',
//       '--van-dropdown-menu-option-active-color',
//       '--van-dropdown-menu-content-max-height',
//       '--van-dropdown-item-z-index'
//     ]
//   },
//   {
//     id: 'Loading',
//     styles: [
//       '--van-loading-text-color',
//       '--van-loading-text-font-size',
//       '--van-loading-spinner-color',
//       '--van-loading-spinner-size',
//       '--van-loading-spinner-animation-duration'
//     ]
//   },
//   {
//     id: 'Notify',
//     styles: [
//       '--van-notify-text-color',
//       '--van-notify-padding',
//       '--van-notify-font-size',
//       '--van-notify-line-height',
//       '--van-notify-primary-background-color',
//       '--van-notify-success-background-color',
//       '--van-notify-danger-background-color',
//       '--van-notify-warning-background-color'
//     ]
//   },
//   {
//     id: 'Overlay',
//     styles: ['--van-overlay-z-index', '--van-overlay-background-color']
//   },
//   {
//     id: 'PullRefresh',
//     styles: [
//       '--van-pull-refresh-head-height',
//       '--van-pull-refresh-head-font-size',
//       '--van-pull-refresh-head-text-color',
//       '--van-pull-refresh-loading-icon-size'
//     ]
//   },
//   {
//     id: 'ShareSheet',
//     styles: [
//       '--van-share-sheet-header-padding',
//       '--van-share-sheet-title-color',
//       '--van-share-sheet-title-font-size',
//       '--van-share-sheet-title-line-height',
//       '--van-share-sheet-description-color',
//       '--van-share-sheet-description-font-size',
//       '--van-share-sheet-description-line-height',
//       '--van-share-sheet-icon-size',
//       '--van-share-sheet-option-name-color',
//       '--van-share-sheet-option-name-font-size',
//       '--van-share-sheet-option-description-color',
//       '--van-share-sheet-option-description-font-size',
//       '--van-share-sheet-cancel-button-font-size',
//       '--van-share-sheet-cancel-button-height',
//       '--van-share-sheet-cancel-button-background'
//     ]
//   },
//   {
//     id: 'SwipeCell',
//     styles: [
//       '--van-switch-cell-padding-top',
//       '--van-switch-cell-padding-bottom',
//       '--van-switch-cell-large-padding-top',
//       '--van-switch-cell-large-padding-bottom'
//     ]
//   },
//   {
//     id: 'Badge',
//     styles: [
//       '--van-badge-size',
//       '--van-badge-color',
//       '--van-badge-padding',
//       '--van-badge-font-size',
//       '--van-badge-font-weight',
//       '--van-badge-border-width',
//       '--van-badge-background-color',
//       '--van-badge-dot-color',
//       '--van-badge-dot-size',
//       '--van-badge-font-family'
//     ]
//   },
//   {
//     id: 'Circle',
//     styles: [
//       '--van-circle-size',
//       '--van-circle-color',
//       '--van-circle-layer-color',
//       '--van-circle-text-color',
//       '--van-circle-text-font-weight',
//       '--van-circle-text-font-size',
//       '--van-circle-text-line-height'
//     ]
//   },
//   {
//     id: 'Collapse',
//     styles: [
//       '--van-collapse-item-transition-duration',
//       '--van-collapse-item-content-padding',
//       '--van-collapse-item-content-font-size',
//       '--van-collapse-item-content-line-height',
//       '--van-collapse-item-content-text-color',
//       '--van-collapse-item-content-background-color',
//       '--van-collapse-item-title-disabled-color'
//     ]
//   },
//   {
//     id: 'CountDown',
//     styles: [
//       '--van-count-down-text-color',
//       '--van-count-down-font-size',
//       '--van-count-down-line-height'
//     ]
//   },
//   {
//     id: 'Divider',
//     styles: [
//       '--van-divider-margin',
//       '--van-divider-text-color',
//       '--van-divider-font-size',
//       '--van-divider-line-height',
//       '--van-divider-border-color',
//       '--van-divider-content-padding',
//       '--van-divider-content-left-width',
//       '--van-divider-content-right-width'
//     ]
//   },
//   {
//     id: 'Empty',
//     styles: [
//       '--van-empty-padding',
//       '--van-empty-image-size',
//       '--van-empty-description-margin-top',
//       '--van-empty-description-padding',
//       '--van-empty-description-color',
//       '--van-empty-description-font-size',
//       '--van-empty-description-line-height',
//       '--van-empty-bottom-margin-top'
//     ]
//   },
//   {
//     id: 'ImagePreview',
//     styles: [
//       '--van-image-preview-index-text-color',
//       '--van-image-preview-index-font-size',
//       '--van-image-preview-index-line-height',
//       '--van-image-preview-index-text-shadow',
//       '--van-image-preview-overlay-background-color',
//       '--van-image-preview-close-icon-size',
//       '--van-image-preview-close-icon-color',
//       '--van-image-preview-close-icon-active-color',
//       '--van-image-preview-close-icon-margin',
//       '--van-image-preview-close-icon-z-index'
//     ]
//   },
//   {
//     id: 'List',
//     styles: [
//       '--van-list-text-color',
//       '--van-list-text-font-size',
//       '--van-list-text-line-height',
//       '--van-list-loading-icon-size'
//     ]
//   },
//   {
//     id: 'NoticeBar',
//     styles: [
//       '--van-notice-bar-height',
//       '--van-notice-bar-padding',
//       '--van-notice-bar-wrapable-padding',
//       '--van-notice-bar-text-color',
//       '--van-notice-bar-font-size',
//       '--van-notice-bar-line-height',
//       '--van-notice-bar-background-color',
//       '--van-notice-bar-icon-size',
//       '--van-notice-bar-icon-min-width'
//     ]
//   },
//   {
//     id: 'Popover',
//     styles: [
//       '--van-popover-arrow-size',
//       '--van-popover-border-radius',
//       '--van-popover-action-width',
//       '--van-popover-action-height',
//       '--van-popover-action-font-size',
//       '--van-popover-action-line-height',
//       '--van-popover-action-icon-size',
//       '--van-popover-light-text-color',
//       '--van-popover-light-background-color',
//       '--van-popover-light-action-disabled-text-color',
//       '--van-popover-dark-text-color',
//       '--van-popover-dark-background-color',
//       '--van-popover-dark-action-disabled-text-color'
//     ]
//   },
//   {
//     id: 'Progress',
//     styles: [
//       '--van-progress-height',
//       '--van-progress-color',
//       '--van-progress-background-color',
//       '--van-progress-pivot-padding',
//       '--van-progress-pivot-text-color',
//       '--van-progress-pivot-font-size',
//       '--van-progress-pivot-line-height',
//       '--van-progress-pivot-background-color'
//     ]
//   },
//   {
//     id: 'Skeleton',
//     styles: [
//       '--van-skeleton-row-height',
//       '--van-skeleton-row-background-color',
//       '--van-skeleton-row-margin-top',
//       '--van-skeleton-title-width',
//       '--van-skeleton-avatar-size',
//       '--van-skeleton-avatar-background-color',
//       '--van-skeleton-animation-duration'
//     ]
//   },
//   {
//     id: 'Steps',
//     styles: [
//       '--van-step-text-color',
//       '--van-step-active-color',
//       '--van-step-process-text-color',
//       '--van-step-font-size',
//       '--van-step-line-color',
//       '--van-step-finish-line-color',
//       '--van-step-finish-text-color',
//       '--van-step-icon-size',
//       '--van-step-circle-size',
//       '--van-step-circle-color',
//       '--van-step-horizontal-title-font-size',
//       '--van-steps-background-color'
//     ]
//   },
//   {
//     id: 'Sticky',
//     styles: ['--van-sticky-z-index']
//   },
//   {
//     id: 'Swipe',
//     styles: [
//       '--van-swipe-indicator-size',
//       '--van-swipe-indicator-margin',
//       '--van-swipe-indicator-active-opacity',
//       '--van-swipe-indicator-inactive-opacity',
//       '--van-swipe-indicator-active-background-color',
//       '--van-swipe-indicator-inactive-background-color'
//     ]
//   },
//   {
//     id: 'Tag',
//     styles: [
//       '--van-tag-padding',
//       '--van-tag-text-color',
//       '--van-tag-font-size',
//       '--van-tag-border-radius',
//       '--van-tag-line-height',
//       '--van-tag-medium-padding',
//       '--van-tag-large-padding',
//       '--van-tag-large-border-radius',
//       '--van-tag-large-font-size',
//       '--van-tag-round-border-radius',
//       '--van-tag-danger-color',
//       '--van-tag-primary-color',
//       '--van-tag-success-color',
//       '--van-tag-warning-color',
//       '--van-tag-default-color',
//       '--van-tag-plain-background-color'
//     ]
//   },
//   {
//     id: 'ActionBar',
//     styles: [
//       '--van-action-bar-background-color',
//       '--van-action-bar-height',
//       '--van-action-bar-icon-width',
//       '--van-action-bar-icon-height',
//       '--van-action-bar-icon-color',
//       '--van-action-bar-icon-size',
//       '--van-action-bar-icon-font-size',
//       '--van-action-bar-icon-active-color',
//       '--van-action-bar-icon-text-color',
//       '--van-action-bar-icon-background-color',
//       '--van-action-bar-button-height',
//       '--van-action-bar-button-warning-color',
//       '--van-action-bar-button-danger-color'
//     ]
//   },
//   {
//     id: 'Grid',
//     styles: [
//       '--van-grid-item-content-padding',
//       '--van-grid-item-content-background-color',
//       '--van-grid-item-content-active-color',
//       '--van-grid-item-icon-size',
//       '--van-grid-item-text-color',
//       '--van-grid-item-text-font-size'
//     ]
//   },
//   {
//     id: 'IndexBar',
//     styles: [
//       '--van-index-bar-sidebar-z-index',
//       '--van-index-bar-index-font-size',
//       '--van-index-bar-index-line-height',
//       '--van-index-bar-index-active-color',
//       '--van-index-anchor-z-index',
//       '--van-index-anchor-padding',
//       '--van-index-anchor-text-color',
//       '--van-index-anchor-font-weight',
//       '--van-index-anchor-font-size',
//       '--van-index-anchor-line-height',
//       '--van-index-anchor-background-color',
//       '--van-index-anchor-sticky-text-color',
//       '--van-index-anchor-sticky-background-color'
//     ]
//   },
//   {
//     id: 'NavBar',
//     styles: [
//       '--van-nav-bar-height',
//       '--van-nav-bar-background-color',
//       '--van-nav-bar-arrow-size',
//       '--van-nav-bar-icon-color',
//       '--van-nav-bar-text-color',
//       '--van-nav-bar-title-font-size',
//       '--van-nav-bar-title-text-color',
//       '--van-nav-bar-z-index'
//     ]
//   },
//   {
//     id: 'Pagination',
//     styles: [
//       '--van-pagination-height',
//       '--van-pagination-font-size',
//       '--van-pagination-item-width',
//       '--van-pagination-item-default-color',
//       '--van-pagination-item-disabled-color',
//       '--van-pagination-item-disabled-background-color',
//       '--van-pagination-background-color',
//       '--van-pagination-desc-color',
//       '--van-pagination-disabled-opacity'
//     ]
//   },
//   {
//     id: 'Sidebar',
//     styles: [
//       '--van-sidebar-width',
//       '--van-sidebar-font-size',
//       '--van-sidebar-line-height',
//       '--van-sidebar-text-color',
//       '--van-sidebar-disabled-text-color',
//       '--van-sidebar-padding',
//       '--van-sidebar-active-color',
//       '--van-sidebar-background-color',
//       '--van-sidebar-selected-font-weight',
//       '--van-sidebar-selected-text-color',
//       '--van-sidebar-selected-border-width',
//       '--van-sidebar-selected-border-height',
//       '--van-sidebar-selected-border-color',
//       '--van-sidebar-selected-background-color'
//     ]
//   },
//   {
//     id: 'Tab',
//     styles: [
//       '--van-tab-text-color',
//       '--van-tab-active-text-color',
//       '--van-tab-disabled-text-color',
//       '--van-tab-font-size',
//       '--van-tab-line-height',
//       '--van-tabs-default-color',
//       '--van-tabs-line-height',
//       '--van-tabs-card-height',
//       '--van-tabs-nav-background-color',
//       '--van-tabs-bottom-bar-width',
//       '--van-tabs-bottom-bar-height',
//       '--van-tabs-bottom-bar-color'
//     ]
//   },
//   {
//     id: 'Tabbar',
//     styles: [
//       '--van-tabbar-height',
//       '--van-tabbar-z-index',
//       '--van-tabbar-background-color',
//       '--van-tabbar-item-font-size',
//       '--van-tabbar-item-text-color',
//       '--van-tabbar-item-active-color',
//       '--van-tabbar-item-active-background-color',
//       '--van-tabbar-item-line-height',
//       '--van-tabbar-item-icon-size',
//       '--van-tabbar-item-margin-bottom'
//     ]
//   },
//   {
//     id: 'TreeSelect',
//     styles: [
//       '--van-tree-select-font-size',
//       '--van-tree-select-nav-background-color',
//       '--van-tree-select-content-background-color',
//       '--van-tree-select-nav-item-padding',
//       '--van-tree-select-item-height',
//       '--van-tree-select-item-active-color',
//       '--van-tree-select-item-disabled-color',
//       '--van-tree-select-item-selected-size'
//     ]
//   },
//   {
//     id: 'AddressEdit',
//     styles: [
//       '--van-address-edit-padding',
//       '--van-address-edit-buttons-padding',
//       '--van-address-edit-button-margin-bottom',
//       '--van-address-edit-detail-finish-color',
//       '--van-address-edit-detail-finish-font-size'
//     ]
//   },
//   {
//     id: 'AddressList',
//     styles: [
//       '--van-address-list-padding',
//       '--van-address-list-disabled-text-color',
//       '--van-address-list-disabled-text-padding',
//       '--van-address-list-disabled-text-font-size',
//       '--van-address-list-disabled-text-line-height',
//       '--van-address-list-add-button-z-index',
//       '--van-address-list-item-padding',
//       '--van-address-list-item-text-color',
//       '--van-address-list-item-disabled-text-color',
//       '--van-address-list-item-font-size',
//       '--van-address-list-item-line-height',
//       '--van-address-list-item-radio-icon-color',
//       '--van-address-list-edit-icon-size'
//     ]
//   },
//   {
//     id: 'Card',
//     styles: [
//       '--van-card-padding',
//       '--van-card-font-size',
//       '--van-card-text-color',
//       '--van-card-background-color',
//       '--van-card-thumb-size',
//       '--van-card-thumb-border-radius',
//       '--van-card-title-line-height',
//       '--van-card-desc-color',
//       '--van-card-desc-line-height',
//       '--van-card-price-color',
//       '--van-card-origin-price-color',
//       '--van-card-num-color',
//       '--van-card-origin-price-font-size',
//       '--van-card-price-font-size',
//       '--van-card-price-integer-font-size',
//       '--van-card-price-font-family'
//     ]
//   },
//   {
//     id: 'ContactCard',
//     styles: [
//       '--van-contact-card-padding',
//       '--van-contact-card-add-icon-size',
//       '--van-contact-card-add-icon-color',
//       '--van-contact-card-value-line-height'
//     ]
//   },
//   {
//     id: 'ContactEdit',
//     styles: [
//       '--van-contact-edit-padding',
//       '--van-contact-edit-fields-radius',
//       '--van-contact-edit-buttons-padding',
//       '--van-contact-edit-button-margin-bottom',
//       '--van-contact-edit-button-font-size',
//       '--van-contact-edit-field-label-width'
//     ]
//   },
//   {
//     id: 'ContactList',
//     styles: [
//       '--van-contact-list-edit-icon-size',
//       '--van-contact-list-add-button-z-index',
//       '--van-contact-list-item-padding',
//       '--van-contact-list-item-radio-icon-color'
//     ]
//   },
//   {
//     id: 'Coupon',
//     styles: [
//       '--van-coupon-margin',
//       '--van-coupon-content-height',
//       '--van-coupon-content-padding',
//       '--van-coupon-background-color',
//       '--van-coupon-active-background-color',
//       '--van-coupon-border-radius',
//       '--van-coupon-box-shadow',
//       '--van-coupon-head-width',
//       '--van-coupon-amount-color',
//       '--van-coupon-amount-font-size',
//       '--van-coupon-currency-font-size',
//       '--van-coupon-name-font-size',
//       '--van-coupon-disabled-text-color',
//       '--van-coupon-description-padding',
//       '--van-coupon-description-border-color',
//       '--van-coupon-corner-checkbox-icon-color',
//       '--van-coupon-list-background-color',
//       '--van-coupon-list-field-padding',
//       '--van-coupon-list-exchange-button-height',
//       '--van-coupon-list-close-button-height',
//       '--van-coupon-list-empty-image-size',
//       '--van-coupon-list-empty-tip-color',
//       '--van-coupon-list-empty-tip-font-size',
//       '--van-coupon-list-empty-tip-line-height',
//       '--van-coupon-cell-selected-text-color'
//     ]
//   },
//   {
//     id: 'SubmitBar',
//     styles: [
//       '--van-submit-bar-height',
//       '--van-submit-bar-z-index',
//       '--van-submit-bar-background-color',
//       '--van-submit-bar-button-width',
//       '--van-submit-bar-price-color',
//       '--van-submit-bar-text-color',
//       '--van-submit-bar-text-font-size',
//       '--van-submit-bar-tip-padding',
//       '--van-submit-bar-tip-font-size',
//       '--van-submit-bar-tip-line-height',
//       '--van-submit-bar-tip-color',
//       '--van-submit-bar-tip-background-color',
//       '--van-submit-bar-tip-icon-size',
//       '--van-submit-bar-button-height',
//       '--van-submit-bar-padding',
//       '--van-submit-bar-price-font-size',
//       '--van-submit-bar-price-integer-font-size',
//       '--van-submit-bar-price-font-family'
//     ]
//   }
// ]
