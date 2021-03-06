declare module 'react-resize-detector' {
  import type { FC } from 'react'

  export declare interface ReactResizeDetectorDimensions {
    width?: number
    height?: number
  }

  export declare interface ReactResizeDetectorProps extends React.Props<ReactResizeDetector> {
    /**
     * Function that will be invoked with width and height arguments.
     * Default: undefined
     */
    onResize?: (width: number, height: number) => void
    /**
     * Trigger onResize on height change.
     * Default: false
     */
    handleHeight?: boolean
    /**
     * Trigger onResize on width change.
     * Default: false
     */
    handleWidth?: boolean
    /**
     * Do not trigger onResize when a component mounts.
     * Default: false
     */
    skipOnMount?: boolean
    /**
     * Possible values: "throttle" and "debounce".
     * See lodash docs for more information.
     * undefined - callback will be fired for every frame.
     * Default: undefined
     */
    refreshMode?: 'throttle' | 'debounce'
    /**
     * Use this in conjunction with refreshMode.
     * Important! It's a numeric prop so set it accordingly, e.g. refreshRate={500}.
     * efault: 1000.
     */
    refreshRate?: number
    /**
     * Use this in conjunction with refreshMode. An object in shape of { leading: bool, trailing: bool }.
     * Please refer to lodash's docs for more info.
     * Default: undefined
     */
    refreshOptions?: { leading?: boolean; trailing?: boolean }
    /**
     * A selector of an element to observe.
     * You can use this property to attach resize-observer to any DOM element.
     * Please refer to the querySelector docs.
     * Default: undefined
     */
    querySelector?: string
    /**
     * Valid only for a callback-pattern.
     * Ignored for other render types.
     * Set resize-detector's node type.
     * You can pass any valid React node: string with node's name or element.
     * Can be useful when you need to handle table's or paragraph's resizes.
     * Default: "div"
     */
    nodeType?: keyof React.ReactHTML // will be passed to React.createElement()
    /**
     * A DOM element to observe.
     * By default it's a parent element in relation to the ReactResizeDetector component.
     * But you can pass any DOM element to observe.
     * This property is omitted when you pass querySelector.
     * Default: undefined
     */
    targetDomEl?: HTMLElement

    render?: (props: ReactResizeDetectorDimensions) => React.ReactNode
  }

  declare const ReactResizeDetector: FC<ReactResizeDetectorProps>

  export declare function withResizeDetector<T extends Partial<ReactResizeDetectorDimensions>>(
    WrappedComponent: React.ComponentType<T>,
    props?: ReactResizeDetectorProps,
  ): React.ComponentType<Omit<T, keyof ReactResizeDetectorDimensions>>

  export default ReactResizeDetector
}
