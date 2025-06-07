import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Shield, 
  Clock, 
  CreditCard, 
  Ban, 
  AlertCircle, 
  Settings,
  GraduationCap,
  Users,
  Briefcase,
  Target,
  Zap,
  Lock,
  CheckCircle,
  Star,
  Twitter,
  Instagram,
  Facebook,
  Download,
  Smartphone,
  ArrowRight,
  Eye,
  DollarSign,
  Calendar,
  Wallet,
  Upload,
  PiggyBank,
  TrendingUp,
  Building,
  Award,
  Globe,
  Apple,
  Play,
  Calculator,
  Info,
  ChevronLeft,
  ChevronRight,
  Percent,
  TrendingDown,
  Monitor,
  ArrowDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newCalculatorAmount, setNewCalculatorAmount] = useState('');
  const [newCalculatorDuration, setNewCalculatorDuration] = useState('12');
  const [newCalculatorFrequency, setNewCalculatorFrequency] = useState('monthly');
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'web'>('web');

  // Device detection
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    
    if (isIOS) {
      setDeviceType('ios');
    } else if (isAndroid) {
      setDeviceType('android');
    } else {
      setDeviceType('web');
    }
  }, []);

  const features = [
    {
      icon: <Lock className="w-8 h-8 text-[#1F3A8A]" />,
      title: "Vault Locking",
      description: "Securely lock away large sums of money until your scheduled release date."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#1F3A8A]" />,
      title: "Automated Payouts",
      description: "Set up your personal salary schedule and receive money automatically."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#1F3A8A]" />,
      title: "Multiple Payment Methods",
      description: "Support for various payment options to make deposits and receive payouts."
    },
    {
      icon: <Ban className="w-8 h-8 text-[#1F3A8A]" />,
      title: "No Direct Spending",
      description: "Locked funds can't be spent impulsively, ensuring your financial goals."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-[#1F3A8A]" />,
      title: "Emergency Release",
      description: "Access your funds in genuine emergencies with verification process."
    },
    {
      icon: <Settings className="w-8 h-8 text-[#1F3A8A]" />,
      title: "Full Control",
      description: "You maintain complete control over your money and payout schedules."
    }
  ];

  const useCases = [
    {
      icon: <GraduationCap className="w-12 h-12 text-[#1F3A8A]" />,
      title: "Tuition & Rent Savings",
      description: "For students managing school fees and rent payments with scheduled releases."
    },
    {
      icon: <Users className="w-12 h-12 text-[#1F3A8A]" />,
      title: "Family Budgeting",
      description: "Help parents schedule and protect family funds for important expenses."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-[#1F3A8A]" />,
      title: "Freelancer Income Management",
      description: "Handle irregular payments with ease and create stable income streams."
    },
    {
      icon: <Target className="w-12 h-12 text-[#1F3A8A]" />,
      title: "Project-Based Saving",
      description: "Save and release money for specific goals like travel, business, or purchases."
    },
    {
      icon: <Zap className="w-12 h-12 text-[#1F3A8A]" />,
      title: "Impulse Control",
      description: "Prevent impulsive buying by making funds temporarily inaccessible."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "University Student",
      content: "I finally stopped spending rent money by mistake. Planmoni saved my semester!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mike R.",
      role: "Freelance Designer",
      content: "It's like paying myself every month. Perfect for managing irregular income!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Lisa K.",
      role: "Small Business Owner",
      content: "Finally have control over our family budget. No more overspending stress!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const perfectForCategories = [
    {
      icon: <GraduationCap className="w-12 h-12 text-[#1F3A8A]" />,
      title: "Students",
      description: "Save money for tuition payments"
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Parents",
      description: "Manage family expenses"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-purple-600" />,
      title: "Freelancers",
      description: "Regular income from irregulars"
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-orange-600" />,
      title: "Savers",
      description: "Save for future & expenses"
    }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Bank-Level Encryption",
      description: "256-bit SSL encryption"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#1F3A8A]" />,
      title: "KYC & 2FA",
      description: "Identity verification & two-factor auth"
    },
    {
      icon: <Building className="w-12 h-12 text-purple-600" />,
      title: "Trusted Gateways",
      description: "Secure payment processing"
    },
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      title: "Compliance",
      description: "Fully regulated & compliant"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Calculator functions
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount).replace('NGN', '₦');
  };

  const formatNumber = (num: string) => {
    const cleanNum = num.replace(/[^0-9]/g, '');
    return cleanNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleNewAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setNewCalculatorAmount(value);
  };

  const calculateNewPayouts = () => {
    const amount = parseFloat(newCalculatorAmount || '0');
    const duration = parseInt(newCalculatorDuration);
    
    if (isNaN(amount) || amount === 0 || duration === 0) {
      return {
        monthly: 0,
        biweekly: 0,
        weekly: 0,
        totalAmount: amount,
        totalPayouts: 0
      };
    }

    const monthly = amount / duration;
    const biweekly = amount / (duration * 2);
    const weekly = amount / (duration * 4.33);
    
    return {
      monthly,
      biweekly,
      weekly,
      totalAmount: amount,
      totalPayouts: duration
    };
  };

  const newPayouts = calculateNewPayouts();

  const frequencyOptions = [
    { id: 'monthly', label: 'Monthly', icon: <Calendar className="w-5 h-5" />, payouts: newPayouts.totalPayouts },
    { id: 'biweekly', label: 'Bi-weekly', icon: <Clock className="w-5 h-5" />, payouts: newPayouts.totalPayouts * 2 },
    { id: 'weekly', label: 'Weekly', icon: <Zap className="w-5 h-5" />, payouts: Math.round(newPayouts.totalPayouts * 4.33) }
  ];

  const getCurrentPayout = () => {
    switch (newCalculatorFrequency) {
      case 'monthly': return newPayouts.monthly;
      case 'biweekly': return newPayouts.biweekly;
      case 'weekly': return newPayouts.weekly;
      default: return newPayouts.monthly;
    }
  };

  const getCurrentPayoutCount = () => {
    const option = frequencyOptions.find(opt => opt.id === newCalculatorFrequency);
    return option ? option.payouts : newPayouts.totalPayouts;
  };

  // Dynamic download button component
  const DownloadButton = ({ className = "" }: { className?: string }) => {
    if (deviceType === 'ios') {
      return (
        <button className={`transition-transform hover:scale-105 ${className}`}>
          <img 
            src="/assets/appstore.png" 
            alt="Download on the App Store" 
            className="h-12 w-auto"
          />
        </button>
      );
    } else if (deviceType === 'android') {
      return (
        <button className={`transition-transform hover:scale-105 ${className}`}>
          <img 
            src="/assets/googlepla.png" 
            alt="Get it on Google Play" 
            className="h-12 w-auto"
          />
        </button>
      );
    } else {
      return (
        <div className={`flex flex-col items-center space-y-3 ${className}`}>
          <div className="bg-white p-4 rounded-xl">
            <img 
              src="/assets/qr-code.png" 
              alt="Scan QR code to download" 
              className="w-24 h-24"
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-900">Scan to download</p>
            <p className="text-xs text-gray-600">Available on iOS & Android</p>
          </div>
        </div>
      );
    }
  };

  // Optimized device mockup component with larger mobile images
  const DeviceMockup = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const getDeviceImage = () => {
      switch (deviceType) {
        case 'ios':
          return '/ios.png';
        case 'android':
          return '/Android.png';
        default:
          return '/Web.png';
      }
    };

    const getDeviceAlt = () => {
      switch (deviceType) {
        case 'ios':
          return 'Planmoni iOS App Interface';
        case 'android':
          return 'Planmoni Android App Interface';
        default:
          return 'Planmoni Web App Interface';
      }
    };

    const getImageClasses = () => {
      switch (deviceType) {
        case 'ios':
          // Doubled size for iOS - removed drop-shadow
          return 'w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto';
        case 'android':
          // Doubled size for Android - removed drop-shadow
          return 'w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto';
        default:
          // Keep web size smaller - removed drop-shadow
          return 'w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] h-auto';
      }
    };

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    return (
      <div className="relative flex justify-center items-center">
        {/* Background decorative elements - adjusted for larger mobile images */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-[#1F3A8A]/10 to-[#1F3A8A]/20 rounded-full opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-tr from-orange-100 to-pink-100 rounded-full opacity-30 -z-10"></div>
        
        {/* Device mockup with loading optimization */}
        <div className="relative">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className={`${getImageClasses()} bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl animate-pulse flex items-center justify-center`}>
              <Monitor className="w-16 h-16 text-gray-400" />
            </div>
          )}
          
          {/* Optimized image with lazy loading - no shadows */}
          <img 
            src={getDeviceImage()}
            alt={getDeviceAlt()}
            className={`${getImageClasses()} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onLoad={handleImageLoad}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/Planmoni.png" 
                  alt="Planmoni" 
                  className="h-8"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-600 hover:text-[#1F3A8A] transition-colors px-3 py-2 text-sm font-medium"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('calculator')}
                  className="text-gray-600 hover:text-[#1F3A8A] transition-colors px-3 py-2 text-sm font-medium"
                >
                  Calculator
                </button>
                <button 
                  onClick={() => scrollToSection('use-cases')}
                  className="text-gray-600 hover:text-[#1F3A8A] transition-colors px-3 py-2 text-sm font-medium"
                >
                  Use Cases
                </button>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-600 hover:text-[#1F3A8A] transition-colors px-3 py-2 text-sm font-medium"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection('security')}
                  className="text-gray-600 hover:text-[#1F3A8A] transition-colors px-3 py-2 text-sm font-medium"
                >
                  Security
                </button>
              </div>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-[#1F3A8A] hover:bg-[#1e3a8a]/90 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
                Get App
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#1F3A8A] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-[#1F3A8A] block px-3 py-2 text-base font-medium w-full text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('calculator')}
                className="text-gray-600 hover:text-[#1F3A8A] block px-3 py-2 text-base font-medium w-full text-left"
              >
                Calculator
              </button>
              <button 
                onClick={() => scrollToSection('use-cases')}
                className="text-gray-600 hover:text-[#1F3A8A] block px-3 py-2 text-base font-medium w-full text-left"
              >
                Use Cases
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-gray-600 hover:text-[#1F3A8A] block px-3 py-2 text-base font-medium w-full text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-gray-600 hover:text-[#1F3A8A] block px-3 py-2 text-base font-medium w-full text-left"
              >
                Security
              </button>
              <div className="border-t pt-4 mt-4">
                <button className="bg-[#1F3A8A] hover:bg-[#1e3a8a]/90 text-white px-6 py-2 rounded-md text-base font-medium transition-colors w-full">
                  Get App
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-md border border-[#1F3A8A]/20 text-[#1F3A8A] text-xs sm:text-sm font-medium bg-[#1F3A8A]/5">
                <span className="hidden sm:inline">🎉 PLANMONI APP V.3.2 IS LIVE</span>
                <span className="sm:hidden">🎉 PLANMONI APP V.3.2 IS LIVE</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Avoid unnecessary spending;
                  <br />
                  <span className="text-[#1F3A8A]">Plan your money</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Deposit your money, lock it safely, and receive automated payouts while staying in control.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <DownloadButton />
              </div>
            </div>

            {/* Optimized Device Mockup */}
            <div className="flex-1 relative justify-center order-1 lg:order-2 w-full max-w-lg lg:max-w-none">
              <DeviceMockup />
            </div>
          </div>
        </div>
      </section>

      {/* How Planmoni Works - Beautiful App Interface Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-[#1F3A8A]/5 to-[#1F3A8A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1F3A8A]/10 text-[#1F3A8A] text-sm font-semibold">
              <Smartphone className="w-4 h-4 mr-2" />
              See How It Works
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Three Simple Steps to
              <br />
              <span className="text-[#1F3A8A]">Financial Freedom</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the power of disciplined spending with our intuitive app interface
            </p>
          </div>

          {/* Steps with App Screenshots */}
          <div className="space-y-32">
            
            {/* Step 1 - Deposit Your Money */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#1F3A8A]/10 to-[#1F3A8A]/20 text-[#1F3A8A] text-sm font-bold">
                    <span className="w-6 h-6 bg-[#1F3A8A] text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">1</span>
                    STEP ONE
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Deposit Your Money
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Securely add funds to your Planmoni vault using multiple payment methods. Your money is instantly protected from impulsive spending.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Bank-Level Security</p>
                      <p className="text-xs text-gray-600">256-bit encryption</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-[#1F3A8A]/10 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-[#1F3A8A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Multiple Methods</p>
                      <p className="text-xs text-gray-600">Cards, banks, USSD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#1F3A8A]/20 to-[#1F3A8A]/30 rounded-3xl opacity-20 blur-xl"></div>
                  <img 
                    src="/assets/DepositYourMoney.png" 
                    alt="Deposit Money Interface" 
                    className="relative w-full max-w-sm h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 - Set Your Payout Plan */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 flex justify-center order-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl opacity-20 blur-xl"></div>
                  <img 
                    src="/assets/SetYourPayoutPlan.png" 
                    alt="Set Payout Plan Interface" 
                    className="relative w-full max-w-sm h-auto rounded-3xl"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-8 text-center lg:text-left order-2">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 text-sm font-bold">
                    <span className="w-6 h-6 bg-purple-800 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">2</span>
                    STEP TWO
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Set Your Payout Plan
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Choose your payout frequency and amounts. Create a personalized salary schedule that fits your lifestyle and financial goals perfectly.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Flexible Schedule</p>
                      <p className="text-xs text-gray-600">Weekly to monthly</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Full Control</p>
                      <p className="text-xs text-gray-600">Modify anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Stay Disciplined */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-sm font-bold">
                    <span className="w-6 h-6 bg-green-800 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">3</span>
                    STEP THREE
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Stay Disciplined
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Receive automated payouts on schedule. Your money is released only when planned, ensuring complete financial discipline and peace of mind.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Auto Payouts</p>
                      <p className="text-xs text-gray-600">On your schedule</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Emergency Access</p>
                      <p className="text-xs text-gray-600">When you need it</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex justify-center order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-emerald-200 rounded-3xl opacity-20 blur-xl"></div>
                  <img 
                    src="/assets/StayDisciplined.png" 
                    alt="Stay Disciplined Interface" 
                    className="relative w-full max-w-sm h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-32">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Ready to Transform Your Financial Habits?
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands who've mastered their spending with Planmoni's proven three-step system
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-[#1F3A8A] to-[#1e3a8a] hover:from-[#1e3a8a] hover:to-[#1F3A8A] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download Planmoni</span>
                </button>
                <button className="text-[#1F3A8A] hover:text-[#1e3a8a] font-semibold text-lg flex items-center space-x-2 transition-colors">
                  <span>Watch Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Core Features</h2>
            <p className="text-xl text-gray-600">Everything you need to control your spending</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#1F3A8A]/5 rounded-md flex items-center justify-center group-hover:bg-[#1F3A8A]/10 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payout Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1F3A8A]/5 text-[#1F3A8A] text-sm font-medium mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              Financial Planning Tool
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Calculate Your Payouts</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See exactly how much you'll receive and when. Plan your financial discipline with precision.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#1F3A8A]/5 via-white to-[#1F3A8A]/10 rounded-3xl p-8 lg:p-12 border border-[#1F3A8A]/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Input Section */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Total Amount to Lock
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-400">₦</span>
                        <input
                          type="text"
                          value={formatNumber(newCalculatorAmount)}
                          onChange={handleNewAmountChange}
                          placeholder="10,000,000"
                          className="w-full pl-12 pr-4 py-4 text-2xl font-bold text-gray-900 bg-white rounded-xl border-2 border-gray-200 focus:border-[#1F3A8A] focus:ring-0 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Lock Duration (Months)
                      </label>
                      <select
                        value={newCalculatorDuration}
                        onChange={(e) => setNewCalculatorDuration(e.target.value)}
                        className="w-full px-4 py-4 text-lg font-medium text-gray-900 bg-white rounded-xl border-2 border-gray-200 focus:border-[#1F3A8A] focus:ring-0 focus:outline-none transition-colors"
                      >
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="18">18 months</option>
                        <option value="24">24 months</option>
                        <option value="36">36 months</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Payout Frequency
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {frequencyOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setNewCalculatorFrequency(option.id)}
                            className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                              newCalculatorFrequency === option.id
                                ? 'border-[#1F3A8A] bg-[#1F3A8A]/5 text-[#1F3A8A]'
                                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`${newCalculatorFrequency === option.id ? 'text-[#1F3A8A]' : 'text-gray-400'}`}>
                                {option.icon}
                              </div>
                              <span className="font-medium">{option.label}</span>
                            </div>
                            <span className="text-sm font-medium opacity-75">
                              {option.payouts} payments
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  {/* Main Payout Display */}
                  <div className="bg-gradient-to-br from-[#1F3A8A] to-[#1e3a8a] rounded-2xl p-8 text-white">
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center space-x-2 text-[#1F3A8A]/20">
                        <Wallet className="w-5 h-5" />
                        <span className="text-sm font-medium uppercase tracking-wide">
                          You'll receive {newCalculatorFrequency}
                        </span>
                      </div>
                      <div className="text-4xl lg:text-5xl font-bold">
                        {formatCurrency(getCurrentPayout())}
                      </div>
                      <div className="text-[#1F3A8A]/20 text-sm">
                        For {getCurrentPayoutCount()} payments over {newCalculatorDuration} months
                      </div>
                    </div>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <PiggyBank className="w-4 h-4" />
                      <span className="text-sm font-medium">Total Locked</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(newPayouts.totalAmount)}
                    </div>
                  </div>

                  {/* All Frequency Options */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                      <Info className="w-4 h-4 mr-2" />
                      All Payout Options
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Monthly</span>
                        <span className="font-semibold text-gray-900">{formatCurrency(newPayouts.monthly)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Bi-weekly</span>
                        <span className="font-semibold text-gray-900">{formatCurrency(newPayouts.biweekly)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Weekly</span>
                        <span className="font-semibold text-gray-900">{formatCurrency(newPayouts.weekly)}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-[#1F3A8A] to-[#1e3a8a] hover:from-[#1e3a8a] hover:to-[#1F3A8A] text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all transform hover:scale-105">
                    Start Your Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Optimized Device Mockup */}
            <div className="flex-1 relative flex justify-center order-2 lg:order-1 w-full max-w-sm lg:max-w-none">
              <DeviceMockup />
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-2">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Ready to start planning your money today?
                  <br />
                  <span className="text-[#1F3A8A]">Get the Planmoni app now</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Download the Planmoni app and take control of your finances with our powerful money planning tools.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Use Cases</h2>
            <p className="text-xl text-gray-600">Built for real life money needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1F3A8A]/5 to-[#1F3A8A]/10 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-[#1F3A8A]/10 hover:to-[#1F3A8A]/20 transition-all group">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Users Say */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real stories from people taking control</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Perfect For</h2>
            <p className="text-xl text-gray-600">See how Planmoni fits your lifestyle</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {perfectForCategories.map((category, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank-Level Security */}
      <section id="security" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Bank-Level Security</h2>
            <p className="text-xl text-gray-600">Your money is protected by industry-leading security</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl hover:bg-gray-50 transition-colors text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1F3A8A] to-[#1e3a8a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Take Control of Your Money Today</h2>
              <p className="text-xl text-[#1F3A8A]/20">Join thousands who've mastered their spending with Planmoni</p>
            </div>
            
            <div className="flex justify-center">
              <DownloadButton />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/PlanmoniDarkMode.png" 
                  alt="Planmoni" 
                  className="h-8"
                />
              </div>
              <p className="text-gray-400">
                Put your money on a salary and take control of your spending.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-[#1F3A8A] cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-gray-400 hover:text-[#1F3A8A] cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
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