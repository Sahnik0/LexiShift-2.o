import { FileText, Download, Trash2 } from 'lucide-react';

export function LibraryPage() {
  // Mock data - replace with actual data from your backend
  const documents = [
    { id: 1, name: 'Document 1.pdf', convertedAt: '2024-03-15', size: '2.4 MB' },
    { id: 2, name: 'Document 2.pdf', convertedAt: '2024-03-14', size: '1.8 MB' },
    { id: 3, name: 'Document 3.pdf', convertedAt: '2024-03-13', size: '3.1 MB' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">Your Library</h1>
          <p className="mt-1 text-sm text-gray-500">Access your converted documents here</p>
        </div>
        
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {documents.map((doc) => (
              <li key={doc.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center min-w-0">
                    <FileText className="h-6 w-6 text-purple-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                      <div className="flex space-x-4">
                        <p className="text-sm text-gray-500">Converted: {doc.convertedAt}</p>
                        <p className="text-sm text-gray-500">{doc.size}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      className="text-gray-400 hover:text-purple-600"
                      title="Download"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                    <button
                      className="text-gray-400 hover:text-red-600"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}