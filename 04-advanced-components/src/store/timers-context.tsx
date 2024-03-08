import { type ReactNode, createContext, useContext, useReducer } from 'react';

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

const intialState: TimersState = {
    isRunning: true,
    timers: [],
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext);
    if (timersCtx === null) {
        throw new Error('TimersContext is null - that should not be the case!');
    }
    return timersCtx;
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {

    useReducer(reducer, intialState);
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: true,
        addTimer(timerData) { },
        startTimers() { },
        stopTimers() { },
    };
    return (
        <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
    );
}
