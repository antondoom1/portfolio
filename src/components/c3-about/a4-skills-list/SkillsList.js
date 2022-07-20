export const SkillsList = (props) => {
  return (
    <div>
      {props.skills.map((s, i) => <ul key={i}>
        <li>{s}</li>
      </ul>)}
    </div>
  )
}