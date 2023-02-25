import React from 'react'
import works from '../asset/works.jpg';

const Works = () => {
  return (
    <div>
      <div class="container-fluid bg-light">
      <div class="row justify-content-center">
        <div class="col col-12 text-center mt-5">
          <h2>Works of Aristotle</h2>
        </div>
        <div class="col col-12 text-center mt-3  mb-5">
          <p class="h5 font-weight-light sub_title">The Greek Philosopher</p>
        </div>
      </div>
    </div>
    <div class="container">
        <div class="text-center">
            <img src={works} class="img-fluid mt-5 max-he" alt="Aristotle" style={{ maxWidth: "70%", height: "auto" }}/>
        </div>
      <div class="row justify-content-center">
        <div class="col col-12 text-center mt-4 mb-5">
          <p class="h5 font-weight-light sub_title">“It is the mark of an educated mind to be able to entertain a thought without accepting it.”</p>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-light mb-5">
      <div class="container">
        <div class="row">
          <div class="col col-12 mt-5">
            <ul>
                <li class="h3 ">No.1: Nicomachean Ethics</li>
                <h4 id="content_weight">Based on notes from his lectures in the Lyceum, Aristotle posits happiness (eudaimonia) or ‘living well’ as the primary goal in human life. Named for his son, Nicomachus, the Ethics considers how man should best live and those virtues which produce happiness. Aristotle argues that man does not need to act to commit a crime: omitting to do something can be just as unethical.</h4>
            </ul>
          </div>
          <div class="col col-12 mt-5">
            <ul>
                <li class="h3">No.2: Politics</li>
                <h4 id="content_weight">When describing man as a ‘political animal’, Aristotle argues that the polis – or city state – is humanity’s natural habitat. Politics, meaning ‘things concerning the polis’, explores the best ways that man might live in society and describes how royalty, aristocracy and constitutional government corrupt to become tyranny, oligarchy and democracy. For Aristotle, different species have naturally occurring and fixed characteristics.</h4>
            </ul>
          </div>
          <div class="col col-12 mt-5">
            <ul>
                <li class="h3">No.3: Metaphysics</li>
                <h4 id="content_weight">Meaning ‘after the physics’, Aristotle’s study is the first work to bear the title, though Aristotle himself did not use the term and it is thought to have been added in the first century. Aristotle describes the work as ‘the study of being qua being’ or the ‘first philosophy’, in which the author examines the nature of ‘things that can be said to be’.</h4>
            </ul>
          </div>
          <div class="col col-12 mt-5">
            <ul>
                <li class="h3">No.4: Poetics</li>
                <h4 id="content_weight">Considered to be the oldest surviving work of literary criticism, Aristotle produces a theory of how to construct drama through a study of the plays of Sophocles and Euripides and epic poetry. Drama was central to life in ancient Greece; Aristotle contended its study could offer a better moral education than history. Poetics is still referenced on screenwriting courses today.</h4>
            </ul>
          </div>
          <div class="col col-12 mt-5 mb-5">
            <ul>
                <li class="h3">No.5: On the Soul (De Anima)</li>
                <h4 id="content_weight">Written coterminously with significant developments in scientific thought, logic and biology, in De Anima Aristotle attempts to understand the soul, hoping to define its essential nature and properties, a task he describes as ‘one of the most difficult things in the world’. To do so, he discusses the souls of different kinds of living things: plants, lower animals and humans.</h4>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Works
