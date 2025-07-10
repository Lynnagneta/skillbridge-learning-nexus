
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Target, Award, Clock, Users, BookOpen, Zap } from "lucide-react";

export const Achievements = () => {
  const earnedBadges = [
    {
      id: 1,
      title: "React Master",
      description: "Completed Advanced React Development course with 90%+ score",
      icon: "🚀",
      category: "Course Completion",
      earnedDate: "Dec 15, 2024",
      rarity: "Epic",
      points: 500
    },
    {
      id: 2,
      title: "Data Scientist",
      description: "Finished Data Science Fundamentals and passed all assessments",
      icon: "📊",
      category: "Course Completion", 
      earnedDate: "Nov 28, 2024",
      rarity: "Rare",
      points: 300
    },
    {
      id: 3,
      title: "Design Guru",
      description: "Mastered UX Design Principles with perfect quiz scores",
      icon: "🎨",
      category: "Course Completion",
      earnedDate: "Nov 10, 2024",
      rarity: "Rare",
      points: 300
    },
    {
      id: 4,
      title: "Code Reviewer",
      description: "Helped 10 fellow students with code reviews and feedback",
      icon: "👥",
      category: "Community",
      earnedDate: "Dec 20, 2024",
      rarity: "Common",
      points: 150
    },
    {
      id: 5,
      title: "Early Bird",
      description: "Completed 5 lessons before 9 AM",
      icon: "🌅",
      category: "Study Habits",
      earnedDate: "Dec 18, 2024",
      rarity: "Common",
      points: 100
    },
    {
      id: 6,
      title: "Streak Master",
      description: "Maintained a 30-day learning streak",
      icon: "🔥",
      category: "Consistency",
      earnedDate: "Dec 22, 2024",
      rarity: "Legendary",
      points: 750
    }
  ];

  const inProgressBadges = [
    {
      id: 7,
      title: "Speed Learner",
      description: "Complete a course in under 2 weeks",
      icon: "⚡",
      category: "Course Completion",
      progress: 70,
      requirement: "Complete current course in 4 more days",
      points: 400
    },
    {
      id: 8,
      title: "Perfectionist",
      description: "Score 100% on 5 consecutive quizzes",
      icon: "💯",
      category: "Assessment",
      progress: 60,
      requirement: "3 more perfect quiz scores needed",
      points: 350
    },
    {
      id: 9,
      title: "Knowledge Sharer",
      description: "Answer 25 questions in community discussions",
      icon: "🤝",
      category: "Community",
      progress: 40,
      requirement: "15 more helpful answers needed",
      points: 250
    }
  ];

  const rarityColors = {
    "Common": "bg-gray-100 text-gray-800 border-gray-300",
    "Rare": "bg-blue-100 text-blue-800 border-blue-300",
    "Epic": "bg-purple-100 text-purple-800 border-purple-300",
    "Legendary": "bg-yellow-100 text-yellow-800 border-yellow-300"
  };

  const categoryIcons = {
    "Course Completion": BookOpen,
    "Community": Users,
    "Study Habits": Clock,
    "Consistency": Target,
    "Assessment": Award
  };

  const totalPoints = earnedBadges.reduce((sum, badge) => sum + badge.points, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Achievements</h1>
            <p className="text-yellow-100">Celebrate your learning milestones and unlock new challenges!</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2">
              <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold">{totalPoints}</div>
            <div className="text-sm text-yellow-100">Total Points</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{earnedBadges.length}</div>
            <p className="text-sm text-gray-600">Badges Earned</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">Level 5</div>
            <p className="text-sm text-gray-600">Current Level</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{inProgressBadges.length}</div>
            <p className="text-sm text-gray-600">In Progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Zap className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">78%</div>
            <p className="text-sm text-gray-600">Completion Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Level Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-600" />
            Level Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-semibold">Level 5</span>
                <span className="text-gray-500 ml-2">Learning Enthusiast</span>
              </div>
              <div>
                <span className="text-sm text-gray-500">2,150 / 2,500 XP</span>
              </div>
            </div>
            <Progress value={86} className="h-3" />
            <p className="text-sm text-gray-600">350 XP until Level 6: Knowledge Expert</p>
          </div>
        </CardContent>
      </Card>

      {/* Earned Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-600" />
            Earned Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedBadges.map((badge) => {
              const CategoryIcon = categoryIcons[badge.category as keyof typeof categoryIcons];
              return (
                <div
                  key={badge.id}
                  className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{badge.icon}</div>
                    <Badge className={rarityColors[badge.rarity as keyof typeof rarityColors]}>
                      {badge.rarity}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{badge.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <CategoryIcon className="w-3 h-3" />
                      <span>{badge.category}</span>
                    </div>
                    <div className="font-medium text-yellow-600">+{badge.points} XP</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Earned {badge.earnedDate}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* In Progress Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            In Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inProgressBadges.map((badge) => {
              const CategoryIcon = categoryIcons[badge.category as keyof typeof categoryIcons];
              return (
                <div
                  key={badge.id}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl opacity-60">{badge.icon}</div>
                    <div className="text-sm font-medium text-blue-600">
                      {badge.progress}%
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{badge.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                  <div className="mb-3">
                    <Progress value={badge.progress} className="h-2" />
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{badge.requirement}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <CategoryIcon className="w-3 h-3" />
                      <span>{badge.category}</span>
                    </div>
                    <div className="font-medium text-gray-600">+{badge.points} XP</div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievement Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Achievement Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(categoryIcons).map(([category, Icon]) => {
              const earnedCount = earnedBadges.filter(badge => badge.category === category).length;
              const totalCount = [...earnedBadges, ...inProgressBadges].filter(badge => badge.category === category).length + 2; // +2 for locked badges
              
              return (
                <div key={category} className="text-center p-4 bg-gray-50 rounded-lg">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <h4 className="font-medium text-sm">{category}</h4>
                  <p className="text-xs text-gray-500">{earnedCount}/{totalCount}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
