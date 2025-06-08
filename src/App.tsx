import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Shield, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Star,
  Download,
  Smartphone,
  QrCode
} from 'lucide-react';

// Mobile detection hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};

// Device detection hook
const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'other'>('other');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType('ios');
    } else if (/android/.test(userAgent)) {
      setDeviceType('android');
    } else {
      setDeviceType('other');
    }
  }, []);

  return deviceType;
};

// Animated counter hook
const useAnimatedCounter = (initialValue: number, increment: () => number) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + increment());
    }, 1000);

    return () => clearInterval(interval);
  }, [increment]);

  return count;
};

// Format number with commas
const formatNumber = (num: number) => {
  return num.toLocaleString();
};

// Format currency
const formatCurrency = (num: number) => {
  if (num >= 1000000) {
    return `₦${(num / 1000000).toFixed(1)}M+`;
  } else if (num >= 1000) {
    return `₦${(num / 1000).toFixed(0)}k+`;
  }
  return `₦${num.toLocaleString()}+`;
};

function App() {
  const isMobile = useIsMobile();
  const deviceType = useDeviceType();

  // Animated counters
  const usersCount = useAnimatedCounter(0, () => Math.floor(Math.random() * 100) + 1);
  const plansCount = useAnimatedCounter(0, () => Math.floor(Math.random() * 20) + 1);
  const payoutsCount = useAnimatedCounter(0, () => Math.floor(Math.random() * 100000) + 1000);

  const features = [
    {
      icon: Calendar,
      title: "Smart Planning",
      description: "Set up automated savings plans that work around your schedule and financial goals."
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Bank-level security ensures your money and data are always protected."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Monitor your progress and stay motivated with detailed insights and milestones."
    }
  ];

  const steps = [
    {
      icon: "/assets/DepositYourMoney.png",
      title: "Deposit Your Money",
      description: "Securely add funds to your Planmoni account using various payment methods."
    },
    {
      icon: "/assets/SetYourPayoutPlan.png",
      title: "Set Your Payout Plan",
      description: "Choose when and how much you want to receive based on your financial goals."
    },
    {
      icon: "/assets/StayDisciplined.png",
      title: "Stay Disciplined",
      description: "Let Planmoni handle the rest while you focus on achieving your dreams."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Planmoni helped me save for my business expansion. The automated planning feature is a game-changer!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Freelancer",
      content: "Finally, a platform that understands irregular income. My savings have never been more consistent.",
      rating: 5
    },
    {
      name: "Aisha Okafor",
      role: "Student",
      content: "Perfect for managing my allowance and saving for textbooks. Simple and effective!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/assets/AppLogo.png" alt="Planmoni" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">Planmoni</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button className="text-gray-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Stabilize Your
                  <span className="text-blue-600 block">Cash Flow</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Take control of your finances with smart planning tools that help you save consistently and reach your goals faster.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Planning Today
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600">Trusted by 10k+ users</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/assets/Planmoni.png" 
                  alt="Planmoni App Interface" 
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See Our Live Stats</h2>
            <p className="text-gray-600">Real-time numbers showing our growing community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatNumber(usersCount)}+
              </div>
              <p className="text-gray-600 font-medium">Users Joined</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatNumber(plansCount)}+
              </div>
              <p className="text-gray-600 font-medium">Payment Plans Created</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatCurrency(payoutsCount)}
              </div>
              <p className="text-gray-600 font-medium">Monthly Payouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Planmoni?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with user-friendly design to make financial planning effortless and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with Planmoni in three simple steps and take control of your financial future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto bg-white rounded-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                    <img src={step.icon} alt={step.title} className="w-20 h-20 object-contain" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their financial lives with Planmoni.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Download Planmoni today and take the first step towards financial freedom.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a href="#" className="group">
                <img 
                  src="/assets/appstore.png" 
                  alt="Download on App Store" 
                  className="h-14 group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <a href="#" className="group">
                <img 
                  src="/assets/googlepla.png" 
                  alt="Get it on Google Play" 
                  className="h-14 group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
              <div className="flex items-center space-x-3 text-blue-100">
                <QrCode className="w-6 h-6" />
                <span>Scan QR code to download</span>
              </div>
              <img 
                src="/assets/qr-code.png" 
                alt="QR Code" 
                className="w-24 h-24 bg-white rounded-lg p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/assets/AppLogo.png" alt="Planmoni" className="h-8 w-8" />
                <span className="text-xl font-bold">Planmoni</span>
              </div>
              <p className="text-gray-400">
                Stabilize your cash flow and achieve your financial goals with smart planning tools.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Planmoni. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Download Button */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/assets/AppLogo.png" alt="Planmoni" className="h-10 w-10" />
              <div>
                <div className="font-semibold text-gray-900">Planmoni</div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            
            {deviceType === 'ios' && (
              <a href="#" className="group">
                <img 
                  src="/ios.png" 
                  alt="Download on App Store" 
                  className="h-10 group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            )}
            
            {deviceType === 'android' && (
              <a href="#" className="group">
                <img 
                  src="/Android.png" 
                  alt="Get it on Google Play" 
                  className="h-10 group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            )}
            
            {deviceType === 'other' && (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;