import { useState } from "react"
import './Accordian.css';

const Accordian = ()=>{
    const [openIndex , setOpenIndex] = useState();

    const faqs = [
        {
          question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces.",
        },
        {
          question: "How do I install React?",
          answer: "You can install React using npm or yarn: `npm install react`.",
        },
        {
          question: "What are React hooks?",
          answer: "Hooks are functions that let you use state and other React features in functional components.",
        },
      ];

      const handleClick = (index)=>{
        if(openIndex === index) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
      }
    return(
        <>
        <div className="faq-container">
            <h1>Accordian</h1>
            {faqs.map((faq, index)=>(
                <div key={index} className="faq-item">
                    <div className={`faq-question ${openIndex === index ? "active" : ""}`}
                    onClick={()=>handleClick(index)}>
                        {faq.question}
                    </div>
                    {openIndex === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                    
                </div>
            ))}
        </div>
        </>
    )
}

export default Accordian