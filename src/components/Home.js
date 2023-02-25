import React from 'react'
import aristotleImage from '../asset/aristotle.jpg';

const Home = () => {
  return (
    <div>
      <div class="container-fluid bg-light">
      <div class="row justify-content-center">
        <div class="col col-12 text-center mt-5">
          <h2>Aristotle</h2>
        </div>
        <div class="col col-12 text-center mt-3  mb-5">
          <p class="h5 font-weight-light sub_title">The Greek Philosopher</p>
        </div>
      </div>
    </div>
    <div class="container">
      <img src={aristotleImage} class="img-fluid mt-5 max-he" alt="Aristotle" style={{ maxWidth: "70%", height: "auto" }}/>
      <div class="row justify-content-center">
        <div class="col col-12 text-center mt-4 mb-5">
          <p class="h5 font-weight-light sub_title">“He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god.”</p>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-light mb-5 ">
      <div class="container text-justify">
        <div class="row">
          <div class="col col-12 mt-5 ">
            <p class="h4" id="content_weight">Aristotle approaches the study of logic not as an end in itself, but with a view to its role in human inquiry and explanation. Logic is a tool, he thinks, one making an important but incomplete contribution to science and dialectic. Its contribution is incomplete because science (epistêmê) employs arguments which are more than mere deductions. A deduction is minimally a valid syllogism, and certainly science must employ arguments passing this threshold. Still, science needs more: a science proceeds by organizing the data in its domain into a series of arguments which, beyond being deductions, feature premises which are necessary and, as Aristotle says, “better known by nature”, or “more intelligible by nature”. By this he means that they should reveal the genuine, mind-independent natures of things.</p>
          </div>
          <div class="col col-12 mt-4">
            <p class="h4" id="content_weight">He further insists that science (epistêmê)—a comparatively broad term in his usage, since it extends to fields of inquiry like mathematics and metaphysics no less than the empirical sciences—not only reports the facts but also explains them by displaying their priority relations (APo. 78a22–28). That is, science explains what is less well known by what is better known and more fundamental, and what is explanatorily anemic by what is explanatorily fruitful.</p>
          </div>
          <div class="col col-12 mt-4 mb-5">
            <p class="h4" id="content_weight">We may, for instance, wish to know why trees lose their leaves in the autumn. We may say, rightly, that this is due to the wind blowing through them. Still, this is not a deep or general explanation, since the wind blows equally at other times of year without the same result. A deeper explanation—one unavailable to Aristotle but illustrating his view nicely—is more general, and also more causal in character: trees shed their leaves because diminished sunlight in the autumn inhibits the production of chlorophyll, which is required for photosynthesis, and without photosynthesis trees go dormant. Importantly, science should not only record these facts but also display them in their correct explanatory order. That is, although a deciduous tree which fails to photosynthesize is also a tree lacking in chlorophyll production, its failing to produce chlorophyll explains its inability to photosynthesize and not the other way around. This sort of asymmetry must be captured in scientific explanation. Aristotle’s method of scientific exposition is designed precisely to discharge this requirement.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
