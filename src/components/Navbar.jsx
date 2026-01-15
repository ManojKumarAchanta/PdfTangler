import React from 'react'
import { usePdf } from '../context/pdfContext'
import { strings } from '../config/appStrings'
import { icons } from '../config/iconConfig'

const Navbar = () => {
  const { setSidebarOpen, sidebarCollapsed, setSidebarCollapsed, files, currentModule, showReorder, isMerging, handleDirectMerge } = usePdf()

  const showMergeButton = currentModule === 'merge' && files.length >= 2 && !showReorder

  return (
    <header className="h-14 px-4 border-b border-gray-200 flex items-center justify-between bg-white">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors md:hidden cursor-pointer"
          aria-label="Open navigation menu"
          type="button"
        >
          <div className="w-5 h-5" aria-hidden="true">{icons.menu}</div>
        </button>
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="hidden md:flex p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors cursor-pointer"
          aria-label="Toggle sidebar"
          type="button"
        >
          <div className="w-4 h-4" aria-hidden="true">{icons.menu}</div>
        </button>
        <div>
          <div className="text-base font-semibold text-gray-900">{strings.app.name}</div>
          <span className="text-xs text-gray-500 hidden sm:inline">{strings.app.tagline}</span>
        </div>
      </div>
      {showMergeButton && (
        <button
          onClick={handleDirectMerge}
          disabled={isMerging}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${isMerging
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-800 cursor-pointer'
            }`}
          type="button"
          aria-label={isMerging ? 'Merging PDFs' : 'Merge PDFs now'}
        >
          {isMerging ? (
            <>
              <div className="w-4 h-4" aria-hidden="true">{icons.spinner}</div>
              <span>{strings.merge.reorder.merging}</span>
            </>
          ) : (
            <>
              <div className="w-4 h-4" aria-hidden="true">{icons.merge}</div>
              <span>{strings.merge.mergeNow}</span>
            </>
          )}
        </button>
      )}
    </header>
  )
}

export default Navbar
