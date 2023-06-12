

import React from 'react'

type VSpacerComponentProps = {
    space?: string | number
}
const VSpacerComponent = ({ space }: VSpacerComponentProps) => {
    return (
        <div style={{ marginTop: parseInt(space as string) ? `${space}rem` : space }} />
    )
}

export default VSpacerComponent
