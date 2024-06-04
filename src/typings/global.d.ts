/* Menu */
declare namespace Menu {
  interface MenuOptions {
    path: string
    name: string
    component?: string | (() => Promise<unknown>)
    meta: MetaProps
    children?: MenuOptions[]
  }
  interface MetaProps {
    icon: string
    title: string
    activeMenu?: string
    isKeepAlive?: boolean
  }
}
