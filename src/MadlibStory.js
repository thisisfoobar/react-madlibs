// Displays story with form data
const MadlibStory = ({formData}) => {

  return (
    <div>
      <h3>There was a {formData.color} {formData.noun} who loved a {formData.adjective} {formData.noun2}</h3>
    </div>
  )
}

export default MadlibStory