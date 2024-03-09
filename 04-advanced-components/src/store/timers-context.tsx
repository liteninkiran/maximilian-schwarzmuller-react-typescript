import { type ReactNode, createContext, useContext, useReducer } from 'react';

export type Timer = {
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

type AddTimersAction = {
    type: 'ADD_TIMER';
    payload: Timer;
}

type StartTimersAction = {
    type: 'START_TIMERS';
}

type StopTimersAction = {
    type: 'STOP_TIMERS';
}

type Action = AddTimersAction | StartTimersAction | StopTimersAction

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    duration: action.payload.duration,
                    name: action.payload.name,
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
    return state;
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, intialState);
    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({
                type: 'ADD_TIMER',
                payload: timerData,
            });
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
