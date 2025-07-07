export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

export const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
};

export const calculateTimeDifference = (startDate: Date, endDate: Date): string => {
    const difference = endDate.getTime() - startDate.getTime();
    const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
    
    return `${hours} hours and ${minutes} minutes`;
};

export const isDeadlineApproaching = (deadline: Date, threshold: number): boolean => {
    const now = new Date();
    const timeDifference = deadline.getTime() - now.getTime();
    return timeDifference <= threshold;
};