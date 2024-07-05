import React from 'react'

type ButtonProps = React.ComponentPropsWithRef<'button'>


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return <button ref={ref} {...props}/>
})

export default Button