const secondesPerQustion = 30;

export const initalState = {
    questions: [],
    status: "loading", // 'loading' , 'error' , 'ready' , 'active' , 'finished'
    index: 0,
    answer: null,
    points: 0,
    timer: null,
    highscore: 0,
};

export function reducer(state, action) {
    switch (action.type) {
        case "dataRecevied": {
            return {
                ...state,
                questions: action.payload,
                status: "ready",
            };
        }

        case "setHighScore": {
            return {
                ...state,
                highscore: action.payload,
            };
        }

        case "dataFaild": {
            return {
                ...state,
                status: "error",
            };
        }

        case "start": {
            return {
                ...state,
                status: "active",
                timer: state.questions.length * secondesPerQustion,
            };
        }

        case "newAnswer": {
            const question = state.questions[state.index];

            const points =
                question.correctOption === action.payload
                    ? state.points + question.points
                    : state.points;
            return {
                ...state,
                answer: action.payload,
                points: points,
            };
        }

        case "nextQuestion": {
            return {
                ...state,
                index: state.index + 1,
                answer: null,
            };
        }

        case "finished": {
            const highscore =
                state.points > state.highscore ? state.points : state.highscore;

            return {
                ...state,
                status: "finished",
                highscore: highscore,
            };
        }

        case "restart": {
            return {
                ...state,
                index: 0,
                answer: null,
                points: 0,
                status: "ready",
                timer: initalState.timer,
                highscore: state.highscore,
            };
        }

        case "tick": {
            return {
                ...state,
                timer: state.timer - 1,
                status: state.timer === 0 ? "finished" : state.status,
            };
        }

        default:
            throw new Error(`Unkown action type : ${action.type}`);
    }
}
