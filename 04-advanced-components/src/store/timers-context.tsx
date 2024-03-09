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

type Action = {
    type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS';
}

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    duration: 1,
                    name: '',
                }
            ],
        }
    }
    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true,
        }
    }
    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false,
        }
    }
}


export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, intialState);
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: true,
        addTimer(timerData) {
            dispatch({ type: 'ADD_TIMER' });
        },
        startTimers() {
            dispatch({ type: 'START_TIMERS' });
        },
        stopTimers() {
            dispatch({ type: 'STOP_TIMERS' });
        },
    };
    return (
        <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
    );
}
