import { createPinia } from 'pinia'

import { useDepartmentStore } from './modules/department'

const store = createPinia()

// export function setupStore() {}

export { useDepartmentStore }
export default store
