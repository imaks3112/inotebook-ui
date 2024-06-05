import React from 'react';

const About = () => {
  return (
    <div>
      This is about.
    </div>
  )
}

export default About;




















  // commented code for using the context -==>>   {a.state.name} in class {a.state.class} 
  // const a = useContext(NoteContext);
  // useEffect(() => {
  //   a.update();
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps
  // return (
  //   <div>
  //     This is About {a.state.name} in class {a.state.class}
  //   </div>
  // )