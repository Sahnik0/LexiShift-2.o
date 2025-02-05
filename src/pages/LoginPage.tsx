import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { BookOpen, Loader2, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/card';

export function LoginPage() {
  const { signInWithGoogle, user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
      setShowWelcome(true);
      setTimeout(() => {
        navigate('/converter');
      }, 1500);
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
        <Card className="w-full max-w-md mx-4 shadow-lg">
          <CardContent className="p-6 text-center space-y-4">
            <div className="flex items-center justify-center">
              <Loader2 className="h-8 w-8 text-purple-600 animate-spin" />
            </div>
            <p className="text-lg text-gray-700">Redirecting you to the converter...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
        <CardHeader className="space-y-1 pt-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <BookOpen className="relative h-16 w-16 text-purple-600 transform transition-transform duration-300 hover:scale-110" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome to DyslexiPDF
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Transform your documents into dyslexia-friendly formats with ease
          </p>
        </CardHeader>

        <CardContent className="p-6">
          {showWelcome && (
            <Alert className="mb-4 bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">
                Welcome! We're preparing your workspace...
              </AlertDescription>
            </Alert>
          )}

          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className="group relative w-full flex items-center justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all duration-200 hover:shadow-lg disabled:opacity-70"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {isLoading ? (
                <Loader2 className="h-5 w-5 text-purple-300 animate-spin" />
              ) : (
                <svg className="h-5 w-5 text-purple-300 group-hover:text-purple-200" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
              )}
            </span>
            <span className="flex items-center">
              Sign in with Google
              <ArrowRight className="ml-2 h-4 w-4 opacity-70" />
            </span>
          </button>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0">
          <p className="text-center text-xs text-gray-500 w-full">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;