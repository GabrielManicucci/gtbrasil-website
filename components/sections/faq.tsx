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
    question: "Quais serviços contábeis a GTBrasil oferece ?",
    response:
      "Oferecemos consultoria empresarial especializada para prestadores de serviços, transportadoras, construtoras e indústrias, além de soluções SPED, planejamento tributário, gestão financeira e folha de pagamento, garantindo uma contabilidade eficiente e estratégica.",
    value: "item 1",
  },
  {
    question:
      "Como a contabilidade pode ajudar no crescimento da minha empresa ?",
    response:
      "Uma contabilidade estratégica auxilia na tomada de decisões, otimização de tributos e no cumprimento de obrigações fiscais, garantindo segurança e previsibilidade financeira.",
    value: "item 2",
  },
  {
    question: "A GTBrasil atende empresas de quais segmentos ?",
    response:
      "Atendemos empresas de diferentes setores, como comércio, indústria e serviços, sempre com soluções personalizadas para cada necessidade.",
    value: "item 3",
  },
  {
    question: "Quais tecnologias utilizam para otimizar os serviços ?",
    response:
      "Utilizamos softwares modernos e automação para garantir agilidade, precisão e segurança nos processos contábeis e fiscais.",
    value: "item 4",
  },
  {
    question: "Como posso migrar minha contabilidade para a GTBrasil ?",
    response:
      "Nosso time cuida de todo o processo de transição, garantindo que a mudança seja feita com segurança, sem impacto nas operações da sua empresa.",
    value: "item 5",
  },
  {
    question:
      "Onde a GTBrasil está localizada e como posso entrar em contato ?",
    response:
      "Estamos localizados em [inserir endereço, se aplicável]. Atendemos empresas de todo o Brasil de forma presencial e remota. Você pode entrar em contato conosco pelo telefone, e-mail ou através do nosso site para mais informações e agendamentos.",
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
