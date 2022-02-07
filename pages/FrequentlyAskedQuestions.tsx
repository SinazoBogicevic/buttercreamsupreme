// @ts-ignore
import React from "react";
import AccordionItem from "../components/AccordionItem";

export default function FrequentlyAskedQuestions() {
  const accordion = FAQs.map(({ question, answer }) => {
    return <AccordionItem key={question} question={question} answer={answer} />;
  });
  return (
    <div className="lflex flex-col justify-items-center items-center text-center">
      <h1 className="text-6xl mb-16">FAQ</h1>
      <div>{accordion}</div>
    </div>
  );
}

const FAQs = [
  {
    question: `Sit voluptate nulla aliqua labore culpa esse enim aliquip adipisicing veniam culpa ea?`,
    answer: `Labore aute exercitation quis occaecat dolore Lorem occaecat enim nisi
    amet fugiat incididunt proident. Labore aute exercitation quis
    occaecat dolore Lorem occaecat enim nisi amet fugiat incididunt
    proident. Labore aute exercitation quis occaecat dolore Lorem occaecat
    enim nisi amet fugiat incididunt proident.`,
  },
  {
    question: `Sit voluptate nulla aliqua labore culpa esse enim aliquip adipisicing veniam culpa ea?`,
    answer: `Labore aute exercitation quis occaecat dolore Lorem occaecat enim nisi
    amet fugiat incididunt proident. Labore aute exercitation quis
    occaecat dolore Lorem occaecat enim nisi amet fugiat incididunt
    proident. Labore aute exercitation quis occaecat dolore Lorem occaecat
    enim nisi amet fugiat incididunt proident.`,
  },
  {
    question: `Sit voluptate nulla aliqua labore culpa esse enim aliquip adipisicing veniam culpa ea?`,
    answer: `Labore aute exercitation quis occaecat dolore Lorem occaecat enim nisi
    amet fugiat incididunt proident. 
    
    Labore aute exercitation quis
    occaecat dolore Lorem occaecat enim nisi amet fugiat incididunt
    proident. Labore aute exercitation quis occaecat dolore Lorem occaecat
    enim nisi amet fugiat incididunt proident.Labore aute exercitation quis occaecat dolore Lorem occaecat enim nisi
    amet fugiat incididunt proident. 
    
    Labore aute exercitation quis
    occaecat dolore Lorem occaecat enim nisi amet fugiat incididunt
    proident. Labore aute exercitation quis occaecat dolore Lorem occaecat
    enim nisi amet fugiat incididunt proident.

    Labore aute exercitation quis occaecat dolore Lorem occaecat enim nisi
    amet fugiat incididunt proident. Labore aute exercitation quis
    occaecat dolore Lorem occaecat enim nisi amet fugiat incididunt
    proident. Labore aute exercitation quis occaecat dolore Lorem occaecat
    enim nisi amet fugiat incididunt proident.`,
  },
  {
    question: `Sit voluptate nulla aliqua labore culpa esse enim aliquip adipisicing veniam culpa ea?`,
    answer: `Labore aute exercitation quis occaecat dolore Lorem occaecat enim nisi
    amet fugiat incididunt proident. Labore aute exercitation quis
    occaecat dolore Lorem occaecat enim nisi amet fugiat incididunt
    proident. Labore aute exercitation quis occaecat dolore Lorem occaecat
    enim nisi amet fugiat incididunt proident.`,
  },
];
