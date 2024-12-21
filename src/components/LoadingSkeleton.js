import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Card>
                <Skeleton className="h-48 sm:h-64 w-full" />
                <CardContent className="p-4 sm:p-6">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-48 w-full mb-4" />
                    <div className="flex gap-2 mb-4">
                        {[1, 2].map((i) => (
                            <Skeleton key={i} className="h-6 w-20" />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} className="h-6" />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default LoadingSkeleton;