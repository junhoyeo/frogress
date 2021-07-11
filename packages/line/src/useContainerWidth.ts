import React, { useEffect, useMemo, useRef, useState } from 'react'

export const useContainerWidth = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  width: number | undefined,
) => {
  const [containerWidth, setContainerWidth] = useState<number>(0)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }
    if (width !== undefined) {
      setContainerWidth(width)
      return
    }
    setContainerWidth(containerRef.current.offsetWidth)
  }, [width])

  return containerWidth
}
