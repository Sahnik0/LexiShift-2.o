import { useState } from 'react';
import { Upload, Settings, FileText } from 'lucide-react';

export function ConverterPage() {
  const [file, setFile] = useState<File | null>(null);
  const [settings, setSettings] = useState({
    fontSize: 16,
    lineSpacing: 1.5,
    letterSpacing: 0.5,
    textColor: '#000000'
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement file upload and conversion logic
    console.log('Converting file:', file, 'with settings:', settings);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Convert Your Document</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
            <div className="flex flex-col items-center">
              <Upload className="w-12 h-12 text-gray-400 mb-4" />
              <label className="block">
                <span className="sr-only">Choose file</span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-purple-50 file:text-purple-700
                    hover:file:bg-purple-100"
                  accept=".pdf,.txt"
                  onChange={handleFileChange}
                />
              </label>
              <p className="mt-2 text-sm text-gray-500">PDF or text files up to 10MB</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Customization Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Font Size</label>
                <input
                  type="range"
                  name="fontSize"
                  min="12"
                  max="24"
                  value={settings.fontSize}
                  onChange={handleSettingsChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-500">{settings.fontSize}px</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Line Spacing</label>
                <input
                  type="range"
                  name="lineSpacing"
                  min="1"
                  max="2"
                  step="0.1"
                  value={settings.lineSpacing}
                  onChange={handleSettingsChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-500">{settings.lineSpacing}</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Letter Spacing</label>
                <input
                  type="range"
                  name="letterSpacing"
                  min="0"
                  max="1"
                  step="0.1"
                  value={settings.letterSpacing}
                  onChange={handleSettingsChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-500">{settings.letterSpacing}em</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Text Color</label>
                <input
                  type="color"
                  name="textColor"
                  value={settings.textColor}
                  onChange={handleSettingsChange}
                  className="h-8 w-full"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!file}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FileText className="w-5 h-5 mr-2" />
            Convert Document
          </button>
        </form>
      </div>
    </div>
  );
}