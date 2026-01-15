import { useState } from 'react'
import { defaultTool } from '../config/appConfig'
import { PdfContext } from './pdfContext'
import { mergePdfs } from '../utils/mergePdfs'

export function PdfProvider({ children }) {
  const [files, setFiles] = useState([])
  const [isMerging, setIsMerging] = useState(false)
  const [error, setError] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentModule, setCurrentModule] = useState(defaultTool)
  const [showReorder, setShowReorder] = useState(false)

  const addFiles = (fileList) => {
    const pdfFiles = Array.from(fileList).filter(file => {
      return file.type === 'application/pdf'
    })
    setFiles(prev => [...prev, ...pdfFiles])
    setError(null)
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
    setError(null)
  }

  const clearFiles = () => {
    setFiles([])
    setError(null)
  }

  const setMerging = (value) => setIsMerging(value)

  const setErrorState = (err) => setError(err)

  const reorderFile = (fromIndex, toIndex) => {
    setFiles(prev => {
      const newFiles = [...prev]
      const [moved] = newFiles.splice(fromIndex, 1)
      newFiles.splice(toIndex, 0, moved)
      return newFiles
    })
  }

  const handleDirectMerge = async () => {
    if (files.length < 2) {
      setError('Please select at least two PDF files')
      return
    }

    setIsMerging(true)
    setError(null)

    try {
      const mergedPdfBytes = await mergePdfs(files)
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'merged.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (err) {
      setError(err.message || 'Failed to merge PDFs. Please try again.')
    } finally {
      setIsMerging(false)
    }
  }

  const value = {
    files,
    isMerging,
    error,
    sidebarOpen,
    sidebarCollapsed,
    currentModule,
    showReorder,
    addFiles,
    removeFile,
    clearFiles,
    reorderFile,
    setMerging,
    setErrorState,
    setSidebarOpen,
    setSidebarCollapsed,
    setCurrentModule,
    setShowReorder,
    handleDirectMerge
  }

  return (
    <PdfContext.Provider value={value}>
      {children}
    </PdfContext.Provider>
  )
}

