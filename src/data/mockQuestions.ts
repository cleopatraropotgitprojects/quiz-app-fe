export type QuizQuestion =
  | {
      type?: "knowledge";
      questionKey: string;
      options: string[];
      correct: number;
    }
  | {
      type?: "personality";
      questionKey: string;
      options: { key: string; scores: Record<string, number> }[];
    }
  | {
      type?: "psychological";
      questionKey: string;
      options: { key: string; traits: Record<string, number> }[];
      multiple: boolean;
    };

export const mockQuestions: Record<number, QuizQuestion[]> = {
  // How well do you know European geography?
  1: [
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question1",
      options: [
        "knowledge_quiz1_question1_option1",
        "knowledge_quiz1_question1_option2",
        "knowledge_quiz1_question1_option3",
        "knowledge_quiz1_question1_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question2",
      options: [
        "knowledge_quiz1_question2_option1",
        "knowledge_quiz1_question2_option2",
        "knowledge_quiz1_question2_option3",
        "knowledge_quiz1_question2_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question3",
      options: [
        "knowledge_quiz1_question3_option1",
        "knowledge_quiz1_question3_option2",
        "knowledge_quiz1_question3_option3",
        "knowledge_quiz1_question3_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question4",
      options: [
        "knowledge_quiz1_question4_option1",
        "knowledge_quiz1_question4_option2",
        "knowledge_quiz1_question4_option3",
        "knowledge_quiz1_question4_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question5",
      options: [
        "knowledge_quiz1_question5_option1",
        "knowledge_quiz1_question5_option2",
        "knowledge_quiz1_question5_option3",
        "knowledge_quiz1_question5_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question6",
      options: [
        "knowledge_quiz1_question6_option1",
        "knowledge_quiz1_question6_option2",
        "knowledge_quiz1_question6_option3",
        "knowledge_quiz1_question6_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question7",
      options: [
        "knowledge_quiz1_question7_option1",
        "knowledge_quiz1_question7_option2",
        "knowledge_quiz1_question7_option3",
        "knowledge_quiz1_question7_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question8",
      options: [
        "knowledge_quiz1_question8_option1",
        "knowledge_quiz1_question8_option2",
        "knowledge_quiz1_question8_option3",
        "knowledge_quiz1_question8_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question9",
      options: [
        "knowledge_quiz1_question9_option1",
        "knowledge_quiz1_question9_option2",
        "knowledge_quiz1_question9_option3",
        "knowledge_quiz1_question9_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question10",
      options: [
        "knowledge_quiz1_question10_option1",
        "knowledge_quiz1_question10_option2",
        "knowledge_quiz1_question10_option3",
        "knowledge_quiz1_question10_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question11",
      options: [
        "knowledge_quiz1_question11_option1",
        "knowledge_quiz1_question11_option2",
        "knowledge_quiz1_question11_option3",
        "knowledge_quiz1_question11_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question12",
      options: [
        "knowledge_quiz1_question12_option1",
        "knowledge_quiz1_question12_option2",
        "knowledge_quiz1_question12_option3",
        "knowledge_quiz1_question12_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question13",
      options: [
        "knowledge_quiz1_question13_option1",
        "knowledge_quiz1_question13_option2",
        "knowledge_quiz1_question13_option3",
        "knowledge_quiz1_question13_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question14",
      options: [
        "knowledge_quiz1_question14_option1",
        "knowledge_quiz1_question14_option2",
        "knowledge_quiz1_question14_option3",
        "knowledge_quiz1_question14_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question15",
      options: [
        "knowledge_quiz1_question15_option1",
        "knowledge_quiz1_question15_option2",
        "knowledge_quiz1_question15_option3",
        "knowledge_quiz1_question15_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question16",
      options: [
        "knowledge_quiz1_question16_option1",
        "knowledge_quiz1_question16_option2",
        "knowledge_quiz1_question16_option3",
        "knowledge_quiz1_question16_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question17",
      options: [
        "knowledge_quiz1_question17_option1",
        "knowledge_quiz1_question17_option2",
        "knowledge_quiz1_question17_option3",
        "knowledge_quiz1_question17_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question18",
      options: [
        "knowledge_quiz1_question18_option1",
        "knowledge_quiz1_question18_option2",
        "knowledge_quiz1_question18_option3",
        "knowledge_quiz1_question18_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question19",
      options: [
        "knowledge_quiz1_question19_option1",
        "knowledge_quiz1_question19_option2",
        "knowledge_quiz1_question19_option3",
        "knowledge_quiz1_question19_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz1_question20",
      options: [
        "knowledge_quiz1_question20_option1",
        "knowledge_quiz1_question20_option2",
        "knowledge_quiz1_question20_option3",
        "knowledge_quiz1_question20_option4",
      ],
      correct: 0,
    },
  ],
  // Which country is this capital from?
  2: [
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question1",
      options: [
        "knowledge_quiz2_question1_option1",
        "knowledge_quiz2_question1_option2",
        "knowledge_quiz2_question1_option3",
        "knowledge_quiz2_question1_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question2",
      options: [
        "knowledge_quiz2_question2_option1",
        "knowledge_quiz2_question2_option2",
        "knowledge_quiz2_question2_option3",
        "knowledge_quiz2_question2_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question3",
      options: [
        "knowledge_quiz2_question3_option1",
        "knowledge_quiz2_question3_option2",
        "knowledge_quiz2_question3_option3",
        "knowledge_quiz2_question3_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question4",
      options: [
        "knowledge_quiz2_question4_option1",
        "knowledge_quiz2_question4_option2",
        "knowledge_quiz2_question4_option3",
        "knowledge_quiz2_question4_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question5",
      options: [
        "knowledge_quiz2_question5_option1",
        "knowledge_quiz2_question5_option2",
        "knowledge_quiz2_question5_option3",
        "knowledge_quiz2_question5_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question6",
      options: [
        "knowledge_quiz2_question6_option1",
        "knowledge_quiz2_question6_option2",
        "knowledge_quiz2_question6_option3",
        "knowledge_quiz2_question6_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question7",
      options: [
        "knowledge_quiz2_question7_option1",
        "knowledge_quiz2_question7_option2",
        "knowledge_quiz2_question7_option3",
        "knowledge_quiz2_question7_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question8",
      options: [
        "knowledge_quiz2_question8_option1",
        "knowledge_quiz2_question8_option2",
        "knowledge_quiz2_question8_option3",
        "knowledge_quiz2_question8_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question9",
      options: [
        "knowledge_quiz2_question9_option1",
        "knowledge_quiz2_question9_option2",
        "knowledge_quiz2_question9_option3",
        "knowledge_quiz2_question9_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question10",
      options: [
        "knowledge_quiz2_question10_option1",
        "knowledge_quiz2_question10_option2",
        "knowledge_quiz2_question10_option3",
        "knowledge_quiz2_question10_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question11",
      options: [
        "knowledge_quiz2_question11_option1",
        "knowledge_quiz2_question11_option2",
        "knowledge_quiz2_question11_option3",
        "knowledge_quiz2_question11_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question12",
      options: [
        "knowledge_quiz2_question12_option1",
        "knowledge_quiz2_question12_option2",
        "knowledge_quiz2_question12_option3",
        "knowledge_quiz2_question12_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question13",
      options: [
        "knowledge_quiz2_question13_option1",
        "knowledge_quiz2_question13_option2",
        "knowledge_quiz2_question13_option3",
        "knowledge_quiz2_question13_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question14",
      options: [
        "knowledge_quiz2_question14_option1",
        "knowledge_quiz2_question14_option2",
        "knowledge_quiz2_question14_option3",
        "knowledge_quiz2_question14_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question15",
      options: [
        "knowledge_quiz2_question15_option1",
        "knowledge_quiz2_question15_option2",
        "knowledge_quiz2_question15_option3",
        "knowledge_quiz2_question15_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question16",
      options: [
        "knowledge_quiz2_question16_option1",
        "knowledge_quiz2_question16_option2",
        "knowledge_quiz2_question16_option3",
        "knowledge_quiz2_question16_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question17",
      options: [
        "knowledge_quiz2_question17_option1",
        "knowledge_quiz2_question17_option2",
        "knowledge_quiz2_question17_option3",
        "knowledge_quiz2_question17_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question18",
      options: [
        "knowledge_quiz2_question18_option1",
        "knowledge_quiz2_question18_option2",
        "knowledge_quiz2_question18_option3",
        "knowledge_quiz2_question18_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question19",
      options: [
        "knowledge_quiz2_question19_option1",
        "knowledge_quiz2_question19_option2",
        "knowledge_quiz2_question19_option3",
        "knowledge_quiz2_question19_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz2_question20",
      options: [
        "knowledge_quiz2_question20_option1",
        "knowledge_quiz2_question20_option2",
        "knowledge_quiz2_question20_option3",
        "knowledge_quiz2_question20_option4",
      ],
      correct: 3,
    },
  ],
  // General knowledge: quick edition
  3: [
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question1",
      options: [
        "knowledge_quiz3_question1_option1",
        "knowledge_quiz3_question1_option2",
        "knowledge_quiz3_question1_option3",
        "knowledge_quiz3_question1_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question2",
      options: [
        "knowledge_quiz3_question2_option1",
        "knowledge_quiz3_question2_option2",
        "knowledge_quiz3_question2_option3",
        "knowledge_quiz3_question2_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question3",
      options: [
        "knowledge_quiz3_question3_option1",
        "knowledge_quiz3_question3_option2",
        "knowledge_quiz3_question3_option3",
        "knowledge_quiz3_question3_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question4",
      options: [
        "knowledge_quiz3_question4_option1",
        "knowledge_quiz3_question4_option2",
        "knowledge_quiz3_question4_option3",
        "knowledge_quiz3_question4_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question5",
      options: [
        "knowledge_quiz3_question5_option1",
        "knowledge_quiz3_question5_option2",
        "knowledge_quiz3_question5_option3",
        "knowledge_quiz3_question5_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question6",
      options: [
        "knowledge_quiz3_question6_option1",
        "knowledge_quiz3_question6_option2",
        "knowledge_quiz3_question6_option3",
        "knowledge_quiz3_question6_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question7",
      options: [
        "knowledge_quiz3_question7_option1",
        "knowledge_quiz3_question7_option2",
        "knowledge_quiz3_question7_option3",
        "knowledge_quiz3_question7_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question8",
      options: [
        "knowledge_quiz3_question8_option1",
        "knowledge_quiz3_question8_option2",
        "knowledge_quiz3_question8_option3",
        "knowledge_quiz3_question8_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question9",
      options: [
        "knowledge_quiz3_question9_option1",
        "knowledge_quiz3_question9_option2",
        "knowledge_quiz3_question9_option3",
        "knowledge_quiz3_question9_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question10",
      options: [
        "knowledge_quiz3_question10_option1",
        "knowledge_quiz3_question10_option2",
        "knowledge_quiz3_question10_option3",
        "knowledge_quiz3_question10_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question11",
      options: [
        "knowledge_quiz3_question11_option1",
        "knowledge_quiz3_question11_option2",
        "knowledge_quiz3_question11_option3",
        "knowledge_quiz3_question11_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question12",
      options: [
        "knowledge_quiz3_question12_option1",
        "knowledge_quiz3_question12_option2",
        "knowledge_quiz3_question12_option3",
        "knowledge_quiz3_question12_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question13",
      options: [
        "knowledge_quiz3_question13_option1",
        "knowledge_quiz3_question13_option2",
        "knowledge_quiz3_question13_option3",
        "knowledge_quiz3_question13_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question14",
      options: [
        "knowledge_quiz3_question14_option1",
        "knowledge_quiz3_question14_option2",
        "knowledge_quiz3_question14_option3",
        "knowledge_quiz3_question14_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question15",
      options: [
        "knowledge_quiz3_question15_option1",
        "knowledge_quiz3_question15_option2",
        "knowledge_quiz3_question15_option3",
        "knowledge_quiz3_question15_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question16",
      options: [
        "knowledge_quiz3_question16_option1",
        "knowledge_quiz3_question16_option2",
        "knowledge_quiz3_question16_option3",
        "knowledge_quiz3_question16_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question17",
      options: [
        "knowledge_quiz3_question17_option1",
        "knowledge_quiz3_question17_option2",
        "knowledge_quiz3_question17_option3",
        "knowledge_quiz3_question17_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question18",
      options: [
        "knowledge_quiz3_question18_option1",
        "knowledge_quiz3_question18_option2",
        "knowledge_quiz3_question18_option3",
        "knowledge_quiz3_question18_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question19",
      options: [
        "knowledge_quiz3_question19_option1",
        "knowledge_quiz3_question19_option2",
        "knowledge_quiz3_question19_option3",
        "knowledge_quiz3_question19_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz3_question20",
      options: [
        "knowledge_quiz3_question20_option1",
        "knowledge_quiz3_question20_option2",
        "knowledge_quiz3_question20_option3",
        "knowledge_quiz3_question20_option4",
      ],
      correct: 2,
    },
  ],
  // History test: key events of the 20th century
  4: [
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question1",
      options: [
        "knowledge_quiz4_question1_option1",
        "knowledge_quiz4_question1_option2",
        "knowledge_quiz4_question1_option3",
        "knowledge_quiz4_question1_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question2",
      options: [
        "knowledge_quiz4_question2_option1",
        "knowledge_quiz4_question2_option2",
        "knowledge_quiz4_question2_option3",
        "knowledge_quiz4_question2_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question3",
      options: [
        "knowledge_quiz4_question3_option1",
        "knowledge_quiz4_question3_option2",
        "knowledge_quiz4_question3_option3",
        "knowledge_quiz4_question3_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question4",
      options: [
        "knowledge_quiz4_question4_option1",
        "knowledge_quiz4_question4_option2",
        "knowledge_quiz4_question4_option3",
        "knowledge_quiz4_question4_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question5",
      options: [
        "knowledge_quiz4_question5_option1",
        "knowledge_quiz4_question5_option2",
        "knowledge_quiz4_question5_option3",
        "knowledge_quiz4_question5_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question6",
      options: [
        "knowledge_quiz4_question6_option1",
        "knowledge_quiz4_question6_option2",
        "knowledge_quiz4_question6_option3",
        "knowledge_quiz4_question6_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question7",
      options: [
        "knowledge_quiz4_question7_option1",
        "knowledge_quiz4_question7_option2",
        "knowledge_quiz4_question7_option3",
        "knowledge_quiz4_question7_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question8",
      options: [
        "knowledge_quiz4_question8_option1",
        "knowledge_quiz4_question8_option2",
        "knowledge_quiz4_question8_option3",
        "knowledge_quiz4_question8_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question9",
      options: [
        "knowledge_quiz4_question9_option1",
        "knowledge_quiz4_question9_option2",
        "knowledge_quiz4_question9_option3",
        "knowledge_quiz4_question9_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question10",
      options: [
        "knowledge_quiz4_question10_option1",
        "knowledge_quiz4_question10_option2",
        "knowledge_quiz4_question10_option3",
        "knowledge_quiz4_question10_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question11",
      options: [
        "knowledge_quiz4_question11_option1",
        "knowledge_quiz4_question11_option2",
        "knowledge_quiz4_question11_option3",
        "knowledge_quiz4_question11_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question12",
      options: [
        "knowledge_quiz4_question12_option1",
        "knowledge_quiz4_question12_option2",
        "knowledge_quiz4_question12_option3",
        "knowledge_quiz4_question12_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question13",
      options: [
        "knowledge_quiz4_question13_option1",
        "knowledge_quiz4_question13_option2",
        "knowledge_quiz4_question13_option3",
        "knowledge_quiz4_question13_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question14",
      options: [
        "knowledge_quiz4_question14_option1",
        "knowledge_quiz4_question14_option2",
        "knowledge_quiz4_question14_option3",
        "knowledge_quiz4_question14_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question15",
      options: [
        "knowledge_quiz4_question15_option1",
        "knowledge_quiz4_question15_option2",
        "knowledge_quiz4_question15_option3",
        "knowledge_quiz4_question15_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question16",
      options: [
        "knowledge_quiz4_question16_option1",
        "knowledge_quiz4_question16_option2",
        "knowledge_quiz4_question16_option3",
        "knowledge_quiz4_question16_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question17",
      options: [
        "knowledge_quiz4_question17_option1",
        "knowledge_quiz4_question17_option2",
        "knowledge_quiz4_question17_option3",
        "knowledge_quiz4_question17_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question18",
      options: [
        "knowledge_quiz4_question18_option1",
        "knowledge_quiz4_question18_option2",
        "knowledge_quiz4_question18_option3",
        "knowledge_quiz4_question18_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question19",
      options: [
        "knowledge_quiz4_question19_option1",
        "knowledge_quiz4_question19_option2",
        "knowledge_quiz4_question19_option3",
        "knowledge_quiz4_question19_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz4_question20",
      options: [
        "knowledge_quiz4_question20_option1",
        "knowledge_quiz4_question20_option2",
        "knowledge_quiz4_question20_option3",
        "knowledge_quiz4_question20_option4",
      ],
      correct: 3,
    },
  ],
  // What do you know about space and planets?
  5: [
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question1",
      options: [
        "knowledge_quiz5_question1_option1",
        "knowledge_quiz5_question1_option2",
        "knowledge_quiz5_question1_option3",
        "knowledge_quiz5_question1_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question2",
      options: [
        "knowledge_quiz5_question2_option1",
        "knowledge_quiz5_question2_option2",
        "knowledge_quiz5_question2_option3",
        "knowledge_quiz5_question2_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question3",
      options: [
        "knowledge_quiz5_question3_option1",
        "knowledge_quiz5_question3_option2",
        "knowledge_quiz5_question3_option3",
        "knowledge_quiz5_question3_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question4",
      options: [
        "knowledge_quiz5_question4_option1",
        "knowledge_quiz5_question4_option2",
        "knowledge_quiz5_question4_option3",
        "knowledge_quiz5_question4_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question5",
      options: [
        "knowledge_quiz5_question5_option1",
        "knowledge_quiz5_question5_option2",
        "knowledge_quiz5_question5_option3",
        "knowledge_quiz5_question5_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question6",
      options: [
        "knowledge_quiz5_question6_option1",
        "knowledge_quiz5_question6_option2",
        "knowledge_quiz5_question6_option3",
        "knowledge_quiz5_question6_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question7",
      options: [
        "knowledge_quiz5_question7_option1",
        "knowledge_quiz5_question7_option2",
        "knowledge_quiz5_question7_option3",
        "knowledge_quiz5_question7_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question8",
      options: [
        "knowledge_quiz5_question8_option1",
        "knowledge_quiz5_question8_option2",
        "knowledge_quiz5_question8_option3",
        "knowledge_quiz5_question8_option4",
      ],
      correct: 0,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question9",
      options: [
        "knowledge_quiz5_question9_option1",
        "knowledge_quiz5_question9_option2",
        "knowledge_quiz5_question9_option3",
        "knowledge_quiz5_question9_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question10",
      options: [
        "knowledge_quiz5_question10_option1",
        "knowledge_quiz5_question10_option2",
        "knowledge_quiz5_question10_option3",
        "knowledge_quiz5_question10_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question11",
      options: [
        "knowledge_quiz5_question11_option1",
        "knowledge_quiz5_question11_option2",
        "knowledge_quiz5_question11_option3",
        "knowledge_quiz5_question11_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question12",
      options: [
        "knowledge_quiz5_question12_option1",
        "knowledge_quiz5_question12_option2",
        "knowledge_quiz5_question12_option3",
        "knowledge_quiz5_question12_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question13",
      options: [
        "knowledge_quiz5_question13_option1",
        "knowledge_quiz5_question13_option2",
        "knowledge_quiz5_question13_option3",
        "knowledge_quiz5_question13_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question14",
      options: [
        "knowledge_quiz5_question14_option1",
        "knowledge_quiz5_question14_option2",
        "knowledge_quiz5_question14_option3",
        "knowledge_quiz5_question14_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question15",
      options: [
        "knowledge_quiz5_question15_option1",
        "knowledge_quiz5_question15_option2",
        "knowledge_quiz5_question15_option3",
        "knowledge_quiz5_question15_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question16",
      options: [
        "knowledge_quiz5_question16_option1",
        "knowledge_quiz5_question16_option2",
        "knowledge_quiz5_question16_option3",
        "knowledge_quiz5_question16_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question17",
      options: [
        "knowledge_quiz5_question17_option1",
        "knowledge_quiz5_question17_option2",
        "knowledge_quiz5_question17_option3",
        "knowledge_quiz5_question17_option4",
      ],
      correct: 1,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question18",
      options: [
        "knowledge_quiz5_question18_option1",
        "knowledge_quiz5_question18_option2",
        "knowledge_quiz5_question18_option3",
        "knowledge_quiz5_question18_option4",
      ],
      correct: 2,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question19",
      options: [
        "knowledge_quiz5_question19_option1",
        "knowledge_quiz5_question19_option2",
        "knowledge_quiz5_question19_option3",
        "knowledge_quiz5_question19_option4",
      ],
      correct: 3,
    },
    {
      type: "knowledge",
      questionKey: "knowledge_quiz5_question20",
      options: [
        "knowledge_quiz5_question20_option1",
        "knowledge_quiz5_question20_option2",
        "knowledge_quiz5_question20_option3",
        "knowledge_quiz5_question20_option4",
      ],
      correct: 2,
    },
  ],
  // English grammar test
  6: [
    {
      questionKey: "knowledge_quiz6_question1",
      options: [
        "knowledge_quiz6_question1_option1",
        "knowledge_quiz6_question1_option2",
        "knowledge_quiz6_question1_option3",
        "knowledge_quiz6_question1_option4",
      ],
      correct: 0,
    },
    {
      questionKey: "knowledge_quiz6_question2",
      options: [
        "knowledge_quiz6_question2_option1",
        "knowledge_quiz6_question2_option2",
        "knowledge_quiz6_question2_option3",
        "knowledge_quiz6_question2_option4",
      ],
      correct: 0,
    },
    {
      questionKey: "knowledge_quiz6_question3",
      options: [
        "knowledge_quiz6_question3_option1",
        "knowledge_quiz6_question3_option2",
        "knowledge_quiz6_question3_option3",
        "knowledge_quiz6_question3_option4",
      ],
      correct: 1,
    },
    {
      questionKey: "knowledge_quiz6_question4",
      options: [
        "knowledge_quiz6_question4_option1",
        "knowledge_quiz6_question4_option2",
        "knowledge_quiz6_question4_option3",
        "knowledge_quiz6_question4_option4",
      ],
      correct: 1,
    },
    {
      questionKey: "knowledge_quiz6_question5",
      options: [
        "knowledge_quiz6_question5_option1",
        "knowledge_quiz6_question5_option2",
        "knowledge_quiz6_question5_option3",
        "knowledge_quiz6_question5_option4",
      ],
      correct: 1,
    },
    {
      questionKey: "knowledge_quiz6_question6",
      options: [
        "knowledge_quiz6_question6_option1",
        "knowledge_quiz6_question6_option2",
        "knowledge_quiz6_question6_option3",
        "knowledge_quiz6_question6_option4",
      ],
      correct: 2,
    },
    {
      questionKey: "knowledge_quiz6_question7",
      options: [
        "knowledge_quiz6_question7_option1",
        "knowledge_quiz6_question7_option2",
        "knowledge_quiz6_question7_option3",
        "knowledge_quiz6_question7_option4",
      ],
      correct: 3,
    },
    {
      questionKey: "knowledge_quiz6_question8",
      options: [
        "knowledge_quiz6_question8_option1",
        "knowledge_quiz6_question8_option2",
        "knowledge_quiz6_question8_option3",
        "knowledge_quiz6_question8_option4",
      ],
      correct: 1,
    },
    {
      questionKey: "knowledge_quiz6_question9",
      options: [
        "knowledge_quiz6_question9_option1",
        "knowledge_quiz6_question9_option2",
        "knowledge_quiz6_question9_option3",
        "knowledge_quiz6_question9_option4",
      ],
      correct: 2,
    },
    {
      questionKey: "Which sentence is in the passive voice?",
      options: [
        "The teacher will explain.",
        "The teacher explained the lesson.",
        "The lesson was explained by the teacher.",
        "The teacher is explaining.",
      ],
      correct: 2,
    },
    {
      questionKey: "knowledge_quiz6_question10",
      options: [
        "knowledge_quiz6_question10_option1",
        "knowledge_quiz6_question10_option2",
        "knowledge_quiz6_question10_option3",
        "knowledge_quiz6_question10_option4",
      ],
      correct: 0,
    },
    {
      questionKey: "knowledge_quiz6_question11",
      options: [
        "knowledge_quiz6_question11_option1",
        "knowledge_quiz6_question11_option2",
        "knowledge_quiz6_question11_option3",
        "knowledge_quiz6_question11_option4",
      ],
      correct: 3,
    },
    {
      questionKey: "knowledge_quiz6_question12",
      options: [
        "knowledge_quiz6_question12_option1",
        "knowledge_quiz6_question12_option2",
        "knowledge_quiz6_question12_option3",
        "knowledge_quiz6_question12_option4",
      ],
      correct: 0,
    },
    {
      questionKey: "knowledge_quiz6_question13",
      options: [
        "knowledge_quiz6_question13_option1",
        "knowledge_quiz6_question13_option2",
        "knowledge_quiz6_question13_option3",
        "knowledge_quiz6_question13_option4",
      ],
      correct: 2,
    },
    {
      questionKey: "knowledge_quiz6_question14",
      options: [
        "knowledge_quiz6_question14_option1",
        "knowledge_quiz6_question14_option2",
        "knowledge_quiz6_question14_option3",
        "knowledge_quiz6_question14_option4",
      ],
      correct: 1,
    },
    {
      questionKey: "knowledge_quiz6_question15",
      options: [
        "knowledge_quiz6_question15_option1",
        "knowledge_quiz6_question15_option2",
        "knowledge_quiz6_question15_option3",
        "knowledge_quiz6_question15_option4",
      ],
      correct: 3,
    },
    {
      questionKey: "knowledge_quiz6_question16",
      options: [
        "knowledge_quiz6_question16_option1",
        "knowledge_quiz6_question16_option2",
        "knowledge_quiz6_question16_option3",
        "knowledge_quiz6_question16_option4",
      ],
      correct: 1,
    },
  ],
  // Which Harry Potter character are you?
  7: [
    {
      questionKey: "personality_quiz1_question1",
      options: [
        {
          key: "personality_quiz1_question1_option1",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question1_option2", scores: { Ron: 1 } },
        {
          key: "personality_quiz1_question1_option3",
          scores: { Harry: 1 },
        },
        {
          key: "personality_quiz1_question1_option4",
          scores: { Draco: 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz1_question2",
      options: [
        { key: "personality_quiz1_question2_option1", scores: { Draco: 1 } },
        { key: "personality_quiz1_question2_option2", scores: { Harry: 1 } },
        { key: "personality_quiz1_question2_option3", scores: { Hermione: 1 } },
        { key: "personality_quiz1_question2_option4", scores: { Luna: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question3",
      options: [
        { key: "personality_quiz1_question3_option1", scores: { Draco: 1 } },
        { key: "personality_quiz1_question3_option2", scores: { Ron: 1 } },
        { key: "personality_quiz1_question3_option3", scores: { Hermione: 1 } },
        { key: "personality_quiz1_question3_option4", scores: { Harry: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question4",
      options: [
        { key: "personality_quiz1_question4_option1", scores: { Harry: 1 } },
        {
          key: "personality_quiz1_question4_option2",
          scores: { Dumbledore: 1 },
        },
        { key: "personality_quiz1_question4_option3", scores: { Ron: 1 } },
        { key: "personality_quiz1_question4_option4", scores: { Luna: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question5",
      options: [
        { key: "personality_quiz1_question5_option1", scores: { Hermione: 1 } },
        { key: "personality_quiz1_question5_option2", scores: { Ron: 1 } },
        { key: "personality_quiz1_question5_option3", scores: { Harry: 1 } },
        { key: "personality_quiz1_question5_option4", scores: { Draco: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question6",
      options: [
        { key: "personality_quiz1_question6_option1", scores: { Draco: 1 } },
        { key: "personality_quiz1_question6_option2", scores: { Luna: 1 } },
        { key: "personality_quiz1_question6_option3", scores: { Harry: 1 } },
        { key: "personality_quiz1_question6_option4", scores: { Ron: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question7",
      options: [
        { key: "personality_quiz1_question7_option1", scores: { Hermione: 1 } },
        { key: "personality_quiz1_question7_option2", scores: { Ron: 1 } },
        { key: "personality_quiz1_question7_option3", scores: { Harry: 1 } },
        { key: "personality_quiz1_question7_option4", scores: { Draco: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question8",
      options: [
        { key: "personality_quiz1_question8_option1", scores: { Draco: 1 } },
        { key: "personality_quiz1_question8_option2", scores: { Ron: 1 } },
        { key: "personality_quiz1_question8_option3", scores: { Hermione: 1 } },
        { key: "personality_quiz1_question8_option4", scores: { Luna: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question9",
      options: [
        { key: "personality_quiz1_question9_option1", scores: { Hermione: 1 } },
        { key: "personality_quiz1_question9_option2", scores: { Ron: 1 } },
        { key: "personality_quiz1_question9_option3", scores: { Harry: 1 } },
        { key: "personality_quiz1_question9_option4", scores: { Draco: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question10",
      options: [
        { key: "personality_quiz1_question10_option1", scores: { Luna: 1 } },
        {
          key: "personality_quiz1_question10_option2",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question10_option3", scores: { Harry: 1 } },
        { key: "personality_quiz1_question10_option4", scores: { Draco: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question11",
      options: [
        {
          key: "personality_quiz1_question11_option1",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question11_option2", scores: { Harry: 1 } },
        { key: "personality_quiz1_question11_option3", scores: { Draco: 1 } },
        { key: "personality_quiz1_question11_option4", scores: { Ron: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question12",
      options: [
        { key: "personality_quiz1_question12_option1", scores: { Luna: 1 } },
        {
          key: "personality_quiz1_question12_option2",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question12_option3", scores: { Draco: 1 } },
        { key: "personality_quiz1_question12_option4", scores: { Harry: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question13",
      options: [
        { key: "personality_quiz1_question13_option1", scores: { Ron: 1 } },
        { key: "personality_quiz1_question13_option2", scores: { Draco: 1 } },
        {
          key: "personality_quiz1_question13_option3",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question13_option4", scores: { Harry: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question14",
      options: [
        { key: "personality_quiz1_question14_option1", scores: { Harry: 1 } },
        {
          key: "personality_quiz1_question14_option2",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question14_option3", scores: { Draco: 1 } },
        { key: "personality_quiz1_question14_option4", scores: { Ron: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question15",
      options: [
        { key: "personality_quiz1_question15_option1", scores: { Harry: 1 } },
        { key: "personality_quiz1_question15_option2", scores: { Draco: 1 } },
        {
          key: "personality_quiz1_question15_option3",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question15_option4", scores: { Ron: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question16",
      options: [
        { key: "personality_quiz1_question16_option1", scores: { Ron: 1 } },
        {
          key: "personality_quiz1_question16_option2",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question16_option3", scores: { Draco: 1 } },
        { key: "personality_quiz1_question16_option4", scores: { Harry: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question17",
      options: [
        { key: "personality_quiz1_question17_option1", scores: { Draco: 1 } },
        {
          key: "personality_quiz1_question17_option2",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question17_option3", scores: { Harry: 1 } },
        { key: "personality_quiz1_question17_option4", scores: { Ron: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question18",
      options: [
        { key: "personality_quiz1_question18_option1", scores: { Draco: 1 } },
        { key: "personality_quiz1_question18_option2", scores: { Luna: 1 } },
        { key: "personality_quiz1_question18_option3", scores: { Harry: 1 } },
        {
          key: "personality_quiz1_question18_option4",
          scores: { Hermione: 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz1_question19",
      options: [
        {
          key: "personality_quiz1_question19_option1",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question19_option2", scores: { Ron: 1 } },
        { key: "personality_quiz1_question19_option3", scores: { Harry: 1 } },
        { key: "personality_quiz1_question19_option4", scores: { Draco: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz1_question20",
      options: [
        { key: "personality_quiz1_question20_option1", scores: { Harry: 1 } },
        {
          key: "personality_quiz1_question20_option2",
          scores: { Hermione: 1 },
        },
        { key: "personality_quiz1_question20_option3", scores: { Ron: 1 } },
        { key: "personality_quiz1_question20_option4", scores: { Draco: 1 } },
      ],
    },
  ],
  // Which Disney character matches your personality?
  8: [
    {
      questionKey: "personality_quiz2_question1",
      options: [
        { key: "personality_quiz2_question1_option1", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question1_option2", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question1_option3", scores: { Belle: 1 } },
        { key: "personality_quiz2_question1_option4", scores: { Mulan: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question2",
      options: [
        { key: "personality_quiz2_question2_option1", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question2_option2", scores: { Belle: 1 } },
        { key: "personality_quiz2_question2_option3", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question2_option4", scores: { Elsa: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question3",
      options: [
        { key: "personality_quiz2_question3_option1", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question3_option2", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question3_option3", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question3_option4", scores: { Belle: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question4",
      options: [
        { key: "personality_quiz2_question4_option1", scores: { Belle: 1 } },
        { key: "personality_quiz2_question4_option2", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question4_option3", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question4_option4", scores: { Mulan: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question5",
      options: [
        { key: "personality_quiz2_question5_option1", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question5_option2", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question5_option3", scores: { Belle: 1 } },
        { key: "personality_quiz2_question5_option4", scores: { Elsa: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question6",
      options: [
        { key: "personality_quiz2_question6_option1", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question6_option2", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question6_option3", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question6_option4", scores: { Belle: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question7",
      options: [
        { key: "personality_quiz2_question7_option1", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question7_option2", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question7_option3", scores: { Belle: 1 } },
        { key: "personality_quiz2_question7_option4", scores: { Elsa: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question8",
      options: [
        { key: "personality_quiz2_question8_option1", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question8_option2", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question8_option3", scores: { Belle: 1 } },
        { key: "personality_quiz2_question8_option4", scores: { Mulan: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question9",
      options: [
        { key: "personality_quiz2_question9_option1", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question9_option2", scores: { Belle: 1 } },
        { key: "personality_quiz2_question9_option3", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question9_option4", scores: { Ariel: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question10",
      options: [
        { key: "personality_quiz2_question10_option1", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question10_option2", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question10_option3", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question10_option4", scores: { Belle: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question11",
      options: [
        { key: "personality_quiz2_question11_option1", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question11_option2", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question11_option3", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question11_option4", scores: { Belle: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question12",
      options: [
        { key: "personality_quiz2_question12_option1", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question12_option2", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question12_option3", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question12_option4", scores: { Belle: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question13",
      options: [
        { key: "personality_quiz2_question13_option1", scores: { Belle: 1 } },
        { key: "personality_quiz2_question13_option2", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question13_option3", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question13_option4", scores: { Elsa: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question14",
      options: [
        { key: "personality_quiz2_question14_option1", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question14_option2", scores: { Belle: 1 } },
        { key: "personality_quiz2_question14_option3", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question14_option4", scores: { Ariel: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question15",
      options: [
        { key: "personality_quiz2_question15_option1", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question15_option2", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question15_option3", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question15_option4", scores: { Belle: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question16",
      options: [
        { key: "personality_quiz2_question16_option1", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question16_option2", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question16_option3", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question16_option4", scores: { Belle: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question17",
      options: [
        { key: "personality_quiz2_question17_option1", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question17_option2", scores: { Belle: 1 } },
        { key: "personality_quiz2_question17_option3", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question17_option4", scores: { Elsa: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question18",
      options: [
        { key: "personality_quiz2_question18_option1", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question18_option2", scores: { Mulan: 1 } },
        { key: "personality_quiz2_question18_option3", scores: { Belle: 1 } },
        { key: "personality_quiz2_question18_option4", scores: { Ariel: 1 } },
      ],
    },
    {
      questionKey: "personality_quiz2_question19",
      options: [
        { key: "personality_quiz2_question19_option1", scores: { Belle: 1 } },
        { key: "personality_quiz2_question19_option2", scores: { Elsa: 1 } },
        { key: "personality_quiz2_question19_option3", scores: { Ariel: 1 } },
        { key: "personality_quiz2_question19_option4", scores: { Mulan: 1 } },
      ],
    },
  ],
  // Which Marvel superhero are you?
  9: [
    {
      questionKey: "personality_quiz3_question1",
      options: [
        {
          key: "personality_quiz3_question1_option1",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question1_option2",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question1_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question1_option4",
          scores: { "Spider-Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question2",
      options: [
        {
          key: "personality_quiz3_question2_option1",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question2_option2",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question2_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question2_option4",
          scores: { "Spider-Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question3",
      options: [
        {
          key: "personality_quiz3_question3_option1",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question3_option2",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question3_option3",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question3_option4",
          scores: { "Black Widow": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question4",
      options: [
        {
          key: "personality_quiz3_question4_option1",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question4_option2",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question4_option3",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question4_option4",
          scores: { "Spider-Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question5",
      options: [
        {
          key: "personality_quiz3_question5_option1",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question5_option2",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question5_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question5_option4",
          scores: { "Scarlet Witch": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question6",
      options: [
        {
          key: "personality_quiz3_question6_option1",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question6_option2",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question6_option3",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question6_option4",
          scores: { "Scarlet Witch": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question7",
      options: [
        {
          key: "personality_quiz3_question7_option1",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question7_option2",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question7_option3",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question7_option4",
          scores: { "Spider-Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question8",
      options: [
        {
          key: "personality_quiz3_question8_option1",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question8_option2",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question8_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question8_option4",
          scores: { "Scarlet Witch": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question9",
      options: [
        {
          key: "personality_quiz3_question9_option1",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question9_option2",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question9_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question9_option4",
          scores: { "Scarlet Witch": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question10",
      options: [
        {
          key: "personality_quiz3_question10_option1",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question10_option2",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question10_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question10_option4",
          scores: { "Iron Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question11",
      options: [
        {
          key: "personality_quiz3_question11_option1",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question11_option2",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question11_option3",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question11_option4",
          scores: { "Iron Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question12",
      options: [
        {
          key: "personality_quiz3_question12_option1",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question12_option2",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question12_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question12_option4",
          scores: { "Spider-Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question13",
      options: [
        {
          key: "personality_quiz3_question13_option1",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question13_option2",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question13_option3",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question13_option4",
          scores: { "Black Widow": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question14",
      options: [
        {
          key: "personality_quiz3_question14_option1",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question14_option2",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question14_option3",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question14_option4",
          scores: { "Scarlet Witch": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question15",
      options: [
        {
          key: "personality_quiz3_question15_option1",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question15_option2",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question15_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question15_option4",
          scores: { "Spider-Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question16",
      options: [
        {
          key: "personality_quiz3_question16_option1",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question16_option2",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question16_option3",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question16_option4",
          scores: { "Iron Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question17",
      options: [
        {
          key: "personality_quiz3_question17_option1",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question17_option2",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question17_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question17_option4",
          scores: { "Spider-Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question18",
      options: [
        {
          key: "personality_quiz3_question18_option1",
          scores: { "Iron Man": 1 },
        },
        {
          key: "personality_quiz3_question18_option2",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question18_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question18_option4",
          scores: { "Scarlet Witch": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question19",
      options: [
        {
          key: "personality_quiz3_question19_option1",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question19_option2",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question19_option3",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question19_option4",
          scores: { "Iron Man": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz3_question20",
      options: [
        {
          key: "personality_quiz3_question20_option1",
          scores: { "Scarlet Witch": 1 },
        },
        {
          key: "personality_quiz3_question20_option2",
          scores: { "Spider-Man": 1 },
        },
        {
          key: "personality_quiz3_question20_option3",
          scores: { "Black Widow": 1 },
        },
        {
          key: "personality_quiz3_question20_option4",
          scores: { "Iron Man": 1 },
        },
      ],
    },
  ],
  //  What's your ideal vacation?
  10: [
    {
      questionKey: "personality_quiz4_question1",
      options: [
        {
          key: "personality_quiz4_question1_option1",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question1_option2",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question1_option3",
          scores: { "Cultural City Trip": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question2",
      options: [
        {
          key: "personality_quiz4_question2_option1",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question2_option2",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question2_option3",
          scores: { "Cultural City Trip": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question3",
      options: [
        {
          key: "personality_quiz4_question3_option1",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question3_option2",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question3_option3",
          scores: { "Beach Paradise": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question4",
      options: [
        {
          key: "personality_quiz4_question4_option1",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question4_option2",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question4_option3",
          scores: { "Cultural City Trip": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question5",
      options: [
        {
          key: "personality_quiz4_question5_option1",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question5_option2",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question5_option3",
          scores: { "Cultural City Trip": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question6",
      options: [
        {
          key: "personality_quiz4_question6_option1",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question6_option2",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question6_option3",
          scores: { "Beach Paradise": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question7",
      options: [
        {
          key: "personality_quiz4_question7_option1",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question7_option2",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question7_option3",
          scores: { "Cultural City Trip": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question8",
      options: [
        {
          key: "personality_quiz4_question8_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question8_option2",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question8_option3",
          scores: { "Beach Paradise": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question9",
      options: [
        {
          key: "personality_quiz4_question9_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question9_option2",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question9_option3",
          scores: { "Adventure Trek": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question10",
      options: [
        {
          key: "personality_quiz4_question10_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question10_option2",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question10_option3",
          scores: { "Adventure Trek": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question11",
      options: [
        {
          key: "personality_quiz4_question11_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question11_option2",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question11_option3",
          scores: { "Adventure Trek": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question12",
      options: [
        {
          key: "personality_quiz4_question12_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question12_option2",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question12_option3",
          scores: { "Adventure Trek": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question13",
      options: [
        {
          key: "personality_quiz4_question13_option1",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question13_option2",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question13_option3",
          scores: { "Adventure Trek": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question14",
      options: [
        {
          key: "personality_quiz4_question14_option1",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question14_option2",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question14_option3",
          scores: { "Beach Paradise": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question15",
      options: [
        {
          key: "personality_quiz4_question15_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question15_option2",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question15_option3",
          scores: { "Beach Paradise": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question16",
      options: [
        {
          key: "personality_quiz4_question16_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question16_option2",
          scores: { "Adventure Trek": 1 },
        },
        {
          key: "personality_quiz4_question16_option3",
          scores: { "Beach Paradise": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question17",
      options: [
        {
          key: "personality_quiz4_question17_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question17_option2",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question17_option3",
          scores: { "Adventure Trek": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question18",
      options: [
        {
          key: "personality_quiz4_question18_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question18_option2",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question18_option3",
          scores: { "Adventure Trek": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question19",
      options: [
        {
          key: "personality_quiz4_question19_option1",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question19_option2",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question19_option3",
          scores: { "Adventure Trek": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz4_question20",
      options: [
        {
          key: "personality_quiz4_question20_option1",
          scores: { "Cultural City Trip": 1 },
        },
        {
          key: "personality_quiz4_question20_option2",
          scores: { "Beach Paradise": 1 },
        },
        {
          key: "personality_quiz4_question20_option3",
          scores: { "Adventure Trek": 1 },
        },
      ],
    },
  ],
  // Which Netflix character would you be?
  11: [
    {
      questionKey: "personality_quiz6_question1",
      options: [
        {
          key: "personality_quiz6_question1_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question1_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question1_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question1_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question2",
      options: [
        {
          key: "personality_quiz6_question2_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question2_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question2_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question2_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question3",
      options: [
        {
          key: "personality_quiz6_question3_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question3_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question3_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question3_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question4",
      options: [
        {
          key: "personality_quiz6_question4_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question4_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question4_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question4_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question5",
      options: [
        {
          key: "personality_quiz6_question5_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question5_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question5_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question5_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question6",
      options: [
        {
          key: "personality_quiz6_question6_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question6_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question6_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question6_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question7",
      options: [
        {
          key: "personality_quiz6_question7_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question7_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question7_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question7_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question8",
      options: [
        {
          key: "personality_quiz6_question8_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question8_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question8_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question8_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question9",
      options: [
        {
          key: "personality_quiz6_question9_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question9_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question9_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question9_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question10",
      options: [
        {
          key: "personality_quiz6_question10_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question10_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question10_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question10_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question11",
      options: [
        {
          key: "personality_quiz6_question11_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question11_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question11_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question11_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question12",
      options: [
        {
          key: "personality_quiz6_question12_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question12_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question12_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question12_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question13",
      options: [
        {
          key: "personality_quiz6_question13_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question13_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question13_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question13_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question14",
      options: [
        {
          key: "personality_quiz6_question14_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question14_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question14_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question14_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question15",
      options: [
        {
          key: "personality_quiz6_question15_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question15_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question15_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question15_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question16",
      options: [
        {
          key: "personality_quiz6_question16_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question16_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question16_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question16_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question17",
      options: [
        {
          key: "personality_quiz6_question17_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question17_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question17_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question17_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question18",
      options: [
        {
          key: "personality_quiz6_question18_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question18_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question18_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question18_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question19",
      options: [
        {
          key: "personality_quiz6_question19_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question19_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question19_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question19_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
    {
      questionKey: "personality_quiz6_question20",
      options: [
        {
          key: "personality_quiz6_question20_option1",
          scores: { "Beth Harmon": 1 },
        },
        { key: "personality_quiz6_question20_option2", scores: { Eleven: 1 } },
        {
          key: "personality_quiz6_question20_option3",
          scores: { "Wednesday Addams": 1 },
        },
        {
          key: "personality_quiz6_question20_option4",
          scores: { "Joe Goldberg": 1 },
        },
      ],
    },
  ],
  // Are you more logical or creative?
  12: [
    {
      type: "psychological",
      questionKey: "personality_quiz12_question1",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question1_option1",
          traits: { creative: 2 },
        },
        { key: "personality_quiz12_question1_option2", traits: { logical: 2 } },
        {
          key: "personality_quiz12_question1_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question2",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question2_option1",
          traits: { creative: 2 },
        },
        { key: "personality_quiz12_question2_option2", traits: { logical: 2 } },
        {
          key: "personality_quiz12_question2_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question3",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question3_option1",
          traits: { creative: 2 },
        },
        { key: "personality_quiz12_question3_option2", traits: { logical: 2 } },
        {
          key: "personality_quiz12_question3_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question4",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question4_option1",
          traits: { creative: 2 },
        },
        { key: "personality_quiz12_question4_option2", traits: { logical: 2 } },
        {
          key: "personality_quiz12_question4_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question5",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question5_option1",
          traits: { creative: 2 },
        },
        { key: "personality_quiz12_question5_option2", traits: { logical: 2 } },
        {
          key: "personality_quiz12_question5_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question6",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question6_option1",
          traits: { creative: 2 },
        },
        { key: "personality_quiz12_question6_option2", traits: { logical: 2 } },
        {
          key: "personality_quiz12_question6_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question7",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question7_option1",
          traits: { creative: 2 },
        },
        { key: "personality_quiz12_question7_option2", traits: { logical: 2 } },
        {
          key: "personality_quiz12_question7_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question8",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question8_option1",
          traits: { creative: 2 },
        },
        { key: "personality_quiz12_question8_option2", traits: { logical: 2 } },
        {
          key: "personality_quiz12_question8_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question9",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question9_option1",
          traits: { creative: 2 },
        },
        { key: "personality_quiz12_question9_option2", traits: { logical: 2 } },
        {
          key: "personality_quiz12_question9_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question10",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question10_option1",
          traits: { creative: 2 },
        },
        {
          key: "personality_quiz12_question10_option2",
          traits: { logical: 2 },
        },
        {
          key: "personality_quiz12_question10_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question11",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question11_option1",
          traits: { creative: 2 },
        },
        {
          key: "personality_quiz12_question11_option2",
          traits: { logical: 2 },
        },
        {
          key: "personality_quiz12_question11_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question12",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question12_option1",
          traits: { creative: 2 },
        },
        {
          key: "personality_quiz12_question12_option2",
          traits: { logical: 2 },
        },
        {
          key: "personality_quiz12_question12_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question13",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question13_option1",
          traits: { creative: 2 },
        },
        {
          key: "personality_quiz12_question13_option2",
          traits: { logical: 2 },
        },
        {
          key: "personality_quiz12_question13_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question14",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question14_option1",
          traits: { creative: 2 },
        },
        {
          key: "personality_quiz12_question14_option2",
          traits: { logical: 2 },
        },
        {
          key: "personality_quiz12_question14_option3",
          traits: { balanced: 2 },
        },
      ],
    },
    {
      type: "psychological",
      questionKey: "personality_quiz12_question15",
      multiple: false,
      options: [
        {
          key: "personality_quiz12_question15_option1",
          traits: { creative: 2 },
        },
        {
          key: "personality_quiz12_question15_option2",
          traits: { logical: 2 },
        },
        {
          key: "personality_quiz12_question15_option3",
          traits: { balanced: 2 },
        },
      ],
    },
  ],
  // // What's your mental age?
  // 13: [
  //   {
  //     question: "How do you react when plans get canceled last minute?",
  //     multiple: true,
  //     options: [
  //       { text: "Disappointed, I was excited!", traits: { teen: 2 } },
  //       {
  //         text: "No problem, I’ll find something fun to do instead",
  //         traits: { "20s": 2 },
  //       },
  //       { text: "Annoyed, I already got ready", traits: { "30s": 2 } },
  //       { text: "Relieved — now I can relax", traits: { "50+": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Pick a hobby you'd love to start:",
  //     multiple: true,
  //     options: [
  //       { text: "Skateboarding or TikTok edits", traits: { teen: 2 } },
  //       { text: "Learning a new language", traits: { "30s": 2 } },
  //       { text: "Knitting or gardening", traits: { "50+": 2 } },
  //       { text: "Dance classes or stand-up comedy", traits: { "20s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "How do you usually manage your money?",
  //     multiple: false,
  //     options: [
  //       { text: "Money? I just ask my parents", traits: { teen: 2 } },
  //       { text: "Spend now, think later", traits: { "20s": 2 } },
  //       { text: "Save first, spend later", traits: { "50+": 2 } },
  //       { text: "Budget and track expenses", traits: { "30s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Which of these sounds most like you in a group setting?",
  //     multiple: true,
  //     options: [
  //       { text: "The loud one, always making jokes", traits: { teen: 2 } },
  //       { text: "Energizer who starts wild ideas", traits: { "20s": 2 } },
  //       { text: "Quiet observer who gives wise advice", traits: { "50+": 2 } },
  //       { text: "Mediator who keeps things calm", traits: { "30s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "What’s your bedtime habit?",
  //     multiple: false,
  //     options: [
  //       { text: "Fall asleep with YouTube playing", traits: { teen: 2 } },
  //       { text: "Scroll social media endlessly", traits: { "20s": 2 } },
  //       { text: "Check emails or plan the next day", traits: { "30s": 2 } },
  //       { text: "Read a chapter before sleep", traits: { "50+": 2 } },
  //     ],
  //   },
  //   {
  //     question: "How do you deal with conflicts?",
  //     multiple: true,
  //     options: [
  //       { text: "Block and move on", traits: { teen: 2 } },
  //       { text: "Seek mature dialogue", traits: { "30s": 2 } },
  //       { text: "Speak your mind quickly", traits: { "20s": 2 } },
  //       { text: "Avoid and keep peace", traits: { "50+": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Which app do you use the most?",
  //     multiple: false,
  //     options: [
  //       { text: "Instagram", traits: { "20s": 2 } },
  //       { text: "News app", traits: { "50+": 2 } },
  //       { text: "TikTok", traits: { teen: 2 } },
  //       { text: "LinkedIn", traits: { "30s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Your favorite time of day is:",
  //     multiple: false,
  //     options: [
  //       { text: "Midnight", traits: { teen: 2 } },
  //       { text: "Late morning/afternoon", traits: { "30s": 2 } },
  //       { text: "Evening", traits: { "20s": 2 } },
  //       { text: "Early morning", traits: { "50+": 2 } },
  //     ],
  //   },
  //   {
  //     question: "When shopping, you usually:",
  //     multiple: true,
  //     options: [
  //       { text: "Look for trendy outfits", traits: { "20s": 2 } },
  //       { text: "Grab fun, random things", traits: { teen: 2 } },
  //       { text: "Invest in long-lasting items", traits: { "30s": 2 } },
  //       { text: "Buy only what’s needed", traits: { "50+": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Pick a TV genre:",
  //     multiple: false,
  //     options: [
  //       { text: "Anime", traits: { teen: 2 } },
  //       { text: "Documentaries", traits: { "50+": 2 } },
  //       { text: "Reality shows", traits: { "20s": 2 } },
  //       { text: "Drama", traits: { "30s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Which drink sounds best?",
  //     multiple: false,
  //     options: [
  //       { text: "Bubble tea", traits: { teen: 2 } },
  //       { text: "Iced matcha latte", traits: { "20s": 2 } },
  //       { text: "Herbal tea", traits: { "50+": 2 } },
  //       { text: "Black coffee", traits: { "30s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "How do you take notes?",
  //     multiple: true,
  //     options: [
  //       { text: "Just remember it", traits: { teen: 2 } },
  //       { text: "Notebook or planner", traits: { "30s": 2 } },
  //       { text: "Pen and paper", traits: { "50+": 2 } },
  //       { text: "Notes app on phone", traits: { "20s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "What motivates you the most?",
  //     multiple: true,
  //     options: [
  //       { text: "Growth and career", traits: { "30s": 2 } },
  //       { text: "Freedom and fun", traits: { "20s": 2 } },
  //       { text: "Stability and comfort", traits: { "50+": 2 } },
  //       { text: "Attention and praise", traits: { teen: 2 } },
  //     ],
  //   },
  //   {
  //     question: "You describe your music taste as:",
  //     multiple: true,
  //     options: [
  //       { text: "Trendy & chaotic", traits: { teen: 2 } },
  //       { text: "Classical and calm", traits: { "50+": 2 } },
  //       { text: "Upbeat pop", traits: { "20s": 2 } },
  //       { text: "Alternative or chill", traits: { "30s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Your social circle is:",
  //     multiple: true,
  //     options: [
  //       { text: "Online and ever-changing", traits: { teen: 2 } },
  //       { text: "Professional and strong", traits: { "30s": 2 } },
  //       { text: "Small and meaningful", traits: { "50+": 2 } },
  //       { text: "Fun and wide", traits: { "20s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Which outfit feels most 'you'?",
  //     multiple: false,
  //     options: [
  //       { text: "Stylish neutral-toned layers", traits: { "30s": 2 } },
  //       { text: "Something colorful and mismatched", traits: { teen: 2 } },
  //       { text: "Trendy crop top and jeans", traits: { "20s": 2 } },
  //       { text: "Cozy cardigan and slacks", traits: { "50+": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Which word best describes your vibe?",
  //     multiple: false,
  //     options: [
  //       { text: "Playful", traits: { teen: 2 } },
  //       { text: "Wise", traits: { "50+": 2 } },
  //       { text: "Energetic", traits: { "20s": 2 } },
  //       { text: "Balanced", traits: { "30s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "In a group project, you're the one who:",
  //     multiple: true,
  //     options: [
  //       { text: "Distracts everyone", traits: { teen: 2 } },
  //       { text: "Organizes everything", traits: { "50+": 2 } },
  //       { text: "Adds creativity", traits: { "20s": 2 } },
  //       { text: "Leads with logic", traits: { "30s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "Which color palette attracts you most?",
  //     multiple: false,
  //     options: [
  //       { text: "Neutrals and sleek tones", traits: { "30s": 2 } },
  //       { text: "Neon and rainbow", traits: { teen: 2 } },
  //       { text: "Earth tones", traits: { "50+": 2 } },
  //       { text: "Bright summer shades", traits: { "20s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "You believe love is:",
  //     multiple: false,
  //     options: [
  //       { text: "Fun and exciting", traits: { "20s": 2 } },
  //       { text: "A steady flame", traits: { "50+": 2 } },
  //       { text: "A movie plot", traits: { teen: 2 } },
  //       { text: "Mutual respect", traits: { "30s": 2 } },
  //     ],
  //   },
  //   {
  //     question: "How do you usually feel on your birthday?",
  //     multiple: true,
  //     options: [
  //       { text: "Reflective and calm", traits: { "30s": 2 } },
  //       { text: "Screaming with excitement", traits: { teen: 2 } },
  //       { text: "Grateful for memories", traits: { "50+": 2 } },
  //       { text: "Hyped for the party", traits: { "20s": 2 } },
  //     ],
  //   },
  // ],
  // // How empathetic are you?
  // 14: [
  //   {
  //     question: "You see someone crying on the street. What do you do?",
  //     multiple: true,
  //     options: [
  //       { text: "Offer help and ask what's wrong", traits: { high: 2 } },
  //       { text: "Feel emotional but stay silent", traits: { medium: 2 } },
  //       { text: "Look away, it's not your business", traits: { low: 2 } },
  //       { text: "Get overwhelmed and walk off", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "A friend is venting. You usually:",
  //     multiple: true,
  //     options: [
  //       { text: "Listen and comfort them", traits: { high: 2 } },
  //       { text: "Give quick advice", traits: { medium: 2 } },
  //       { text: "Change the topic", traits: { low: 2 } },
  //       { text: "Feel bored or drained", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "When watching a sad movie, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Cry easily", traits: { high: 2 } },
  //       { text: "Feel something but hold it in", traits: { medium: 2 } },
  //       { text: "Rarely feel anything", traits: { low: 2 } },
  //       { text: "Zone out", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Someone gets angry at you unfairly. You...",
  //     multiple: true,
  //     options: [
  //       { text: "Try to understand their side", traits: { high: 2 } },
  //       { text: "Get defensive", traits: { medium: 2 } },
  //       { text: "Ignore them", traits: { low: 2 } },
  //       { text: "Hold a grudge", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Do you absorb others’ emotions?",
  //     multiple: true,
  //     options: [
  //       { text: "Yes, like a sponge", traits: { high: 2 } },
  //       { text: "Sometimes", traits: { medium: 2 } },
  //       { text: "Rarely", traits: { low: 2 } },
  //       { text: "Never, I stay detached", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You hear a sad story from a stranger. You:",
  //     multiple: true,
  //     options: [
  //       { text: "Tear up and offer support", traits: { high: 2 } },
  //       { text: "Nod and feel bad", traits: { medium: 2 } },
  //       { text: "Think it's exaggerated", traits: { low: 2 } },
  //       { text: "Don’t react much", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question:
  //       "Your friend is excited about something you don't care about. You:",
  //     multiple: true,
  //     options: [
  //       { text: "Act supportive anyway", traits: { high: 2 } },
  //       { text: "Smile and move on", traits: { medium: 2 } },
  //       { text: "Say 'why does that matter?'", traits: { low: 2 } },
  //       { text: "Complain about your own issues", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Do you feel guilt easily?",
  //     multiple: true,
  //     options: [
  //       { text: "Yes, even for small things", traits: { high: 2 } },
  //       { text: "Sometimes", traits: { medium: 2 } },
  //       { text: "Only when I really mess up", traits: { low: 2 } },
  //       { text: "Almost never", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "When someone is sad around you, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Feel it deeply", traits: { high: 2 } },
  //       { text: "Notice but don’t react much", traits: { medium: 2 } },
  //       { text: "Avoid them", traits: { low: 2 } },
  //       { text: "Get annoyed", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "In conflicts, you often...",
  //     multiple: true,
  //     options: [
  //       { text: "Seek to resolve and understand", traits: { high: 2 } },
  //       { text: "State your point calmly", traits: { medium: 2 } },
  //       { text: "Insist you're right", traits: { low: 2 } },
  //       { text: "Leave the conversation", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How do you react to someone else's success?",
  //     multiple: true,
  //     options: [
  //       { text: "Genuinely happy", traits: { high: 2 } },
  //       { text: "Happy but also compare yourself", traits: { medium: 2 } },
  //       { text: "Jealous", traits: { low: 2 } },
  //       { text: "Dismissive", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Do animals make you emotional?",
  //     multiple: true,
  //     options: [
  //       { text: "Yes, deeply", traits: { high: 2 } },
  //       { text: "Sometimes", traits: { medium: 2 } },
  //       { text: "Not really", traits: { low: 2 } },
  //       { text: "They're just animals", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You accidentally hurt someone’s feelings. You...",
  //     multiple: true,
  //     options: [
  //       { text: "Apologize and feel bad", traits: { high: 2 } },
  //       { text: "Say sorry but don’t dwell", traits: { medium: 2 } },
  //       { text: "Blame them for overreacting", traits: { low: 2 } },
  //       { text: "Ignore it", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Are you often described as ‘too sensitive’?",
  //     multiple: true,
  //     options: [
  //       { text: "Yes, and I accept it", traits: { high: 2 } },
  //       { text: "Sometimes", traits: { medium: 2 } },
  //       { text: "Rarely", traits: { low: 2 } },
  //       { text: "Never, I’m rational", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Can you tell when someone’s faking a smile?",
  //     multiple: true,
  //     options: [
  //       { text: "Yes, always", traits: { high: 2 } },
  //       { text: "Sometimes", traits: { medium: 2 } },
  //       { text: "Depends", traits: { low: 2 } },
  //       { text: "No, I don’t notice", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You see a child in distress. You...",
  //     multiple: true,
  //     options: [
  //       { text: "Rush to help", traits: { high: 2 } },
  //       { text: "Find someone who can help", traits: { medium: 2 } },
  //       { text: "Watch but don’t act", traits: { low: 2 } },
  //       { text: "Avoid the scene", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Do you often check on your friends?",
  //     multiple: true,
  //     options: [
  //       { text: "Yes, regularly", traits: { high: 2 } },
  //       { text: "Sometimes", traits: { medium: 2 } },
  //       { text: "Rarely", traits: { low: 2 } },
  //       { text: "Only when I need something", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Your friend cancels plans because they’re sad. You...",
  //     multiple: true,
  //     options: [
  //       { text: "Understand and offer support", traits: { high: 2 } },
  //       {
  //         text: "Say it's okay, but feel a little hurt",
  //         traits: { medium: 2 },
  //       },
  //       { text: "Get annoyed", traits: { low: 2 } },
  //       { text: "Complain", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How do you react to world problems?",
  //     multiple: true,
  //     options: [
  //       { text: "They really affect me emotionally", traits: { high: 2 } },
  //       { text: "I care, but not deeply", traits: { medium: 2 } },
  //       { text: "They don’t affect me", traits: { low: 2 } },
  //       { text: "I avoid all news", traits: { low: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Do you understand people’s pain without them speaking?",
  //     multiple: true,
  //     options: [
  //       { text: "Yes, often", traits: { high: 2 } },
  //       { text: "Sometimes", traits: { medium: 2 } },
  //       { text: "Rarely", traits: { low: 2 } },
  //       { text: "No, that’s not my skill", traits: { low: 1 } },
  //     ],
  //   },
  // ],
  // // Are you more introverted or extroverted?
  // 15: [
  //   {
  //     question: "How do you feel at parties?",
  //     multiple: true,
  //     options: [
  //       { text: "Energized and excited", traits: { extrovert: 2 } },
  //       { text: "Comfortable, depends on the people", traits: { ambivert: 2 } },
  //       { text: "Drained and awkward", traits: { introvert: 2 } },
  //       { text: "Prefer to stay at home", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "When making decisions, you rely on...",
  //     multiple: true,
  //     options: [
  //       { text: "Talking it out loud with others", traits: { extrovert: 2 } },
  //       {
  //         text: "A mix of internal thought and some advice",
  //         traits: { ambivert: 2 },
  //       },
  //       { text: "Deep inner reflection", traits: { introvert: 2 } },
  //       { text: "I avoid decisions altogether", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How do you recharge?",
  //     multiple: true,
  //     options: [
  //       { text: "Being around people", traits: { extrovert: 2 } },
  //       { text: "Depends on mood", traits: { ambivert: 2 } },
  //       { text: "Spending time alone", traits: { introvert: 2 } },
  //       { text: "Sleeping it off", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Do you enjoy small talk?",
  //     multiple: true,
  //     options: [
  //       { text: "Yes, I thrive in it", traits: { extrovert: 2 } },
  //       { text: "If I’m in the mood", traits: { ambivert: 2 } },
  //       { text: "I dread it", traits: { introvert: 2 } },
  //       { text: "I avoid it completely", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How big is your social circle?",
  //     multiple: true,
  //     options: [
  //       { text: "Large and active", traits: { extrovert: 2 } },
  //       { text: "A balanced group", traits: { ambivert: 2 } },
  //       { text: "A few close friends", traits: { introvert: 2 } },
  //       { text: "Just me and maybe my cat", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You’re invited to a weekend trip with strangers. You feel...",
  //     multiple: true,
  //     options: [
  //       { text: "Excited to meet new people", traits: { extrovert: 2 } },
  //       { text: "Open, but cautious", traits: { ambivert: 2 } },
  //       { text: "Nervous and unsure", traits: { introvert: 2 } },
  //       { text: "Already planning an excuse", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How do you handle silence in conversations?",
  //     multiple: true,
  //     options: [
  //       { text: "I fill it immediately", traits: { extrovert: 2 } },
  //       { text: "Depends on the context", traits: { ambivert: 2 } },
  //       { text: "I’m comfortable with it", traits: { introvert: 2 } },
  //       { text: "I disappear before it happens", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "In group work, you tend to...",
  //     multiple: true,
  //     options: [
  //       { text: "Take charge and speak up", traits: { extrovert: 2 } },
  //       { text: "Participate when needed", traits: { ambivert: 2 } },
  //       { text: "Do the work quietly", traits: { introvert: 2 } },
  //       { text: "Avoid speaking", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "When you meet someone new, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Start the conversation", traits: { extrovert: 2 } },
  //       { text: "Talk if they talk first", traits: { ambivert: 2 } },
  //       { text: "Say hi and go quiet", traits: { introvert: 2 } },
  //       { text: "Hide behind someone", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Your ideal weekend?",
  //     multiple: true,
  //     options: [
  //       { text: "Out with friends", traits: { extrovert: 2 } },
  //       { text: "One night out, one night in", traits: { ambivert: 2 } },
  //       { text: "Home with a book or movie", traits: { introvert: 2 } },
  //       { text: "Avoiding any plans", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How do you feel after social events?",
  //     multiple: true,
  //     options: [
  //       { text: "Energized and happy", traits: { extrovert: 2 } },
  //       { text: "Depends on the people", traits: { ambivert: 2 } },
  //       { text: "Drained", traits: { introvert: 2 } },
  //       { text: "Exhausted and anxious", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "In class or meetings, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Speak often", traits: { extrovert: 2 } },
  //       { text: "Speak if I have something to say", traits: { ambivert: 2 } },
  //       { text: "Prefer not to talk", traits: { introvert: 2 } },
  //       { text: "Pray I don’t get called", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How do you handle being alone?",
  //     multiple: true,
  //     options: [
  //       { text: "I get bored quickly", traits: { extrovert: 2 } },
  //       { text: "Some alone time is nice", traits: { ambivert: 2 } },
  //       { text: "I love solitude", traits: { introvert: 2 } },
  //       { text: "Alone is my default", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How fast do you trust people?",
  //     multiple: true,
  //     options: [
  //       { text: "Very easily", traits: { extrovert: 2 } },
  //       { text: "With time", traits: { ambivert: 2 } },
  //       { text: "Takes a while", traits: { introvert: 2 } },
  //       { text: "I don’t really trust anyone", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Do you like being the center of attention?",
  //     multiple: true,
  //     options: [
  //       { text: "Yes, I enjoy it", traits: { extrovert: 2 } },
  //       { text: "Sometimes", traits: { ambivert: 2 } },
  //       { text: "Not really", traits: { introvert: 2 } },
  //       { text: "Absolutely not", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How do you start your day?",
  //     multiple: true,
  //     options: [
  //       { text: "Chatting with people", traits: { extrovert: 2 } },
  //       { text: "Quick social check-ins", traits: { ambivert: 2 } },
  //       { text: "Quiet time for myself", traits: { introvert: 2 } },
  //       { text: "Avoid everyone", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "What kind of conversations do you enjoy?",
  //     multiple: true,
  //     options: [
  //       { text: "Any! I love to talk", traits: { extrovert: 2 } },
  //       { text: "Deep ones mostly", traits: { ambivert: 2 } },
  //       { text: "Few, but meaningful", traits: { introvert: 2 } },
  //       { text: "Almost none", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How do you feel about public speaking?",
  //     multiple: true,
  //     options: [
  //       { text: "Love it!", traits: { extrovert: 2 } },
  //       { text: "I manage okay", traits: { ambivert: 2 } },
  //       { text: "Not my thing", traits: { introvert: 2 } },
  //       { text: "I avoid it at all costs", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Your friends describe you as...",
  //     multiple: true,
  //     options: [
  //       { text: "Loud and social", traits: { extrovert: 2 } },
  //       { text: "Balanced and thoughtful", traits: { ambivert: 2 } },
  //       { text: "Quiet and deep", traits: { introvert: 2 } },
  //       { text: "Hard to read", traits: { introvert: 1 } },
  //     ],
  //   },
  //   {
  //     question: "At a group dinner, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Tell stories and jokes", traits: { extrovert: 2 } },
  //       { text: "Chat with a few", traits: { ambivert: 2 } },
  //       { text: "Listen mostly", traits: { introvert: 2 } },
  //       { text: "Hope it ends soon", traits: { introvert: 1 } },
  //     ],
  //   },
  // ],
  // // What kind of leader are you?
  // 16: [
  //   {
  //     question: "How do you make decisions?",
  //     multiple: true,
  //     options: [
  //       { text: "Based on a clear vision", traits: { visionary: 2 } },
  //       { text: "After consulting the team", traits: { democratic: 2 } },
  //       {
  //         text: "By thinking of others’ well-being",
  //         traits: { supportive: 2 },
  //       },
  //       { text: "I decide quickly and firmly", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "Your team is unmotivated. What do you do?",
  //     multiple: true,
  //     options: [
  //       {
  //         text: "Inspire them with the bigger picture",
  //         traits: { visionary: 2 },
  //       },
  //       { text: "Ask for their input and adjust", traits: { democratic: 2 } },
  //       { text: "Have one-on-one check-ins", traits: { supportive: 2 } },
  //       {
  //         text: "Give clear orders and tighten discipline",
  //         traits: { directive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "How do you handle conflict?",
  //     multiple: true,
  //     options: [
  //       { text: "Bring the group together to talk", traits: { democratic: 2 } },
  //       { text: "Empathize and listen", traits: { supportive: 2 } },
  //       { text: "Refocus everyone on the goal", traits: { visionary: 2 } },
  //       { text: "Step in and assert authority", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "What’s your leadership strength?",
  //     multiple: true,
  //     options: [
  //       { text: "Inspiring and future-focused", traits: { visionary: 2 } },
  //       { text: "Inclusive and collaborative", traits: { democratic: 2 } },
  //       {
  //         text: "Caring and emotionally intelligent",
  //         traits: { supportive: 2 },
  //       },
  //       { text: "Decisive and commanding", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "How do you delegate tasks?",
  //     multiple: true,
  //     options: [
  //       { text: "Give people autonomy to innovate", traits: { visionary: 2 } },
  //       {
  //         text: "Distribute based on group consensus",
  //         traits: { democratic: 2 },
  //       },
  //       { text: "Assign based on individual needs", traits: { supportive: 2 } },
  //       {
  //         text: "Directly assign with clear expectations",
  //         traits: { directive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "How do you open meetings?",
  //     multiple: true,
  //     options: [
  //       { text: "Share a motivating message", traits: { visionary: 2 } },
  //       { text: "Start by asking for thoughts", traits: { democratic: 2 } },
  //       {
  //         text: "Check in on how everyone is doing",
  //         traits: { supportive: 2 },
  //       },
  //       {
  //         text: "Outline the agenda and expectations",
  //         traits: { directive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "When deadlines are tight, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Rally everyone with a vision", traits: { visionary: 2 } },
  //       { text: "Discuss priorities with the team", traits: { democratic: 2 } },
  //       {
  //         text: "Support everyone’s emotional state",
  //         traits: { supportive: 2 },
  //       },
  //       {
  //         text: "Take control and push things forward",
  //         traits: { directive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "How do you give feedback?",
  //     multiple: true,
  //     options: [
  //       {
  //         text: "Frame it in terms of future potential",
  //         traits: { visionary: 2 },
  //       },
  //       { text: "Ask them to reflect first", traits: { democratic: 2 } },
  //       { text: "Use empathy and encouragement", traits: { supportive: 2 } },
  //       { text: "Be direct and to the point", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "Your leadership style is shaped most by...",
  //     multiple: true,
  //     options: [
  //       { text: "My goals and vision", traits: { visionary: 2 } },
  //       { text: "The voices of my team", traits: { democratic: 2 } },
  //       { text: "The emotions in the room", traits: { supportive: 2 } },
  //       { text: "My need for efficiency", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "In team brainstorming, you usually...",
  //     multiple: true,
  //     options: [
  //       { text: "Offer a bold direction to explore", traits: { visionary: 2 } },
  //       {
  //         text: "Let everyone speak and build on each other",
  //         traits: { democratic: 2 },
  //       },
  //       { text: "Check who feels left out", traits: { supportive: 2 } },
  //       { text: "Keep the group focused", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "When under pressure, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Focus on long-term strategy", traits: { visionary: 2 } },
  //       { text: "Pause to check the team’s view", traits: { democratic: 2 } },
  //       { text: "Help people stay calm", traits: { supportive: 2 } },
  //       { text: "Act quickly and firmly", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "How do you want to be remembered as a leader?",
  //     multiple: true,
  //     options: [
  //       { text: "A visionary who changed things", traits: { visionary: 2 } },
  //       { text: "A leader who valued everyone", traits: { democratic: 2 } },
  //       { text: "A mentor who cared deeply", traits: { supportive: 2 } },
  //       {
  //         text: "A strong and reliable decision-maker",
  //         traits: { directive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "How do you handle team mistakes?",
  //     multiple: true,
  //     options: [
  //       { text: "Relate them to a bigger goal", traits: { visionary: 2 } },
  //       { text: "Ask the group what happened", traits: { democratic: 2 } },
  //       { text: "Reassure and encourage growth", traits: { supportive: 2 } },
  //       {
  //         text: "Point out errors and give solutions",
  //         traits: { directive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "Which best describes your leadership role?",
  //     multiple: true,
  //     options: [
  //       { text: "A visionary guide", traits: { visionary: 2 } },
  //       { text: "A democratic facilitator", traits: { democratic: 2 } },
  //       { text: "A supportive coach", traits: { supportive: 2 } },
  //       { text: "A firm captain", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "When someone is struggling, you...",
  //     multiple: true,
  //     options: [
  //       {
  //         text: "Encourage them with future possibilities",
  //         traits: { visionary: 2 },
  //       },
  //       { text: "Involve the team to support", traits: { democratic: 2 } },
  //       { text: "Offer emotional support", traits: { supportive: 2 } },
  //       { text: "Push them to act anyway", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "In a crisis, your instinct is to...",
  //     multiple: true,
  //     options: [
  //       {
  //         text: "Reframe it in terms of opportunity",
  //         traits: { visionary: 2 },
  //       },
  //       {
  //         text: "Ask for group input before acting",
  //         traits: { democratic: 2 },
  //       },
  //       { text: "Check on everyone emotionally", traits: { supportive: 2 } },
  //       { text: "Take charge immediately", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "What motivates your leadership?",
  //     multiple: true,
  //     options: [
  //       { text: "The dream of impact", traits: { visionary: 2 } },
  //       { text: "Helping the group thrive", traits: { democratic: 2 } },
  //       { text: "Helping people feel seen", traits: { supportive: 2 } },
  //       { text: "Achieving clear results", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "What frustrates you in others?",
  //     multiple: true,
  //     options: [
  //       { text: "Lack of vision", traits: { visionary: 2 } },
  //       { text: "Not listening to each other", traits: { democratic: 2 } },
  //       { text: "Coldness or insensitivity", traits: { supportive: 2 } },
  //       { text: "Lack of discipline", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "Which compliment means the most?",
  //     multiple: true,
  //     options: [
  //       { text: "You inspired me", traits: { visionary: 2 } },
  //       { text: "You made us feel heard", traits: { democratic: 2 } },
  //       { text: "You were always there for me", traits: { supportive: 2 } },
  //       { text: "You always got things done", traits: { directive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "One word to describe your leadership?",
  //     multiple: true,
  //     options: [
  //       { text: "Visionary", traits: { visionary: 2 } },
  //       { text: "Collaborative", traits: { democratic: 2 } },
  //       { text: "Compassionate", traits: { supportive: 2 } },
  //       { text: "Assertive", traits: { directive: 2 } },
  //     ],
  //   },
  // ],
  // // What's your communication style?
  // 17: [
  //   {
  //     question: "How do you express disagreement?",
  //     multiple: true,
  //     options: [
  //       { text: "Confidently and respectfully", traits: { assertive: 2 } },
  //       { text: "I usually stay quiet", traits: { passive: 2 } },
  //       { text: "Directly and bluntly", traits: { aggressive: 2 } },
  //       { text: "I make sarcastic remarks", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "When you're upset, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Explain calmly how you feel", traits: { assertive: 2 } },
  //       { text: "Keep it to yourself", traits: { passive: 2 } },
  //       { text: "Raise your voice", traits: { aggressive: 2 } },
  //       { text: "Give the silent treatment", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "How do you ask for help?",
  //     multiple: true,
  //     options: [
  //       { text: "Openly and without shame", traits: { assertive: 2 } },
  //       { text: "Only if I really have to", traits: { passive: 2 } },
  //       { text: "With a demanding tone", traits: { aggressive: 2 } },
  //       { text: "Hint around it", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "In a group discussion, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Share your opinion clearly", traits: { assertive: 2 } },
  //       { text: "Avoid speaking up", traits: { passive: 2 } },
  //       { text: "Dominate the conversation", traits: { aggressive: 2 } },
  //       { text: "Make underhanded comments", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "If someone criticizes you, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Listen and respond respectfully", traits: { assertive: 2 } },
  //       { text: "Take it silently", traits: { passive: 2 } },
  //       { text: "Get defensive", traits: { aggressive: 2 } },
  //       {
  //         text: "Act like it doesn’t bother you, but stay upset",
  //         traits: { passiveAggressive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "When giving feedback, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Balance honesty with kindness", traits: { assertive: 2 } },
  //       { text: "Avoid giving it", traits: { passive: 2 } },
  //       { text: "Point out flaws directly", traits: { aggressive: 2 } },
  //       {
  //         text: "Say something nice, but leave a sting",
  //         traits: { passiveAggressive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "If a friend forgets your birthday, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Tell them how you feel calmly", traits: { assertive: 2 } },
  //       {
  //         text: "Say it’s okay and hide your feelings",
  //         traits: { passive: 2 },
  //       },
  //       { text: "Confront them angrily", traits: { aggressive: 2 } },
  //       {
  //         text: "Pretend it’s fine but act distant",
  //         traits: { passiveAggressive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "How do you respond to being interrupted?",
  //     multiple: true,
  //     options: [
  //       { text: "Ask to finish your thought", traits: { assertive: 2 } },
  //       { text: "Let them talk over you", traits: { passive: 2 } },
  //       { text: "Cut them off right back", traits: { aggressive: 2 } },
  //       { text: "Make a side comment", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "When someone hurts you, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Express it directly and calmly", traits: { assertive: 2 } },
  //       { text: "Keep your distance silently", traits: { passive: 2 } },
  //       { text: "Let them know they messed up", traits: { aggressive: 2 } },
  //       {
  //         text: "Act cold but say 'I’m fine'",
  //         traits: { passiveAggressive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "How do you handle compliments?",
  //     multiple: true,
  //     options: [
  //       { text: "Accept them graciously", traits: { assertive: 2 } },
  //       { text: "Deflect them", traits: { passive: 2 } },
  //       { text: "Say 'Obviously'", traits: { aggressive: 2 } },
  //       { text: "Roll your eyes but smile", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "What’s your texting style?",
  //     multiple: true,
  //     options: [
  //       { text: "Clear and direct", traits: { assertive: 2 } },
  //       { text: "Apologetic or hesitant", traits: { passive: 2 } },
  //       { text: "Short and blunt", traits: { aggressive: 2 } },
  //       { text: "Subtle and vague", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "If you don’t agree with a group decision...",
  //     multiple: true,
  //     options: [
  //       {
  //         text: "Voice your concerns constructively",
  //         traits: { assertive: 2 },
  //       },
  //       { text: "Go along with it", traits: { passive: 2 } },
  //       {
  //         text: "Try to convince them aggressively",
  //         traits: { aggressive: 2 },
  //       },
  //       {
  //         text: "Sabotage it later silently",
  //         traits: { passiveAggressive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "At work, you're known for...",
  //     multiple: true,
  //     options: [
  //       { text: "Communicating openly and clearly", traits: { assertive: 2 } },
  //       { text: "Being quiet but kind", traits: { passive: 2 } },
  //       { text: "Being direct and tough", traits: { aggressive: 2 } },
  //       { text: "Making snarky jokes", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "When someone doesn't listen to you, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Repeat yourself calmly", traits: { assertive: 2 } },
  //       { text: "Give up", traits: { passive: 2 } },
  //       { text: "Get louder", traits: { aggressive: 2 } },
  //       {
  //         text: "Say 'Whatever' and walk away",
  //         traits: { passiveAggressive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "How do you handle being left out?",
  //     multiple: true,
  //     options: [
  //       { text: "Ask why directly", traits: { assertive: 2 } },
  //       { text: "Assume you're not wanted", traits: { passive: 2 } },
  //       { text: "Confront someone angrily", traits: { aggressive: 2 } },
  //       {
  //         text: "Make sarcastic remarks later",
  //         traits: { passiveAggressive: 2 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "What’s your tone usually like?",
  //     multiple: true,
  //     options: [
  //       { text: "Confident and respectful", traits: { assertive: 2 } },
  //       { text: "Soft and unsure", traits: { passive: 2 } },
  //       { text: "Harsh and loud", traits: { aggressive: 2 } },
  //       { text: "Slightly mocking", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "In arguments, you...",
  //     multiple: true,
  //     options: [
  //       { text: "Stick to your point calmly", traits: { assertive: 2 } },
  //       { text: "Let the other person win", traits: { passive: 2 } },
  //       { text: "Argue to dominate", traits: { aggressive: 2 } },
  //       { text: "Throw in passive digs", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "How do you usually say no?",
  //     multiple: true,
  //     options: [
  //       { text: "Firmly but kindly", traits: { assertive: 2 } },
  //       { text: "I don’t", traits: { passive: 2 } },
  //       { text: "I snap 'No!'", traits: { aggressive: 2 } },
  //       { text: "Say yes, then avoid it", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "Which line sounds most like you?",
  //     multiple: true,
  //     options: [
  //       { text: "Let’s find a solution together", traits: { assertive: 2 } },
  //       { text: "It’s okay, I guess", traits: { passive: 2 } },
  //       { text: "You’re wrong", traits: { aggressive: 2 } },
  //       { text: "Fine. Whatever", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  //   {
  //     question: "People describe your communication as...",
  //     multiple: true,
  //     options: [
  //       { text: "Respectful and clear", traits: { assertive: 2 } },
  //       { text: "Quiet and shy", traits: { passive: 2 } },
  //       { text: "Bold and harsh", traits: { aggressive: 2 } },
  //       { text: "Sarcastic and vague", traits: { passiveAggressive: 2 } },
  //     ],
  //   },
  // ],
  // // How do you react under stress?
  // 18: [
  //   {
  //     question:
  //       "You're about to speak in public. What’s your immediate thought?",
  //     multiple: false,
  //     options: [
  //       { text: "I’ve got this, I’m prepared.", traits: { calm: 1 } },
  //       { text: "What if I forget everything?", traits: { anxious: 1 } },
  //       { text: "Let’s just wing it!", traits: { impulsive: 1 } },
  //       { text: "I start sweating and pacing.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You receive unexpected criticism. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Listen and reflect calmly.", traits: { calm: 1 } },
  //       { text: "Feel like crying or panicking.", traits: { anxious: 1 } },
  //       { text: "Snap back instantly.", traits: { impulsive: 1 } },
  //       { text: "Shut down emotionally.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You're stuck in traffic and running late. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Breathe and turn up some music.", traits: { calm: 1 } },
  //       {
  //         text: "Keep checking the clock and stressing.",
  //         traits: { anxious: 1 },
  //       },
  //       { text: "Honk or take risky shortcuts.", traits: { impulsive: 1 } },
  //       { text: "Call someone to complain.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Deadline approaching and you're behind. What now?",
  //     multiple: false,
  //     options: [
  //       {
  //         text: "Prioritize and tackle things one by one.",
  //         traits: { calm: 1 },
  //       },
  //       { text: "Procrastinate and spiral in stress.", traits: { anxious: 1 } },
  //       { text: "Rush through without thinking.", traits: { impulsive: 1 } },
  //       { text: "Overthink instead of acting.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Someone insults you. First reaction?",
  //     multiple: false,
  //     options: [
  //       { text: "Let it go—it’s not worth it.", traits: { calm: 1 } },
  //       { text: "Start doubting yourself.", traits: { anxious: 1 } },
  //       { text: "Clap back with a savage line.", traits: { impulsive: 1 } },
  //       { text: "Freeze and say nothing.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Too many things happening at once. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Take a break to ground yourself.", traits: { calm: 1 } },
  //       { text: "Feel overwhelmed and anxious.", traits: { anxious: 1 } },
  //       {
  //         text: "Jump from task to task with no plan.",
  //         traits: { impulsive: 1 },
  //       },
  //       { text: "Mentally shut down.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Phone rings during a serious conversation. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Ignore it and stay focused.", traits: { calm: 1 } },
  //       { text: "Feel torn and distracted.", traits: { anxious: 1 } },
  //       {
  //         text: "Answer immediately without thinking.",
  //         traits: { impulsive: 1 },
  //       },
  //       { text: "Get irritated fast.", traits: { impulsive: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You made a mistake. What do you do?",
  //     multiple: false,
  //     options: [
  //       { text: "Admit it and fix it calmly.", traits: { calm: 1 } },
  //       { text: "Overthink it for hours.", traits: { anxious: 1 } },
  //       { text: "Deny or downplay it instantly.", traits: { impulsive: 1 } },
  //       {
  //         text: "Apologize repeatedly even if it wasn’t big.",
  //         traits: { anxious: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "Your plan fails last-minute. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Quickly adapt and regroup.", traits: { calm: 1 } },
  //       { text: "Get anxious and blame yourself.", traits: { anxious: 1 } },
  //       { text: "Change the plan randomly.", traits: { impulsive: 1 } },
  //       { text: "Panic and freeze.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Someone yells at you in public. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Stay composed and remove yourself.", traits: { calm: 1 } },
  //       { text: "Feel paralyzed and humiliated.", traits: { anxious: 1 } },
  //       { text: "Yell right back, louder.", traits: { impulsive: 1 } },
  //       { text: "Walk away but feel shaky.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You're blamed for something you didn’t do. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Explain your side calmly.", traits: { calm: 1 } },
  //       { text: "Panic and feel misunderstood.", traits: { anxious: 1 } },
  //       { text: "Get defensive right away.", traits: { impulsive: 1 } },
  //       {
  //         text: "Over-apologize just to end the conflict.",
  //         traits: { anxious: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "A close friend stops replying. What’s your reaction?",
  //     multiple: false,
  //     options: [
  //       { text: "Give them space and stay calm.", traits: { calm: 1 } },
  //       { text: "Assume you did something wrong.", traits: { anxious: 1 } },
  //       { text: "Send a flood of messages.", traits: { impulsive: 1 } },
  //       { text: "Feel ignored and overthink it.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You lose access to your phone for a day. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Enjoy the break from screens.", traits: { calm: 1 } },
  //       { text: "Feel panicky about missing out.", traits: { anxious: 1 } },
  //       {
  //         text: "Rush to borrow someone else's phone.",
  //         traits: { impulsive: 1 },
  //       },
  //       {
  //         text: "Keep thinking about what you’re missing.",
  //         traits: { anxious: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "You’re misunderstood in a group chat. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Clarify politely.", traits: { calm: 1 } },
  //       { text: "Feel embarrassed and exit the chat.", traits: { anxious: 1 } },
  //       { text: "Write in ALL CAPS to be heard.", traits: { impulsive: 1 } },
  //       { text: "Leave it and worry all day.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Someone cancels on you last-minute. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Understand and reschedule.", traits: { calm: 1 } },
  //       { text: "Feel unwanted and sad.", traits: { anxious: 1 } },
  //       { text: "Block them impulsively.", traits: { impulsive: 1 } },
  //       { text: "Pretend it’s fine but obsess later.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You forgot something important. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Fix what you can and stay calm.", traits: { calm: 1 } },
  //       { text: "Blame yourself harshly.", traits: { anxious: 1 } },
  //       { text: "Make excuses immediately.", traits: { impulsive: 1 } },
  //       { text: "Feel ashamed and avoid people.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Unexpected change in plans. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Adjust and go with the flow.", traits: { calm: 1 } },
  //       { text: "Get thrown off emotionally.", traits: { anxious: 1 } },
  //       {
  //         text: "Cancel everything out of frustration.",
  //         traits: { impulsive: 1 },
  //       },
  //       { text: "Feel like you lost control.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You’re running late. How do you handle it?",
  //     multiple: false,
  //     options: [
  //       { text: "Inform them and stay calm.", traits: { calm: 1 } },
  //       { text: "Rush in panic and stress.", traits: { anxious: 1 } },
  //       { text: "Break traffic rules or run.", traits: { impulsive: 1 } },
  //       {
  //         text: "Apologize repeatedly the whole time.",
  //         traits: { anxious: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "Conflict between two friends. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Stay neutral and mediate calmly.", traits: { calm: 1 } },
  //       { text: "Feel anxious and avoid both.", traits: { anxious: 1 } },
  //       { text: "Take a side impulsively.", traits: { impulsive: 1 } },
  //       { text: "Overthink your every word.", traits: { anxious: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Multiple notifications appear while working. You...",
  //     multiple: false,
  //     options: [
  //       { text: "Ignore and finish the task.", traits: { calm: 1 } },
  //       { text: "Get distracted and overwhelmed.", traits: { anxious: 1 } },
  //       { text: "Drop everything to check them.", traits: { impulsive: 1 } },
  //       {
  //         text: "Feel you’re missing something urgent.",
  //         traits: { anxious: 1 },
  //       },
  //     ],
  //   },
  // ],
  // // What's your love language?
  // 19: [
  //   {
  //     question: "Which gestures make you feel most loved?",
  //     multiple: true,
  //     options: [
  //       { text: "A long warm hug", traits: { physicalTouch: 1 } },
  //       { text: "A thoughtful gift", traits: { receivingGifts: 1 } },
  //       {
  //         text: "Someone spending the whole day with you",
  //         traits: { qualityTime: 1 },
  //       },
  //       {
  //         text: "Hearing 'I’m proud of you'",
  //         traits: { wordsOfAffirmation: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "You’ve had a tough day. What comforts you most?",
  //     multiple: true,
  //     options: [
  //       { text: "A tight hug", traits: { physicalTouch: 1 } },
  //       {
  //         text: "Someone doing a small chore for you",
  //         traits: { actsOfService: 1 },
  //       },
  //       {
  //         text: "Being asked to talk about your day",
  //         traits: { qualityTime: 1 },
  //       },
  //       { text: "A loving message", traits: { wordsOfAffirmation: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Which compliment would mean the most?",
  //     multiple: true,
  //     options: [
  //       {
  //         text: "You're amazing — I’m lucky to have you.",
  //         traits: { wordsOfAffirmation: 1 },
  //       },
  //       { text: "Let me help you with that.", traits: { actsOfService: 1 } },
  //       {
  //         text: "I cleared my day to be with you.",
  //         traits: { qualityTime: 1 },
  //       },
  //       {
  //         text: "This made me think of you *gives gift*",
  //         traits: { receivingGifts: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "In a relationship, what makes you feel closest?",
  //     multiple: true,
  //     options: [
  //       { text: "Holding hands or cuddling", traits: { physicalTouch: 1 } },
  //       { text: "Being heard and understood", traits: { qualityTime: 1 } },
  //       { text: "Surprises or small presents", traits: { receivingGifts: 1 } },
  //       {
  //         text: "Doing things together, like cooking",
  //         traits: { actsOfService: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "Your partner forgets your birthday. What hurts most?",
  //     multiple: true,
  //     options: [
  //       { text: "They didn’t get you anything", traits: { receivingGifts: 1 } },
  //       {
  //         text: "They didn’t say anything kind",
  //         traits: { wordsOfAffirmation: 1 },
  //       },
  //       { text: "They weren’t around", traits: { qualityTime: 1 } },
  //       { text: "No hug or affection", traits: { physicalTouch: 1 } },
  //     ],
  //   },
  //   {
  //     question: "What makes a date special?",
  //     multiple: true,
  //     options: [
  //       { text: "They touch your hand gently", traits: { physicalTouch: 1 } },
  //       {
  //         text: "They plan everything perfectly",
  //         traits: { actsOfService: 1 },
  //       },
  //       {
  //         text: "They say meaningful things",
  //         traits: { wordsOfAffirmation: 1 },
  //       },
  //       {
  //         text: "They surprise you with a small gift",
  //         traits: { receivingGifts: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "When you're upset, what helps?",
  //     multiple: true,
  //     options: [
  //       { text: "Being held", traits: { physicalTouch: 1 } },
  //       { text: "Someone showing up and staying", traits: { qualityTime: 1 } },
  //       { text: "A handwritten letter", traits: { wordsOfAffirmation: 1 } },
  //       { text: "Them cooking for you", traits: { actsOfService: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Which moment warms your heart most?",
  //     multiple: true,
  //     options: [
  //       { text: "A kiss on the forehead", traits: { physicalTouch: 1 } },
  //       { text: "A surprise coffee delivery", traits: { receivingGifts: 1 } },
  //       { text: "A shared silent moment", traits: { qualityTime: 1 } },
  //       { text: "An honest 'I admire you'", traits: { wordsOfAffirmation: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You're sick in bed. What makes you feel loved?",
  //     multiple: true,
  //     options: [
  //       { text: "Someone brings you soup", traits: { actsOfService: 1 } },
  //       { text: "They stay next to you", traits: { qualityTime: 1 } },
  //       { text: "They kiss your forehead", traits: { physicalTouch: 1 } },
  //       {
  //         text: "They text you loving words",
  //         traits: { wordsOfAffirmation: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question:
  //       "Your friend says: 'This reminded me of you.' What do you hope follows?",
  //     multiple: true,
  //     options: [
  //       { text: "A kind compliment", traits: { wordsOfAffirmation: 1 } },
  //       { text: "They brought you the item", traits: { receivingGifts: 1 } },
  //       { text: "They make time to call you", traits: { qualityTime: 1 } },
  //       { text: "They offer a warm hug", traits: { physicalTouch: 1 } },
  //     ],
  //   },
  //   {
  //     question: "A great morning starts with...",
  //     multiple: true,
  //     options: [
  //       { text: "A kiss or cuddle", traits: { physicalTouch: 1 } },
  //       {
  //         text: "A sweet good morning text",
  //         traits: { wordsOfAffirmation: 1 },
  //       },
  //       {
  //         text: "Someone making breakfast for you",
  //         traits: { actsOfService: 1 },
  //       },
  //       { text: "A slow coffee together", traits: { qualityTime: 1 } },
  //     ],
  //   },
  //   {
  //     question: "What gesture says 'I love you' the loudest?",
  //     multiple: true,
  //     options: [
  //       { text: "A hug from behind", traits: { physicalTouch: 1 } },
  //       {
  //         text: "A note left on your pillow",
  //         traits: { wordsOfAffirmation: 1 },
  //       },
  //       {
  //         text: "Cleaning your space without asking",
  //         traits: { actsOfService: 1 },
  //       },
  //       {
  //         text: "Your favorite snack bought randomly",
  //         traits: { receivingGifts: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "You're feeling distant. What fixes it?",
  //     multiple: true,
  //     options: [
  //       { text: "One-on-one time together", traits: { qualityTime: 1 } },
  //       { text: "An unexpected touch", traits: { physicalTouch: 1 } },
  //       { text: "Doing chores together", traits: { actsOfService: 1 } },
  //       { text: "A kind, deep message", traits: { wordsOfAffirmation: 1 } },
  //     ],
  //   },
  //   {
  //     question: "How do you express love the easiest?",
  //     multiple: true,
  //     options: [
  //       { text: "Through hugs and kisses", traits: { physicalTouch: 1 } },
  //       { text: "Doing things for others", traits: { actsOfService: 1 } },
  //       { text: "Buying meaningful gifts", traits: { receivingGifts: 1 } },
  //       { text: "Saying kind words", traits: { wordsOfAffirmation: 1 } },
  //     ],
  //   },
  //   {
  //     question: "You feel closest when...",
  //     multiple: true,
  //     options: [
  //       { text: "You're physically close", traits: { physicalTouch: 1 } },
  //       { text: "You're having a deep talk", traits: { qualityTime: 1 } },
  //       {
  //         text: "They help you without being asked",
  //         traits: { actsOfService: 1 },
  //       },
  //       {
  //         text: "They surprise you with something",
  //         traits: { receivingGifts: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "A gift is special because...",
  //     multiple: true,
  //     options: [
  //       { text: "It shows they know you", traits: { receivingGifts: 1 } },
  //       { text: "They thought about you", traits: { wordsOfAffirmation: 1 } },
  //       {
  //         text: "It comes with time spent together",
  //         traits: { qualityTime: 1 },
  //       },
  //       { text: "It came with a warm hug", traits: { physicalTouch: 1 } },
  //     ],
  //   },
  //   {
  //     question: "What do you need after a long day?",
  //     multiple: true,
  //     options: [
  //       { text: "Peaceful cuddles", traits: { physicalTouch: 1 } },
  //       { text: "Someone helping around", traits: { actsOfService: 1 } },
  //       { text: "A cozy chat", traits: { qualityTime: 1 } },
  //       { text: "Loving affirmations", traits: { wordsOfAffirmation: 1 } },
  //     ],
  //   },
  //   {
  //     question: "Which action brings you closer?",
  //     multiple: true,
  //     options: [
  //       { text: "Spending time without phones", traits: { qualityTime: 1 } },
  //       {
  //         text: "They do something *just* for you",
  //         traits: { actsOfService: 1 },
  //       },
  //       { text: "They hold your hand in public", traits: { physicalTouch: 1 } },
  //       {
  //         text: "They say they appreciate you",
  //         traits: { wordsOfAffirmation: 1 },
  //       },
  //     ],
  //   },
  //   {
  //     question: "What love language do you wish others used more with you?",
  //     multiple: true,
  //     options: [
  //       { text: "Physical affection", traits: { physicalTouch: 1 } },
  //       { text: "Thoughtful surprises", traits: { receivingGifts: 1 } },
  //       { text: "Quality, uninterrupted time", traits: { qualityTime: 1 } },
  //       { text: "Support through actions", traits: { actsOfService: 1 } },
  //     ],
  //   },
  // ],
};
