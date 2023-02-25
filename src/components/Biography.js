import React from 'react'
import life from '../asset/life.jpg';

const Biography = () => {
  return (
    <div>
      <div class="container-fluid bg-light">
      <div class="row justify-content-center">
        <div class="col col-12 text-center mt-5">
          <h2>Life of Aristotle</h2>
        </div>
        <div class="col col-12 text-center mt-3  mb-5">
          <p class="h5 font-weight-light sub_title">The Greek Philosopher</p>
        </div>
      </div>
    </div>
    <div class="container text-center">
      <img src={life} class="img-fluid mt-5 max-he" alt="Aristotle" style={{ maxWidth: "70%", height: "auto" }}/>
      <div class="row justify-content-center">
        <div class="col col-12 text-center mt-4 mb-5">
          <p class="h5 font-weight-light sub_title">“Anybody can become angry — that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way — that is not within everybody's power and is not easy.”</p>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-light mb-5">
      <div class="container">
        <div class="row ">
          <div class="col col-12 mt-5 " >
            <p class="h4" id="content_weight">Aristotle was born on the Chalcidic peninsula of Macedonia, in northern Greece. His father, Nicomachus, was the physician of Amyntas III (reigned c. 393–c. 370 BCE), king of Macedonia and grandfather of Alexander the Great (reigned 336–323 BCE). After his father’s death in 367, Aristotle migrated to Athens, where he joined the Academy of Plato (c. 428–c. 348 BCE). He remained there for 20 years as Plato’s pupil and colleague.</p>
          </div>
          <div class="col col-12 mt-4">
            <p class="h4" id="content_weight">Many of Plato’s later dialogues date from these decades, and they may reflect Aristotle’s contributions to philosophical debate at the Academy. Some of Aristotle’s writings also belong to this period, though mostly they survive only in fragments. Like his master, Aristotle wrote initially in dialogue form, and his early ideas show a strong Platonic influence. His dialogue Eudemus, for example, reflects the Platonic view of the soul as imprisoned in the body and as capable of a happier life only when the body has been left behind. According to Aristotle, the dead are more blessed and happier than the living, and to die is to return to one’s real home.</p>
          </div>
          <div class="col col-12 mt-4 ">
            <p class="h4" id="content_weight">Another youthful work, the Protrepticus (“Exhortation”), has been reconstructed by modern scholars from quotations in various works from late antiquity. Everyone must do philosophy, Aristotle claims, because even arguing against the practice of philosophy is itself a form of philosophizing. The best form of philosophy is the contemplation of the universe of nature; it is for this purpose that God made human beings and gave them a godlike intellect. All else—strength, beauty, power, and honour—is worthless.</p>
          </div>
          <div class="col col-12 mt-4 mb-5">
            <p class="h4" id="content_weight">It is possible that two of Aristotle’s surviving works on logic and disputation, the Topics and the Sophistical Refutations, belong to this early period. The former demonstrates how to construct arguments for a position one has already decided to adopt; the latter shows how to detect weaknesses in the arguments of others. Although neither work amounts to a systematic treatise on formal logic, Aristotle can justly say, at the end of the Sophistical Refutations, that he has invented the discipline of logic—nothing at all existed when he started.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Biography
