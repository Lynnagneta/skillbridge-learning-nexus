
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, ThumbsUp, Reply, Search, Plus, Pin, TrendingUp } from "lucide-react";

export const Discussions = () => {
  const discussions = [
    {
      id: 1,
      title: "Best practices for React state management",
      author: "Sarah Chen",
      replies: 24,
      likes: 12,
      category: "React",
      timeAgo: "2 hours ago",
      isPinned: true,
      lastActivity: "5 min ago",
      avatar: "SC"
    },
    {
      id: 2,
      title: "How to optimize React app performance?",
      author: "Mike Johnson", 
      replies: 18,
      likes: 8,
      category: "Performance",
      timeAgo: "4 hours ago",
      isPinned: false,
      lastActivity: "1 hour ago",
      avatar: "MJ"
    },
    {
      id: 3,
      title: "Data visualization libraries comparison",
      author: "Emma Rodriguez",
      replies: 31,
      likes: 19,
      category: "Data Science",
      timeAgo: "1 day ago",
      isPinned: false,
      lastActivity: "3 hours ago",
      avatar: "ER"
    },
    {
      id: 4,
      title: "UX research methods for beginners",
      author: "Alex Kumar",
      replies: 15,
      likes: 22,
      category: "UX Design",
      timeAgo: "2 days ago",
      isPinned: false,
      lastActivity: "6 hours ago",
      avatar: "AK"
    },
    {
      id: 5,
      title: "Setting up development environment",
      author: "Lisa Park",
      replies: 9,
      likes: 5,
      category: "Getting Started",
      timeAgo: "3 days ago",
      isPinned: false,
      lastActivity: "1 day ago",
      avatar: "LP"
    }
  ];

  const categories = ["All", "React", "Data Science", "UX Design", "Performance", "Getting Started"];

  const categoryColors = {
    "React": "bg-blue-100 text-blue-800",
    "Data Science": "bg-green-100 text-green-800",
    "UX Design": "bg-purple-100 text-purple-800",
    "Performance": "bg-orange-100 text-orange-800",
    "Getting Started": "bg-gray-100 text-gray-800"
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Community Discussions</h2>
          <p className="text-gray-600 mt-1">Connect, share knowledge, and learn together</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Discussion
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search discussions..." className="pl-10" />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-2xl font-bold">127</span>
            </div>
            <p className="text-sm text-gray-600">Active Discussions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-2xl font-bold">1.2k</span>
            </div>
            <p className="text-sm text-gray-600">Total Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <ThumbsUp className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-2xl font-bold">3.4k</span>
            </div>
            <p className="text-sm text-gray-600">Helpful Answers</p>
          </CardContent>
        </Card>
      </div>

      {/* Discussion List */}
      <div className="space-y-4">
        {discussions.map((discussion) => (
          <Card key={discussion.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {discussion.isPinned && (
                      <Pin className="w-4 h-4 text-blue-600" />
                    )}
                    <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                      {discussion.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                        {discussion.avatar}
                      </div>
                      <span>{discussion.author}</span>
                    </div>
                    <span>•</span>
                    <span>{discussion.timeAgo}</span>
                    <span>•</span>
                    <span>Last activity {discussion.lastActivity}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Badge className={categoryColors[discussion.category as keyof typeof categoryColors]}>
                      {discussion.category}
                    </Badge>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Reply className="w-4 h-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  Join Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Discussion Form */}
      <Card>
        <CardHeader>
          <CardTitle>Start a New Discussion</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Discussion title..." />
          <Textarea placeholder="What would you like to discuss?" rows={4} />
          <div className="flex items-center justify-between">
            <select className="px-3 py-2 border rounded-md">
              <option>Select Category</option>
              <option>React</option>
              <option>Data Science</option>
              <option>UX Design</option>
              <option>Performance</option>
              <option>Getting Started</option>
            </select>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Post Discussion
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
