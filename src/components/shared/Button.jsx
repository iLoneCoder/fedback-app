import PropType from "prop-types"
function Button({children, btnVersion, isDisabled, type}) {
 return <button type={type} disabled={isDisabled} className={`btn ${btnVersion}`} >
    {children}
 </button>
}

Button.defaultProps = {
    btnVersion: "primary",
    type:"button",
    isDisabled: false
}

Button.propTypes = {
    children: PropType.node.isRequired,
    btnVersion: PropType.string,
    type: PropType.string,
    isDisabled: PropType.bool
}

export default Button;