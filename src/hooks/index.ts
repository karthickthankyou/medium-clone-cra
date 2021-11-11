import { RefObject, useEffect, useRef, useState } from 'react'

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const useScroll = (): [
  [number, number],
  RefObject<HTMLDivElement>,
  () => void,
  (distance: number) => void
] => {
  const [scrollPos, setScrollPos] = useState<[number, number]>([0, 0])
  const scrollEl = useRef<HTMLDivElement>(null)

  const scroll = (distance: number) => {
    if (scrollEl.current) {
      const leftPos = scrollEl.current.scrollLeft + distance
      scrollEl.current?.scrollTo({ left: leftPos, behavior: 'smooth' })
    }
  }

  const scrollListesener = () => {
    const start = scrollEl.current ? scrollEl?.current.scrollLeft : 0
    const end = scrollEl.current
      ? scrollEl.current?.scrollWidth - scrollEl.current?.clientWidth
      : 0
    setScrollPos([start, end - start])
  }
  useEffect(() => {
    scrollListesener()
  }, [])

  return [scrollPos, scrollEl, scrollListesener, scroll]
}
