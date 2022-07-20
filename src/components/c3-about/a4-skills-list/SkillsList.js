export const SkillsList = (props) => {
  return (
    <div>
      {props.skills.map(s => <ul>
        <li>{s}</li>
      </ul>)}
    </div>
  )
}