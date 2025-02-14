"use client"

import { useEffect, useState, useCallback } from "react"

const titles = ["Parsa Ghiasian", "a Software Engineer </>", "an AI Guru [•_•]"]

export default function AnimatedText() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(150) // Slightly slower initial typing
  const [hasStarted, setHasStarted] = useState(false)

  const tick = useCallback(() => {
    const currentTitle = titles[currentTitleIndex]

    if (!isDeleting && text === currentTitle) {
      setDelta(2500) // Wait before deleting
      setIsDeleting(true)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
      setDelta(150) // Reset typing speed
    } else {
      const newText = isDeleting
        ? text.substring(0, text.length - 1)
        : currentTitle.substring(0, text.length + 1)
      setText(newText)
      setDelta(isDeleting ? 50 : 150)
    }
  }, [currentTitleIndex, isDeleting, text])

  useEffect(() => {
    // Add a small delay before starting the animation
    const startTimeout = setTimeout(() => {
      setHasStarted(true)
    }, 500)

    return () => clearTimeout(startTimeout)
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    const ticker = setInterval(tick, delta)
    return () => clearInterval(ticker)
  }, [text, delta, hasStarted, tick])

  return (
    <span className="inline-block min-w-[300px] h-[40px]">
      {hasStarted ? text : ""}
    </span>
  )
}

