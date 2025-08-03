import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  DollarSign, 
  Copy, 
  Check, 
  Gift, 
  Star, 
  Award, 
  Target,
  TrendingUp,
  Users
} from 'lucide-react';

const DashboardPage = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchInternData();
  }, []);

  const fetchInternData = async () => {
    try {
      const response = await fetch('/api/intern');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setInternData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyReferralCode = async () => {
    if (internData?.referralCode) {
      try {
        await navigator.clipboard.writeText(internData.referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const rewards = [
    {
      id: 1,
      title: "Early Access Badge",
      description: "Unlock exclusive features",
      icon: Star,
      unlocked: true,
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 2,
      title: "Mentor Session",
      description: "1-on-1 with industry expert",
      icon: Users,
      unlocked: true,
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 3,
      title: "Premium Course",
      description: "Advanced skill development",
      icon: Award,
      unlocked: false,
      color: "bg-gray-100 text-gray-800"
    },
    {
      id: 4,
      title: "Conference Pass",
      description: "Attend tech conference",
      icon: Gift,
      unlocked: false,
      color: "bg-gray-100 text-gray-800"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={fetchInternData}
            className="btn-primary"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {internData?.name}!
          </h1>
          <p className="text-gray-600">
            Track your progress and unlock amazing rewards
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Intern Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Intern Name
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {internData?.name}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Referral Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Copy className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Referral Code
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-lg font-semibold text-gray-900">
                    {internData?.referralCode}
                  </p>
                  <button
                    onClick={copyReferralCode}
                    className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Donations Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-500 truncate">
                  Total Donations
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  ₹{internData?.donations?.toLocaleString()}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Progress Overview</h2>
            <TrendingUp className="w-5 h-5 text-primary-600" />
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Monthly Goal</span>
                <span className="text-gray-900 font-medium">₹15,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((internData?.donations / 15000) * 100, 100)}%` }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="bg-primary-600 h-2 rounded-full"
                ></motion.div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((internData?.donations / 15000) * 100)}% completed
              </p>
            </div>
          </div>
        </motion.div>

        {/* Rewards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Rewards & Unlockables</h2>
            <Target className="w-5 h-5 text-primary-600" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rewards.map((reward, index) => {
              const Icon = reward.icon;
              return (
                <motion.div
                  key={reward.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`p-4 rounded-lg border ${
                    reward.unlocked 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${reward.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium text-sm ${
                        reward.unlocked ? 'text-green-800' : 'text-gray-600'
                      }`}>
                        {reward.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {reward.description}
                      </p>
                    </div>
                    {reward.unlocked && (
                      <div className="text-green-600">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardPage; 