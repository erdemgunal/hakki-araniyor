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
                        Bu oyunu beğendin mi?
                        <HelpCircle className="w-4 h-4 ml-2 text-gray-400" />
                    </h3>
                    <RadioGroup value={vote} onValueChange={setVote} className="flex gap-6">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes" className="text-green-600 font-medium">Evet</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no" className="text-red-600 font-medium">Hayır</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Zorluk Derecesi</h3>
                    <RadioGroup value={difficultyVote} onValueChange={setDifficultyVote} 
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { value: 'easy', label: 'Kolay', color: 'text-green-600' },
                            { value: 'medium', label: 'Orta', color: 'text-yellow-600' },
                            { value: 'hard', label: 'Zor', color: 'text-red-600' },
                            { value: 'knew-answer', label: 'Cevabı Biliyordum', color: 'text-blue-600' }
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
                    <h3 className="text-lg font-semibold">Harcanan Süre</h3>
                    <div className="text-base font-medium text-primary">
                        {elapsedTime} dakika
                    </div>
                </div>

                <Button 
                    type="submit" 
                    disabled={!vote || !difficultyVote}
                    className="w-full sm:w-auto transition-all hover:scale-105"
                >
                    Geri Bildirim Gönder
                </Button>
            </form>
        </CardContent>
    </Card>
    );
};

export default VoteForm;