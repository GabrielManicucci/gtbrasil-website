/* eslint-disable react/no-children-prop */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Motion } from "../motion";

export type FrequencesQuestionType = {
  question: string;
  response: string;
  value: string;
};

export const frequencesQuestion: FrequencesQuestionType[] = [
  {
    question: "Lorem Ipsum ?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus justo, eu pharetra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    value: "item 1",
  },
  {
    question: "Lorem Ipsum ?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus justo, eu pharetra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    value: "item 2",
  },
  {
    question: "Lorem Ipsum ?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus justo, eu pharetra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    value: "item 3",
  },
  {
    question: "Lorem Ipsum ?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus justo, eu pharetra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    value: "item 4",
  },
  {
    question: "Lorem ipsum ?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus justo, eu pharetra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    value: "item 5",
  },
  {
    question: "Lorem ipsum ?",
    response:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus justo, eu pharetra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    value: "item 6",
  },
];

export default function Faq() {
  return (
    <div id="FAQ" className="section">
      <Motion
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mx-auto my-0 lg:max-w-7xl"
        children={
          <div>
            <h2 className="headline text-center mb-12">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="">
              {frequencesQuestion.map(
                ({ question, response, value }: FrequencesQuestionType) => (
                  <Motion
                    initial={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    key={value}
                    children={
                      <AccordionItem
                        value={value}
                        className="mb-8 rounded-xl border-2 border-shark-300 p-8 text-blue shadow-md drop-shadow-sm"
                        key={value}
                      >
                        <AccordionTrigger className="text-left text-lg text-shark-900 font-semibold">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent className="text-left text-base text-shark-600 font-medium">
                          {response}
                        </AccordionContent>
                      </AccordionItem>
                    }
                  />
                )
              )}
            </Accordion>
          </div>
        }
      />
    </div>
  );
}
