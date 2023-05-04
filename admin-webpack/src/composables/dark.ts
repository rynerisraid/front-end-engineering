// these APIs are auto-imported from @vueuse/core
import { useDark, useToggle, usePreferredDark } from '@vueuse/core'
// 实现了 暗夜模式的三个功能

export const isDark = useDark()
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()