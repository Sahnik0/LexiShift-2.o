import { BookOpen, Users, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About DyslexiPDF</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're dedicated to making reading accessible for everyone by providing tools that convert standard documents into dyslexia-friendly formats.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To break down reading barriers and make written content accessible to everyone, regardless of their reading abilities.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Who We Serve</h2>
          <p className="text-gray-600">
            We support individuals with dyslexia, educators, and organizations committed to accessibility and inclusive learning.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Our Commitment</h2>
          <p className="text-gray-600">
            We're committed to continuous improvement and innovation in making reading more accessible through technology.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-purple-600 font-semibold">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Upload Your Document</h3>
              <p className="text-gray-600">Simply upload any PDF or text file you want to convert.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-purple-600 font-semibold">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Customize Settings</h3>
              <p className="text-gray-600">Adjust font size, spacing, and color to match your reading preferences.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-purple-600 font-semibold">3</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Get Your Converted Document</h3>
              <p className="text-gray-600">Download your dyslexia-friendly document and start reading with ease.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}