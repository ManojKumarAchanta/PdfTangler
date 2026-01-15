import { createContext, useContext, useState } from "react"

const PdfContext = createContext(null)

export function PdfProvider({ children }) {
  const [files, setFiles] = useState([])

  const addFiles = (fileList) => {
    setFiles(prev => [...prev, ...Array.from(fileList)])
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const clearFiles = () => setFiles([])

  const value = {
    files,
    addFiles,
    removeFile,
    clearFiles
  }

  return (
    <PdfContext.Provider value={value}>
      {children}
    </PdfContext.Provider>
  )
}

export function usePdf() {
  const context = useContext(PdfContext)
  if (!context) {
    throw new Error("usePdf must be used inside PdfProvider")
  }
  return context
}
