
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, Clock, Award } from "lucide-react";

interface QuizProps {
  onComplete: () => void;
}

const quizQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of the useEffect hook in React?",
    options: [
      "To manage component state",
      "To handle side effects in functional components", 
      "To create reusable components",
      "To optimize component rendering"
    ],
    correctAnswer: 1,
    explanation: "useEffect is used to handle side effects like API calls, subscriptions, and DOM manipulation in functional components."
  },
  {
    id: 2,
    question: "Which React Hook would you use to share state between multiple components?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    correctAnswer: 2,
    explanation: "useContext allows you to consume context values and share state across the component tree without prop drilling."
  },
  {
    id: 3,
    question: "What is the purpose of React.memo()?",
    options: [
      "To memoize expensive calculations",
      "To prevent unnecessary re-renders of components",
      "To cache API responses",
      "To optimize hook performance"
    ],
    correctAnswer: 1,
    explanation: "React.memo is a higher-order component that prevents re-renders when props haven't changed, optimizing performance."
  },
  {
    id: 4,
    question: "When should you use useCallback hook?",
    options: [
      "Always when creating functions in components",
      "When passing functions as props to child components",
      "Only with expensive calculations",
      "Never, it's deprecated"
    ],
    correctAnswer: 1,
    explanation: "useCallback is useful when passing functions as props to optimized child components to prevent unnecessary re-renders."
  },
  {
    id: 5,
    question: "What's the difference between useMemo and useCallback?",
    options: [
      "useMemo caches values, useCallback caches functions",
      "They are identical",
      "useMemo is for objects, useCallback is for arrays",
      "useMemo is deprecated, use useCallback instead"
    ],
    correctAnswer: 0,
    explanation: "useMemo memoizes the result of a calculation, while useCallback memoizes the function itself."
  }
];

export const Quiz = ({ onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizQuestions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResult) {
    const score = calculateScore();
    const passed = score >= 70;
    
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="text-center">
          <CardHeader>
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
              passed ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {passed ? (
                <Award className="w-8 h-8 text-green-600" />
              ) : (
                <XCircle className="w-8 h-8 text-red-600" />
              )}
            </div>
            <CardTitle className="text-2xl">
              {passed ? 'Congratulations! 🎉' : 'Keep Learning! 📚'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-2">{score}%</div>
            <p className="text-gray-600 mb-6">
              You answered {selectedAnswers.filter((answer, index) => answer === quizQuestions[index].correctAnswer).length} out of {quizQuestions.length} questions correctly
            </p>
            
            {passed && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">Achievement Unlocked!</h3>
                <p className="text-green-700">React Hooks Master Badge earned! 🏆</p>
              </div>
            )}
            
            <div className="space-y-3">
              <Button onClick={onComplete} className="w-full">
                Back to Course
              </Button>
              {!passed && (
                <Button variant="outline" className="w-full">
                  Retake Quiz
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Answer Review */}
        <Card>
          <CardHeader>
            <CardTitle>Review Your Answers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {quizQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 mt-1" />
                    )}
                    <div className="flex-1">
                      <h4 className="font-medium mb-2">{question.question}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Your answer: {question.options[userAnswer]}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-600 mb-2">
                          Correct answer: {question.options[question.correctAnswer]}
                        </p>
                      )}
                      <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{formatTime(timeLeft)}</span>
            </div>
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl leading-relaxed">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left border rounded-lg transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswers[currentQuestion] === index && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
