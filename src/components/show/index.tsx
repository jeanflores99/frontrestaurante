interface Iprops {
    children: JSX.Element
    IsDefault?: JSX.Element,
    Condition: boolean
}

export const Show = ({ Condition, children, IsDefault }: Iprops) => Condition ? children : IsDefault || null