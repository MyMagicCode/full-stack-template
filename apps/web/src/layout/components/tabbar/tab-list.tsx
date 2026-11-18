import { CloseOutlined, RightCircleFilled } from "@ant-design/icons";
import cn from "classnames";
import { useEffect, useRef, type FC, type ReactNode } from "react"

interface TabItemProps {
  icon?: ReactNode;
  /** tab显示名称 */
  title: string;
  /** 唯一标识，用于匹配当前 */
  tabKey: string;
  /** 是否处于活跃 */
  isActive?: boolean;
  onClose?: (tabKey: string) => void;
}

const TabItem: FC<TabItemProps> = ({ icon, tabKey, title, isActive, onClose }) => {

  const containerClass = cn([
    'w-[150px] px-2',
    'flex-shrink-0 flex justify-between items-center',
    isActive ? 'text-foreground' : 'text-foreground-tertiary',
    'hover:bg-background-layout',
    'cursor-pointer'
  ])

  return <div className={containerClass}>
    <div className="flex-1 w-0 text-nowrap overflow-hidden">
      {icon}
      {title && <span className="ml-2">{title}</span>}
    </div>
    <span className="size-[20px] leading-[20px] rounded-full ml-1 text-center border border-transparent hover:border-split"
      onClick={() => onClose?.(tabKey)}
    >
      <CloseOutlined size={12} className="size-[12px]" />
    </span>
  </div>
}

const TabList: FC = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (evt: WheelEvent) => {
      if (Math.abs(evt.deltaX) > Math.abs(evt.deltaY)) return;
      evt.preventDefault()
      // 执行滚动
      container.scrollLeft += evt.deltaY;
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])


  return <div ref={containerRef} className="w-full h-full overflow-x-auto scrollbar-none">
    <div className="h-full w-auto flex">
      {Array.from({ length: 30 }).map((_, idx) => <TabItem
        key={'a' + idx}
        icon={<RightCircleFilled />}
        tabKey="1235"
        title="123wdadawdw12123 312312"
        isActive={idx === 2}
      />)}
    </div>
  </div>
}


export default TabList;