import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Star,
  Download,
  Smartphone,
  QrCode
} from 'lucide-react';

// Live Stats Component
const LiveStats = () => {
  const [stats, setStats] = useState({
    users: 10000,
    paymentPlans: 3000,
    monthlyPayouts: 100000
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => ({
        users: prevStats.users + Math.floor(Math.random() * 100) + 1,
        paymentPlans: prevStats.paymentPlans + Math.floor(Math.random() * 20) + 1,
        monthlyPayouts: prevStats.monthlyPayouts + Math.floor(Math.random() * 100000) + 1000
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const formatCurrency = (num: number) => {
    if (num >= 1000000) {
      return '₦' + (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return '₦' + (num / 1000).toFixed(1) + 'k';
    }
    return '₦' + num.toString();
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See our live stats</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {formatNumber(stats.users)}+
              </div>
              <div className="text-gray-600 font-medium">users joined</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {formatNumber(stats.paymentPlans)}+
              </div>
              <div className="text-gray-600 font-medium">payment plans created</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {formatCurrency(stats.monthlyPayouts)}+
              </div>
              <div className="text-gray-600 font-medium">monthly payouts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/AppLogo.png" 
                alt="Planmoni" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold text-gray-900">Planmoni</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">How it Works</a>
              <a href="#download" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Download</a>
            </nav>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Stabilize Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Cash Flow</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Take control of your finances with Planmoni. Create personalized payment plans, 
                  set automatic savings goals, and receive your money exactly when you need it.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Planning Today
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105">
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
                  <span className="text-sm text-gray-600">10,000+ happy users</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/assets/PlanmoniDarkMode.png" 
                  alt="Planmoni App Interface" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <LiveStats />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Planmoni?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines intelligent planning with secure execution to give you complete control over your financial future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Create customized payment schedules that align with your income patterns and financial goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank-level security ensures your money is safe while automated systems handle your payments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch your savings grow with competitive returns while maintaining full access to your funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Planmoni Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="/assets/DepositYourMoney.png" 
                  alt="Deposit Your Money" 
                  className="w-64 h-64 mx-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deposit Your Money</h3>
              <p className="text-gray-600 leading-relaxed">
                Securely deposit your funds into your Planmoni account using bank transfer or card payment.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="/assets/SetYourPayoutPlan.png" 
                  alt="Set Your Payout Plan" 
                  className="w-64 h-64 mx-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Set Your Payout Plan</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose when and how much you want to receive. Create multiple plans for different goals.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src="/assets/StayDisciplined.png" 
                  alt="Stay Disciplined" 
                  className="w-64 h-64 mx-auto rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Disciplined</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive your money exactly when planned. Build healthy financial habits automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Join thousands of users who have already stabilized their cash flow with Planmoni. 
                  Download the app and start your financial journey today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <img 
                  src="/assets/appstore.png" 
                  alt="Download on App Store" 
                  className="h-14 cursor-pointer hover:scale-105 transition-transform duration-200"
                />
                <img 
                  src="/assets/googlepla.png" 
                  alt="Get it on Google Play" 
                  className="h-14 cursor-pointer hover:scale-105 transition-transform duration-200"
                />
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <QrCode className="w-8 h-8 text-blue-200" />
                <span className="text-blue-100">Scan QR code to download</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Download</h3>
                  <p className="text-gray-600">Scan the QR code with your phone</p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/assets/qr-code.png" 
                    alt="QR Code" 
                    className="w-48 h-48"
                  />
                </div>
                <div className="text-center mt-6">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Smartphone className="w-4 h-4" />
                    <span>Available on iOS and Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/AppLogo.png" 
                  alt="Planmoni" 
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-2xl font-bold">Planmoni</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Stabilize your cash flow and take control of your financial future with intelligent planning tools.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
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
    </div>
  );
}

export default App;