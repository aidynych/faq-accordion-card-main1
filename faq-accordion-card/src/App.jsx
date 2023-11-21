import { useState } from "react";

function App() {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  return (
    <main>
      <section className="card">
        <img
          className="box-img"
          src="../public/images/illustration-box-desktop.svg"
          alt=""
        />
        <div className="img-container">
          <picture>
            <img
              className="woman-img"
              src="../public/images/illustration-woman-online-mobile.svg"
              alt=""
            />
          </picture>
          <img
            className="woman-img-desktop"
            src="../public/images/illustration-woman-online-desktop.svg"
          ></img>
        </div>

        <div className="faq">
          <h1>FAQ</h1>
          <div className="question-answer-container">
            <div className="question">
              <p className={question1 && "text-decor"}>
                How many team members can I invite?
              </p>
              <button
                onClick={() => {
                  setQuestion1(!question1);
                }}
                className={question1 ? "button reverse" : "button"}
              >
                <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className={question1 ? "show" : "answer"}>
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </div>
          <div className="question-answer-container">
            <div className="question">
              <p className={question2 && "text-decor"}>
                What is the maximum file upload size?
              </p>
              <button
                onClick={() => {
                  setQuestion2(!question2);
                }}
                className={question2 ? "button reverse" : "button"}
              >
                <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className={question2 ? "show" : "answer"}>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </div>
          <div className="question-answer-container">
            <div className="question">
              <p className={question3 && "text-decor"}>
                How do I reset my password?
              </p>
              <button
                onClick={() => {
                  setQuestion3(!question3);
                }}
                className={question3 ? "button reverse" : "button"}
              >
                <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className={question3 ? "show" : "answer"}>
              Click “Forgot password” from the login page or “Change password”
              from your profile page. A reset link will be emailed to you.
            </p>
          </div>
          <div className="question-answer-container">
            <div className="question">
              <p className={question4 && "text-decor"}>
                Can I cancel my subscription?
              </p>
              <button
                onClick={() => {
                  setQuestion4(!question4);
                }}
                className={question4 ? "button reverse" : "button"}
              >
                <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className={question4 ? "show" : "answer"}>
              Can I cancel my subscription?
            </p>
          </div>
          <div className="question-answer-container">
            <div className="question">
              <p className={question5 && "text-decor"}>
                Do you provide additional support?
              </p>
              <button
                onClick={() => {
                  setQuestion5(!question5);
                }}
                className={question5 ? "button reverse" : "button"}
              >
                <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 .799l4 4 4-4"
                    stroke="#F47B56"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className={question5 ? "show" : "answer"}>
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
