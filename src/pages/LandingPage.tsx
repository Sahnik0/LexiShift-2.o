import { Link } from 'react-router-dom';
import { FileText, Library, ArrowRight, CheckCircle } from 'lucide-react';

export function LandingPage() {
  return (
    <>
      <div className="animated-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Transform Your Reading
              <span className="block text-purple-600">Experience</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Convert your documents into dyslexia-friendly formats with our intelligent PDF converter.
              Experience clearer, more accessible reading.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Link
                to="/converter"
                className="hover-effect group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                Start Converting
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/library"
                className="hover-effect inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                <Library className="w-5 h-5 mr-2" />
                View Library
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-children">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-effect">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 floating">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Easy Conversion</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform any PDF or text file into a dyslexia-friendly format with just a few clicks.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-effect">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 floating">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Full Customization</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalize your reading experience with adjustable fonts, spacing, and colors.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover-effect">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 floating">
                <Library className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Cloud Library</h3>
              <p className="text-gray-600 leading-relaxed">
                Access your converted documents anywhere, anytime from your personal cloud library.
              </p>
            </div>
          </div>

          <div className="mt-24 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose DyslexiPDF?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'OpenDyslexic font support',
                'Customizable text formatting',
                'Cloud storage integration',
                'Instant conversion',
                'Secure document handling',
                'Cross-device compatibility'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 hover-effect">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}