
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Star, BookOpen } from "lucide-react";

interface CourseListProps {
  onCourseSelect: (courseId: string) => void;
}

const courses = [
  {
    id: "1",
    title: "Advanced React Development",
    description: "Master React hooks, context, and performance optimization techniques",
    instructor: "Sarah Wilson",
    duration: "12 weeks",
    students: 2840,
    rating: 4.8,
    level: "Advanced",
    progress: 68,
    thumbnail: "🚀",
    category: "Web Development"
  },
  {
    id: "2",
    title: "Data Science Fundamentals", 
    description: "Learn Python, statistics, and machine learning basics",
    instructor: "Dr. Michael Chen",
    duration: "16 weeks",
    students: 5120,
    rating: 4.9,
    level: "Beginner",
    progress: 34,
    thumbnail: "📊",
    category: "Data Science"
  },
  {
    id: "3",
    title: "UX Design Principles",
    description: "Create user-centered designs with modern UX methodologies",
    instructor: "Emma Rodriguez",
    duration: "8 weeks", 
    students: 1960,
    rating: 4.7,
    level: "Intermediate",
    progress: 89,
    thumbnail: "🎨",
    category: "Design"
  },
  {
    id: "4",
    title: "Mobile App Development",
    description: "Build native mobile apps with React Native and Flutter",
    instructor: "Alex Kumar",
    duration: "14 weeks",
    students: 3240,
    rating: 4.6,
    level: "Intermediate",
    progress: 0,
    thumbnail: "📱",
    category: "Mobile Development"
  },
  {
    id: "5",
    title: "Cloud Computing Essentials",
    description: "AWS, Azure, and Google Cloud fundamentals",
    instructor: "Jennifer Park",
    duration: "10 weeks",
    students: 4180,
    rating: 4.8,
    level: "Beginner",
    progress: 0,
    thumbnail: "☁️",
    category: "Cloud Computing"
  },
  {
    id: "6",
    title: "Cybersecurity Fundamentals",
    description: "Learn to protect systems and data from cyber threats",
    instructor: "Robert Johnson",
    duration: "12 weeks",
    students: 2760,
    rating: 4.7,
    level: "Beginner",
    progress: 0,
    thumbnail: "🔒",
    category: "Security"
  }
];

const levelColors = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800", 
  Advanced: "bg-red-100 text-red-800"
};

export const CourseList = ({ onCourseSelect }: CourseListProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">All Courses</h2>
          <p className="text-gray-600 mt-1">Discover new skills and advance your career</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort by</Button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="text-4xl mb-2">{course.thumbnail}</div>
                <Badge className={levelColors[course.level as keyof typeof levelColors]}>
                  {course.level}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
              <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{course.instructor}</span>
                <span className="text-blue-600 font-medium">{course.category}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-600">{course.rating}</span>
                </div>
              </div>

              {course.progress > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm text-gray-600">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}

              <Button 
                onClick={() => onCourseSelect(course.id)}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                {course.progress > 0 ? 'Continue Learning' : 'Start Learning'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
