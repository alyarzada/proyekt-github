import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <h1 className="text-center my-3">About</h1>
      <div className="container text-center">
        <div className="loading-gif-about position-absolute w-25">
          <img className='w-25' src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading..." />
        </div>
        <iframe
          width="560"
          height="315"
          className="iframe-placeholder"
          src="https://www.youtube.com/embed/vGHrJDmepI0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
       <p className='mt-3'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sed tempora expedita laborum consequuntur quas, doloremque possimus itaque qui ipsam sint ea eos quaerat ratione necessitatibus iusto laudantium quam aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod autem soluta alias sed ducimus sequi nisi assumenda quo, nobis quam repellat itaque est eaque voluptates perferendis, quos voluptas ex sapiente vitae obcaecati ab reiciendis inventore! Error suscipit alias aspernatur aut illum minus modi repellendus molestias hic, doloribus placeat labore provident eius minima repudiandae illo quidem molestiae culpa eaque amet voluptatum ratione tempore delectus autem. Eligendi nam vitae accusamus, quam quae nesciunt reiciendis a, culpa nihil magni suscipit blanditiis eius illum, repudiandae ut excepturi quasi tenetur accusantium illo veritatis non fugit voluptatem tempore optio. Et, dolorum facere accusantium voluptas quaerat aspernatur!
       </p>
      </div>
    </>
  );
}

export default About;
