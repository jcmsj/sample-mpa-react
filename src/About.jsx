import { create } from './Layout'
export default function About() {
  return <>
    <h1>~ About ~</h1>
      <h2>Summary:</h2>
      <div>
        This is a simple example of a multi-page web application.
      </div>
      <h2>Author:</h2>
      <div>San Juan, Jean Carlo</div>
      <h2>Subject:</h2>
      <div>CS 409 - Mobile Computing</div>
  </>;
}

create(<About />);