export declare type ContentRawPoll = {
    data: {
        allowed_votes: 1;
        answers: [{
            answer: string;
        }];
        computed_values: {
            can_modify: boolean;
            user_did_vote: boolean;
            total_votes: number;
            total_respondents: number;
            maximum_answer_votes: number;
        };
        can_modify: boolean;
        maximum_answer_votes: number;
        total_respondents: number;
        total_votes: number;
        user_did_vote: boolean;
        public_results: boolean;
        question: string;
    };
    type: 'poll';
};
