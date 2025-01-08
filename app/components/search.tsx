"use client"

import { Command, CommandDialog } from 'cmdk'
import { useState, useEffect } from 'react'

const Search = () => {
  const [open, setOpen] = useState(false)

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
		<Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu">
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
{/* 
        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group> */}

        <Command.Item>Slugify</Command.Item>
        <Command.Item>Image resizer</Command.Item>
        <Command.Item>Image cropper</Command.Item>
      </Command.List>
    </Command.Dialog>
  )
}

export default Search;