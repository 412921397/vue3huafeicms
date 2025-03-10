import { App } from 'vue'
import registerElementIcons from './registerElementIcon'

export function registerElementIcon(app: App): void {
  app.use(registerElementIcons)
}
