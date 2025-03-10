import { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  Avatar,
  ChatLineRound,
  Delete,
  Download,
  Edit,
  Expand,
  Fold,
  FullScreen,
  Goods,
  Iphone,
  Message,
  Monitor,
  Picture,
  Plus,
  RefreshLeft,
  RefreshRight,
  RemoveFilled,
  Search,
  Setting,
  Share,
  UserFilled,
  ZoomIn
} from '@element-plus/icons-vue'

const components = [
  Expand,
  Fold,
  FullScreen,
  Message,
  Picture,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Search,
  Avatar,
  UserFilled,
  Edit,
  RemoveFilled,
  RefreshRight,
  RefreshLeft,
  Share,
  Delete,
  ZoomIn,
  Download,
  Plus
]

export default function (app: App): void {
  for (const component of components) {
    if (component.name) {
      app.component(component.name, component)
    }
  }
}
