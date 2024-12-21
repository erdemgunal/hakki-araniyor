// evet-hayir-oyunu/src/app/components/VoteForm.js
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { HelpCircle } from 'lucide-react';

const VoteForm = ({ handleVoteSubmit, vote, setVote, difficultyVote, setDifficultyVote, elapsedTime }) => {
    return (
        <Card className="mt-8 mb-8 border-2 border-primary/10">
        <CardContent className="p-6">
            <form onSubmit={handleVoteSubmit} className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                        Did you like this game?
                        <HelpCircle className="w-4 h-4 ml-2 text-gray-400" />
                    </h3>
                    <RadioGroup value={vote} onValueChange={setVote} className="flex gap-6">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes" className="text-green-600 font-medium">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no" className="text-red-600 font-medium">No</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Difficulty Rating</h3>
                    <RadioGroup value={difficultyVote} onValueChange={setDifficultyVote} 
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { value: 'easy', label: 'Easy', color: 'text-green-600' },
                            { value: 'medium', label: 'Medium', color: 'text-yellow-600' },
                            { value: 'hard', label: 'Hard', color: 'text-red-600' },
                            { value: 'knew-answer', label: 'Knew Answer', color: 'text-blue-600' }
                        ].map(({ value, label, color }) => (
                            <div key={value} className="flex items-center space-x-2">
                                <RadioGroupItem value={value} id={value} />
                                <Label htmlFor={value} className={`${color} font-medium`}>
                                    {label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Time Spent</h3>
                    <div className="text-base font-medium text-primary">
                        {elapsedTime} {elapsedTime === 1 ? 'minute' : 'minutes'}
                    </div>
                </div>

                <Button 
                    type="submit" 
                    disabled={!vote || !difficultyVote}
                    className="w-full sm:w-auto transition-all hover:scale-105"
                >
                    Submit Feedback
                </Button>
            </form>
        </CardContent>
    </Card>
    );
};

export default VoteForm;