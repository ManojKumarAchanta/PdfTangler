export const handleDragStart = (e, index, setDraggedIndex) => {
  setDraggedIndex(index)
  e.dataTransfer.effectAllowed = 'move'
  e.currentTarget.style.opacity = '0.5'
}

export const handleDragEnd = (e, setDraggedIndex) => {
  setDraggedIndex(null)
  e.currentTarget.style.opacity = '1'
}

export const handleDragOver = (e) => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'
}

export const handleDrop = (e, targetIndex, draggedIndex, reorderFn) => {
  e.preventDefault()
  if (draggedIndex === null || draggedIndex === targetIndex) return
  reorderFn(draggedIndex, targetIndex)
}

