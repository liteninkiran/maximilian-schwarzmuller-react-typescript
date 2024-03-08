import { type ReactNode, createContext, useContext } from 'react';

type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

type TimersContextProviderProps = {
    children: ReactNode;
};
  
const TimersContext = createContext<TimersContextValue | null>(null);

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: true,
        addTimer(timerData) {},
        startTimers() {},
        stopTimers() {},
    };
    return (
        <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
    );
}
